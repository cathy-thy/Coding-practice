import React, {Component} from 'react'

export default class CgForm extends Component{
    constructor(props)
    {
        super(props);
        this.state = {firstName:"", lastName:"", //textbox
                        fullName:{"fname":"VH", "lname":"SO"}} //json object
    }
    
    //----------------------------------
    handleChange = (event)=>{
        if (event.target.name === "firstName")
        {
            this.setState({firstName:event.target.value})
        }
        else
        {
            this.setState({lastName:event.target.value})
        }
    }

    changeName = (event) =>{
        /*
        this.setState((prevState)=>(
            {fullname:{...prevState.fullName,fname:"newFName", lastName:"nameLName"
        }}));
        */

        this.setState((prevState)=>{return(
            {fullname:{...prevState.fullName,fname:"newFName", lastName:"nameLName"
        }})});

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
                <p>FirstName:{this.state.fullName.fname} - LastName:{this.state.fullName.lname}</p>
                <button onClick={this.changeName}>ChangeName</button>
            </div>
        )
    }
}