import './App.css';
import Footer from "./component/Footer"
import GreetMe from "./component/GreetMe"
import Header from "./component/Header"
import HooksDemo from "./component/HooksDemo"
import MyRefDemo from "./component/MyRefDemo"
import ClickCounter from "./component/ClickCounter"
import HoverCounter from "./component/HoverCounter"
import CompButton from "./component/CompButton"

function App() {
  let company = "AcctFighting"

  let btnStyle = {color:'grey', 
                  backgroundColor:"Cyan",
                  margin: "10px 10px 10px 10px"
                }
//---------------------------------------
let compEvent=()=>{
  //if people click the button, they receive the company name
  alert(company);
}
//---------------------------------------
  return (
    <div className="App">
      <marquee><h5>Welcome To React practice</h5></marquee>
      <hr color="red" size="3"/>
      <Header compName = {company} countryName = "Hong Kong"/>
      <hr/>
      <GreetMe/>
      <hr/>
      <p align="center">HooksDemo</p>
      <HooksDemo/>
      <hr/>
      <p align="center">MyRefDemo</p>
      <MyRefDemo/>
      <hr/>
      <p align="center">Click and Hover Counter</p>
      <ClickCounter/>
      <HoverCounter/>
      <hr/>
      <p align="center">Company Button</p>
      <CompButton compButtonId="cg#1" 
      compButtonClickHandler={compEvent}
                  compButtonStyle={btnStyle}
                  compButtonText={"AccountFighting"}
                  />
      <Footer compName={company}/>
    </div>
  );
}

export default App;
