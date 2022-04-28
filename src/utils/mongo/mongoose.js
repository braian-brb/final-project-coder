import mongoose from "mongoose";


import { MONGODB_URI } from "../../config/config.js"


export async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB is connected...");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
