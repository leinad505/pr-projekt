import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/register" element={<Register/>}></Route>
            <Route exact path="/details" element={<Details/>}></Route>
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
