import { useEffect, useState } from "react";
import { Search, Eye, Pencil, Trash2, Users, UserCheck, UserMinus, ChevronLeft, ChevronRight } from "lucide-react";
import axios from 'axios'

const employees = [
  { id: 1, name: "Sarah Khan", email: "sarah@company.com", department: "Human Resources", position: "HR Manager", status: "Active" },
  { id: 2, name: "James Carter", email: "james@company.com", department: "Engineering", position: "Frontend Developer", status: "Active" },
  { id: 3, name: "Aisha Malik", email: "aisha@company.com", department: "Marketing", position: "Content Strategist", status: "On Leave" },
  { id: 4, name: "David Lee", email: "david@company.com", department: "Sales", position: "Sales Executive", status: "Active" },
  { id: 5, name: "Emily Davis", email: "emily@company.com", department: "Finance", position: "Accountant", status: "Inactive" },
];

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  "On Leave": "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const statusDot = {
  Active: "bg-green-500",
  "On Leave": "bg-yellow-500",
  Inactive: "bg-red-500",
};

const summary = [
  { icon: Users, label: "Total Employees", value: employees.length },
  { icon: UserCheck, label: "Active", value: employees.filter((e) => e.status === "Active").length },
  { icon: UserMinus, label: "On Leave / Inactive", value: employees.filter((e) => e.status !== "Active").length },
];

export default function Employees() {
  const [query, setQuery] = useState("");

  const [empData, setEmpData] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees");

      console.log(response.data.employeesList);
      setEmpData(response.data.employeesList);
    }
    catch (err) {
      console.log(err);
    }
  }


  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="min-w-0 w-full">
      {/* Header */}
      <div className="flex flex-col  sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Employees</h1>
            <p className="text-sm text-slate-500">Manage all your employees in one place.</p>
          </div>
        </div>

        <div className="flex items-center bg-white/70 border border-white/70 rounded-xl px-3.5 py-2.5 w-full sm:w-72 focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
          <Search className="w-4 h-4 text-slate-400 mr-2.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name..."
            className="bg-transparent outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Summary chips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {summary.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-3.5 bg-white/50 backdrop-blur-xl border border-white/70 rounded-2xl shadow-lg shadow-blue-500/5 px-5 py-4"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-500/30">
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">{value}</p>
              <p className="text-xs text-slate-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white/50 backdrop-blur-2xl border border-white/70 rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-b border-white/70 text-slate-500">
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Department</th>
                <th className="px-6 py-4 font-semibold">Position</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                  empData.map((e) => (
                    <tr key={e._id} className="border-b border-white/50 last:border-0 hover:bg-white/60 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <img
                          src={`https://i.pravatar.cc/40?u=${e._id}`}
                          alt={e.employee_name}
                          className="w-9 h-9 rounded-full ring-2 ring-blue-100"
                        />
                        <span className="font-medium text-slate-800">{e.employee_name}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{e.employee_email}</td>
                      <td className="px-6 py-4 text-slate-600">{e.employee_dept}</td>
                      <td className="px-6 py-4 text-slate-600">{e.employee_position}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium active`}>
                          <span className={`w-1.5 h-1.5 rounded-full active`} />
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 rounded-lg bg-white/70 border border-white/70 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg bg-white/70 border border-white/70 text-slate-600 hover:bg-slate-700 hover:text-white transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg bg-white/70 border border-white/70 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                }

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-slate-400">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/60 text-sm text-slate-500">
          <span>Showing {filtered.length} of {employees.length} employees</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-white/70 border border-white/70 hover:bg-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-sm">1</span>
            <button className="p-2 rounded-lg bg-white/70 border border-white/70 hover:bg-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}