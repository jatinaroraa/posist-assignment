const mongoose = require('mongoose');
const express= require('express')
const app=express();
const bcrypt = require('bcrypt');

const userschema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    cpassword:{
        type: String,
        require:true
    }
})


userschema.pre("save",async function (next){
    if(this.isModified('password'))
    {
        this.password= await bcrypt.hash(this.password,10);
        this.cpassword= await bcrypt.hash(this.cpassword,10);
    }
    next();
})

const user = mongoose.model('user',userschema);

module.exports=user;

