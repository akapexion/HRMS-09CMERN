import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CalendarDays,
  Wallet,
  Settings,
  LogOut,
  Building2,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Employees", icon: Users, path: "employees" },
  { name: "Add Employee", icon: UserPlus, path: "addemployee" },
  { name: "Attendance", icon: CalendarDays, path: "/dashboard/attendance" },
  { name: "Payroll", icon: Wallet, path: "/dashboard/payroll" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
];

export default function Sidebar({ className = "hidden md:flex" }) {
  return (
    <aside className={`${className} flex-col w-64 shrink-0 h-screen fixed top-0 left-0 bg-white/50 backdrop-blur-2xl border-r border-white/70 shadow-[0_0_40px_rgba(37,99,235,0.06)]`}>
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-white/60">
        <div className="p-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          HR<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sync</span>
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p className="px-4 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Menu</p>
        <div className="space-y-1.5">
          {menuItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/dashboard"}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-600 hover:bg-white/70 hover:text-blue-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-gradient-to-b from-blue-500 to-indigo-500" />
                  )}
                  <Icon className={`w-[18px] h-[18px] ${isActive ? "" : "text-slate-400 group-hover:text-blue-600"}`} />
                  {name}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Profile mini-card */}
      <div className="mx-4 mb-3 flex items-center gap-3 p-3 bg-white/70 border border-white/70 rounded-2xl shadow-sm">
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="w-9 h-9 rounded-full ring-2 ring-blue-200"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-800 truncate">John Doe</p>
          <p className="text-xs text-slate-500 truncate">HR Admin</p>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 pt-0">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium text-sm text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="w-[18px] h-[18px]" />
          Logout
        </button>
      </div>
    </aside>
  );
}