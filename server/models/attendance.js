import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
    employee_name : {
        type : "String",
        default : "Asad",
        required : true
    },
    check_in : {
        type : "String",
    },
    check_out : {
        type : "String",
    },
    total_hours : {
        type : "String",
    }
}, {timestamps : true});

const attendanceModel = mongoose.model("Attendance", attendanceSchema);
export default attendanceModel;