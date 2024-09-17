import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="lg:p-28 md:p-20 sm:p-16 p-10 ">
      <div className="mb-16 ">
        <h3 className="lg:text-4xl md:text-3xl text-2xl pb-5  blue-text font-semibold ">
          What We Do
        </h3>
        <p className="md:text-xl sm:text-md text-sm tracking-wide">
          This is Infinite Loop free Bootstrap 4.0 template with a parallax
          effect. This layout is what you can modify and use for your websites.
          please spread a word to your friends about our website. Thank you for
          supporting us If you have any question. you can contact us or chat
          with us on our{" "}
          <a href="#" className="a-text">
            Tooplate Facebook page.
          </a>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:gap-12 sm:gap-5 gap-10">
        <FeatureCard />
      </div>
    </section>
  );
};

export default Features;
