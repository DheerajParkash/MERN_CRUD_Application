const express = require("express");
const router = express.Router();
const users=require("../model/useSchema")

let {createUser} = require('../Controllers/users');

// router.get("/",(req,res)=>{
//     console.log("connect")
// })

router.post("/register",createUser)

module.exports=router;