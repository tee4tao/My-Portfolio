import { useRef } from "react";
import React from "react";
import logo from "./Image/tee4tao W.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import Footer from "./Footer";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Error = () => {
  const { openSidebar, isOpen, closeSidebar } = useGlobalContext();
  const navRef = useRef(null);
  return (
    <main className="error-main">
      {/* nav */}
      <nav className="nav" ref={navRef}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to={"/"}>
              <img src={logo} alt="Tee4Tao" className="nav-logo" />
            </Link>
            {/* <img src={logo} alt="Tee4Tao" className="nav-logo" /> */}
            <button className="aside-toggle_btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <div className="nav-links">
            <Link to={"/"} className="scroll-link">
              home
            </Link>
            <Link to={"about"} className="scroll-link">
              about
            </Link>
            <Link to={"/projects"} className="scroll-link">
              projects
            </Link>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button className="close-btn" type="button" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="side-container">
          <ul className={isOpen ? "sidebar-links" : null}>
            <li>
              <Link to={"/"} className="scroll-link" onClick={closeSidebar}>
                home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="scroll-link"
                onClick={closeSidebar}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className="scroll-link"
                onClick={closeSidebar}
              >
                projects
              </Link>
            </li>
          </ul>
          <ul className={isOpen ? "social-links sidebar-icons" : null}>
            <li>
              <a href="https://linkedin.com/in/tee4tao" className="social-link">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://github.com/tee4tao" className="social-link">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tee4tao" className="social-link">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B2348165013325&text&type=phone_number&app_absent=0"
                className="social-link"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <section className="error">
        <h1>OOPS! IT'S A DEAD END</h1>
        <Link to={"/"} className="about-details_link">
          <button className="see-more">BACK HOME</button>
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default Error;
