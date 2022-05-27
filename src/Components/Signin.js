import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Signin = () => {
    var [name,setname]=useState("")
    var [address,setaddress]=useState("")
    var [bloodgroup,setbloodgroup]=useState("")
    var [mobile,setmobilenumber]=useState("")
    var [username,setusername]=useState("")
    var [password,setpassword]=useState("")
    const subdata=()=>{
        const data={"name":name,"address":address,"bloodgroup":bloodgroup,"mobile":mobile,"username":username,"password":password}
        console.log(data)
        axios.post("http://localhost:4000/api/bloodmanage",data).then((response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("successfully inserted")
                }
                else
                {
                      alert("failed")
                }
            }
        )}
    
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-2">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input  onChange={(e)=>{setname(e.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setaddress(e.target.value)}}name="" id="" cols="30" rows="10" class="form-control"></textarea>
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">BloodGroup</label>
                    <input  onChange={(e)=>{setbloodgroup(e.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile Number</label>
                    <input  onChange={(e)=>{setmobilenumber(e.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">UserName</label>
                    <input  onChange={(e)=>{setusername(e.target.value)}}type="text" className="form-control"/>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input  onChange={(e)=>{setpassword(e.target.value)}}type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-primary">SIGN IN</button>
               
                </div>
            
               <div><Link to="/view">view donor</Link></div>
                </div>
               
                
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Signin