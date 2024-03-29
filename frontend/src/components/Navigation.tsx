import React, { Fragment, ReactNode } from "react";
import {Popover, Transition} from "@headlessui/react";
import * as logoDark from "../images/aweng-media-dark.svg";
import {Link} from "gatsby";

export default function Navigation(): ReactNode {
    return <Popover className="fixed bg-gray-800 w-full">
        {({ open }) => (
            <>
                <div className="container">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">awenɢ meᴅia</span>
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
                            <a href="/#about-me" className="text-base font-medium text-white hover:text-blue-500">
                                Über mich
                            </a>
                            <a href="/#services" className="text-base font-medium text-white hover:text-blue-500">
                                Dienstleistungen
                            </a>
                            <Link to="/#contact" className="whitespace-nowrap inline-flex uppercase border-blue-500 items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-blue-500 bg-transparent hover:text-white hover:bg-blue-500">
                                Kontakt
                            </Link>
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
                                        <a href="/#about-me" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                                            <span className="material-icons-outlined text-blue-500">emoji_emotions</span>
                                            <span className="ml-3 text-base font-medium">Über mich</span>
                                        </a>
                                        <a href="/#services" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                                            <span className="material-icons-outlined text-blue-500">list_alt</span>
                                            <span className="ml-3 text-base font-medium">Dienstleistungen</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div>
                                    <Link to="/#contact" className="uppercase w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-indigo-700">
                                        Kontakt
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
        )}
    </Popover>;
}