import React from 'react';


export default function CompButton (props)
{
    return (
        //checkapp.js for the compButtonStyle
        <button id={props.compButtonId}
                onclick = {props.compButtonClickHandler}
                style={props.compButtonStyle}> 
            {props.compButtonText}
        </button>
    )
}