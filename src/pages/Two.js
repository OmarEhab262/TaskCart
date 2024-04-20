import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import car2 from "../img/car2.png";
import ggg from "../img/ggg.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Two = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsEndOfPage(true);
        // Redirect to the top after scrolling
        const redirectTimer = setTimeout(() => {
          window.location.href = "/Task/";
          window.scrollTo(0, 0);
        }, 500);
      } else {
        setIsEndOfPage(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isEndOfPage) {
      // Set the height and width of the div to 5000px
      const div = document.getElementById("endOfPageDiv");
      if (div) {
        div.style.width = "5000px";
        div.style.height = "5000px";
      }
    }
  }, [isEndOfPage]);

  return (
    <div className="overflow-x-hidden" onload="window.scrollTo(0, 0);">
      <div className=" h-[100vh] z-50 bg-[#2DB55F]">
        <Nav state={true} />
        <div data-aos="fade-up" className="content flex justify-between">
          <div className="left w-[50%] mt-[200px] ml-[40px] text-white">
            <h1 className=" text-[70px] font-[500]">
              A passion
              <br />
              for progress
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              fugiat numquam porro similique, ex eveniet eos voluptatum a,
              reprehenderit omnis tempora doloribus fuga voluptas rem excepturi
              cum incidunt officia tempore.
            </p>
          </div>
          <div className="right flex flex-wrap gap-20 justify-center">
            <div className="car relative flex justify-center items-center">
              <div className="absolute  w-[250px] h-[250px] rounded-full bg-white z-[4]"></div>
              <img src={car2} alt="" className="w-[300px] z-[5]" />
            </div>
            <div className="car relative flex justify-center items-center">
              <div className="absolute  w-[250px] h-[250px] rounded-full bg-white z-[4]"></div>
              <img src={car2} alt="" className="w-[300px] z-[5]" />
            </div>
            <div className="car relative flex justify-center items-center">
              <div className="absolute  w-[250px] h-[250px] rounded-full bg-[#102338] z-[4]"></div>
              <img src={car2} alt="" className="w-[300px] z-[5]" />
            </div>
          </div>
        </div>
      </div>
      <div className="Why bg-gray-200 flex flex-col justify-center items-center pt-[200px] pb-[120px]">
        <h1 data-aos="fade-up" className="text-[50px]">
          Why Us?
        </h1>
        <div className="list flex justify-between w-full m-[40px] px-[40px]">
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center items-center w-[200px]"
          >
            <div className="icon text-[50px]">
              <i class="fa-solid fa-user-group"></i>
            </div>
            <div className="text text-center">
              <div className="head text-[20px] mb-[10px]">Dedicated Team</div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center w-[200px]"
          >
            <div className="icon text-[50px]">
              <i class="fa-solid fa-list-check"></i>
            </div>
            <div className="text text-center">
              <div className="head text-[20px] mb-[10px]">
                liability Determination
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col justify-center items-center w-[200px]"
          >
            <div className="icon text-[50px]">
              <i class="fa-solid fa-car-side"></i>
            </div>
            <div className="text text-center">
              <div className="head text-[20px] mb-[10px]">Quality Control</div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col justify-center items-center w-[200px]"
          >
            <div className="icon text-[50px]">
              <i class="fa-solid fa-arrows-turn-right"></i>
            </div>
            <div className="text text-center">
              <div className="head text-[20px] mb-[10px]">
                Process Management
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center relative w-full h-[100vh] overflow-hidden">
        <div
          id="endOfPageDiv"
          className={`absolute bg-[#2DB55F] ease-in duration-150 w-[500px] h-[500px] rounded-full left-[-400px] z-30`}
        ></div>
        <div
          data-aos="fade-right"
          className="left relative flex justify-center items-center ml-[200px]"
        >
          <div className="img z-[10]">
            <img src={ggg} alt="" className="w-[400px] mt-[-120px]" />
          </div>
          <div className="absolute w-[400px] h-[400px] rounded-full bg-slate-300 top-[40px]"></div>
        </div>
        <div data-aos="fade-left" className="right w-[40%]">
          <h1 className="text-[70px]">
            Built for people
            <br />
            by people
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            laudantium quae reiciendis deserunt porro. Sint, minima dolorem
            natus ab provident quos reprehenderit quod animi quasi minus velit
            illum rerum aperiam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Two;
