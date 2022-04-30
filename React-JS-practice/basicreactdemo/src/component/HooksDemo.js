import React, {useState, useEffect} from 'react'

export default function HooksDemo(props)
{
    console.log("HooksDemo starts here");
    let [counter, setCounter]  = useState(0);
    let [items, setItems] = useState([]);
    let [fullName, setFullName] = useState({"fn":"","ln":""});
    //----------------------------------------------------------------
    useEffect(()=>{
        console.log("Use effect called after render");

    }, []); //similar as getsnapshot before update in lifecycle
    //----------------------------------------------------------------

    let incCounterby5 =()=>{
        setCounter(counter+5);

    }

    let generateRandomNo = () =>{
        setItems([...items,Math.random()*10]);
    }


    //----------------------------------------------------------------
    return (
        <div>
            HooksDemo : Counter {counter}
            <button onClick={incCounterby5}>incCounterby5</button>
            <br/>
            firstName:<input type="text"
            name = "fn" onChange={(event)=>{
                setFullName({...fullName,fn:event.target.value})
            }} 
            value={fullName.fn}/><br/>
            lastName:<input type="text"
            name = "ln" onChange={(event)=>{
                setFullName({...fullName,ln:event.target.value})
            }} value={fullName.ln}/><br/>
            FN: {fullName.fn} - LN: {fullName.ln}
            <br/>
            <button onClick={generateRandomNo}>Generate Random Number</button>
            RandomNo: {items.map((num, index)=>{
                return (<li key={index}>{num}</li>)})}
        </div>
    )

    console.log("HooksDemo ends here");
}