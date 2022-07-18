import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from "react-router-dom";
import { element } from "prop-types";

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

        if (res.status === 404 || !data) {
            console.log("Error ");
        } else {
            setUserData(data);

        }
    }

    useEffect(() => {
        getdata()
    }, [])


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
                                                <button className="btn btn-success"> <RemoveRedEyeIcon /> </button>
                                                <button className="btn btn-primary"><CreateIcon /></button>
                                                <button className="btn btn-danger"> <DeleteOutlineIcon /></button>
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