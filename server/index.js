import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db_connection.js';
import cors from 'cors'
import Employee from './models/employees.js'
import upload from './middlewares/uploadMiddleware.js';
const app = express();

dotenv.config();

dbConnect();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));


app.post("/addemployee", upload.single("profile"), async (req, res) => {
    try {
        // console.log(req.body.empFullName);
        const { empFullName, empEmail, empPhoneNumber, empAddress, empDepartment, empPosition, empJoiningDate, empSalary, gender } = req.body;

        console.log(req.file.filename);

        await Employee.insertOne({ employee_name: empFullName, employee_address: empAddress, employee_number: empPhoneNumber, employee_dept: empDepartment, employee_position: empPosition, employee_joiningdate: empJoiningDate, employee_salary: empSalary, employee_gender: gender, employee_email: empEmail, employee_image: req.file.filename });
        res.send({ message: "Employee Inserted Successfully" });
    }
    catch (err) {
        console.log(err);
    }
})

app.get("/employees", async (req, res) => {
    try {
        const employeesList = await Employee.find();
        res.send({ employeesList });
    }
    catch (err) {
        console.log(err);
    }
})


app.put("/updateemployee/:id", async (req, res) => {
    const { editEmpName, editEmpEmail, editEmpDept, editEmpPosition } = req.body;
    try {
        await Employee.updateOne({ _id: req.params.id }, {
            $set: {
                employee_name: editEmpName,
                employee_email: editEmpEmail,
                employee_dept: editEmpDept,
                employee_position: editEmpPosition
            }
        });
        res.send({ message: "Employee Modified Successfully" });
    }
    catch (err) {

    }
})

app.delete("/deleteemployee/:id", async (req, res) => {
    try {
        await Employee.deleteOne({ _id: req.params.id });
        res.send({ message: "Employee deleted successfully" });
    }
    catch (err) {
        console.log(err);
    }
})












app.listen(process.env.PORT, () => {
    console.log("Server Started");
})