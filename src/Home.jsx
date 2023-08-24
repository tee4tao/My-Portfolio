import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
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

const Home = ({ navRef }) => {
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
      <section className="hero" id="home">
        <div className="hero-container">
          <img src={tao} alt="" className="hero-img" />
          <h1 className="hero-heading">taofeek adeniyi</h1>
          <div className="hero-details">i'm a frontend developer</div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-container">
          <div className="header-container">
            <h1 className="about-header">about me</h1>
            <div className="underline about-underline"></div>
          </div>
          <div className="about-details">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            minus voluptatem earum unde eum? Quasi, ullam minima, repudiandae
            labore necessitatibus reprehenderit delectus temporibus id ea rem
            mollitia illo repellat ipsa. Quas fuga, quod dicta inventore dolorem
            nihil alias nostrum ad voluptates. Sapiente, omnis. Ut, illo dolorum
            aliquam itaque iste fugiat. Earum, error? Possimus deserunt
            voluptatem, eius maxime quis quisquam dolor exercitationem fugiat
            quibusdam molestiae quia nobis accusantium ipsam, ea est saepe
            eveniet eaque sint nemo, consectetur voluptates aut. Optio, dolores!
          </div>
        </div>
      </section>
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
          </div>
          <button className="see-more">more projects</button>
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
                    tweet
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
                    whatsapp
                  </a>
                </div>
              </div>
              <div className="social mail">
                <div className="social-icon">
                  <BiLogoGmail />
                </div>
                <div>
                  You can email me at:{" "}
                  <a className="link" href="mailto:adeniyitaofeek001@gmail.com">
                    adeniyitaofeek001@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
