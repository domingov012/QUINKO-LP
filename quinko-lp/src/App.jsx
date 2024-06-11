import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import MainTitle from "./components/MainTitle";
import svg1 from "./assets/svg_tr_2.svg";
import svg2 from "./assets/svg_bl_2.svg";
import svg3 from "./assets/svg_t_3.svg";
import wsp from "./assets/WhatsAppButtonWhiteMedium.svg";
import { FaWhatsapp } from "react-icons/fa";
import SlideShow from "./components/SlideShow";

function App() {
  const about_ref = useRef();
  const collab_ref = useRef();
  const cotiza_ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const htmlDoc = document.documentElement;
      const scrollPosition = window.scrollY;
      const scrollPercent =
        (scrollPosition / window.visualViewport.height) * 100;
      if (scrollPosition > 0) {
        console.log(scrollPercent);
        htmlDoc.style.setProperty("--scroll-percent", scrollPercent);
      } else {
        console.log("top");
        htmlDoc.style.setProperty("--scroll-percent", scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        about_ref={about_ref}
        cotiza_ref={cotiza_ref}
        collab_ref={collab_ref}
      />
      <div className="full-section w-full sticky img-1 mx-auto">
        <div className="full-section bg-black bg-opacity-50 minimize-animation">
          <MainTitle cotiza_ref={cotiza_ref} />
        </div>
      </div>
      <div
        className="full-section bg-primary overlap-animation flex"
        ref={about_ref}
      >
        <img src={svg1} className="absolute top-0 right-0" />
        <img src={svg2} className="absolute bottom-[-1px] left-0" />
        {/* --------------------- MAIN CONTENT ----------------- */}
        <div className="p-20 my-auto z-10 flex items-center justify-center gap-10">
          <p className="text-paragraph text-white max-w-[40%] anaheim-primary">
            Descripcion corta de la empresa o un texto que se quiera poner
            blablbal bla blabla blablabl ablablbal blablab{" "}
          </p>
          <img src="./logo_1.png" alt="logo" className="h-full" />
        </div>
      </div>
      <div
        className="full-section bg-secondary overlap-animation p-20"
        ref={collab_ref}
      >
        {/* --------------------- MAIN CONTENT ----------------- */}
        <h1 className="text-center text-white text-5xl michroma-regular">
          COLABORADORES
        </h1>
        <div className="flex justify-center items-center gap-10 mt-16">
          <img
            src="./logo_trs.jpg"
            alt="logo"
            className="h-full logo-container"
          />
          <img
            src="./logo_wintermik.png"
            alt="logo"
            className="h-full logo-container"
          />
          <img
            src="./logo_wintermik.png"
            alt="logo"
            className="h-full logo-container"
          />
        </div>
      </div>
      <div
        className="full-section bg-primary overlap-animation"
        ref={cotiza_ref}
      >
        <img src={svg3} className="absolute top-0 left-0 right-0 z-[-1]" />
        {/* --------------------- MAIN CONTENT ----------------- */}
        <div className="flex h-full w-full">
          <div className="flex items-center justify-center flex-col gap-10 w-[45vw] p-8">
            <h1 className="text-center text-white text-4xl michroma-regular">
              COTIZA CON NOSOTROS
            </h1>
            <p className="text-paragraph text-white text-center anaheim-primary">
              Contáctanos para hacer de tu próximo proyecto realidad. Ofrecemos
              atención personalizada, etc blbablabla . ¡Escríbenos!
            </p>

            <div className="flex items-center justify-center gap-5 wsp-link">
              <FaWhatsapp />
              <a
                href="https://wa.me/56942123052?text=Hola%20Quiero%20cotizar%20un%20proyecto%20con%20ustedes"
                target="_blank"
              >
                + 56 9 numero pro
              </a>
            </div>
          </div>
          <div className="my-auto w-[55vw] p-8">
            <SlideShow />
          </div>
        </div>
      </div>
      {/* <Bg2 content={<div>secion 2</div>} /> */}
    </>
  );
}

export default App;
