const mongoose=require('mongoose')

const DB="mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ofpgw.mongodb.net/MERN_Test?retryWrites=true&w=majority";

 mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(()=>{
    console.log("connection start")
 }).catch((error)=>{
    console.log(error.message)
 })