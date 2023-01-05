import React from 'react'
import '../styles/login.css'
import NavBar from './NavBar'



function Login() {
  return (
    <div className='container'>
        <NavBar />
        <form className='form'>
            E-mail: <input type="email"/>
            Password: <input type="password"/>
            <button>Log in</button>
        </form>
    </div>
  )
}

export default Login