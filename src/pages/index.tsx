import React from "react";
import { version } from "/package.json"

export default function Home() {
    return <main>
        <nav className="py-5">
            <div className="container">
                <div>
                    <a href="/" title="">&lt;awen<span style={{"font-variant": "small-caps"}}>g</span> me<span style={{"font-variant": "small-caps"}}>d</span>ia/&gt;</a>
                </div>
            </div>
        </nav>
        <section className="bg-gradient-to-r from-green-500 to-green-600 h-almost flex justify-center items-end">
            <div className="-mb-16 w-full h-4/5 md:h-100 bg-hero bg-no-repeat bg-bottom bg-cover md:bg-auto" />
        </section>
        <section className="my-40">
            <div className="container grid grid-cols-6 gap-4">
                <div className="md:col-span-3 lg:col-start-2 col-span-6 lg:col-span-2 flex md:flex-col justify-center">
                    <img className="w-4/5 md:w-full mb-8 md:mb-0" src="https://placehold.it/450x650?text=:)" alt=""/>
                </div>
                <div className="md:col-span-3 col-span-6 lg:col-span-3 xl:col-span-2 flex flex-col justify-center">
                    <h2 className="text-6xl lg:text-7xl xl:text-8xl mb-10">Dominic Holzinger</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua.
                    </p>
                </div>
            </div>
        </section>
        <section className="relative bg-green-600 bg-opacity-50 pt-40 pb-60 z-10">
            <div className="container grid grid-cols-10 text-white">
                <div className="grid grid-cols-3 gap-4 sm:col-start-2 md:col-start-3 lg:col-start-1 xl:col-start-2 col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-10 xl:col-span-8">
                    <div className="col-span-3 lg:col-span-1">
                        <h2 className="text-2xl uppercase text-center bg-green-900 py-4 mb-4">Lorem ipsum</h2>
                        <p className="px-8 text-lg">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                            sit amet.
                        </p>
                    </div>
                    <div className="col-span-3 lg:col-span-1">
                        <h2 className="text-2xl uppercase text-center bg-green-900 py-4 mb-4">Lorem ipsum</h2>
                        <p className="px-8 text-lg">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                            sit amet.
                        </p>
                    </div>
                    <div className="col-span-3 lg:col-span-1">
                        <h2 className="text-2xl uppercase text-center bg-green-900 py-4 mb-4">Lorem ipsum</h2>
                        <p className="px-8 text-lg">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                            sit amet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative z-0 mt-20 mb-40">
            <div className="container grid grid-cols-10">
                <div className="xl:col-start-2 col-span-10 xl:col-span-8">
                    <div className="grid grid-cols-12 mb-8">
                        <div className="md:col-start-2 col-span-12 md:col-span-2 flex items-end order-2">
                            <h2 className="uppercase text-5xl leading-tight">
                                Ein<br/>
                                hauch<br/>
                                nerdiger?
                            </h2>
                        </div>
                        <div className="col-start-3 sm:col-start-5 md:col-start-6 lg:col-start-8 col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-3 flex justify-center order-1">
                            <img className="lg:-mt-60 mb-20 lg:my-auto md:mb-20" src="https://placehold.it/450x650?text=:)" alt=""/>
                        </div>
                    </div>
                    <p className="border-8 border-red-900 p-8 text-lg">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </section>
        <footer>
            <section className="py-20 bg-gray-600 text-white">
                <div className="container grid grid-cols-10 text-white">
                    <div className="grid grid-cols-3 gap-4 sm:col-start-2 md:col-start-3 lg:col-start-1 xl:col-start-2 col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-10 xl:col-span-8">
                        <div className="col-span-3 lg:col-span-1">
                            <h3 className="text-3xl mb-4">aweng media</h3>
                            <address className="px-8 lg:px-0">
                                Dominic Holzinger<br />
                                Bohlleitenweg 31<br />
                                97082 Würzburg
                            </address>
                        </div>
                        <div className="col-span-3 lg:col-span-1">
                            <h3 className="text-3xl mb-4 lowercase">Kontakt</h3>
                            <address className="px-8 lg:px-0">
                                tel <a href="tel:+4993132942414" className="underline hover:text-green-300">0931 32942414</a><br/>
                                fax <a href="tel:+4993132919574" className="underline hover:text-green-300">0931 32919574</a><br/>
                                mail <a href="mailto:info@aweng.media" className="underline hover:text-green-300">info@aweng.media</a>
                            </address>
                        </div>
                        <div className="col-span-3 lg:col-span-1">
                            <h3 className="text-3xl mb-4 lowercase">Social</h3>
                            <p className="px-8 lg:px-0">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-gray-800 text-white">
                <div className="container text-white grid grid-cols-10">
                    <div className="grid grid-cols-2 xl:col-start-2 col-span-10 xl:col-span-8 gap-4">
                        <div className="col-span-2 sm:col-span-1 text-center sm:text-left lowercase">
                            Made with ❤️ by <a href="https://aweng.media" className="underline hover:text-green-300">Me</a>
                        </div>
                        <div className="col-span-2 sm:col-span-1 text-center sm:text-right lowercase">
                            <a href={ "https://github.com/fl0aten/aweng-media/tree/" + version } target="_blank" className="underline hover:text-green-300">View on GitHub</a> | v{ version }
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </main>
}
