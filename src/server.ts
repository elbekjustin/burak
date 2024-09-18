// console.log('EXECUTED ');

// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Martin";
// const count: number = 30;


// Architectural pattern: MVC, Dependency Injection, MVP

// MVC: MODEL VIEW CONTROLLER

// Design pettern: Middleware, Decotar



import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";
mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT=process.env.PORT ?? 3003;
    app.listen(PORT, function() {
        console.info(`The server is running successfully on port: ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
})
.catch((err) => console.log("ERROR on connection MongoDB", err));