import './App.css';
import Footer from "./component/Footer"
import GreetMe from "./component/GreetMe"
import Header from "./component/Header"

function App() {
  let company = "AcctFighting"
  return (
    <div className="App">
      <marquee><h5>Welcome To React practice</h5></marquee>
      <hr color="red" size="3"/>
      <Header compName = {company} countryName = "Hong Kong"/>
      <GreetMe/>
      <Footer compName={company}/>
    </div>
  );
}

export default App;
