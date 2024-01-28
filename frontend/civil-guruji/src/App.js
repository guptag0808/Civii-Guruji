
import React,{useEffect,createContext,useReducer} from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter, Route ,Routes,useNavigate} from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Payment from "./components/Payment"
import './App.css';

import {reducer,initialState} from "./reducers/userReducers"

export const UserContext = createContext()

//checking user is login or not 
const Routing =() =>{
 
    const navigate= useNavigate()
    const navigateToHome = () => {
      navigate('/');
    }; const navigateToLogin = () => {
      navigate('/login');
    };

    useEffect(()=>{
      const user= JSON.parse(localStorage.getItem('user'))
       if(user){
         navigateToHome()
       }else{
        navigateToLogin()
       }
    },[])
    return (
      <>
        <Routes>
            <Route exact path="/" element={  <Home />} />
            <Route path="/login" element ={ <Login />} />
            <Route path="/signup" element = {<Signup />} /> 
           
        </Routes>
    </>
    )
}

function App() {
  const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <UserContext.Provider value= {{state,dispatch}}>
        <BrowserRouter>
          <Navbar />
          <Routing />
            <Routes>
            <Route  path="/payment" element={  <Payment />} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
