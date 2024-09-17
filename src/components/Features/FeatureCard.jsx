import React from "react";
import { FaChartBar, FaFingerprint, FaUsers } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const FeatureCard = () => {
  return (
    <>
      <div className="lg:flex lg:gap-10 gap-5">
        <div className="blue-text lg:text-6xl md:text-4xl sm:text-2xl text-xl ">
          <FaChartBar />
        </div>
        <div className="grid gap-5">
          <h6 className="blue-text lg:text-2xl md:text-xl"> Market Analysis</h6>
          <p className="lg:text-lg text-sm tracking-wide">
            Present sed phareta lorem. blandit convalis mi. Aenean ornare elit
            ac metus lacinia. sed iaculis nibh semper. Pallentesque est urna.
          </p>
        </div>
      </div>

      <div className="lg:flex lg:gap-10 gap-5">
        <div className="blue-text lg:text-6xl md:text-4xl sm:text-2xl text-xl ">
          <FaRegMessage />
        </div>
        <div className="grid gap-5">
          <h6 className="blue-text lg:text-2xl md:text-xl"> Fast Support</h6>
          <p className="lg:text-lg text-sm tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ex cupiditate enim omnis quaerat incidunt, dolorem optio est. Vel,
            totam!
          </p>
        </div>
      </div>

      <div className="lg:flex lg:gap-10 gap-5">
        <div className="blue-text lg:text-6xl md:text-4xl sm:text-2xl text-xl ">
          <FaFingerprint />
        </div>
        <div className="flex flex-col gap-5">
          <h6 className="blue-text lg:text-2xl md:text-xl"> Top Security</h6>
          <p className="lg:text-lg text-sm tracking-wide">
            Sint, velit? Porro accusamus numquam facere eligendi quidem saepe
            optio cum, ipsa id libero aliquam dolore totam quis soluta molestiae
            sunt amet?
          </p>
          <button className="px-3 py-1 bg-btn max-w-max text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="lg:flex lg:gap-10 gap-5">
        <div className="blue-text lg:text-6xl md:text-4xl sm:text-2xl text-xl ">
          <FaUsers />
        </div>
        <div className="flex flex-col gap-5">
          <h6 className="blue-text lg:text-2xl md:text-xl">Social Work</h6>
          <p className="lg:text-lg text-sm tracking-wide">
            Corrupti repudiandae non asperiores. Id sequi, consequuntur
            laboriosam nobis unde veniam? ac metus lacinia. sed iaculis nibh
            semper. Pallentesque est urna.
          </p>
          <button className="px-3 py-1 bg-btn max-w-max text-white">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
