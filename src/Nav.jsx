import React from "react";
import logo from "./Image/tee4tao W.jpg";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const Nav = ({ navRef }) => {
  const { openSidebar } = useGlobalContext();
  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="Tee4Tao" className="nav-logo" />
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
            {/* {pageLinks.map((link) => {
                return (
                  <Link key={link.id} to={link.url}>
                    {link.text}
                  </Link>
                );
              })} */}
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Nav;
