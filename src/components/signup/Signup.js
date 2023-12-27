import React, { useState } from "react";
import axios from "axios"
import "./signup.css";
import {useNavigate ,Link} from 'react-router-dom';
import {toast} from "react-toastify"


function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();


   axios.post("https://login-register-form-go9w.onrender.com/register", 
   { name,email,password }

  ).then(() => {
    toast.success("Register successfully😍")
    navigate("/");
  })
    .catch(() => {
    if (!name || !email || !password){
      toast.error("enter valid data 🙁 "); 
      } else{
     toast.error("email already registered 🙁")
      }
 })

}


  return (
    <div className='form-container'>
  
      <form>
        <label>Name:</label> <br />
        <input type="text" value={name} placeholder="enter name" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label> <br />
        <input type="text" value={email} placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label> <br />
        <input type="password" value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <p style={{ color: "red" }}>{error && error}</p>
       
       <button type="submit" onClick={handleSubmit} className='reg-btn'>Register</button>
     
      </form>
      <br />
      <Link to="/">Login with existing account</Link>
    </div>
  )
}

export default Signup
