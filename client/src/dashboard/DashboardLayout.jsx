import { useState } from "react";
import { Outlet } from "react-router-dom";
import { X } from "lucide-react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

export default function DashboardLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="relative flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
            {/* Ambient background glow */}
            <div className="pointer-events-none fixed top-0 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="pointer-events-none fixed bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Mobile Sidebar Drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div
                        className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className="relative w-64 h-full">
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute -right-10 top-4 p-2 rounded-xl bg-white/80 border border-white/70 shadow-sm"
                        >
                            <X className="w-5 h-5 text-slate-600" />
                        </button>
                        <Sidebar className="flex" />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="relative flex-1 flex flex-col min-h-screen">
                <TopNavbar onMenuClick={() => setMobileOpen(true)} />

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}