const express = require("express");
const router = express.Router();
const users=require("../model/useSchema")

let {createUser,getData,getIndividualUser} = require('../Controllers/users');

// router.get("/",(req,res)=>{
//     console.log("connect")
// })

router.post("/register",createUser)

router.get("/getData",getData)

router.get("/getUser/:id",getIndividualUser)

module.exports=router;