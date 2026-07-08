import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "support@hrsync.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Address", value: "New York, USA" },
  { icon: Clock, label: "Support Hours", value: "Mon – Fri, 9am – 6pm" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            We'd Love to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hear From You</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Questions about HRSync? Our team is ready to help you get set up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Info Panel - solid gradient for contrast */}
          <div className="md:col-span-2 relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl shadow-blue-500/20 p-8 overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />

            <h3 className="relative text-xl font-bold text-white mb-2">Contact Information</h3>
            <p className="relative text-blue-100 text-sm mb-8">
              Reach out through any of these channels.
            </p>

            <div className="relative space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="p-2.5 bg-white/15 border border-white/20 rounded-xl">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">{label}</p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="md:col-span-3 bg-white/60 backdrop-blur-2xl border border-white/70 rounded-3xl shadow-xl shadow-blue-500/5 p-6 sm:p-9 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 transition-shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 transition-shadow"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 transition-shadow"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 resize-none transition-shadow"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}