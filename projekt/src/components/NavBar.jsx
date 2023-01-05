import React, { Fragment } from 'react'
import {CgSearch} from 'react-icons/cg'
import {GiFilmSpool} from'react-icons/gi'
import '../styles/NavBarStyle.css'
import { Link } from 'react-router-dom'


function NavBar() {


  return (
    <Fragment>
        <nav className="">
            <div className='nav-options'>
                <Link to = "/"><GiFilmSpool id='logo' /></Link>
                <Link to = "/"><h1>FILMUCHY</h1></Link>
                <span>Movies</span>
                <Link to="/login"><span>LOGIN</span></Link>
                <Link to="/register"><span>REGISTER</span></Link>
            </div>
            <input type="text" placeholder='Search...' id='searchbar'/>
            <CgSearch id='search'/>
        </nav>

    </Fragment>
  )
}

export default NavBar