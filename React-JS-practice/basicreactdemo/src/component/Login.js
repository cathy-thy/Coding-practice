import React, {Component} from 'react'
import CgForm from './CgForm';
export default class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            isLoggedIn:false,
            buttonCaption: "LogIn",
            text:"Logout"
        }
    }

    handleClick=(event)=>{
        alert()
        this.setState({isLoggedIn:!this.state.isLoggedIn});
        if(this.state.isLoggedIn)
        {
            this.setState({text:"Login"})
            this.setState({buttonCaption:"Logout"})
        }
        else
        {
            this.setState({text:"Logout"})
            this.setState({buttonCaption:"Login"})
        }
    }

    render()
    {
        return (
            <div>
                <h4>You Have: {this.state.text}</h4>
                <button onClick={this.handleClick}>{this.state.buttonCaption}</button>
                <CgForm/>
            </div>
        )
    }
}