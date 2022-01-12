const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./userdata/userdata')
app.use(express.json())
const DB='mongodb+srv://newproj:newproj@cluster0.wcmos.mongodb.net/userdata?retryWrites=true&w=majority';
app.use(require('./auth/auth'))

app.use(require('./dashboard/admin'))

mongoose.connect(DB).then(()=>{
    console.log('connection sucessfull');
}).catch((e)=>{
    console.log(e);
})

// app.post('/register',(req,res)=>{
//     // console.log(req.body);
   
    
//     // user.save().then(()=>{
//     //     console.log("saved");
//     //     res.json({"messege":"saved"})
        
        
//     // }).catch((err)=>{
//     //     console.log(err);
//     // })
//     User.find({ name:name }).then((resd)=>{
//         console.log(resd[0].mobile);
//     }).catch((e)=>{
//         console.log(e);
//     })
    
// })
app.get('/',(req,res)=>{
    res.send('hello from server');
})


app.listen(5000);