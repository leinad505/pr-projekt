import React from 'react'
import '../styles/login.css'
import NavBar from './NavBar'


function Register() {
  return (
    <div className='container'>
      <NavBar />
      <form className='form'>
        <label for="login">Login:</label>
        <input type="text" id="login" name="login"/>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"/>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email"/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"/>
        <button>Register</button>
      </form>


    </div>
  )
}

export default Register