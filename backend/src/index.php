<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once sprintf('%s/vendor/autoload.php', dirname(__DIR__));

$keys = array_keys($_SERVER);
$requiredKeys = [ 'EMAIL_ADDRESS', 'EMAIL_PASSWORD' ];

// Check if all environment variables are set.
if (count(array_diff($requiredKeys, $keys)) !== 0) {
    error_log(sprintf('ERROR: Environment variables not found. %s', json_encode($keys)));

    // Service Unavailable
    http_response_code(503);
    return;
}

$senderEmailAddress = (string) $_SERVER['EMAIL_ADDRESS'];
$emailPassword = (string) $_SERVER['EMAIL_PASSWORD'];

$keys = array_keys($_POST);
$requiredKeys = [ 'name', 'email', 'subject', 'message' ];

// Check if all relevant values have been passed.
if (count(array_diff($requiredKeys, $keys)) !== 0) {
    // Bad Request
    http_response_code(400);
    return;
}

$name = (string) $_POST['name'];

// A honypot for bots, since this field exists but is hidden from the normal user.
if ($name !== '') {
    error_log(sprintf(
            'INFO: Someone got into the honeypot: %s %s',
            (string) $_SERVER['REMOTE_ADDR'] ?? '',
            (string) $_SERVER['HTTP_USER_AGENT'] ?? '')
    );

    // No Content
    http_response_code(204);
    return;
}

$emailAddress = defuseUserInput((string) $_POST['email'], 50);
$subject = defuseUserInput((string) $_POST['subject'], 50);
$message = defuseUserInput((string) $_POST['message'], 1000);

$mail = new PHPMailer(true);

// Prepare and send email
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->SMTPAuth = true;
    $mail->Username = $senderEmailAddress;
    $mail->Password = $emailPassword;

    $mail->setFrom($senderEmailAddress, 'Contact Form');
    $mail->addAddress($senderEmailAddress);
    $mail->Subject = sprintf('Contact Form: %s', $subject);
    $mail->AltBody = sprintf("Email-Address: %s\n\n%s", $emailAddress, $message);
    $mail->Body = nl2br($mail->AltBody);

    $mail->send();
} catch (Throwable $th) {
    error_log(sprintf("ERROR: Contact form could not be sent: %s\n%s", $th->getMessage(), $th->getTraceAsString()));

    // Service Unavailable
    http_response_code(503);
    return;
}

error_log('INFO: Message sent via contact form.');

// No Content
http_response_code(204);

// Turn bad strings into nice strings.
function defuseUserInput(string $val, int $maxLength): string
{
    return substr(htmlspecialchars($val), 0, $maxLength);
}