import React, { useState } from "react";
import "../Components/Toggle.css";
import { NavLink } from "react-router-dom";



export default function Togglemenu() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
   
    return (
        <>
      <div className="toggle-nav">
        <button onClick={toggleMenu}>Menu<span></span></button>
  
        {openMenu ? (
          <div>
            <ul className="togle-ul">
                 <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                 <li><NavLink exact to="/about" className="nav-link">About us</NavLink></li>
                 <li><NavLink exact to="/products" className="nav-link">Product</NavLink></li>
                 <li><NavLink exact to="/contact" className="nav-link">Contact us</NavLink></li>
            </ul>
          </div>
        ) : null}
      </div>
      </>
    );
}
