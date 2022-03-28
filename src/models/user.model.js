
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})




const User=mongoose.model("user",userSchema)

module.exports=User