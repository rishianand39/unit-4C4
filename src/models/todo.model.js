
const mongoose=require("mongoose")

const todosSchema=mongoose.Schema({
    title:{type:String,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true

    }
},{
    versionKey:false,
    timestamps:true
})

const Todos=mongoose.model("todos",todosSchema)

module.exports=Todos