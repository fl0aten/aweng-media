import React, {Fragment, useRef, useState} from "react";
import { Popover, Transition, Dialog } from '@headlessui/react'
import * as logoDark from "../images/aweng-media-dark.svg";

export default function Home() {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return <main className="bg-gray-900 font-montserrat overflow-hidden">
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
                <div className="text-blue-500 text-ntr text-2xl">Was mache ich so?</div>
                <div className="text-white text-5xl font-semibold my-5">Dienstleistungen</div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-16">
                    {[1, 2, 3, 4, 5, 6].map(v => (
                        <div className="text-white">
                            <div>
                                <span className="material-icons-outlined text-blue-500 text-7xl">collections</span>
                            </div>
                            <h3 className="text-3xl font-semibold my-5">Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>
                    ))};
                </div>
            </section>
            <section className="container from-gray-800 via-gray-900 to-gray-900">
                <div className="grid xl:grid-cols-2 gap-20 p-16 bg-gradient-to-tl">
                    <div className="col-span-1">
                        <div className="text-blue-500 text-ntr text-2xl">&mdash; ein' Hauch nerdiger?</div>
                        <div className="text-white text-5xl font-semibold my-5">Anders gesagt</div>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br />Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </section>
            <section className="container ">
                <div className="text-blue-500 text-ntr text-2xl">Du hast n' cooles Projekt am Start?</div>
                <div className="text-white text-5xl font-semibold my-5">Lass doch mal ratschen!</div>
                <div className="p-16 flex flex-col space-y-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900">
                    <ul className="text-white lg:flex lg:gap-10">
                        <li className="flex gap-5 lg:gap-2 items-center"><span className="flex-0 material-icons-outlined text-2xl text-blue-500">phone</span><span className="flex-1">0123 4567890</span></li>
                        <li className="flex gap-5 lg:gap-2 items-center"><span className="flex-0 material-icons-outlined text-2xl text-blue-500">print</span><span className="flex-1">0123 4567890</span></li>
                        <li className="flex gap-5 lg:gap-2 items-center"><span className="flex-0 material-icons-outlined text-2xl text-blue-500">email</span><span className="flex-1">info@aweng.media</span></li>
                    </ul>
                    <hr />
                    <div className="text-white text-5xl font-semibold my-5text-white text-5xl font-semibold my-5">Kontaktformular</div>
                    <div className="grid grid-flow-row gap-5">

                        <div className="grid grid-flow-row 2xl:grid-cols-2 2xl:grid-flow-col text-white gap-5">
                            <div className="grid grid-flow-row 2xl:grid-flow-row gap-5 lg:grid-flow-col">
                                <div>
                                    <div className="mb-3">
                                        <label>E-Mail</label>
                                    </div>
                                    <input className="bg-gray-800 w-full text-xl px-4 py-2 focus:border-blue-500 border-2 border-transparent cursor-not-allowed" disabled="disabled" />
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <label>Betreff</label>
                                    </div>
                                    <input className="bg-gray-800 w-full text-xl px-4 py-2 focus:border-blue-500 border-2 border-transparent cursor-not-allowed" disabled="disabled" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-3 flex-none">
                                    <label>Nachricht</label>
                                </div>
                                <textarea className="block bg-gray-800 w-full text-xl px-4 py-2 focus:border-blue-500 border-2 border-transparent h-36 2xl:h-auto flex-1 cursor-not-allowed" disabled="disabled" />
                            </div>
                        </div>

                        <div className="grid grid-flow-row 2xl:grid-cols-2 lg:grid-flow-col text-white 2xl:gap-5">
                            <div className="grid grid-flow-row 2xl:flex lg:grid-flow-col lg:grid-cols-2 gap-5 2xl:col-start-2 2xl:col-span-1">
                                <div className="flex gap-2">
                                    <div>
                                        <input type="checkbox" className="cursor-not-allowed" disabled="disabled" />
                                    </div>
                                    <div>
                                        <label> Ich habe die Hinweise zum Datenschutz gelesen und akzeptiere diese.</label>
                                    </div>
                                </div>
                                <div>
                                    <button className="w-full 2xl:w-auto whitespace-nowrap inline-flex uppercase border-blue-500 items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-blue-500 bg-transparent hover:text-white hover:bg-blue-500 cursor-not-allowed" disabled="disabled">
                                        Absenden
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-800 text-gray-400">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between items-center py-5 lg:justify-start lg:space-x-10">
                        <nav className="flex lg:flex-1 space-x-10 items-center">
                            <a href="#" className="text-base font-medium text-white hover:text-blue-500">
                                Impressum
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-blue-500">
                                Datenschutz
                            </a>
                        </nav>
                        <div className="flex md:flex-none">
                            <a href="#" className="text-base font-medium text-white hover:text-blue-500">
                                aweng media
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    open={open}
                    onClose={setOpen}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-gray-800 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10">
                                            <span className="material-icons-outlined dh-6 w-6 text-blue-500">construction</span>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-semibold text-white">
                                                Baustelle
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-white">
                                                    Diese Seite befindet sich aktuell im Aufbau!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full 2xl:w-auto whitespace-nowrap inline-flex uppercase border-blue-500 items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-blue-500 bg-transparent hover:text-white hover:bg-blue-500 focus:bg-blue-500 focus:text-white"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Okay
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    </main>
}
