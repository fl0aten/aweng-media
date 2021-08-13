import React, { ReactNode } from "react";

export default function Footer(): ReactNode {
    return <footer className="bg-gray-800 text-gray-400">
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
}