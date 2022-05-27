import axios from 'axios'
import React, { useState } from 'react'

const Searchdonor = () => {
    const [data,setdata]=useState([{"address":"","bloodgroup":"","mobile":"","username":"","password":""}])
    const [name,setname]=useState("")
   const subdata=()=>{
       const data={"name":name}
       console.log(data)
       axios.post("http://localhost:4000/api/searchdonor",data).then(
           (response)=>{
               setdata(response.data.data)
           })
   }
   const deleteApiCall=(id)=>{
    const data={"_id":id}
   console.log(data)
   axios.post("http://localhost:4000/api/deletedonor",data).then((response)=>{
    if(response.data.status=="success")
    {
        alert("success")
    }
    else
    {
        alert("error")
    }
   })
   }

   return (
    <div>
        <div className="container">
    <div className="row">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setname(e.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button  onClick={subdata} className="btn btn-primary"> SEARCH</button>
            </div>
    </div>
    {data.map((value,key)=>{
        return<div className="row g-3">
             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 ADDRESS:
                 <input type="text" value={value.address} className="form-control"/>
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 BLOOD GROUP:
                 <input type="text" value={value.bloodgroup} className="form-control"/>
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 MOBILE NUMBER:
                 <input type="text" value={value.mobile} className="form-control"/>
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 USERNAME:
                 <input type="text" value={value.username} className="form-control"/>
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 PASSWORD:
                 <input type="text" value={value.password} className="form-control"/>
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>

                </div>
                             </div>
    })}
    </div>
    </div>
    </div>
  )
}

export default Searchdonor