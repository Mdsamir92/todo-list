import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

function Welcome() {
    const username = localStorage.getItem("username");
    const token =  localStorage.getItem("token")
  
    const navigate = useNavigate();
    
    const [tokenData, setTokenData] = useState({
        token
    })


    const logout = async (e) => {
        const res = await axios.post("https://login-register-form-go9w.onrender.com/logout", tokenData)
        if (res.data) {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            toast.success("Logout successfully 😍")
            navigate("/")
        } else {
            alert("logout failed")
        }
    }

    return (
        <div>

            <button className='btn-logout' onClick={logout}>Logout</button>

            <span style={{ textAlign: "center" }}><h2>Welcome  {username}</h2></span>

        </div>
    )
}

export default Welcome
