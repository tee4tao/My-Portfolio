import React, { useEffect, useRef } from "react";
import logo from "./Image/tee4tao W.jpg";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { useGlobalContext } from "./context";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
const About = () => {
  const { openSidebar, isOpen, closeSidebar } = useGlobalContext();
  const navRef = useRef(null);
  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;
    const scrollFunc = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        navRef.current.classList.add("fixed-nav");
      } else {
        navRef.current.classList.remove("fixed-nav");
      }
      // // setup back to top link
      // const topLink = document.querySelector(".top-link");
      // if (scrollHeight > 400) {
      //   topLink.classList.add("show-link");
      // } else {
      //   topLink.classList.remove("show-link");
      // }
    };
    window.addEventListener("scroll", scrollFunc);

    return () => window.removeEventListener(`scroll`, scrollFunc);
  });
  return (
    <main className="about-main">
      {/* nav */}
      <nav className="nav" ref={navRef}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="Tee4Tao" className="nav-logo" />
            <button className="aside-toggle_btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <div className="nav-links">
            <Link to={"/"} className="scroll-link">
              home
            </Link>
            <Link to={"/about"} className="scroll-link">
              about
            </Link>
            <Link to={"/projects"} className="scroll-link">
              projects
            </Link>
            <Link to={"/"} className="scroll-link">
              home
            </Link>
            {/* <a href="#home" className="scroll-link">
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
            </a> */}
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
            <li>
              <Link to={"/"} className="scroll-link" onClick={closeSidebar}>
                home
              </Link>
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
      <section className="about" id="about">
        <div className="about-container">
          <div className="header-container">
            <h1 className="about-header">about me</h1>
            <div className="underline about-underline"></div>
          </div>
          <div style={{ lineHeight: 2 }} className="about-details">
            <div style={{ marginBottom: `1rem` }}>Hey There!</div>
            <div style={{ marginBottom: `1rem` }}>
              I am Taofeek Adeniyi, a Frontend Developer.
            </div>
            <div style={{ marginBottom: `1rem` }}>
              I am a self-motivated Frontend Developer with more than a year
              experience in designing and implementing user-centric web
              applications.
            </div>
            <div style={{ marginBottom: `1rem` }}>
              I am passionate about finding solutions to problem which makes me
              study Mathematics in the University of Ibadan, Nigeria. So I am a
              proactive problem-solver with keen eye for detail dedicated to
              delivering exceptional user experiences
            </div>
            <div style={{ marginBottom: `1rem` }}>
              <h4>Hobbies:</h4>
              <div>
                Basically, I love coding whereby I build stuufs, break code and
                then fixing what I broke.😜
              </div>
              <div>
                Aside that, I love playing mobile games(mostly CODM) and I love
                outdoor cycling
              </div>
            </div>
            <div>
              <h4>Skills:</h4>
              <div class="about-stack">
                <span>html</span>
                <span>css</span>
                <span>tailwind css</span>
                <span>github</span>
                <span>javascript</span>
                <span>react.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
