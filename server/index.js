import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db_connection.js";
import user from "./models/users.js";

const app = express();
dotenv.config();
dbConnect();


const createUser = async () => {
    try {
        await user.insertOne({
            user_name: "Haider",
            user_email: "haider@gmail.com",
            user_password: "123"
        })
    }
    catch (err) {
        console.log(err);
    }
}

// createUser();


const getUsers = async () => {
    try {
        const users = await user.find();
        console.log("My Users List", users);
    }
    catch (err) {
        console.log(err);
    }
}

// getUsers();

const updateUser = async (id, updatedData) => {
    try {
        await user.updateOne({ _id: id }, { $set: updatedData });
        console.log("Updated Successfully");
    }
    catch (err) {
        console.log(err);
    }
}

const myId = "6a4b4ed80de4e849eec115eb";
const myUpdatedData = {
    user_name: "Haider Sultan"
}

// updateUser(myId, myUpdatedData);

const deleteUser = async (id) => {
    try {
        await user.deleteOne({ _id: id });
    }
    catch (err) {
        console.log(err);
    }
}

deleteUser(myId);


















app.get("/abc", (req, res) => {
    res.send("ABC");
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})