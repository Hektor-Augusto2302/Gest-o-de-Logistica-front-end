"use client";

import Link from "next/link";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    return (
        <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] p-4 transition-all duration-300 sidebar
            ${isOpen ? "w-40" : "w-16"}`}
        >

            <ul className="mt-8 space-y-4">
                <li className="">
                    <Link href="/" className="flex text-white items-center gap-2 hover:text-gray-400">
                        🏠 {isOpen && "Dashboard"}
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="flex text-white items-center gap-2 hover:text-gray-400">
                        📄 {isOpen && "Sobre"}
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="flex text-white items-center gap-2 hover:text-gray-400">
                        📞 {isOpen && "Contato"}
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
