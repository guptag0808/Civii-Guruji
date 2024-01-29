import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import AbandonedCourseNotification from './AbandonedCourseNotification'
import InactiveUsersNotification from './InactiveUsersNotification'
import M from "materialize-css"
function Home() {
  const navigate=useNavigate()
  const checkoutButton=()=>{
   
    fetch("https://civil-guruji-hzoz.onrender.com/payment/checkout",{
      method:"POST",
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
        navigate("/payment")
       }
    })
    .catch(err=>{
       console.log(err.message)
    })

  }
  return (
	<div>
		 <AbandonedCourseNotification />
     <InactiveUsersNotification />
		<div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="https://jamesclear.com/wp-content/uploads/2019/02/atomic-habits_gallery_hi-res_04.jpg" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>Books to improve your small habits every days.</p>
          <p>Rs.230</p>
        </div>
        <div className="card-action">
        <Link to="/payment">
        <button className="btn waves-effect waves-light"   onClick={()=>checkoutButton()}>
        Buy Now
      </button>
      </Link>
       
        </div>
      </div>
    </div>
  </div>
     
	</div>
  )
}

export default Home