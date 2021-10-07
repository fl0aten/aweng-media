import React, { ReactNode } from "react";

export default function Footer(): ReactNode {
    return <footer className="bg-gray-800 text-gray-400">
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center py-5 lg:justify-start lg:space-x-10">
                <div className="flex lg:flex-1 flex-col sm:flex-row sm:space-x-10 items-center">
                    {/*<nav className="flex lg:flex-1 space-x-10 flex-wrap items-center place-items-center">*/}
                    <nav className="flex space-x-10">
                        <a href="/imprint" className="text-base font-medium text-white hover:text-blue-500">
                            Impressum
                        </a>
                        <a href="/privacy" className="text-base font-medium text-white hover:text-blue-500">
                            Datenschutz
                        </a>
                    </nav>
                    <span className="text-base font-medium text-white ">
                        design by <a href="https://pascal-koch.design/" target="_blank" className="hover:text-blue-500">Pascal Koch</a>
                    </span>
                </div>
                <div className="flex md:flex-none">
                    <a href="/" className="text-base font-medium text-white hover:text-blue-500">
                        awenɢ meᴅia
                    </a>
                </div>
            </div>
        </div>
    </footer>
}