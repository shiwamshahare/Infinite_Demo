import React, { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: " ",
    email: " ",
    message: " ",
  });

  const handleData = (e) => {
    setData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: " ",
      email: " ",
      message: " ",
    });
  };

  return (
    <div className="z-[3] bg-transparent w-full xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4">
      <form
        onSubmit={handleSubmit}
        action="#"
        method="post"
        className="grid h-full gap-5 w-full text-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleData}
          value={data.name}
          className="rounded-md bg-transparent border-white border-2 px-3 py-1 text-white font-semibold"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleData}
          value={data.email}
          className="rounded-md bg-transparent border-white border-2 px-3 py-1 text-white font-semibold"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          onChange={handleData}
          value={data.message}
          className="rounded-md bg-transparent border-white border-2 px-3 py-1 text-white font-semibold h-full"
        ></textarea>
        <button
          type="submit"
          className="text-white bg-btn max-w-max px-12 py-1 font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
