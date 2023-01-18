//init express app
const express=require("express")
const app=express()

// third party import
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
require('dotenv').config()

//calling env var
const{PORT,REMOTE_DB_USERNAME,REMOTE_DB_PASSWORD,REMOTE_DB_DB,LOCAL_DB_URL}=process.env

//controllers
const UserRouter =require("./controller/UserController")

//middleware
app.use(express.json())

// Routes
app.use("/api", UserRouter)

// mongoose connection
mongoose.connect(LOCAL_DB_URL||`mongodb+srv://${REMOTE_DB_USERNAME}:${REMOTE_DB_PASSWORD}@cluster0.2uxyb.mongodb.net/${REMOTE_DB_DB}?retryWrites=true&w=majority`).then(()=>{

// run server
app.listen(PORT,async() =>{
    console.log("your server is running")
})
})
.catch(error => {
    console.log(error);
})
