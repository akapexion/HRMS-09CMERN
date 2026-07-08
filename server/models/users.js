import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    user_name : {
        type: "String",
        required : true
    },
    user_email : {
        type: "String",
        required : true
    },
    user_password : {
        type: "String",
        required : true
    }
});

const user = mongoose.model("User", usersSchema);
export default user;