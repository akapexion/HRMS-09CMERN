import { Building2, Headset, Link, CircleCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white/40 backdrop-blur-2xl overflow-hidden">
      {/* Top gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[32rem] h-64 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              HR<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sync</span>
            </span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Simplifying human resource management for modern, growing teams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2.5">
              <span className="p-1.5 bg-blue-100 rounded-lg"><Mail className="w-3.5 h-3.5 text-blue-600" /></span>
              support@hrsync.com
            </li>
            <li className="flex items-center gap-2.5">
              <span className="p-1.5 bg-blue-100 rounded-lg"><Phone className="w-3.5 h-3.5 text-blue-600" /></span>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2.5">
              <span className="p-1.5 bg-blue-100 rounded-lg"><MapPin className="w-3.5 h-3.5 text-blue-600" /></span>
              New York, USA
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
          <div className="flex gap-2.5">
            {[Mail, Headset, Link, CircleCheck].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2.5 bg-white/70 border border-white/70 rounded-xl text-slate-600 shadow-sm hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/60 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} HRSync. All rights reserved.
      </div>
    </footer>
  );
}