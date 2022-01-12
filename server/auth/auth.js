const express = require('express')
const router = express.Router();
const User = require('../userdata/userdata')
const mongoose = require('mongoose');
const user = require('../userdata/userdata');
const bcrypt = require('bcrypt');

router.post('/register',async (req,res)=>{
    const {name,email,mobile,password,cpassword}=req.body;
    console.log(name,email)
    
    if(!name || !email || !mobile || !password || !cpassword)
    {
        
        return res.status(422).json({"status" :"422"});
    }
   try{
        const exist = await User.findOne({email:email});
        if(exist)
        {
            return res.status(422).json({"status" :"422"})
        }
        const user= new User({name,email,mobile,password,cpassword});
        await user.save();
        
        return res.status(200).json({"status" :"200"})

   }catch(e){
       console.log(e);
   }
   



   
})


router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
    {
        return res.status(422).json({messege:"plz fill properly",status:"422"})
    }
    const check = await User.findOne({email:email});
    if(!check){
        return res.status(400).json({messege:"not exist",status:"420"})
    }

    const passcheck = await bcrypt.compare(password,check.password);
    
    if(!passcheck)
    {
        return res.status(400).json({messege:"wrong password",status:"400"})
    }
    else {
        return res.status(200).json({messege:"sign in sucess",status:"200"})
       
    }
    

})



module.exports=router;