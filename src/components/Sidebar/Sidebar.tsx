"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="bg-gray-800 text-white w-64 h-screen p-4">
            <ul>
                <li className="mb-2">
                    <Link href="/">Dashboard</Link>
                </li>
            </ul>
        </aside>
    );
}