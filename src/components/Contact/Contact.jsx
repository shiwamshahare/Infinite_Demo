import React from "react";
import {
  FaRegComment,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhoneSquare,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <section className="relative h-auto flex flex-col justify-between items-center text-center xl:px-28 lg:px-20 md:px-16 sm:px-12 px-5 bg-[url('/Images/infinite-loop-03.jpg')] bg-cover bg-center">
      <div className="lg:p-16 md:p-10 sm:p-6 p-2 z-[3] text-white relative w-full pb-12">
        <h2 className="text-4xl p-2 font-semibold">Contact Us</h2>
        <p className="text-md text-center p-2 px-6">
          Proin enim orci, tincidunt quis suscipit in, placerat nec est.
          Vestibulum posuere faucibus posuere. Quisque aliquam velit eget leo
          blandit egestas. Nulla id posuere felis, quis tristique nulla.
        </p>
      </div>
      <div className="z-[3] grid md:grid-cols-2 grid-cols-1  w-full xl:mx-12 lg:mx-10 md:mx-8 sm:mx-6 xl:px-12 lg:px-10 md:gap-5 gap-10">
        <ContactForm />
        <div className="text-white flex flex-col gap-6 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4">
          <span className="flex gap-10 items-center">
            <span className="text-[2em] font-extrabold">
              <FaRegComment />
            </span>
            <span>Chat Online</span>
          </span>
          <span className="flex gap-10 items-center">
            <span className="text-[2em] font-extrabold">
              <FaRegEnvelope />
            </span>
            <span>mail@company.com</span>
          </span>
          <span className="flex gap-10 items-center">
            <span className="text-[2em] font-extrabold">
              <FaMapMarkerAlt />
            </span>
            <span>Our Location</span>
          </span>
          <span className="flex gap-10 items-center">
            <span className="text-[2em] font-extrabold">
              <FaPhoneSquare />
            </span>
            <span>255-662-5566</span>
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
