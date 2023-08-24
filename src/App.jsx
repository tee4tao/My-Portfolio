import { useEffect, useState, useRef } from "react";
import preloader from "./Image/preloader.gif";
import { useGlobalContext } from "./context";
import { FaArrowUpLong } from "react-icons/fa6";
import Home from "./Home";
import Footer from "./Footer";
import Nav from "./Nav";
import Aside from "./Aside";

function App() {
  const { offPreloader, setOffPreloader } = useGlobalContext();
  const navRef = useRef(null);

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
        <Home navRef={navRef} />
        <Footer />
        <a className="scroll-link top-link" href="#home">
          <FaArrowUpLong />
        </a>
      </main>
    </>
  );
}

export default App;
