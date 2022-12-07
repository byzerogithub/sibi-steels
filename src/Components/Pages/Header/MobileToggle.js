import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Toggle.scss"
// Icon
import { FiArrowRightCircle } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(!true);
  const showTogglemenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const hideToggleMenu = () => {
    setToggleMenu(!true);
    setSubMenuToggle(!true);
  };

  const [subMenuToggle, setSubMenuToggle] = useState(!true);

  const subMenuDropDown = (index) => {
    setSubMenuToggle(index);
    if (subMenuDropDown === !true) {
      setSubMenuToggle(!true);
    }
  };

  return (
    <>
      <div
        className={toggleMenu ? "menu-open-button active" : "menu-open-button"}
        onClick={showTogglemenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={toggleMenu ? "toggle-menu active" : "toggle-menu"}>
        <div
          className={
            toggleMenu ? "menu-close-button " : "menu-close-button active"
          }
          onClick={showTogglemenu}
        >
          <span>
            <FiArrowRightCircle />
          </span>
          <ul>
            <li>
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" className="nav-link">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/products" className="nav-link">
                Products
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/contact" className="nav-link">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
