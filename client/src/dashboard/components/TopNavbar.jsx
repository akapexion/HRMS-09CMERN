import { useState } from "react";
import { Search, Bell, ChevronDown, Menu, LogOut, User, Settings } from "lucide-react";

export default function TopNavbar({ onMenuClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-4 px-4 sm:px-6 h-16 bg-white/50 backdrop-blur-2xl border-b border-white/70 shadow-[0_4px_24px_rgba(37,99,235,0.05)]">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-xl bg-white/70 border border-white/70 shadow-sm"
      >
        <Menu className="w-5 h-5 text-slate-700" />
      </button>

      {/* Search */}
      <div className="hidden sm:flex items-center flex-1 max-w-md bg-white/70 border border-white/70 rounded-xl px-3.5 py-2.5 focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
        <Search className="w-4 h-4 text-slate-400 mr-2.5" />
        <input
          type="text"
          placeholder="Search employees..."
          className="bg-transparent outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="relative p-2.5 rounded-xl bg-white/70 border border-white/70 hover:bg-white transition-colors shadow-sm">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full animate-ping" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-xl hover:bg-white/70 transition-colors"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User avatar"
              className="w-9 h-9 rounded-full ring-2 ring-blue-200"
            />
            <span className="hidden sm:block text-sm font-medium text-slate-700">
              John Doe
            </span>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-2xl border border-white/70 rounded-2xl shadow-xl shadow-blue-500/10 py-2 overflow-hidden">
              <a href="#profile" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 transition-colors">
                <User className="w-4 h-4 text-slate-400" /> My Profile
              </a>
              <a href="#settings" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 transition-colors">
                <Settings className="w-4 h-4 text-slate-400" /> Settings
              </a>
              <div className="h-px bg-white/60 my-1" />
              <a href="#logout" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                <LogOut className="w-4 h-4" /> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}