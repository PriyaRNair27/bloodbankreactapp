import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    var [name,setname]=useState("")
    var [address,setaddress]=useState("")
    var [bloodgroup,setbloodgroup]=useState("")
    var [mobilenumber,setmobilenumber]=useState("")
    var [username,setusername]=useState("")
    var [password,setpassword]=useState("")
    const subdata=()=>{
        const data={"name":name,"address":address,"bloodgroup":bloodgroup,"mobilenumber":mobilenumber,"username":username,"password":password}
        console.log(data)
    }
  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">UserName</label>
                    <input  onChange={(e)=>{setusername(e.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setusername(e.target.value)}}name="" id="" cols="30" rows="10" class="form-control"></textarea>
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">BloodGroup</label>
                    <input  onChange={(e)=>{setusername(e.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Mobile Number</label>
                    <input  onChange={(e)=>{setusername(e.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">UserName</label>
                    <input  onChange={(e)=>{setusername(e.target.value)}}type="text" className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input  onChange={(e)=>{setpassword(e.target.value)}}type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <Link to="/view"><button onClick={subdata} className="btn btn-primary">SIGN IN</button></Link>
               
                </div>
               
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Signin