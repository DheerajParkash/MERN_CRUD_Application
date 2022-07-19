import React, { useContext, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const Register=()=>{
    // const { udata, setUdata } = useContext(adddata);

    // const history = useHistory();
    const navigate=useNavigate();
    
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })
    
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinpdata=async (e)=>{
        e.preventDefault();

        const{name,email,work,add,mobile,desc,age}=inpval;

        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc,age
            })
        })

        const data=await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            alert("error");
            console.log("Error ");
        }else{
            alert(" data added")
            console.log("data addedd")
            navigate("/")
        }
    }

    return(
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" onChange={setdata} value={inpval.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" onChange={setdata} value={inpval.email} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">age</label>
                        <input type="text" onChange={setdata} value={inpval.age} name="age" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" onChange={setdata} value={inpval.mobile} name="mobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Work</label>
                        <input type="text" onChange={setdata} value={inpval.work} name="work" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" onChange={setdata} value={inpval.add} name="add" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <textarea onChange={setdata} name="desc" value={inpval.desc}  className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit"  onClick={addinpdata} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;

