import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/FullPage/Home/Home';
import About from './component/Details/About/About';
import Contact from './component/Details/Contact/Contact';
import Navbars from './component/Shared/Navbars/Navbars';
import Footer from './component/Shared/Footer/Footer';
import AllWork from './component/Details/AllWork/AllWork';
import AllArticle from './component/Details/AllArticle/AllArticle';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars></Navbars>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/allWork">
            <AllWork></AllWork>
          </Route>
          <Route path="/allArticle">
            <AllArticle></AllArticle>
          </Route>
          <Route path="/contacts">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
