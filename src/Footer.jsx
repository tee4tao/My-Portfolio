import React from "react";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaArrowCircleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul className="social-links sidebar-icons footer-social">
          <li>
            <a href="https://linkedin.com/in/tee4tao" className="social-link ">
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
        <div className="footer-details">
          copyright &copy; {new Date().getFullYear()} TEE4TAO. All rights
          reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
