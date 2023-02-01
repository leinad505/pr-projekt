import React, { Fragment } from 'react'
import {CgSearch} from 'react-icons/cg'
import {GiFilmSpool} from'react-icons/gi'
import '../styles/NavBarStyle.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isExpired, decodeToken } from 'react-jwt'

function NavBar({setSearch}) {

  const isNotLogged = isExpired(localStorage.getItem('token'))
  const name = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).name;
  const userId = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).userId;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    axios.delete(`https://at.usermd.net/api/user/logout/${userId}`, {
      userId: userId
    })
      .then((response) => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Błąd");
    });
  }

  const searchInput = (value) => {
    setSearch(value);
    navigate("/");
  }




  return (
    <Fragment>
        <nav className="">
            <div className='nav-options'>
                <Link to = "/"><GiFilmSpool id='logo' /></Link>
                <Link to = "/"><h1>FILMUCHY</h1></Link>
                <Link to = "/"><span>Movies</span></Link>
                {name===""?
                  <>
                  <Link to="/login"><span>LOGIN</span></Link>
                  <Link to="/register"><span>REGISTER</span></Link>
                  
                  </>
                  :
                  <>
                  <Link to="/add"><span>ADD MOVIE&nbsp;&nbsp;</span></Link>
                  <p>{name}</p>
                  <button style={{marginLeft: "10px"}} onClick={logout} className="logout-button">LOGOUT</button>
                  </>
                }
                
            </div>
            <input onChange={e=>searchInput(e.target.value)} type="text" placeholder='Search...' id='searchbar'/>
            <CgSearch id='search'/>
        </nav>

    </Fragment>
  )
}

export default NavBar