import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Home from './Components/Home'
import Footer from './Components/Footer';
import Detail from './Components/Detail';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route path="/contact">
            <Contact/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/">
          <Carousel/>
          <Home/> 
        </Route>
      </Switch>
    <Footer/>
      
      {/* <Footer/>
      <Detail/> */}
      
    </div>
  );
}

export default App;
