"use client"

import PublicRoute from "@/components/auth/PublicRoute";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { logout } = useAuth();

  return (
    <PublicRoute>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>
        <button 
            onClick={logout} 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
        </button>
      </main>
    </PublicRoute>
  );
}