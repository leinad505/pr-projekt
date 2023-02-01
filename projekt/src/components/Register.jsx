import React, { useState } from 'react'
import '../styles/login.css'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [details, setDetails] = useState({login:"", email:"", password:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        console.log(details)
        axios.post('https://at.usermd.net/api/user/create', {
            name: details.login,
            email: details.email,
            password: details.password,
        })
        .then((response) => {
            navigate("/login");
        })
        .catch((error) => {
            setError("Błąd");
            console.log(error)
        });
    }



  return (
    <div className='container'>
      <NavBar />
      <form className='form' onSubmit={submitHandler}>
        {(error !== "") ? (<div>{error}</div>) : ""}
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" name="login" onChange={e=>setDetails({...details, login: e.target.value})} value={details.login}/>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
        <input type="submit" value="Register" className="button"/>
      </form>


    </div>
  )
}

export default Register