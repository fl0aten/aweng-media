import React, { Component } from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default class Home extends Component<any, any> {
    private services = [
        {
            icon: "code",
            title: "Webentwicklung",
            text: "Ihr Aushängeschild im Internet. Ganz egal ob klein oder groß, statisch oder dynamisch, per Hand oder CMS. Ich bastel Ihnen den perfekten Webauftritt, genau auf Ihre Bedürfnisse zugeschnitten!"
        },
        {
            icon: "brush",
            title: "Webdesign",
            text: "Um sich von der Masse des Webs abzuheben, ist ein atemberaubendes Design notwendig! Als Pixelschubser sorge ich neben einem Wow-Effekt auch für die perfekte Benutzererfahrung!"
        },
        {
            icon: "auto_fix_high",
            title: "Individualsoftware",
            text: "Kein Programm gleicht dem anderen. Individuelle Prozesse benötigen individuelle Software. Gemeinsam erarbeiten wir genau das perfekte Stückchen Code, welches Ihnen noch gefehlt hat!"
        },
        {
            icon: "settings_suggest",
            title: "Automatisierung",
            text: "Wiederkehrende Aufgaben sind zwar oft einfach, doch verbrauchen nur unnötig Zeit. Vieles lässt sich mit einfachen Skripten automatisieren. Ganz von alleine, senkt es nebenbei auch noch die Fehlerquote!"
        },
        {
            icon: "support_agent",
            title: "Beratung",
            text: "Eine Idee, ein Projekt oder auch einfach nur eine Frage zu einer Zeile Code? Abkürzungen wie MySQL und SEO verursachen nur noch mehr Fragen? Dann melden Sie sich! Ich berate und helfe gerne!"
        },
        {
            icon: "all_inclusive",
            title: "Vieles mehr!",
            text: "Im Web überschneiden sich viele Bereiche. Auch wenn ich Themen wie Webshops, Apps und Co. nicht einzeln aufgeführt habe, bin ich in der Lage, auch diese zu realisieren. Einfach unverbindlich anfragen!"
        },
    ]

    render = () =>
        <main className="bg-gray-900 font-montserrat overflow-hidden">
            <Navigation />
            <section className="h-screen flex items-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900">
                <div className="container">
                    <h1 className="uppercase font-ntr text-4xl lg:text-6xl text-blue-500 -mb-5">Dominic Holzinger</h1>
                    <h2 className="text-white font-mon text-5xl lg:text-7xl my-8 font-semibold">Full Stack Web Developer</h2>
                    <div>
                        <a href="#services" className="puppercase whitespace-nowrap inline-flex uppercase border-blue-500 items-center justify-center px-8 py-2 border border-transparent shadow-sm text-base font-medium text-blue-500 bg-transparent hover:text-white hover:bg-blue-500">
                            Dienstleistungen ansehen<span className="material-icons-outlined text-base pl-2">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>
            <div className="flex flex-col gap-40">
                <section id="services" className="container">
                    <div className="text-blue-500 text-ntr text-1xl sm:text-2xl">Was machst'n so?</div>
                    <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold my-5">Dienstleistungen</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 px-4 py-8 sm:p-8 md:p-12 lg:p-16">
                        { this.services.map(v => (
                            <div className="text-white">
                                <div>
                                    <span className="material-icons-outlined text-blue-500 text-7xl">{ v.icon }</span>
                                </div>
                                <h3 className="text-3xl font-semibold my-5">{ v.title }</h3>
                                <p>{ v.text }</p>
                            </div>
                        )) };
                    </div>
                </section>
                <section id="about-me" className="container from-gray-800 via-gray-900 to-gray-900">
                    <div className="grid xl:grid-cols-2 gap-20 bg-gradient-to-tl px-4 py-8 sm:p-8 md:p-12 lg:p-16">
                        <div className="col-span-1">
                            <div className="text-blue-500 text-ntr text-1xl sm:text-2xl">&mdash; 'n Hauch nerdiger?</div>
                            <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold my-5">Anders gesagt</div>
                            <p className="text-white mb-5">
                                Als leidenschaftlicher Full Stack Web Developer fühle ich mich sowohl im Backend, wie auch im Frontend, wohl. TypeScript und PHP sind die Sprachen meiner Wahl, doch weiche ich auch je nach Anwendungsfall gerne auf andere Sprachen aus. Ich lege sehr viel Wert auf sauberen und sicheren Code, weshalb Tests aller Art einfach für mich dazugehören. Eine Code-Coverage von 100% gibt ein zusätzlich sicheres Gefühl. Libraries und Frameworks wie React, Vue, Slim, Symfony, Bootstrap, Tailwind und Co. sind bekannt und im Einsatz. Bei meiner Infrastruktur setze ich auf Linux und Docker (Swarm), um sicher, performant und gleichzeitig flexibel zu sein.
                            </p>
                            <p className="text-white">
                                Neben dem Umsetzen von direkten Aufträgen, biete ich auch als Freelancer Unterstützung bei Projekten an. Ich freue mich auf Ihre Anfrage!
                            </p>
                        </div>
                        <div className="text-white text-5xl" />
                    </div>
                </section>
                <ContactSection />
                <Footer />
            </div>
        </main>
}