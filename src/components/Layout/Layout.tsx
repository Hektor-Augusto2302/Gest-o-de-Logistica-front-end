"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname();
    const hideLayout = pathname === "/login" || pathname === "/registerUser";

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar fixa no topo */}
            {!hideLayout && (
                <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            )}

            <div className="flex flex-1">
                {/* Sidebar fixa na esquerda */}
                {!hideLayout && <Sidebar isOpen={isSidebarOpen} />}

                {/* Main ocupando o restante da tela, sem margens desnecessárias */}
                <main
                    className={`flex-1 overflow-auto pt-10 px-3 mt-10 ${
                        !hideLayout ? (isSidebarOpen ? "ml-40" : "ml-16") : "ml-0"
                    }`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}