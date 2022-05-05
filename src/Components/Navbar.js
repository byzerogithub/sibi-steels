import React from 'react';
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import {FiPhone,FiMail} from "react-icons/fi"


export default function Navbar() {
  return (
    <>
     <div className='nav-top'>
       <div className='conatiner'>
<div className='row'>
  <div className='col-md-4 col-sm-12 col-xs-12 head-logo'>
    <img src={Logo} />
  </div>
  <div className='col-md-8 col-sm-12 col-xs-12 head-sec2'>
     
      <div className='con-de1'>
        <div><FiPhone /><a href='tel:98940 32722'>98940 32722</a></div>
        <div><FiMail /><a href='mailto:sibisteels@gmail.com'>sibisteels@gmail.com</a></div>
      </div>
      
      <div className='nav-it'>
      <nav className='nav navbar-nav'>
      <ul>
        <li><NavLink exact path="/" className="nav-link">Home</NavLink></li>
        <li><NavLink exact to="/about" className="nav-link">About us</NavLink></li>
        <li><NavLink exact to="/products" className="nav-link">Product</NavLink></li>
        
        <li><NavLink exact to="/contact" className="nav-link">Contact us</NavLink></li>
      </ul>
    </nav>
      </div>
    </div>
  </div>
</div>
       </div>
    
    </>
  )
}

