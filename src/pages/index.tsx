import React from "react";

export default function Home() {
    return <main>
        <nav className="py-5">
            <div className="container">
                <div>
                    <a href="/" title="">&lt;aweng media/&gt;</a>
                </div>
            </div>
        </nav>
        <section className="bg-gradient-to-r from-green-500 to-green-600 h-almost flex justify-center items-end">
            <div className="-mb-16 w-full h-4/5 md:h-100 bg-hero bg-no-repeat bg-bottom bg-cover md:bg-auto" />
        </section>
        <section>
            <div className="container grid grid-cols-6 gap-4">
                <div className="col-start-1 lg:col-start-2 col-span-6 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8 my-80">
                    <div className="flex justify-center md:justify-end">
                        <div>
                            <img className="mb-8 md:mb-0" src="https://placehold.it/300x400" alt=""/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl mb-5">Lorem ipsum</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative bg-green-600 bg-opacity-50 py-40 z-10">
            <div className="container sm:px-40 md:px-4 lg:px-40 2xl:px-80 grid md:grid-cols-3 gap-4 2xl:gap-8 text-white">
                <div>
                    <h2 className="text-2xl uppercase text-center bg-green-900 py-4 mb-4">Lorem ipsum</h2>
                    <p className="px-8 text-lg">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl uppercase text-center bg-green-900 py-4 mb-4">Lorem ipsum</h2>
                    <p className="px-8 text-lg">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl uppercase text-center bg-green-900 py-4 mb-4">Lorem ipsum</h2>
                    <p className="px-8 text-lg">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </p>
                </div>
            </div>
        </section>
        <section className="relative z-0 my-40 md:my-0">
            <div className="container grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5">
                <div className="md:col-start-3 xl:col-start-4 flex md:block justify-center">
                    <div>
                        <img className="md:h80 md:-my-40" src="https://placehold.it/300x400" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative z-10 mt-20 mb-40">
            <div className="container grid grid-cols-5">
                <h2 className="col-start-2 uppercase text-3xl mb-4">
                    Lorem<br/>
                    ipsum<br/>
                    dolor?
                </h2>
            </div>
            <div className="container grid grid-cols-6">
                <p className="col-start-2 col-span-4 border-8 border-red-900 p-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
        </section>
        <footer className="py-40 bg-gray-600 text-white">
            <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                <address>
                    Lorem ipsum <br/>
                    dolor sit <br/>
                    00000 amet
                </address>
                <address>
                    <a href="tel:00000000000">00000 000000</a><br/>
                </address>
                <div>
                    Lorem ipsum
                </div>
            </div>
        </footer>
    </main>
}
