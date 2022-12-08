import React, { Fragment } from 'react'
import {CgSearch} from 'react-icons/cg'
import {GiFilmSpool} from'react-icons/gi'
import '../styles/NavBarStyle.css'

function NavBar() {
  return (
    <Fragment>
        <nav className="">
            <div className='nav-options'>
                <GiFilmSpool id='logo' />
                <a href=""><h1>FILMUCHY</h1></a>
                <span>Movies</span>
                <span>LOGIN</span>
                <span>REGISTER</span>
            </div>
            <input type="text" placeholder='Search...' id='searchbar'/>
            <CgSearch id='search'/>
        </nav>

    </Fragment>
  )
}

export default NavBar