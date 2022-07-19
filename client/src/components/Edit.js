import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const navigate=useNavigate();
 
    const { id } = useParams("");

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

    const getdata = async () => {

        const res = await fetch(`/getUser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("Error ");
        } else {
            setINP(data);
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const updateUser=async (e)=>{
        e.preventDefault();
        
        const{name,email,work,add,mobile,desc,age}=inpval;

        const res2=await fetch(`/updateUser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc,age
            })
        }) ;

        const data2= await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert(" not updated ")
        }else{
            alert(" Data Updated")
            navigate("/")
        }
    }


    return (
        <div className="container">
            
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
                        <textarea onChange={setdata} name="desc" value={inpval.desc} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" onClick={updateUser} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit