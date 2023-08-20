import { useEffect, useState, useRef } from "react";
import preloader from "./Image/preloader.gif";
import logo from "./Image/tee4tao W.jpg";
import tao from "./Image/tao img.jpg";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);
  const [offPreloader, setOffPreloader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(false);
  };
  const navRef = useRef(null);
  // const navRef = useRef(null);
  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;
    window.addEventListener("scroll", function () {
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
    });
    // ********** smooth scroll ************
    // select links
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        console.log(element);

        // const navHeight = navbar.getBoundingClientRect().height;
        // const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navRef.current.classList.add("fixed-nav");
        let position = element.offsetTop - navHeight;
        console.log(position);

        if (!fixedNav) {
          position = position - navHeight;
        }
        // if (navHeight > 82) {
        //   position = position + containerHeight;
        // }

        window.scrollTo({
          left: 0,
          top: position,
        });
        // // close
        // linksContainer.style.height = 0;
      });
    });
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
        <nav className="nav" ref={navRef}>
          <div className="nav-center">
            <div className="nav-header">
              <img src={logo} alt="Tee4Tao" className="nav-logo" />
              <button
                className="aside-toggle_btn"
                onClick={() => setIsOpen(true)}
              >
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
        <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
          <button className="close-btn" type="button" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <div className="side-container">
            <ul className={isOpen ? "sidebar-links" : null}>
              <li>
                <a href="#home" className="scroll-link" onClick={toggleSidebar}>
                  home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="scroll-link"
                  onClick={toggleSidebar}
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="scroll-link"
                  onClick={toggleSidebar}
                >
                  projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="scroll-link"
                  onClick={toggleSidebar}
                >
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
                <a
                  href="https://linkedin.com/in/tee4tao"
                  className="social-link"
                >
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
        <section className="hero" id="home">
          <div className="hero-container">
            <img src={tao} alt="" className="hero-img" />
            <h1 className="hero-heading">taofeek adeniyi</h1>
            <div className="hero-details">i'm a frontend developer</div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about-container">
            <h1 className="about-header">about me</h1>
            <div className="about-details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur minus voluptatem earum unde eum? Quasi, ullam minima,
              repudiandae labore necessitatibus reprehenderit delectus
              temporibus id ea rem mollitia illo repellat ipsa. Quas fuga, quod
              dicta inventore dolorem nihil alias nostrum ad voluptates.
              Sapiente, omnis. Ut, illo dolorum aliquam itaque iste fugiat.
              Earum, error? Possimus deserunt voluptatem, eius maxime quis
              quisquam dolor exercitationem fugiat quibusdam molestiae quia
              nobis accusantium ipsam, ea est saepe eveniet eaque sint nemo,
              consectetur voluptates aut. Optio, dolores!
            </div>
          </div>
        </section>
        <section id="projects">
          {/* <div className="projects-container">
            <div className="projects-header">my projects</div>
            <div className="projects-details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              ullam, beatae possimus rerum, tenetur, excepturi ab porro
              provident eos et quo harum aliquam voluptate consequatur nam
              repudiandae magnam itaque! Nobis, voluptatum. Quas consequuntur
              blanditiis ipsam accusamus dolore ad ab repellat eligendi commodi
              laborum reiciendis fugit reprehenderit delectus nulla ipsum,
              cumque voluptates a molestiae amet minima culpa sit autem?
              Accusamus velit nam iusto doloremque neque culpa ipsam sapiente
              voluptatibus aut ratione quas nihil nobis, laudantium aliquid
              porro amet impedit adipisci itaque voluptates! Sit voluptates
              necessitatibus, expedita molestiae enim eius odio aperiam ratione
              quisquam repudiandae nemo rem cumque illo accusamus corrupti
              similique!
            </div>
          </div> */}
        </section>
        <a className="scroll-link top-link" href="#home">
          <FaArrowUpLong />
        </a>
      </main>
    </>
  );
}

export default App;
