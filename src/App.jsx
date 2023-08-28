import { useEffect, useState, useRef } from "react";
import preloader from "./Image/preloader.gif";
import { useGlobalContext } from "./context";
import { FaArrowUpLong } from "react-icons/fa6";
import Home from "./Home";
import Footer from "./Footer";
import Nav from "./Nav";
import Aside from "./Aside";
import About from "./About";
import Projects from "./Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const { offPreloader, setOffPreloader } = useGlobalContext();
  // const navRef = useRef(null);

  return (
    // <>

    <BrowserRouter>
      {/* <div
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
        <Home navRef={navRef} />
        <Footer />
        <a className="scroll-link top-link" href="#home">
          <FaArrowUpLong />
        </a> */}
      <Routes>
        <Route path="/" element={<Aside />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
      {/* </main> */}
    </BrowserRouter>
    // </>
  );
}

export default App;
