import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/login/Login";
import Signup from './components/signup/Signup';
import { BrowserRouter,Routes,Route}
from "react-router-dom";
import Home from "./components/home/Home"
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

function App() {

  const token = localStorage.getItem('token')

const [tokenData,setTokenData] = useState({
  token
})

  useEffect(()=>{
    const checkToken = async()=>{
      try{
        const res = await axios.post("https://login-register-form-go9w.onrender.com//token",tokenData)
       console.log(res)
       if(res.data){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
       }
      }catch(error){
       console.log(error)
      }

    }
    checkToken()
  },[])

  return (

    <div>
      <BrowserRouter>
     <Routes>
          <Route exact path="/home" element= {<Home /> }> </Route>
          <Route  path="/signup" element={<Signup/>}> </Route>
          <Route  path="/" element={<LoginForm/>}> </Route>     
       </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Signup /> */}
      <ToastContainer position='top-right' theme="colored" 
       autoClose={2000} bodyClassName="toastBody"
      />
    </div>

  )
}

export default App
