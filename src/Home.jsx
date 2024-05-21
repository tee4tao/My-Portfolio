import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import { TypeAnimation } from "react-type-animation";
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
import { FaArrowUpLong } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import tao from "./Image/tao img.jpg";
import project1 from "./Image/CGPA-cal img.png";
import project2 from "./Image/grocery-bud.png";
import project3 from "./Image/shopper-comfy.png";
import html from "./logos/html-5-logo-svgrepo-com.svg"
import css from "./logos/CSS3_logo_and_wordmark.svg"
import tailwindCSS from "./logos/Tailwind_CSS_Logo.svg"
import javascript from "./logos/logo-javascript.svg"
import react from "./logos/react-2.svg"
import next from "./logos/nextjs-icon-svgrepo-com.svg"
import github from "./logos/github-mark.svg"
import preloader from "./Image/preloader.gif";
import Footer from "./Footer";
import Nav from "./Nav";
import Aside from "./Aside";

import { Link } from "react-router-dom";

const Home = () => {
  const {
    offPreloader,
    setOffPreloader,
    isOpen,
    // setIsOpen,
    openProject1Modal,
    setOpenProject1Modal,
    openProject2Modal,
    setOpenProject2Modal,
    closeSidebar,
    openSidebar,
    closePreloader,
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
      const topLink = document.querySelector(".top-link");
      if (scrollHeight > 400) {
        topLink.classList.add("show-link");
      } else {
        topLink.classList.remove("show-link");
      }
    };
    window.addEventListener("scroll", scrollFunc);
    // ********** smooth scroll ************
    // select links
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      const clickFunc = (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const fixedNav = navRef.current.classList.add("fixed-nav");
        let position = element.offsetTop - navHeight;

        window.scrollTo({
          left: 0,
          top: position,
        });
        // // close
        // linksContainer.style.height = 0;
      };
      link.addEventListener("click", clickFunc);
      return () => link.removeEventListener(`click`, clickFunc);
    });
    return () => window.removeEventListener(`scroll`, scrollFunc);
  });
  return (
    <>
      <div
        className={`${offPreloader ? `preloader hide-preloader` : `preloader`}`}
        onLoad={() => {
          setOffPreloader(true);
        }}
      >
        <img src={preloader} alt="preloader" className="preloader-item" />
      </div>
      <main>
        <Nav navRef={navRef} />
        <Aside />
        <section className="hero" id="home">
          <div className="hero-container">
            <img src={tao} alt="" className="hero-img" />
            <h1 className="hero-heading">taofeek adeniyi</h1>
            <div className="hero-details">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "I'm",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "I'm A",
                  1000,
                  "I'm A Frontend",
                  1000,
                  "I'm A Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  // fontSize: "2em",
                  display: "inline-block",
                  color: "white",
                }}
                repeat={Infinity}
              />
            </div>
            <div className="logos">
             <div className="logos-slide">
              <img src={html}  />
              <img src={css}  />
              <img src={tailwindCSS}  />
              <img src={javascript}  />
              <img src={react}  />
              <img src={next}  />
              <img src={github}  />
             </div>
             <div className="logos-slide">
              <img src={html}  />
              <img src={css}  />
              <img src={tailwindCSS}  />
              <img src={javascript}  />
              <img src={react}  />
              <img src={next}  />
              <img src={github}  />
             </div>
             <div className="logos-slide">
              <img src={html}  />
              <img src={css}  />
              <img src={tailwindCSS}  />
              <img src={javascript}  />
              <img src={react}  />
              <img src={next}  />
              <img src={github}  />
             </div>
             <div className="logos-slide">
              <img src={html}  />
              <img src={css}  />
              <img src={tailwindCSS}  />
              <img src={javascript}  />
              <img src={react}  />
              <img src={next}  />
              <img src={github}  />
             </div>
            </div>
            {/* <div className="hero-details">i'm a frontend developer</div> */}
          </div>
        </section>
        {/* about */}
        <section className="about" id="about">
          <div className="about-container">
            <div className="header-container">
              <h1 className="about-header">about me</h1>
              <div className="underline about-underline"></div>
            </div>
            <div className="about-details">
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  // height: "195px",
                  display: "block",
                }}
                sequence={[
                  `Hey There!
                  
                 I am Taofeek Adeniyi, a Frontend Developer.
                 
                I am a self-motivated Frontend Developer with more than a year experience in designing and implementing user-centric web applications.

                I am passionate about finding solutions to problem which made me study Mathematics in the University of Ibadan, Nigeria. So I am  a proactive problem-solver with keen eye for detail dedicated to delivering exceptional user experiences`,
                  1000,
                  "",
                ]}
                repeat={Infinity}
              />
              {/* <div style={{ marginBottom: `1rem` }}>Hey There!</div>
              <div style={{ marginBottom: `1rem` }}>
                I am Taofeek Adeniyi, a Frontend Developer.
              </div>
              <div style={{ marginBottom: `1rem` }}>
                I am a self-motivated Frontend Developer with more than a year
                experience in designing and implementing user-centric web
                applications.
              </div>
              <div>
                I am passionate about finding solutions to problem which made me
                study Mathematics in the University of Ibadan, Nigeria. So I am
                a proactive problem-solver with keen eye for detail dedicated to
                delivering exceptional user experiences
              </div> */}

              <Link to={"/about"} className="about-details_link">
                <button className="see-more more-about">see more</button>
              </Link>
            </div>
          </div>
        </section>
        {/* project */}
        <section id="projects">
          <div className="projects-container">
            <div className="header-container">
              <h1 className="projects-header">my projects</h1>
              <div className="underline"></div>
            </div>
            <div className="test-container">
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
                      {/* This is a To-do list built where items can be added,
                                  marked as read and deleted. All the items added are saved
                                  in the local storage.
                                  <div>Built With: </div>
                                  <div>
                                    HTML
                                    <BsDot />
                                    CSS
                                    <BsDot />
                                    React JS
                                  </div> */}
                      {openProject2Modal && (
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
                      <div className="img-btns_container">
                        <button className="view-project_btn">
                          <a
                            href="https://shoppercomfy.netlify.app/"
                            target="_blank"
                            attribute
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
                    src={project3}
                    alt="ShopperComfy"
                    className={`${
                      openProject2Modal ? `project-img test` : `project-img`
                    }`}
                    onMouseEnter={() => setOpenProject2Modal(true)}
                  />
                </div>
                <div className="project-title">ShopperComfy</div>
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
              {/* project 2 */}
            </div>
            <Link to={"/projects"}>
              <button className="see-more">more projects</button>
            </Link>
          </div>
        </section>
        {/* contact */}
        <section id="contact">
          <div className="contact-container">
            <div className="header-container">
              <h1 className="contact-header">contact me</h1>
              <div className="underline"></div>
            </div>
            <div className="contact-details">
              <h3>reach out to me:</h3>
              <div className="social-container">
                <div className="social linkedin">
                  <div className="social-icon">
                    <FaLinkedinIn />
                  </div>
                  <div>
                    Contact me on{" "}
                    <a className="link" href="https://linkedin.com/in/tee4tao">
                      Linkedin
                    </a>
                  </div>
                </div>
                <div className="social twitter">
                  <div className="social-icon">
                    <FaTwitter />
                  </div>
                  <div>
                    Send me a{" "}
                    <a className="link" href="https://twitter.com/tee4tao">
                      Tweet
                    </a>
                  </div>
                </div>
                <div className="social whatsapp">
                  <div className="social-icon">
                    <FaWhatsapp />
                  </div>
                  <div>
                    Contact me on{" "}
                    <a
                      className="link"
                      href="https://api.whatsapp.com/send/?phone=%2B2348165013325&text&type=phone_number&app_absent=0"
                    >
                      Whatsapp
                    </a>
                  </div>
                </div>
                <div className="social mail">
                  <div className="social-icon">
                    <BiLogoGmail />
                  </div>
                  <div>
                    You can email me at:{" "}
                    <a
                      className="link"
                      href="mailto:adeniyitaofeek001@gmail.com"
                    >
                      adeniyitaofeek001@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <a className="scroll-link top-link" href="#home">
          <FaArrowUpLong />
        </a>
      </main>
    </>
  );
};

export default Home;
