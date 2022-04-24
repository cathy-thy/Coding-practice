import React, {Component} from 'react'

export default class CgForm extends Component{
    constructor(props)
    {
        super(props);
        this.state = {firstName:"", lastName:""}
    }
    //----------------------------------
    handleChange = (event)=>{
        if (event.target.name == "firstName")
        {
            this.setState({firstName:event.target.value})
        }
        else
        {
            this.setState({lastName:event.target.value})
        }
    }
    //----------------------------------
    render()
    {
        return (
            <div>
                FirstName: <input type = "text" 
                    name = "firstName"
                    value = {this.state.firstName} 
                    onChange = {this.handleChange}/> 
                <br/>
                LastName: <input type = "text" 
                    name = "lastName"
                    value = {this.state.lastName} 
                    onChange = {this.handleChange}/> 
                <br/>
                <p>FirstName:{this.state.firstName} - LastName:{this.state.lastName}</p>
            </div>
        )
    }
}