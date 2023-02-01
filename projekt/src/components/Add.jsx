import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [details, setDetails] = useState({title:"", image:"", content:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();
    
    const submitHandler = e => {
        e.preventDefault(); 
        if(details.title === "" || details.image === "" || details.content === "") { setError("Błąd"); return }
        axios.post("https://at.usermd.net/api/movies", {
            title: details.title,
            image: details.image,
            content: details.content,
        })
        .then((response) => {
            navigate("/");
            console.log(response);
        })
        .catch((error) => {
            setError("Błąd");
            console.log(error);
        });
    }
    



  return (
    <div className='container'>
    
        <form className='form' onSubmit={submitHandler}>
            {(error !== "") ? (<div>{error}</div>) : ""}
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" onChange={e=>setDetails({...details, title: e.target.value})} value={details.title}/>
            <label htmlFor="image">Image:</label>
            <input type="text" id="image" name="image" onChange={e=>setDetails({...details, image: e.target.value})} value={details.image}/>
            <label htmlFor="password">Description:</label>
            <input type="text" id="content" name="content" onChange={e=>setDetails({...details, content: e.target.value})} value={details.content}/>
            <input type="submit" value="Add" className="button"/>
        </form>


  </div>
  )
}

export default Add