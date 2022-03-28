const express=require("express")
const app=express()
app.use(express.json())

const userController=require("./controllers/user.controller")
const {register,login}=require("./controllers/auth.controller")
const todos=require("./controllers/todos.controller")

app.use("/user",userController)
app.post("/register",register)
app.post("/login",login)
app.use("/todos",todos)


module.exports=app;