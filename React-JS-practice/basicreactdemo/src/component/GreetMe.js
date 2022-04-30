import React, {Component} from 'react'
import Login from "./Login.js"
import LifeCycleA from "./LifeCycleA.js"

export default class GreetMe extends Component
{
    
    /* 
    React components can receive dynamic information from props
    , or set their own dynamic data with state
    .Props are passed down by parent components,whereas state is created and maintained by thecomponent itself.
    */
    constructor(props)
    {
        super(props);
        this.state=
        {
            counter:0,
            msg: "Nice to meet you",
            cityList: ["HK Island", "Kowloon", "New Territories"],
            empList: [{"empId": 999, "empName":"VH", "empSal":500.0},
                        {"empId": 111, "empName":"DC", "empSal":100.0},
                        {"empId": 555, "empName":"SW", "empSal":200.0}
                        ]
        }
        //since increaseCount is not arrow function, have to use bind
        this.increaseCount = this.increaseCount.bind(this)
    }
    //------------------------------

    /* ----------------bind function vs arrow function----------------
    https://stackoverflow.com/questions/50375440/binding-vs-arrow-function-in-javascript-or-for-react-onclick
    1. Memory and performance
        - Arrow: use class field to define a function, your whole method resides on each instance of the class and NOT on the prototype
        - Bind: just a small callback is stored on each instance, which calls your method that is stored on the prototype.
    2. Unit testing
        - Arrow: You won't be able to use the component prototype to stub on function calls
    */ 
    
    //event handler
    increaseCount()
    {
        this.setState({counter:this.state.counter+1});
    }
    //if use arrow function, no need to bind
    decreaseCount = () =>
    {
        this.setState({counter:this.state.counter-1});
    }

    //------------------------------
    //3 onclick below. 1 used bind function, 1 used arrow function and last one directly wrote arrow function
    render(){
        let newCityList = this.state.cityList.map((city,index)=>{
            return (<li key={index}>{city}</li>)
        })
        let newEmpList = this.state.empList.map((emp, empindex)=>{
            return (<h6 key={empindex}>Id: {emp.empId}, Name:{emp.empName}, Salary:{emp.empSal}</h6>)
        })
        return (
            <div>
                <button onClick={this.increaseCount}>IncreaseCounter</button>
                {this.state.counter}
                <button onClick={this.decreaseCount}>DecreaseCounter</button>
                <br/>
                <p>{this.state.msg}</p>
                <button onClick={()=>{this.setState({msg:"Happy Birthday!"});}}>GreetMe</button>
                <h5>City List:</h5>
                {newCityList}
                <h5>Emp List:</h5>
                {newEmpList}
                <Login/>
                <LifeCycleA score="300"/>
            </div>
        )
    }
}