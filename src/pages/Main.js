import React, { createContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import car from "../img/car.png";
import AOS from "aos";
import "aos/dist/aos.css";
export const useHh = createContext();
const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [bgColor, setBgColor] = useState(false);

  const [boxWidth, setBoxWidth] = useState(true);
  const [toww, setToww] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled
      if (window.scrollY > 0) {
        setBoxWidth(false);
        setBgColor(true);
        setBgColor(true);

        const redirectTimer = setTimeout(() => {
          window.location.href = "/Task/#/Two";
          window.scrollTo(0, 0);
        }, 500);
      } else {
        setBoxWidth(true);
        setBgColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [boxWidth]);
  return (
    <useHh.Provider value={bgColor} onload="window.scrollTo(0, 0);">
      <Nav />
      <div className="relative w-full overflow-hidden  mb-10 overflow-x-hidden">
        <div className="content h-[60vh] flex  items-center bx-[20px] mt-[40px]">
          <div
            className={`absolute bg-[#2DB55F]   ease-in duration-150   ${
              boxWidth
                ? "w-[500px] h-[500px] right-[-400px] top-[50] rounded-full"
                : "w-full h-full top-[0] right-[0px]  rounded-none "
            }`}
          ></div>
          <div className="left text-[70px] font-[500]  flex justify-center items-center text-center flex-col mx-[200px] ">
            <div data-aos="fade-up" className="text">
              Put your
              <br />
              best fleet
              <br />
              forward
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="right relative flex justify-center items-center mt-[70px] "
          >
            <div className="absolute w-[600px] h-[600px] rounded-full  bg-[#E2E9EE] z-[-1]"></div>
            <img src={car} alt="" className="w-full" />
          </div>
        </div>
        <div data-aos="fade-up" className="bot mx-[20px] w-[500px]  my-[10px] ">
          <h1 className="mb-[10px]">
            <i className="fa-solid fa-play text-white bg-slate-900 rounded-full w-[50px] h-[50px] flex justify-center items-center"></i>
          </h1>
          <div className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quos
            eos sequi alias, exercitationem quod quas inventore, cumque est
            perspiciatis porro voluptatem excepturi nobis amet ea fugiat, fuga
            voluptatum placeat!
          </div>
        </div>
      </div>
    </useHh.Provider>
  );
};

export default Main;
