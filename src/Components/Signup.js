import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    var [username,setusername]=useState("")
    var [password,setpassword]=useState("")
    const subdata=()=>{
        const data={"username":username,"password":password}
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
                    <label for="" className="form-label">Password</label>
                    <input  onChange={(e)=>{setpassword(e.target.value)}}type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subdata}className="btn btn-success">LOGIN</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               
                </div>
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Signup