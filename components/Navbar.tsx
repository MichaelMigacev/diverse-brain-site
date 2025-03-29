"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const currentLang = pathname.startsWith("/de") ? "de" : "en";

    const switchLanguage = (lang: string) => {
        if (lang !== currentLang) {
            router.push(`/${lang}`); // Change the language in the URL
        }
    };

    return (
        <nav className="bg-white fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo or Brand Name */}
                    <div className="flex items-center space-x-2">
                        <Link
                            href={currentLang === "de" ? "/de" : "/"}
                            className="text-2xl font-semibold"
                        >
                            DIVERSE BRAIN
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 font-semibold text-xl">
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Exhibition"
                                    : "/Exhibition"
                            }
                            className="hover:text-gray-600"
                        >
                            {currentLang === "de"
                                ? "Ausstellung"
                                : "Exhibition"}
                        </Link>
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Teaching"
                                    : "/Teaching"
                            }
                            className="hover:text-gray-600"
                        >
                            {currentLang === "de" ? "Lehre" : "Teaching"}
                        </Link>
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Outreach"
                                    : "/Outreach"
                            }
                            className="hover:text-gray-600"
                        >
                            {currentLang === "de" ? "Reachweite" : "Outreach"}
                        </Link>
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Contact"
                                    : "/Contact"
                            }
                            className="hover:text-gray-600"
                        >
                            {currentLang === "de" ? "Kontakt" : "Contact"}
                        </Link>
                    </div>
                    {/* Language Switch Buttons */}
                    <div className="flex space-x-2">
                        {/* English Button */}
                        <button
                            onClick={() => switchLanguage("")}
                            className={`px-3 py-1 rounded transition-all duration-200 ${
                                currentLang === "en"
                                    ? "bg-white  text-gray-800 font-semibold" // Selected Language (EN)
                                    : "bg-white text-gray-400 "
                            } `}
                        >
                            EN
                        </button>

                        {/* German Button */}
                        <button
                            onClick={() => switchLanguage("de")}
                            className={`px-3 py-1 rounded transition-all duration-200${
                                currentLang === "de"
                                    ? "bg-white text-gray-800 font-semibold" // Selected Language (DE)
                                    : "bg-white text-gray-400"
                            } `}
                        >
                            DE
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Exhibition"
                                    : "/Exhibition"
                            }
                            className="hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {currentLang === "de"
                                ? "Ausstellung"
                                : "Exhibition"}
                        </Link>
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Teaching"
                                    : "/Teaching"
                            }
                            className="hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {currentLang === "de" ? "Lehre" : "Teaching"}
                        </Link>
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Outreach"
                                    : "/Outreach"
                            }
                            className="hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {currentLang === "de" ? "Reichweite" : "Outreach"}
                        </Link>
                        <Link
                            href={
                                currentLang === "de"
                                    ? "/de/Contact"
                                    : "/Contact"
                            }
                            className="hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {currentLang === "de" ? "Kontakt" : "Contact"}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
