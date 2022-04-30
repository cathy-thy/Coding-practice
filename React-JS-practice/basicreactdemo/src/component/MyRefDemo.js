/*
References
    - Used to return references to a particular element or component returned by render()
    - Useful when we need DOM measurements or too add methods to the components
    - Using ref we can access DOM node directly in react
When do we use Refs?
    - Managing focus, text selection or media playback
    - Triggering imperative animations
    - Integrating with third-party DOM libraries
*/

import React, {useState, useRef, useEffect} from 'react'

export default function MyRefDemo(){
    let [loc,setLoc] = useState("");

    const locationRef = useRef(null);
    useEffect(()=>{
        locationRef.current.focus()
    },[]);

    //--------------------------------
    let getLoc=(event)=>{
        alert("Location: " + locationRef.current.value)
    }
    //--------------------------------
    return (
        <div>MyRefDemo
            Location:<input onChange={getLoc} type = "text" ref={locationRef}/>
        </div>
    )
}