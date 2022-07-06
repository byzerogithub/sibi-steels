import React from 'react'
import './App.css'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact';
import Nav from './Components/Navbar'
import Products from './Components/Products';





function App() {
    return (
        <>
            {/* <div className='container'>

                < Header />
            </div>
            <div className='container'>
            < Home />
            </div> */}

           
               <div>
                   < Header/>
               </div>
            <Router>
                <div className='nav-links'>
                    <div className='container'>
                    <Nav />
                    </div>
                   
                </div>
                <Switch>
                    <Route exact path="/sibi-steels" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Route exatc path="/about" component={About}/>
                    <Route exatc path="/contact" component={Contact}/>
                    <Route exatc path="/products" component={Products}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;