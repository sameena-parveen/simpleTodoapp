const express =require("express");
const connectToDb = require("./config/mongo.config");
const app=express();
const todoRouter=require("./routes/todo.route")
app.use(express.json());

app.use("/todo",todoRouter)
app.listen(3000, async()=>{
await connectToDb()
    console.log("server started on port 3000")
})