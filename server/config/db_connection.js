import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected Successfully");
    }
    catch (err) {
        console.log(err);
    }
}

export default dbConnect;