import './App.css';
//BrowserRouter is a function
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from "react-router-dom";
import React from "react";
import ListAllEmp from "./component/ListAllEmp";
import ShowAddEmp from "./component/ShowAddEmp";
import ShowUpdateEmp from "./component/ShowUpdateEmp";

/*
Before running this, have to enable the emp.js
using 
  json-server --watch emp.json 
to load the emp.json
then the ListAllEmp.js could read data by axios.get("http://localhost:3000/emps") 
*/

function App() {
  return (
    <Router>
      <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ShowListAllEmpPage">ShowAllEmp</Link></li>
        <li><Link to ="/ShowAddEmp">AddEmp</Link></li>
        {/* {<li><Link>UpdatePage</Link></li>} */}
        {/* {<li><Link>DeleteEmp</Link></li>} */}
        
      </div>
      <hr color="green" size="4"/>
      <Routes>
        <Route path="/" element={<ListAllEmp/>}></Route>
        <Route path="/ShowListAllEmpPage" element={<ListAllEmp/>}></Route>
        <Route path="/ShowAddEmp" element={<ShowAddEmp/>}></Route>
        <Route path="/ShowUpdatePage/:id" element={<ShowUpdateEmp/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
