import React from 'react'
import Header from './Header'

const View= () => {
    var viewlist=[
        {"name":"anand",
        "address":"bhavanm",
        "bloodgroup":"o+ve",
        "mobilenumber":"9089787889"  ,
        "username":"anand",
        "password":"anand12"
        },
        {"name":"manju",
        "address":"bhavanm",
        "bloodgroup":"ab+ve",
        "mobilenumber":"9089787889"  ,
        "username":"manju",
        "password":"manju12"
        },
    
        
        {
            "name":"parvathy",
        "address":"bhavanm",
        "bloodgroup":"b+ve",
        "mobilenumber":"9089787889"  ,
        "username":"parvathy",
        "password":"parvathy12" 
        }
      ]
    
  return (
    <div>
      <Header/>
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
      <td>{value.mobilenumber}</td>
      <td>{value.username}</td>
      <td>{value.password}</td>
      
    </tr>
    })}
  </tbody>
</table>
                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default View