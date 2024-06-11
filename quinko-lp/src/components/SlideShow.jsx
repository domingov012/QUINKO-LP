import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function SlideShow() {
  const [imageIndex, setImageIndex] = useState(1);

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides);

    for (let i = 0; i < slides.length; i++) {
      if (i === imageIndex) {
        slides[i].classList.add("block");
        slides[i].classList.remove("hidden");
      } else {
        slides[i].classList.add("hidden");
        slides[i].classList.remove("block");
      }
    }
  }

  function nextSlide() {
    setImageIndex((prevIndex) => {
      if (prevIndex === 2) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
    showSlides();
  }

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade block">
          <div className=" example-1 h-[60vh]"></div>
        </div>

        <div className="mySlides fade hidden">
          <div className=" example-2 h-[60vh]"></div>
        </div>

        <div className="mySlides fade hidden">
          <div className=" example-3 h-[60vh]"></div>
        </div>
      </div>

      <button
        onClick={nextSlide}
        className=" mt-3 flex items-center justify-center gap-4 ml-auto anaheim-primary text-white nav-button"
      >
        VER EJEMPLOS
        <FaArrowRight />
      </button>
    </>
  );
}
