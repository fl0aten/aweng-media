import React, { Component } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default class Privacy extends Component<any, any> {

    render = () =>
        <main className="bg-gray-900 font-montserrat overflow-hidden">
            <Navigation />
            <div className="flex flex-col gap-40">
                <section className="container mt-40">
                    <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold my-5">Impressum</div>
                    <div className="grid grid-cols-1 gap-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 px-4 py-8 sm:p-8 md:p-12 lg:p-16">
                        <div className="text-white">
                            <h3 className="text-2xl mb-5">Angaben gem. § 5 TMG</h3>
                            <p className="mb-5">
                                Dominic Holzinger<br />
                                Bohlleitenweg 31<br />
                                97082 Würzburg
                            </p>
                            <h2 className="text-2xl mb-5">Kontaktaufnahme</h2>
                            <p className="mb-5">
                                Telefon: <a href="tel:+4993132942414">+49 (0) 931 32942414</a><br />
                                Fax: <a href="tel:+4993132919574">+49 (0) 931 32919574</a><br />
                                E-Mail: <a href="mailto:info@aweng.media">info@aweng.media</a>
                            </p>
                            <h2 className="text-3xl mb-5">Umsatzsteuer-ID</h2>
                            <h3 className="text-2xl mb-5">Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz</h3>
                            <p className="mb-5">DE334190993</p>
                            <h2 className="text-3xl mb-5">Haftungsausschluss</h2>
                            <h3 className="text-2xl mb-5">Haftung für Inhalte</h3>
                            <p className="mb-5">Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
                            <p className="mb-5">Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.</p>
                            <h3 className="text-2xl mb-5">Haftungsbeschränkung für externe Links</h3>
                            <p className="mb-5">Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.</p>
                            <p className="mb-5">Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</p>
                            <p className="mb-5">Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes „Name Ihrer Domain“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.</p>
                            <p className="mb-5">Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.</p>
                            <h3 className="text-2xl mb-5">Urheberrecht</h3>
                            <p className="mb-5">Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf ). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.</p>
                            <p className="mb-5">Dieses Impressum wurde freundlicherweise von jurarat.de zur Verfügung gestellt.</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
}