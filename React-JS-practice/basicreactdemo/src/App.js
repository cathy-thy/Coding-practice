import './App.css';
import Footer from "./component/Footer"
import GreetMe from "./component/GreetMe"
import Header from "./component/Header"
import HooksDemo from "./component/HooksDemo"
import MyRefDemo from "./component/MyRefDemo"
import ClickCounter from "./component/ClickCounter"
import HoverCounter from "./component/HoverCounter"

function App() {
  let company = "AcctFighting"
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
      <ClickCounter/>
      <HoverCounter/>
      <Footer compName={company}/>
    </div>
  );
}

export default App;
