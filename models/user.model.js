import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},  
    cpassword:{type:String} ,
})

export default mongoose.Model.users||mongoose.model("user",userSchema)