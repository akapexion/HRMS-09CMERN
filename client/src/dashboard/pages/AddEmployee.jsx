import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  CalendarDays,
  Wallet,
  MapPin,
  Save,
  UserPlus,
  Camera,
} from "lucide-react";
import axios from 'axios'

const inputClass =
  "w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/70 border border-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 text-sm transition-shadow";

export default function AddEmployee() {

  const [empFullName, setEmpFullName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhoneNumber, setEmpPhoneNumber] = useState("");
  const [empAddress, setEmpAddress] = useState("");

  const [empDepartment, setEmpDepartment] = useState("");
  const [empPosition, setEmpPosition] = useState("");
  const [empJoiningDate, setEmpJoiningDate] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  const [gender, setGender] = useState("male");

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/addemployee", {
        empFullName, empEmail, empPhoneNumber, empAddress, empDepartment, empPosition, empJoiningDate, empSalary, gender
      });

      console.log(response);

      setEmpFullName("");
      setEmpEmail("");
      setEmpPhoneNumber("");
      setEmpAddress("");

      setEmpDepartment("");
      setEmpPosition("");
      setEmpJoiningDate("");
      setEmpSalary("");

      setGender("");
    }
    catch (err) {
      console.log(err);
    }


  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30">
          <UserPlus className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Add New Employee</h1>
          <p className="text-sm text-slate-500">Fill in the details below to onboard a new employee.</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmission}
        className="bg-white/50 backdrop-blur-2xl border border-white/70 rounded-3xl shadow-xl shadow-blue-500/5 p-6 sm:p-9 space-y-8"
      >
        {/* Avatar upload */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center border border-white/70 shadow-inner">
              <User className="w-8 h-8 text-blue-400" />
            </div>
            <button
              type="button"
              className="absolute -bottom-2 -right-2 p-1.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg shadow-md shadow-blue-500/30"
            >
              <Camera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Profile Photo</p>
            <p className="text-xs text-slate-500">PNG or JPG, up to 2MB.</p>
          </div>
        </div>

        {/* Personal Info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">Personal Information</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Full Name" icon={User}>
              <input type="text" placeholder="e.g. Sarah Khan" className={inputClass} value={empFullName} onChange={(e) => setEmpFullName(e.target.value)} />
            </Field>
            <Field label="Email Address" icon={Mail}>
              <input type="email" placeholder="e.g. sarah@company.com" className={inputClass} value={empEmail} onChange={(e) => setEmpEmail(e.target.value)} />
            </Field>
            <Field label="Phone Number" icon={Phone}>
              <input type="tel" placeholder="e.g. +1 555 123 4567" className={inputClass} value={empPhoneNumber} onChange={(e) => setEmpPhoneNumber(e.target.value)} />
            </Field>
            <Field label="Address" icon={MapPin}>
              <input type="text" placeholder="e.g. New York, USA" className={inputClass} value={empAddress} onChange={(e) => setEmpAddress(e.target.value)} />
            </Field>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* Job Info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">Job Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Department" icon={Building2}>
              <select className={inputClass} onChange={(e) => setEmpDepartment(e.target.value)}>
                <option value="Human Resources">Human Resources</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
              </select>
            </Field>
            <Field label="Position" icon={Briefcase}>
              <input type="text" placeholder="e.g. HR Manager" className={inputClass} value={empPosition} onChange={(e) => setEmpPosition(e.target.value)} />
            </Field>
            <Field label="Joining Date" icon={CalendarDays}>
              <input type="date" className={inputClass} value={empJoiningDate} onChange={(e) => setEmpJoiningDate(e.target.value)} />
            </Field>
            <Field label="Salary" icon={Wallet}>
              <input type="number" placeholder="e.g. 60000" className={inputClass} value={empSalary} onChange={(e) => setEmpSalary(e.target.value)} />
            </Field>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2.5">Gender</label>
          <div className="flex gap-3">
            {["male", "female", "other"].map((g) => (
              <label
                key={g}
                className={`px-5 py-2 rounded-xl border cursor-pointer capitalize text-sm font-medium transition-all ${gender === g
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md shadow-blue-500/30"
                  : "bg-white/70 border-white/70 text-slate-600 hover:bg-white"
                  }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={() => setGender(g)}
                  className="hidden"
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="group flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
          >
            <Save className="w-4 h-4" /> Save Employee
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, icon: Icon, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <div className="relative">
        <Icon className="w-4 h-4 text-blue-500 absolute left-3 top-1/2 -translate-y-1/2" />
        {children}
      </div>
    </div>
  );
}