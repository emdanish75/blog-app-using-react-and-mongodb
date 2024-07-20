import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://emdanish:1234567890@cluster0.duxin52.mongodb.net/blog')
    console.log("DB Connected")
}