
const User=require("../models/user.model");


const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.param.email}).lean().exec()

        if(user){
            return res.status(400).send("email already exists")
        }


        user=await User.create(req.body);

        return res.status(200).send({user})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const login=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email}).lean().exec()


        if(!user){
            return res.status(400).send("email doesn't exists")
        }


        return res.status(200).send({user})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


module.exports={register,login}