import React from 'react'
import M from 'materialize-css'
import {  useNavigate } from 'react-router-dom'
function Payment() {
  const navigate= useNavigate()
  const postFun=()=>{
    
    fetch("http://localhost:3001/payment/complete",{
      method:"PATCH",
      headers:{
        'Authorization': localStorage.getItem('Token'),
      },
      
       
    })
    .then((res)=>res.json())
    .then((data)=>{
       if(data.error){
        M.toast({html: data.error ,classes:'#b71c1c red darken-4'})
       }else{
        M.toast({html: data.msg , classes:'#00bfa5 teal accent-4'})
          navigate("/")
       }
    })
    .catch(err=>{
       console.log(err.message)
    })
  }

  return (
    <div>
      <div className='myCard'>
    <div className="card login-card" >
       <h1>FotoFlick</h1>
       <input type="text"  placeholder='Enter Your Name' />
       <input type="text"  placeholder='Enter Amount' />
       <input type="text"  placeholder='Enter Card Number' />
       <input type="text"  placeholder='Enter Mobilenumber' />
       <button className="btn waves-effect waves-light"   onClick={postFun}>
        Chekout out
      </button>
   
    </div>
     
 </div>
    </div>
  )
}

export default Payment
