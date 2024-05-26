import React, { useEffect, useRef } from "react";
import logo from "./Image/tee4tao W.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useGlobalContext } from "./context";
import { TypeAnimation } from "react-type-animation";
import project1 from "./Image/CGPA-cal img.png";
import project2 from "./Image/grocery-bud.png";
import project3 from "./Image/MixMaster.png";
import project4 from "./Image/cocktail.png";
import project5 from "./Image/product-page.png";
import project6 from "./Image/shopper-comfy.png";
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
    openProject4Modal,
    setOpenProject4Modal,
    openProject5Modal,
    setOpenProject5Modal,
    openProject6Modal,
    setOpenProject6Modal,
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
    };
    window.addEventListener("scroll", scrollFunc);

    return () => window.removeEventListener(`scroll`, scrollFunc);
  });
  return (
    <main className="projects-main">
      {/* nav */}
      <nav className="nav" ref={navRef}>
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
            <Link to={"/"} className="scroll-link">
              home
            </Link>
            <Link to={"/about"} className="scroll-link">
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
      <section id="projects">
        <div className="projects-container">
          <div className="header-container">
            <h1 className="projects-header">my projects</h1>
            <div className="underline"></div>
          </div>
          <div className="test-container">
            {/* project 6 */}
            <div className="projects-details">
              <div
                className="project-img_container"
                onMouseLeave={() => setOpenProject6Modal(false)}
              >
                <div
                  className={`${
                    openProject6Modal
                      ? `project-img_details show-details`
                      : `project-img_details`
                  }`}
                >
                  <div className="img-details_container">
                    {openProject6Modal && (
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          `This is an E-commerce website. It has features that include a sign-up/login page, adding, removing, and changing the quantities of goods in cart, checkout cart, and demo payment using Paystack.
                                      Built With: 
                                        HTML . CSS . TailwindCSS . ReactJS`,
                          1000,
                          "",
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                          whiteSpace: "pre-line",
                          display: "block",
                          color: "white",
                        }}
                        repeat={Infinity}
                      />
                    )}
                    {/* This is a product page where you can checkout different
                    images of the product, add any quantity of the product to
                    your cart and check your cart for the items in it */}
                    {/* <div>Built With: </div> */}
                    {/* <div>
                      HTML
                      <BsDot />
                      TailwindCSS
                      <BsDot />
                      React JS
                    </div> */}
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a
                          href="https://shoppercomfy.netlify.app/"
                          target="_blank"
                        >
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a
                          href="https://github.com/tee4tao/ShopperComfy"
                          target="_blank"
                        >
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
                  src={project6}
                  alt="ShopperComfy"
                  className={`${
                    openProject6Modal ? `project-img test` : `project-img`
                  }`}
                  onMouseEnter={() => setOpenProject6Modal(true)}
                />
              </div>
              <div className="project-title">ShopperComfy</div>
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
                    {openProject3Modal && (
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          `Introducing "MixMaster," the ultimate party sidekick app that fetches cocktails from the hilarious Cocktails DB API. With a flick of your finger, you'll unlock a treasure trove of enchanting drink recipes.
                          Built With: 
                            HTML . CSS . TailwindCSS . NextJS`,
                          1000,
                          "",
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                          whiteSpace: "pre-line",
                          display: "block",
                          color: "white",
                        }}
                        repeat={Infinity}
                      />
                    )}
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a
                          href="https://mix-master-ten.vercel.app/"
                          target="_blank"
                        >
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a
                          href="https://github.com/tee4tao/MixMaster"
                          target="_blank"
                        >
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
                  alt="MixMaster"
                  className={`${
                    openProject3Modal ? `project-img test` : `project-img`
                  }`}
                  onMouseEnter={() => setOpenProject3Modal(true)}
                />
              </div>
              <div className="project-title">MixMaster</div>
            </div>
            {/* project 5 */}
            <div className="projects-details">
              <div
                className="project-img_container"
                onMouseLeave={() => setOpenProject5Modal(false)}
              >
                <div
                  className={`${
                    openProject5Modal
                      ? `project-img_details show-details`
                      : `project-img_details`
                  }`}
                >
                  <div className="img-details_container">
                    {openProject5Modal && (
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          `This is a product page where you can checkout different images of the product, add any quantity of the product to your cart and check your cart for the items in it.
                          
                          Built With: 
                          
                            HTML . TailwindCSS . ReactJS`,
                          1000,
                          "",
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                          whiteSpace: "pre-line",
                          display: "block",
                          color: "white",
                        }}
                        repeat={Infinity}
                      />
                    )}
                    {/* This is a product page where you can checkout different
                    images of the product, add any quantity of the product to
                    your cart and check your cart for the items in it */}
                    {/* <div>Built With: </div> */}
                    {/* <div>
                      HTML
                      <BsDot />
                      TailwindCSS
                      <BsDot />
                      React JS
                    </div> */}
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a
                          href="https://production-ecommerce.netlify.app/"
                          target="_blank"
                        >
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a
                          href="https://github.com/tee4tao/E-Commerce_Frontend-Mentor"
                          target="_blank"
                        >
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
                  src={project5}
                  alt="Product Page"
                  className={`${
                    openProject5Modal ? `project-img test` : `project-img`
                  }`}
                  onMouseEnter={() => setOpenProject5Modal(true)}
                />
              </div>
              <div className="project-title">Product Page</div>
            </div>
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
                    {openProject1Modal && (
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          `This is a calculator that helps students calculate their CGPA and tell you the Class of Degree you fall into.
                          
                          Built With: 
                          
                            HTML . CSS . ReactJS`,
                          1000,
                          "",
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                          whiteSpace: "pre-line",
                          display: "block",
                          color: "white",
                        }}
                        repeat={Infinity}
                      />
                    )}
                    {/* This is a calculator that helps students calculate their
                    CGPA and tell you the Class of Degree you fall into.
                    <div>Built With: </div>
                    <div>
                      HTML
                      <BsDot />
                      CSS
                      <BsDot />
                      React JS
                    </div> */}
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a
                          href="https://cgpa-calculator01.netlify.app/"
                          target="_blank"
                        >
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a
                          href="https://github.com/tee4tao/cgpa-calculator"
                          target="_blank"
                        >
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
            {/* project 4 */}
            <div className="projects-details">
              <div
                className="project-img_container"
                onMouseLeave={() => setOpenProject4Modal(false)}
              >
                <div
                  className={`${
                    openProject4Modal
                      ? `project-img_details show-details`
                      : `project-img_details`
                  }`}
                >
                  <div className="img-details_container">
                    {openProject4Modal && (
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          `This is a website where you can search for your favourite cocktail. Data about the drinks are fetched from an API.
                          
                          Built With: 
                          
                            HTML . CSS . ReactJS`,
                          1000,
                          "",
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                          whiteSpace: "pre-line",
                          display: "block",
                          color: "white",
                        }}
                        repeat={Infinity}
                      />
                    )}
                    {/* This is a website where you can search for your favourite
                    cocktail. Data about the drinks are fetched from an API.
                    <div>Built With: </div>
                    <div>
                      HTML
                      <BsDot />
                      CSS
                      <BsDot />
                      React JS
                    </div> */}
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a
                          href="https://cocktails-projects.netlify.app/"
                          target="_blank"
                        >
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a
                          href="https://github.com/tee4tao/cocktails"
                          target="_blank"
                        >
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
                  src={project4}
                  alt="Cart"
                  className={`${
                    openProject4Modal ? `project-img test` : `project-img`
                  }`}
                  onMouseEnter={() => setOpenProject4Modal(true)}
                />
              </div>
              <div className="project-title">Cocktail</div>
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
                    {openProject2Modal && (
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          `This is a To-do list built where items can be added, marked as read and deleted. All the items added are saved in the local storage.
                          
                          Built With: 
                          
                            HTML . CSS . ReactJS`,
                          1000,
                          "",
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                          whiteSpace: "pre-line",
                          display: "block",
                          color: "white",
                        }}
                        repeat={Infinity}
                      />
                    )}
                    {/* This is a To-do list built where items can be added, marked
                    as read and deleted. All the items added are saved in the
                    local storage.
                    <div>Built With: </div>
                    <div>
                      HTML
                      <BsDot />
                      CSS
                      <BsDot />
                      React JS
                    </div> */}
                    <div className="img-btns_container">
                      <button className="view-project_btn">
                        <a
                          href="https://groceries-lists.netlify.app/"
                          target="_blank"
                        >
                          view project
                          <span className="btn-icon">
                            <FaArrowCircleRight />
                          </span>
                        </a>
                      </button>
                      <button className="view-code_btn">
                        <a
                          href="https://github.com/tee4tao/Grocery-bud-updated"
                          target="_blank"
                        >
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
            
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
