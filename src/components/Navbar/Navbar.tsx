"use client";

import { useState } from "react";
import { X, UserCircle } from "lucide-react";
import Menu from "../../../public/Menu.svg";
import Image from "next/image";

interface NavbarProps {
    toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full py-4 px-6 md:px-10 z-50 navbar">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                <button className="bg-white border-none" onClick={toggleSidebar}>
                    <Image
                        src={Menu}
                        alt="Botão hamburguer"
                    />
                </button>

                <div className="flex items-center gap-4 mr-[50px]">
                    <X size={28} className="text-gray-300 cursor-pointer" />
                    <UserCircle size={28} className="text-gray-300 cursor-pointer" />

                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2"
                        >
                            <UserCircle size={32} className="text-gray-300" />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2">
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                                    Perfil
                                </a>
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                                    Configurações
                                </a>
                                <a href="#" className="block px-4 py-2 text-red-400 hover:bg-gray-700">
                                    Sair
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}