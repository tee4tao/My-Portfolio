import React from "react";
import logo from "./Image/tee4tao W.jpg";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ navRef }) => {
  const { openSidebar } = useGlobalContext();
  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="scroll-watcher"></div>
        <div className="nav-center">
          <div className="nav-header">
            <Link to={"/"}>
              <img src={logo} alt="Tee4Tao" className="nav-logo" />
            </Link>

            <button className="aside-toggle_btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <div className="nav-links">
            <a href="#home" className="scroll-link">
              home
            </a>
            <a href="#about" className="scroll-link">
              about
            </a>
            <a href="#projects" className="scroll-link">
              projects
            </a>
            <a href="#contact" className="scroll-link">
              contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
