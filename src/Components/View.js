
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const View= () => {
  var  [viewlist,setviewlist]=useState([])

  var [loadstatus,setloadstatus] =useState([])   
  axios.get("http://localhost:4000/api/viewall").then(
      (response)=>{
  
          console.log(response.data)
          setviewlist(response.data.data) 
          setloadstatus(false)
      })
    
  return (
    <div>
    
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">BLOOD GROUP</th>
      <th scope="col">MOBILE NUMBER</th>
      <th scope="col">USER NAME</th>
      <th scope="col">PASSWORD</th>

    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.address}</td>
      <td>{value.bloodgroup}</td>
      <td>{value.mobile}</td>
      <td>{value.username}</td>
      <td>{value.password}</td>
      
    </tr>
    })}
  </tbody>
</table>
<div><Link to="/">logout</Link></div>
                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default View