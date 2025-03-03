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
        <div className="flex flex-col">

        {!hideLayout && <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />}

        <div className="flex">
            {!hideLayout && <Sidebar isOpen={isSidebarOpen} />}

            <main
            className={`flex-1 transition-all duration-300 ${
                    !hideLayout
                    ? `pt-20 px-20 ${isSidebarOpen ? "ml-40" : "ml-16"}`
                    : "ml-0"
                }`}
            >
                {children}
            </main>
        </div>
        </div>
    );
}
