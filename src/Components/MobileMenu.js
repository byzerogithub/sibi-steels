import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="ToggleMobile">
      <button onClick={toggleMenu}>
        <a href="#menu" id="toggle"><span></span></a>
</button>

      {openMenu ? (
        <div>
          <nav className='nav navbar-nav'>
      <ul>
        <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink exact to="/about" className="nav-link">About us</NavLink></li>
        <li><NavLink exact to="/products" className="nav-link">Product</NavLink></li>
        
        <li><NavLink exact to="/contact" className="nav-link">Contact us</NavLink></li>
      </ul>
    </nav>
        </div>
      ) : null}
    </div>
  );
}

export default MobileMenu;