import React from "react";
import "./Footer.css"

class Footer extends React.Component
{
    constructor(props)
    {
        super(props);

    }
    //------------------
    //compName is being passed in the App.js

    render()
    {
        let pStyle = {
            backgroundColor: "yellow",
            color:"green",
            border: "3px solid red"
        }
        return (<div className="FooterClass">
            <hr color="green" size="5"/>
            <p style={pStyle}>This is footer section</p>
            <a href = "">Help</a><br/>
            <a href = "">Address</a><br/>
            @CopyRight Of {this.props.compName}<br/> 
            <a href = "">About Us</a><br/>
        </div>)
    }

}

export default Footer