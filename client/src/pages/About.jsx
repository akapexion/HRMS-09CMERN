import { Target, Eye, Award, Users, Sparkles } from "lucide-react";

const features = [
  { icon: Target, title: "Our Mission", desc: "Empower businesses to manage their workforce efficiently." },
  { icon: Eye, title: "Our Vision", desc: "Become the most trusted HRM platform worldwide." },
  { icon: Award, title: "Our Values", desc: "Transparency, simplicity, and reliability in everything we build." },
  { icon: Users, title: "Our Team", desc: "A passionate group dedicated to great HR experiences." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-white to-blue-50/40 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-72 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Built for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Modern HR Teams</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            HRSync is a modern HRM system built to help companies manage
            employees, streamline onboarding, and simplify everyday HR tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl shadow-lg shadow-blue-500/5 p-7 text-center hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/15 transition-all"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-5 shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}