import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Navbar from "./Navbar";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    console.log(isVisible);
    setIsVisible(!isVisible);
  };
  return (
    <header className="absolute inset-0 z-10 xl:px-28 lg:px-14 px-10 py-6 w-full text-white font-bold mine ">
      <div className="relative flex justify-between items-center ">
        <span className="font-extrabold xl:text-3xl lg:text-2xl text-xl">
          Infinite Loop
        </span>
        <span
          className={`sm:relative absolute sm:top-0 top-10 sm:bg-transparent bg-white sm:left-auto sm:inline-block left-0 w-full sm:w-auto transition ease-in duration-700 overflow-hidden sm:translate-y-0 text-black sm:text-white ${
            isVisible ? "-translate-y-[200%] " : "translate-y-0"
          }`}
        >
          <Navbar />
        </span>
        <button
          className="block sm:hidden z-10 border p-3"
          onClick={handleToggle}
        >
          {isVisible ? <FaBars /> : <FaXmark />}
        </button>
      </div>
    </header>
  );
};

export default Header;
