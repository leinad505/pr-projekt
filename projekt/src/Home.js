import React from 'react'
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
    <NavBar /> 
    <Movies />
    <Footer />  
    </div>
  )
}

export default Home