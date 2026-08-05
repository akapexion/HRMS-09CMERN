import { useState } from "react";
import { Calendar, Clock, MapPin, X, Check } from "lucide-react";

const TYPE_OPTIONS = [
  { value: "OnSite", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
  { value: "Remote", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { value: "Hybrid", color: "bg-amber-50 text-amber-600 border-amber-200" },
];

function toMinutes(t) {
  if (!t) return null;
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function formatTotal(timeIn, timeOut) {
  const a = toMinutes(timeIn);
  const b = toMinutes(timeOut);
  if (a == null || b == null || b <= a) return null;
  const diff = b - a;
  const hrs = Math.floor(diff / 60);
  const mins = diff % 60;
  return mins ? `${hrs}h ${mins}m` : `${hrs} hrs`;
}

export default function MarkAttendance({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    timeIn: "",
    timeOut: "",
    type: "OnSite",
  });
  const [error, setError] = useState("");

  const reset = () => {
    setForm({ date: new Date().toISOString().slice(0, 10), timeIn: "", timeOut: "", type: "OnSite" });
    setError("");
  };

  const close = () => {
    setOpen(false);
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.timeIn || !form.timeOut) {
      setError("Please fill in date, time in and time out.");
      return;
    }
    if (toMinutes(form.timeOut) <= toMinutes(form.timeIn)) {
      setError("Time out must be after time in.");
      return;
    }
    const totalTime = formatTotal(form.timeIn, form.timeOut);
    const record = { ...form, totalTime };

    // Wire this up to your API, e.g.:
    // await fetch("/api/attendance", { method: "POST", body: JSON.stringify(record) })
    onSubmit?.(record);
    close();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:brightness-105 active:scale-[0.98]"
      >
        <Calendar size={16} />
        Mark Attendance
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Mark Attendance</h2>
                <p className="text-sm text-slate-500">Log today's check-in and check-out.</p>
              </div>
              <button
                onClick={close}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Date
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
                  <Calendar size={16} className="text-slate-400" />
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Time In
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
                    <Clock size={16} className="text-slate-400" />
                    <input
                      type="time"
                      value={form.timeIn}
                      onChange={(e) => setForm({ ...form, timeIn: e.target.value })}
                      className="w-full bg-transparent text-sm text-slate-800 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Time Out
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
                    <Clock size={16} className="text-slate-400" />
                    <input
                      type="time"
                      value={form.timeOut}
                      onChange={(e) => setForm({ ...form, timeOut: e.target.value })}
                      className="w-full bg-transparent text-sm text-slate-800 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Work Type
                </label>
                <div className="flex gap-2">
                  {TYPE_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setForm({ ...form, type: opt.value })}
                      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                        form.type === opt.value
                          ? opt.color + " ring-2 ring-offset-1 ring-indigo-200"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      <MapPin size={12} />
                      {opt.value}
                    </button>
                  ))}
                </div>
              </div>

              {form.timeIn && form.timeOut && formatTotal(form.timeIn, form.timeOut) && (
                <div className="rounded-xl bg-indigo-50 px-3 py-2 text-sm text-indigo-700">
                  Total time: <span className="font-semibold">{formatTotal(form.timeIn, form.timeOut)}</span>
                </div>
              )}

              {error && <p className="text-sm font-medium text-red-500">{error}</p>}

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={close}
                  className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:brightness-105"
                >
                  <Check size={16} />
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}