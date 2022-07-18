const express = require("express");
const router = express.Router();
const users=require("../model/useSchema")
// router.get("/",(req,res)=>{
//     console.log("connect")
// })


router.post("/register", async (req,res)=>{
    // console.log(req.body);
    // res.status(201).send({success:true,data:req.body})

    const{name,email,age,mobile,work,add,desc}=req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(404).json(" Pls fill the data");
    }

    try{
        const preuser= await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(404).json(" this user is already registered")
        }else{
    
            const adduser= new users({name,email,age,mobile,work,add,desc});
        
            await adduser.save()
            res.status(201).json(adduser);
            console.log(adduser)    
        }


    }catch(error){
        res.status(404).json(error)
    }
})

module.exports=router;