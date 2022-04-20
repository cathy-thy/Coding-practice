/*
=========Axios==========
Axios is a promise-based HTTP Client for node.js and the browser.
To make it works, have to start the json-server first. 
json-server --watch emp.json
*/
var axios = require("axios");

//--------------------------------------------------------
console.log("Prog starts here...");
//we use promise here
var prm1 = axios.get("http://localhost:3000/emps");
prm1.then((empResp)=>{
    console.log("Data retrived: " + empResp.data[3].empName)
    for (emp of empResp.data)
    {
        console.log(`Id: ${emp.empId} | Name: ${emp.empName} | Salary: ${emp.empSal} | Married: ${emp.isMarried}`)
    }
})  //http200 is success
.catch((empError)=>{
    console.log("Error while getting emp info: " + empError)
});
console.log("Prog ends here...");

//--------------------------------------------------------
var prm2 = axios.get("http://localhost:3000/emps/4");
prm2.then((empData)=>{
    console.log("Data retrived by id: "+empData.data.empName)
})
.catch((empError)=>{
    console.log("Error while getting emp by id: " + empError)
});
console.log("Prog ends here...");
