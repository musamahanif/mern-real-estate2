import mongoose from "mongoose";



const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true, 
    },
    email:{
        type: String,
        required: true,
        unique: true, 
    },
    username:{
        type: String,
        required: true,
        
    }
}, {timestaps:true})