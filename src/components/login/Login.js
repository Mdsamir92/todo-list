import React, { useState } from "react";
import "./login.css"
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"
import { toast } from "react-toastify"

function LoginForm() {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error,setError] = useState("");

  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://login-register-form-go9w.onrender.com/login",
        { email, password },)

   
      if (res.data) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.email);
        toast.success("Login successfully 😍 ")
        navigate("/home");
      }
    }

    catch (error) {
  if (!email || !password) {
        toast.error("enter valid email & password  🙁");
      } 
      else {
        toast.error("please register than login🙁");
      }
      console.log(error)

    }


  }




  return (
    <div className='form-container'>
      <form>
        <label>Email:</label> <br />
        <input type="text" value={email} placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label> <br />
        <input type="password" value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" onClick={handleSubmit} className='btn'>Login</button>
        {/* <p style={{color:"red"}}>{error && error}</p> */}
      </form>
      <br />
      <Link to="/signup">New user signup here</Link>
    </div>
  );
}

export default LoginForm
