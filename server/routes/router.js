const express = require("express");
const router = express.Router();
const users=require("../model/useSchema")

let {createUser,getData} = require('../Controllers/users');

// router.get("/",(req,res)=>{
//     console.log("connect")
// })

router.post("/register",createUser)

router.get("/getData",getData)

module.exports=router;