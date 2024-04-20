import React, { useContext } from "react";
import { useHh } from "../pages/Main";
import { Link } from "react-router-dom";

const Nav = ({ state }) => {
  const contextValue = useContext(useHh);

  return (
    <div
      className={`w-full flex justify-around  items-center z-20  ease-in duration-150 ${
        contextValue || state ? "text-white bg-[#2DB55F]" : " text-black "
      }`}
    >
      <div className="list flex justify-between w-[85%] items-center text-[19px] font-[500] py-[20px]">
        <Link
          to="/"
          className={`logo  text-[40px] font-[600] text-black text-center`}
        >
          <span
            className={`ease-in duration-150   ${
              contextValue || state ? "text-white " : " text-[#2DB55F]"
            }`}
          >
            v
          </span>
          image
        </Link>
        <select name="Products" id="Products" className="bg-transparent">
          <option value="Products">Products</option>
        </select>
        <select name="Industries" id="Industries " className="bg-transparent">
          <option value="Industries">Industries</option>
        </select>
        <h2>Who we Help</h2>
        <h2>About Us</h2>
        <div
          className={`btn   px-[20px] py-[15px] rounded-[50px] flex justify-center items-center  ${
            contextValue || state
              ? "bg-white text-black"
              : "bg-[#2DB55F] text-white"
          }`}
        >
          Request a Demo
        </div>
      </div>
    </div>
  );
};

export default Nav;
