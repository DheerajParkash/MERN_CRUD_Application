import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';


const Details = () => {
    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome Harsh Pathak</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    {/* <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div> */}
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >Dheeraj Parkash</span></h3>
                            <h3 className="mt-3">Age: <span >22</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>dheerajparkash@gmail.com</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>Student</span></p>
                        </div>

                        <div className="right_view  col-lg-6 col-md-6 col-12">
                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+92 3342176160</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>Sukkur</span></p>
                            <p className="mt-3">Description: <span>Student Sukkur iba</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details