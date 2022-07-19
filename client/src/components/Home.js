import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from "react-router-dom";

const Home = () => {

    const [getUserData, setUserData] = useState([]);

    console.log(getUserData)

    const getdata = async () => {

        const res = await fetch("/getData", {
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
            setUserData(data);
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    const deleteUser=async (id)=>{

        const res2=await fetch(`/deleteUser/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const deleteData= await res2.json();
        console.log(deleteData); 

        if(res2.status === 422 || !deleteData){
            console.log("error")
        }else{
            console.log("data deleted")
            getdata()
        }
    }
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className="btn btn-primary"> Add Data </NavLink>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            getUserData.map((user, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id+1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.work}</td>
                                            <td> {user.mobile}</td>
                                            <td className="d-flex justify-content-between">
                                               <NavLink to={`view/${user._id}`}><button className="btn btn-success"> <RemoveRedEyeIcon /> </button></NavLink>
                                               <NavLink to={`edit/${user._id}`}> <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                <button className="btn btn-danger" onClick={()=> deleteUser(user._id)}> <DeleteOutlineIcon /></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home;