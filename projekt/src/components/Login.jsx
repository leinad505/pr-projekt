import React from 'react'
import '../styles/login.css'
import NavBar from './NavBar'



function Login() {
  return (
    <div className='container'>
        <NavBar />
        <form className='form'>
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email"/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password"/>
          <button>Login</button>
        </form>
    </div>
  )
}

export default Login