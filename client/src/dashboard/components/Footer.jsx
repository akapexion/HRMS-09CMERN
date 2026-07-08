export default function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-2xl border-t border-white/70 px-6 py-4 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} HRSync. All rights reserved.
    </footer>
  );
}