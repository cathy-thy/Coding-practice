import './App.css';
import {useState} from "react";

function App() {
  //useState to change the color
  let [btnColor, setBtnColor] = useState("blue"); //initial blue
  let colorCode=()=>{
    if(btnColor==="blue"){
      return "red";
    } 
    else{
      return "blue";
    }
  }
  return (
    <div className="App">
      <h2 data-testid="h2Id">Welcome To CG</h2>
      <p>Hello</p>
      <button style={{backgroundColor:colorCode()}}
              onClick={()=>{setBtnColor(colorCode())}}
      >Change To {btnColor}</button>
    </div>
  );
}

export default App;
