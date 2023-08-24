import React from "react";
import { useGlobalContext } from "./context";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Aside = () => {
  const { isOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          <li>
            <a href="#home" className="scroll-link" onClick={closeSidebar}>
              home
            </a>
          </li>
          <li>
            <a href="#about" className="scroll-link" onClick={closeSidebar}>
              about
            </a>
          </li>
          <li>
            <a href="#projects" className="scroll-link" onClick={closeSidebar}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="scroll-link" onClick={closeSidebar}>
              contact
            </a>
          </li>
          {/* {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.url} onClick={toggleSidebar}>
                      {link.text}
                    </Link>
                  </li>
                );
              })} */}
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
          {/* {socialLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url} className="social-link">
                      {link.icon}
                    </a>
                  </li>
                );
              })} */}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
