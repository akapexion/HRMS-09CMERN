import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db_connection.js';
import cors from 'cors'
import Employee from './models/employees.js'
const app = express();

dotenv.config();

dbConnect();

app.use(cors());
app.use(express.json());


app.post("/addemployee", async (req, res) => {
    try {
        // console.log(req.body.empFullName);
        const { empFullName, empEmail, empPhoneNumber, empAddress, empDepartment, empPosition, empJoiningDate, empSalary, gender } = req.body;

        await Employee.insertOne({ employee_name: empFullName, employee_address: empAddress, employee_number: empPhoneNumber, employee_dept: empDepartment, employee_position: empPosition, employee_joiningdate: empJoiningDate, employee_salary: empSalary, employee_gender: gender, employee_email: empEmail });
        res.send({message : "Employee Inserted Successfully"});
    }
    catch (err) {
        console.log(err);
    }
})

app.get("/employees", async(req, res) => {
    try{
        const employeesList = await Employee.find();
        res.send({employeesList});
    }
    catch(err){
        console.log(err);
    }
})















app.listen(process.env.PORT, () => {
    console.log("Server Started");
})