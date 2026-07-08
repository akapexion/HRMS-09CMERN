import { ArrowRight, Users, Building2, Clock3, TrendingUp, CheckCircle2, Bell } from "lucide-react";

const stats = [
  { icon: Users, label: "Employees Managed", value: "10K+" },
  { icon: Building2, label: "Companies", value: "250+" },
  { icon: Clock3, label: "Hours Saved / Month", value: "5K+" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white py-24 px-6"
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/60 backdrop-blur-md border border-white/70 text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Human Resource Management, Simplified
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Manage Your Workforce <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Effortlessly & Smartly
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A complete HRM solution to onboard, manage, and empower your employees
            — all from one beautiful, unified dashboard.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-7 py-3.5 bg-white/60 backdrop-blur-md border border-white/70 text-slate-700 rounded-2xl font-semibold shadow-sm hover:bg-white/80 hover:-translate-y-0.5 transition-all">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white/50 backdrop-blur-xl border border-white/70 rounded-2xl shadow-lg shadow-blue-500/5 p-4 sm:p-5 hover:-translate-y-1 hover:shadow-blue-500/15 transition-all"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mb-3 shadow-md shadow-blue-500/30">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900">{value}</p>
                <p className="text-xs sm:text-sm text-slate-500 leading-tight mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Floating dashboard preview (signature element) */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-[2.5rem] blur-2xl" />

          <div className="relative bg-white/50 backdrop-blur-2xl border border-white/70 rounded-[2rem] shadow-2xl shadow-blue-500/10 p-6">
            {/* mock header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm font-semibold text-slate-900">Team Overview</p>
                <p className="text-xs text-slate-500">Live snapshot</p>
              </div>
              <div className="p-2 bg-white/70 border border-white/70 rounded-xl">
                <Bell className="w-4 h-4 text-blue-600" />
              </div>
            </div>

            {/* mock growth card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-5 mb-4 shadow-lg shadow-blue-500/30 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-28 h-28 bg-white/10 rounded-full" />
              <div className="flex items-center justify-between relative">
                <div>
                  <p className="text-blue-100 text-xs font-medium">Active Employees</p>
                  <p className="text-3xl font-bold text-white mt-1">1,284</p>
                </div>
                <div className="flex items-center gap-1 bg-white/20 rounded-lg px-2 py-1">
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-semibold text-white">+12%</span>
                </div>
              </div>
            </div>

            {/* mock list */}
            <div className="space-y-2.5">
              {[
                { name: "Sarah Khan", role: "HR Manager" },
                { name: "James Carter", role: "Frontend Dev" },
                { name: "Aisha Malik", role: "Marketing Lead" },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between bg-white/60 border border-white/60 rounded-xl px-3.5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center text-[11px] font-semibold text-blue-700">
                      {p.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">{p.name}</p>
                      <p className="text-[11px] text-slate-500">{p.role}</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}