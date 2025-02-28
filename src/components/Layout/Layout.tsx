"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname();

    const hideLayout = pathname === "/login" || pathname === "/registerUser";

    return (
        <div className="flex">
            {!hideLayout && <Sidebar />}
            <div className="flex-1">
                {!hideLayout && <Navbar />}
                <main className="pt-20 px-4">{children}</main>
            </div>
        </div>
    );
}