import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CalendarPlus } from 'lucide-react'

const attendanceData = [
    {
        date: '8-3-2026',
        day: 'Monday',
        timeIn: '9:00',
        timeOut: '5:00',
        type: 'OnSite',
        total: '8',
    },
]

const typeStyles = {
    OnSite: 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100',
    Remote: 'bg-sky-50 text-sky-600 ring-1 ring-sky-100',
    Leave: 'bg-amber-50 text-amber-600 ring-1 ring-amber-100',
}

const Attendence = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-full bg-gradient-to-br from-indigo-50/60 via-white to-blue-50/60 p-6 sm:p-8">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Attendance</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Track daily check-ins, check-outs and work type.
                    </p>
                </div>

                <button
                    onClick={() => navigate('/dashboard/mark-attendance')}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                    <CalendarPlus className="w-4 h-4" />
                    Mark Attendance
                </button>
            </div>

            {/* Table card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/80">
                                <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Date / Day
                                </th>
                                <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Time In
                                </th>
                                <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Time Out
                                </th>
                                <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Type
                                </th>
                                <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Total Time
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {attendanceData.length > 0 ? (
                                attendanceData.map((row, idx) => (
                                    <tr
                                        key={idx}
                                        className="transition-colors hover:bg-indigo-50/40"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-slate-700">
                                            {row.date}
                                            <span className="text-slate-400 font-normal"> / {row.day}</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.timeIn}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.timeOut}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${typeStyles[row.type] ||
                                                    'bg-slate-50 text-slate-600 ring-1 ring-slate-100'
                                                    }`}
                                            >
                                                {row.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                                            {row.total} hrs
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-sm text-slate-400">
                                        No attendance records yet. Mark your attendance to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Attendence