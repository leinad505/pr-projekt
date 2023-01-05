import React from 'react'
import '../styles/login.css'
import NavBar from './NavBar'


function Register() {
  return (
    <div className='container'>
      <NavBar />
        <form>
            Login: <input type="text" name="login"></input>
            Name: <input type="text" name="name"></input>
            E-mail: <input type="email" name="email"></input>
            Password: <input type="password" name="password"></input>
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register