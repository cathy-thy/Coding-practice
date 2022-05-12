import React, {useState, useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from "react-router-dom";


export default function ListAllEmp()
{
    let [AllEmpData, setAllEmpData] = useState([]);
    let [errorMsg, setErrorMsg] = useState("");

    //------------------------------------------------
    useEffect(()=>{
        console.log("ListAllEmp useEffect was called...");
        axios.get("http://localhost:3000/emps")
        .then((empRes)=>{console.log("emp data: " + empRes.data)
            setAllEmpData(empRes.data)
        })
        .catch((empError)=>{console.log("Error while fetching emp data " + empError)})
    },[]);
    
    return (
        <div>
            <h5>All Emp Info</h5>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMPID</th>
                        <th>EMPName</th>
                        <th>Salary</th>
                        <th>MarritalStatus</th>
                        <th>Delete?</th>
                        <th>Update?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllEmpData.map((emp, empIndex)=>{
                            return (<tr key={empIndex}>
                                <td>{emp.id}</td>
                                <td>{emp.empId}</td>
                                <td>{emp.empName}</td>
                                <td>{emp.empSal}</td>
                                <td>{emp.isMarried}</td>
                                <td><button>DELETE</button></td>
                                <td><Link to="/">UPDATE</Link></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}