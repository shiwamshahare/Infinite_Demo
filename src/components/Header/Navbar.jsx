import React from "react";
const Navbar = () => {
  return (
    <>
      <nav className="relative xl:text-lg lg:text-md text-sm w-full">
        <ul
          className={`flex flex-col sm:flex-row w-full xl:gap-16 lg:gap-10 gap-5 p-5`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">What we do</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
