const express = require('express');
const app = express();
const route = (express.Router());
const path = require('path');
const fileupload = require('express-fileupload');
// const router = require(express.Router())
route.use(fileupload());
// route.use(require('./public/images'))

route.post('/dashboard',async (req,res)=>{
    res.send('hello from dashboard')
    try{

        const file = req.files.file;
        console.log(file.name);
        const filename = new Date().getTime().toString()+path.extname(file.name);
        const savepath = path.join(__dirname,'../public/images',filename);
        await file.mv(savepath);
        // res.json({status:"200"});
        console.log("done");
        
    }catch(e){
        console.log(e);
    }


})

module.exports= route;