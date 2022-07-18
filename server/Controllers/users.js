const users=require("../model/useSchema")

// register user
const createUser=async (req,res)=>{

    const{name,email,age,mobile,work,add,desc}=req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(422).json(" Pls fill the data");
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
        res.status(422).json(error)
    }
};

// get user data
const getData=async (req,res)=>{
    try {
        const userdata=await users.find();
        res.status(201).json(userdata); 
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error)
    }
}

const getIndividualUser=async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params)

        const  userIndividual= await users.findById({_id:id})
        console.log(userIndividual);


        res.status(201).json(userIndividual);
    }catch(error){
        res.status(422).json(error)
    }
}

module.exports={createUser, getData, getIndividualUser}