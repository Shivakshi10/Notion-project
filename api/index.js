const express= require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const app = express();
const ListRoute = require("./routes/todo");
const PagesRoute = require("./routes/pages");
const EventRoute = require("./routes/events");

dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology:true},()=>{
   
    console.log("Mongoose is connected");
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));




app.use("/api/lists",ListRoute);
app.use("/api/pages",PagesRoute);
app.use("/api/schedule",EventRoute);

app.listen(4000,()=>{
    console.log("Backend server is running!");
})