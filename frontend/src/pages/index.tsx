import React, { Component, FormEvent, Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'
import * as logoDark from "../images/aweng-media-dark.svg";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default class Home extends Component<any, any> {
    private services = [
        {
            title: "Webentwicklung",
            text: "Ihr Aushängeschild im Internet. Ganz egal ob klein oder groß, statisch oder dynamisch, per Hand oder CMS. Ich bastel Ihnen den perfekten Webauftritt, genau auf Ihre Bedürfnisse zugeschnitten!"
        },
        {
            title: "Webdesign",
            text: "Um sich von der Masse des Webs abzuheben, ist ein atemberaubendes Design notwendig! Als Pixelschubser sorge ich neben einem Wow-Effekt auch für die perfekte Benutzererfahrung!"
        },
        {
            title: "Individualsoftware",
            text: "Kein Programm gleicht dem anderen. Individuelle Prozesse benötigen individuelle Software. Gemeinsam erarbeiten wir genau das perfekte Stückchen Code, welches Ihnen noch gefehlt hat!"
        },
        {
            title: "Automatisierung",
            text: "Wiederkehrende Aufgaben sind zwar oft einfach, doch verbrauchen nur unnötig Zeit. Vieles lässt sich mit einfachen Skripten automatisieren. Ganz von alleine, senkt es nebenbei auch noch die Fehlerquote!"
        },
        {
            title: "Beratung",
            text: "Eine Idee, ein Projekt oder auch einfach nur eine Frage zu einer Zeile Code? Abkürzungen wie MySQL und SEO verursachen nur noch mehr Fragen? Dann melden Sie sich! Ich berate und helfe gerne!"
        },
        {
            title: "Vieles mehr!",
            text: "Im Web überschneiden sich viele Bereiche. Auch wenn ich Themen wie Webshops, Apps und Co. nicht einzeln aufgeführt habe, bin ich in der Lage, auch diese zu realisieren. Einfach unverbindlich anfragen!"
        },
    ]

    render = () =>
        <main className="bg-gray-900 font-montserrat overflow-hidden">
            <Popover className="fixed bg-gray-800 w-full">
                {({ open }) => (
                    <>
                        <div className="container">
                            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <a href="#">
                                        <span className="sr-only">aweng.media</span>
                                        <img className="h-6 w-auto" src={ logoDark } alt=""/>
                                    </a>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="p-2 inline-flex items-center justify-center rounded text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Menü öffnen</span>
                                        <span className="material-icons-outlined">menu</span>
                                    </Popover.Button>
                                </div>
                                <nav className="hidden md:flex space-x-10 flex items-center">
                                    <a href="#" className="text-base font-medium text-white hover:text-blue-500">
                                        Über mich
                                    </a>
                                    <a href="#" className="text-base font-medium text-white hover:text-blue-500">
                                        Dienstleistungen
                                    </a>
                                    <a href="#" className="whitespace-nowrap inline-flex uppercase border-blue-500 items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-blue-500 bg-transparent hover:text-white hover:bg-blue-500">
                                        Kontakt
                                    </a>
                                    {/*<a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-blue-500 ">*/}
                                    {/*    <span className="material-icons-outlined text-2xl">light_mode</span>*/}
                                    {/*</a>*/}
                                </nav>
                            </div>
                        </div>

                        <Transition
                            show={ open }
                            as={ Fragment }
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel focus static className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-700">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <img className="h-6 w-auto" src={ logoDark } alt="Workflow"/>
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <span className="material-icons-outlined">close</span>
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid gap-y-8 text-white">
                                                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                                                    <span className="material-icons-outlined text-blue-500">emoji_emotions</span>
                                                    <span className="ml-3 text-base font-medium">Über mich</span>
                                                </a>
                                                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                                                    <span className="material-icons-outlined">list_alt</span>
                                                    <span className="ml-3 text-base font-medium">Dienstleistungen</span>
                                                </a>
                                                {/*<a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">*/}
                                                {/*    <span className="material-icons-outlined">light_mode</span>*/}
                                                {/*    <span className="ml-3 text-base font-medium">Licht an!</span>*/}
                                                {/*</a>*/}
                                                {/*<a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">*/}
                                                {/*    <span className="material-icons-outlined">dark_mode</span>*/}
                                                {/*    <span className="ml-3 text-base font-medium">Licht aus!</span>*/}
                                                {/*</a>*/}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5 space-y-6">
                                        <div>
                                            <a href="#" className="uppercase w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700">
                                                Kontakt
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
            <section className="h-screen flex items-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900">
                <div className="container">
                    <h1 className="uppercase font-ntr text-4xl lg:text-6xl text-blue-500 -mb-5">Dominic Holzinger</h1>
                    <h2 className="text-white font-mon text-5xl lg:text-7xl my-8 font-semibold">Full Stack Web Developer</h2>
                    <div>
                        <a href="#" className="puppercase whitespace-nowrap inline-flex uppercase border-blue-500 items-center justify-center px-8 py-2 border border-transparent shadow-sm text-base font-medium text-blue-500 bg-transparent hover:text-white hover:bg-blue-500">
                            Dienstleistungen ansehen<span className="material-icons-outlined text-base pl-2">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>
            <div className="flex flex-col gap-40">
                <section className="container">
                    <div className="text-blue-500 text-ntr text-2xl">Was mach' ich n' so?</div>
                    <div className="text-white text-5xl font-semibold my-5">Dienstleistungen</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-16">
                        { this.services.map(v => (
                            <div className="text-white">
                                <div>
                                    <span className="material-icons-outlined text-blue-500 text-7xl">collections</span>
                                </div>
                                <h3 className="text-3xl font-semibold my-5">{ v.title }</h3>
                                <p>{ v.text }</p>
                            </div>
                        )) };
                    </div>
                </section>
                <section className="container from-gray-800 via-gray-900 to-gray-900">
                    <div className="grid xl:grid-cols-2 gap-20 p-16 bg-gradient-to-tl">
                        <div className="col-span-1">
                            <div className="text-blue-500 text-ntr text-2xl">&mdash; n' Hauch nerdiger?</div>
                            <div className="text-white text-5xl font-semibold my-5">Anders gesagt</div>
                            <p className="text-white mb-5">
                                Als leidenschaftlicher Full Stack Web Developer fühle ich mich sowohl im Backend, wie auch im Frontend, wohl. TypeScript und PHP sind die Sprachen meiner Wahl, doch weiche ich auch je nach Anwendungsfall gerne auf andere Sprachen aus. Ich lege sehr viel Wert auf sauberen und sicheren Code, weshalb Tests aller Art einfach für mich dazugehören. Eine Code-Coverage von 100% gibt ein zusätzlich sicheres Gefühl. Libraries und Frameworks wie React, Vue, Slim, Symfony, Bootstrap, Tailwind und Co. sind bekannt und im Einsatz. Bei meiner Infrastruktur setze ich auf Linux und Docker (Swarm), um sicher, performant und gleichzeitig flexibel zu sein.
                            </p>
                            <p className="text-white">
                                Neben dem Umsetzen von direkten Aufträgen, biete ich auch als Freelancer Unterstützung bei Projekten an. Ich freue mich auf Ihre Anfrage!
                            </p>
                        </div>
                    </div>
                </section>
                <ContactSection />
                <Footer />
            </div>
        </main>
}
