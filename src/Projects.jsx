import React, { useEffect, useRef } from "react";
import logo from "./Image/tee4tao W.jpg";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { useGlobalContext } from "./context";
import project1 from "./Image/CGPA-cal img.png";
import project2 from "./Image/grocery-bud.png";
import project3 from "./Image/cart.png";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaArrowCircleRight,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";
const Projects = () => {
  const {
    openSidebar,
    isOpen,
    closeSidebar,
    openProject1Modal,
    setOpenProject1Modal,
    openProject2Modal,
    setOpenProject2Modal,
    openProject3Modal,
    setOpenProject3Modal,
  } = useGlobalContext();
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
      <section id="projects">
        <div className="projects-container">
          <div className="header-container">
            <h1 className="projects-header">my projects</h1>
            <div className="underline"></div>
          </div>
          <div className="test-container">
            {/* project 1 */}
            <div className="projects-details">
              <div
                className="project-img_container"
                onMouseLeave={() => setOpenProject1Modal(false)}
              >
                <div
                  className={`${
                    openProject1Modal
                      ? `project-img_details show-details`
                      : `project-img_details`
                  }`}
                >
                  <div className="img-details_container">
                    This is a calculator that helps students calculate their
                    CGPA and tell you the Class of Degree you fall into.
                    <div>Built With: </div>
                    <div>
                      HTML
                      <BsDot />
                      CSS
                      <BsDot />
                      React JS
                    </div>
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a href="https://cgpa-calculator01.netlify.app/">
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a href="https://github.com/tee4tao/cgpa-calculator">
                          view code
                          <span className="btn-icon">
                            <FaGithub />
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={project1}
                  alt="CGPA Calculator"
                  className={`${
                    openProject1Modal ? `project-img test` : `project-img`
                  }`}
                  onMouseEnter={() => setOpenProject1Modal(true)}
                />
              </div>
              <div className="project-title">CGPA Calculator</div>
            </div>
            {/* project 2 */}
            <div className="projects-details">
              <div
                className="project-img_container"
                onMouseLeave={() => setOpenProject2Modal(false)}
              >
                <div
                  className={`${
                    openProject2Modal
                      ? `project-img_details show-details`
                      : `project-img_details`
                  }`}
                >
                  <div className="img-details_container">
                    This is a To-do list built where items can be added, marked
                    as read and deleted. All the items added are saved in the
                    local storage.
                    <div>Built With: </div>
                    <div>
                      HTML
                      <BsDot />
                      CSS
                      <BsDot />
                      React JS
                    </div>
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a href="https://groceries-lists.netlify.app/">
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a href="https://github.com/tee4tao/Grocery-bud-updated">
                          view code
                          <span className="btn-icon">
                            <FaGithub />
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={project2}
                  alt="Grocery Bud"
                  className={`${
                    openProject2Modal ? `project-img test` : `project-img`
                  }`}
                  onMouseEnter={() => setOpenProject2Modal(true)}
                />
              </div>
              <div className="project-title">Grocery Bud</div>
            </div>
            {/* project 3 */}
            <div className="projects-details">
              <div
                className="project-img_container"
                onMouseLeave={() => setOpenProject3Modal(false)}
              >
                <div
                  className={`${
                    openProject3Modal
                      ? `project-img_details show-details`
                      : `project-img_details`
                  }`}
                >
                  <div className="img-details_container">
                    This is a To-do list built where items can be added, marked
                    as read and deleted. All the items added are saved in the
                    local storage.
                    <div>Built With: </div>
                    <div>
                      HTML
                      <BsDot />
                      CSS
                      <BsDot />
                      React JS
                    </div>
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a href="https://cart-item.netlify.app/">
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a href="https://github.com/tee4tao/Cart">
                          view code
                          <span className="btn-icon">
                            <FaGithub />
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={project3}
                  alt="Cart"
                  className={`${
                    openProject3Modal ? `project-img test` : `project-img`
                  }`}
                  onMouseEnter={() => setOpenProject3Modal(true)}
                />
              </div>
              <div className="project-title">Cart</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
