import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../src/Components/Pages/Header/Navbar";
import Footer from "../src/Components/Pages/Footer_page/Footer";

import Home from "../src/Components/Pages/Home_page/Home";
import About from "../src/Components/Pages/About_page/About";
import Contact from "../src/Components/Pages/Contact_page/Contact";
import Products from "../src/Components/Pages/Products_page/Products";

import "./App.css";
// import "./Home_layout.scss";

function App() {
  return (
    <>
      <Router>
        <div className="nav-links">
          <div className="container">
            <Nav />
          </div>
        </div>
        <Switch>
          <Route exact path="/sibi-steels" component={Home} />
          <Route exatc path="/about" component={About} />
          <Route exatc path="/products" component={Products} />
          <Route exatc path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
