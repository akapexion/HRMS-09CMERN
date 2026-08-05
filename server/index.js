import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db_connection.js';
import cors from 'cors'
import Employee from './models/employees.js'
import upload from './middlewares/uploadMiddleware.js';
import attendanceModel from './models/attendance.js';
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

app.post("/attendance/check-in", async (req, res) => {
    try {
        const today = new Date().toDateString();

        // Check if already checked in today
        const existingAttendance = await attendanceModel.findOne({
            date: today,
        });

        if (existingAttendance) {
            return res.status(400).json({
                success: false,
                message: "Already checked in today.",
            });
        }

        const attendance = await attendanceModel.create({
            date: today,
            check_in: new Date(),
            check_out: null,
            total_hours: 0,
        });

        res.status(201).json({
            success: true,
            message: "Checked in successfully.",
            attendance,
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

app.post("/attendance/check-out", async (req, res) => {
    try {
        const today = new Date().toDateString();

        const attendance = await attendanceModel.findOne({
            date: today,
        });

        if (!attendance) {
            return res.status(404).json({
                success: false,
                message: "Please check in first.",
            });
        }

        if (attendance.check_out) {
            return res.status(400).json({
                success: false,
                message: "Already checked out.",
            });
        }

        const checkOutTime = new Date();

        const totalHours =
            (checkOutTime - attendance.check_in) / (1000 * 60 * 60);

        attendance.check_out = checkOutTime;
        attendance.total_hours = Number(totalHours.toFixed(2));

        await attendance.save();

        res.status(200).json({
            success: true,
            message: "Checked out successfully.",
            attendance,
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});









app.listen(process.env.PORT, () => {
    console.log("Server Started");
})