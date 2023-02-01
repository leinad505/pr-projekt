import React, { useState } from 'react'
import '../styles/login.css'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Login() {

    const [details, setDetails] = useState({login:"", password:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://at.usermd.net/api/user/auth', {
            login: details.login,
            password: details.password
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            console.log(response.data.token)
            navigate("/");
            window.location.reload();
        })
        .catch((error) => {
            setError("Błąd");
        });
    }

  return (
    <div className='container'>
        <NavBar />
        <form className='form' onSubmit={submitHandler}>
          {(error !== "") ? (<div>{error}</div>) : ""}
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" onChange={e=>setDetails({...details, login: e.target.value})} value={details.login}/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
          <input type="submit" value="Login" className="button"/>
          {/* <button>Login</button> */}
        </form>
    </div>
  )
}

export default Login