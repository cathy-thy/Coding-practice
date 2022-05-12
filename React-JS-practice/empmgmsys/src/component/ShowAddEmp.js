import axios from 'axios';
import {useNavigate} from 'react-router'
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link, NavLink, Navigate} from "react-router-dom";

export default function ShowAddEmp(){
    let navigate = useNavigate();
    let [empObj, setEmpObj] = useState({
        "empId": "",
        "empName": "",
        "empSal": "",
        "isMarried": false
    });

    //--------------------------
    let handleAddEmp=async(event)=>{
        event.preventDefault();
        //add data to the json
        await axios.post("http://localhost:3000/emps", empObj)
        .then((empRes)=>{
            console.log("Data added" + empRes.data);
            navigate(`/`); //like redirect 
            })
        .catch((empAddError)=>{console.log("error insertion" + empAddError)})
        
    }
    let handleChange=(event)=>{
        //type is text/ checkbox
        const {name, value, checked, type} = event.target;

        if(type==="checkbox")
        {
            //someone clicked on the checkbox
            //curly bracket insidesetEmpObj because it is json object
           setEmpObj({...empObj, isMarried:checked});
        }
        //it is text input
        else
        {
            //if someone type in the name, it will be the value input
            setEmpObj({...empObj,[name]:value});
        } 

    }

    //--------------------------

    return(
        <div>Add Emp Form
            <form onSubmit={handleAddEmp}>
                EMPID: <input type="text" name ="empId" value = {empObj.empId}
                        onChange={handleChange} required/><br/>

                EMPName: <input type="text" name ="empName" value = {empObj.empName}
                        onChange={handleChange} required/><br/>

                EMPSal: <input type="text" name ="empSal" value = {empObj.empSal}
                        onChange={handleChange}/><br/>

                IsMarried?: <input type="checkbox" name ="isMarried" checked = {empObj.isMarried}
                        onChange={handleChange}/><br/>

                <input type="submit" value="ADD Emp"/>
            </form>
            <p>EMPID: {empObj.empId} - Name: {empObj.empName} - 
            Salary: {empObj.empSal}</p>
        </div>
    )
}