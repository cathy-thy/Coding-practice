import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link, NavLink, Navigate} from "react-router-dom";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';


export default function ShowUpdateEmp()
{
    let navigate = useNavigate();
    let {id} = useParams();
    let [empObj, setEmpObj] = useState({
        "id": "",
        "empId": "",
        "empName": "",
        "empSal": "",
        "isMarried": false
    });

    useEffect(()=>{
        axios.get("http://localhost:3000/emps/"+id)
        .then((empRes)=>{console.log("........"+empRes.data);
            setEmpObj(empRes.data)}) 
        .catch()
    },[])

    let handelUpdateEmp = async(event)=>{
        event.preventDefault();
        //update data to the json => put
        await axios.put("http://localhost:3000/emps/"+id, empObj)
        .then((empRes)=>{
            console.log("Data added" + empRes.data);
            navigate(`/`); //like redirect 
            })
        .catch((empAddError)=>{console.log("error in update" + empAddError)})
    }

    let handleChange = (event)=>{
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
    return(
        <div>Update Emp Page
        <form onSubmit={handelUpdateEmp}>
                EMPID: <input type="text" name ="empId" value = {empObj.empId}
                        onChange={handleChange} disabled/><br/>

                EMPName: <input type="text" name ="empName" value = {empObj.empName}
                        onChange={handleChange} required/><br/>

                EMPSal: <input type="text" name ="empSal" value = {empObj.empSal}
                        onChange={handleChange}/><br/>

                IsMarried?: <input type="checkbox" name ="isMarried" checked = {empObj.isMarried}
                        onChange={handleChange}/><br/>

                <input type="submit" value="Update Emp"/>
            </form>
            <hr/>
            <p>ID-{empObj.id} - Name: {empObj.empName}</p>
        </div>
    )
}