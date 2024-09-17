import React from "react";

const ContactForm = () => {
  return (
    <div className="z-[3] bg-transparent w-full xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4">
      <form
        action="#"
        method="post"
        className="grid h-full gap-5 w-full text-xl"
      >
        <input
          type="text"
          className="rounded-md bg-transparent border-white border-2 px-3 py-1 text-white font-semibold"
          placeholder="Your Name"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="rounded-md bg-transparent border-white border-2 px-3 py-1 text-white font-semibold"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          className="rounded-md bg-transparent border-white border-2 px-3 py-1 text-white font-semibold h-full"
        ></textarea>
        <button className="text-white bg-btn max-w-max px-12 py-1 font-semibold rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
