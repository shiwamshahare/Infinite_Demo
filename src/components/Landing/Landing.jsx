import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="relative h-screen bg-[url('/Images/infinite-loop-01.jpg')] bg-cover  bg-center z-0 text-white px-28">
      <div className="absolute inset-0 flex flex-col items-center justify-end">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h2 className="sm:text-6xl text-5xl font-bold ">Infinite Loop</h2>
          <span className="sm:text-xl text-sm font-semibold">
            Bootstrap 4.0 Parallax Theme
          </span>
          <span className="sm:text-xl text-sm font-semibold">
            Free HTML Template TOOPLATE
          </span>
        </div>
        <button className="mb-12 rounded-md text-2xl bg-[#37A] py-3 px-6 text-center">
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Landing;
