
const Todos=require("../models/todo.model")

const express=require("express")
const router=express.Router()


router.get("",async(req,res)=>{
    try {
        const todos=await Todos.find().lean().exec()

        return res.status(200).send({todos})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})
router.post("",async(req,res)=>{
    try {
        const todos=await Todos.create(req.body);

        return res.status(200).send({todos})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const todos=await Todos.findById(req.params.id).lean().exec()

        return res.status(200).send({todos})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        const todos=await Todos.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

        return res.status(200).send({todos})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


router.delete("/:id",async(req,res)=>{
    try {
        const todos=await Todos.findByIdAndDelete(req.params.id)

        return res.status(200).send({todos})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


module.exports=router