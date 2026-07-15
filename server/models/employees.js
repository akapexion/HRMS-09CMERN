import mongoose from 'mongoose'

const employeesSchema = new mongoose.Schema({
    employee_name: {
        type: "String",
        required: true
    },
    employee_email: {
        type: "String",
        required: true
    },
    employee_address: {
        type: "String",
        required: true
    },
    employee_number: {
        type: "Number",
        required: true
    },
    employee_dept: {
        type: "String",
        required: true
    },
    employee_position: {
        type: "String",
        required: true
    },
    employee_joiningdate: {
        type: "Date",
        required: true
    },
    employee_salary: {
        type: "Number",
        required: true
    },
    employee_gender: {
        type: "String",
        required: true
    }
})

const employeeModel = mongoose.model("Employee", employeesSchema);
export default employeeModel;