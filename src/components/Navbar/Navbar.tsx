"use client";

import { useState } from "react";
import { Search, Bell, UserCircle } from "lucide-react";
import Menu from "../../../public/Menu.svg";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import ArrowDown from "./components/ArrowDown";

interface NavbarProps {
    toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {

    const { logout } = useAuth()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full py-4 md:px-10 z-50 navbar">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                <button className="bg-white cursor-pointer border-none" onClick={toggleSidebar}>
                    <Image
                        src={Menu}
                        alt="Botão hamburguer"
                    />
                </button>

                <div className="flex items-center gap-4 mr-[50px]">
                    <Search size={28} className="text-gray-300 cursor-pointer hover:text-black transition" />
                    <Bell size={28} className="text-black-300 cursor-pointer hover:text-gray transition fill-current" />

                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 border-none bg-transparent cursor-pointer"
                        >
                            <UserCircle size={32} className="text-gray-300" />
                            <p>Hektor Augusto</p>
                            <ArrowDown 
                                size={15}
                                color="black"
                            />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2">
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                                    Perfil
                                </a>
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                                    Configurações
                                </a>
                                <button onClick={logout}  className="block w-full text-left border-none hover:bg-gray-700 px-4 py-2 text-red-400 bg-transparent cursor-pointer">
                                    Sair
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}