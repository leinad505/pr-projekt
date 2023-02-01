import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import { isExpired } from "react-jwt";
import React from "react";
import Add from "./components/Add";

function App() {
  const [search, setSearch] = React.useState("");
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home search={search} setSearch={setSearch}/>}></Route>
            {isExpired(localStorage.getItem("token")) ? <Route exact path="/login" element={<Login/>}></Route> : null}
            {isExpired(localStorage.getItem("token")) ? <Route exact path="/register" element={<Register/>}></Route> : null}
            <Route exact path="/details/:id" element={<Details/>}></Route>
            <Route exact path="/add" element={<Add/>}/>
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
