import React, { useEffect, useState } from "react";
import TestimonialsCarousel from "../Carousel/TestimonialsCarousel";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(3);

  const images = [
    {
      id: 0,
      src: "/Images/testimonial-img-01.jpg",
      desc: " Nulla finibus ligula nec tortor convallis tincidunt et malesuada fames ac ante ipsum primis in faucibus",
      profile: "Catherine Win (Designer)",
    },
    {
      id: 1,
      src: "/Images/testimonial-img-02.jpg",
      desc: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of  words, consectetur",
      profile: "Dual Rocker (CEO)",
    },
    {
      id: 2,
      src: "/Images/testimonial-img-03.jpg",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ",
      profile: "Sandar Soft (Marketing)",
    },
    {
      id: 3,
      src: "/Images/testimonial-img-04.jpg",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo possimus",
      profile: "Oliva Htoo (Designer)",
    },
    {
      id: 4,
      src: "/Images/testimonial-img-02.jpg",
      desc: " Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
      profile: "Jacob Joker (CTO)",
    },
  ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCount(3); // Show 3 cards
      } else if (width >= 768 && width < 1024) {
        setCount(4); // Show 2 cards
      } else {
        setCount(5); // Show 1 card
      }
    };

    // Set the initial count on load
    updateCount();

    // Add a resize event listener
    window.addEventListener("resize", updateCount);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === 0) {
        setCurrent((prev) => {
          if (prev >= images.length - count) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-auto flex flex-col justify-center items-center text-center py-16 bg-[url('/Images/infinite-loop-02.jpg')] bg-cover bg-center xl:px-28 lg:px-20 md:px-20 sm:px-16 px-10">
      <div className="xl:p-16 z-[3] text-white relative xl:w-2/3 w-full">
        <h3 className="xl:text-4xl text-3xl font-semibold p-2">Testimonials</h3>
        <p className="lg:text-md text-sm tracking-normal">
          excepturi quam obcaecati repellendus voluptate eligendi dolorem
          voluptatibus, aspernatur, dolores inventore. Suscipit animi, tenetur
          qui eos quas doloremque?
        </p>
      </div>
      <div className="z-[3] grid xl:w-5/6 w-full overflow-hidden text-white relative py-6 bg-transparent ">
        <div
          className="flex lg:w-1/3 md:w-1/2 w-full m-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          <TestimonialsCarousel images={images} />
        </div>
      </div>
      <div className="absolute z-[3] bottom-0 mb-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-5 w-5 ${
              idx === current ? "bg-gray-50" : "bg-gray-500"
            } rounded-full m-3 ${idx > count - 1 ? "hidden" : "inline-block"} `}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
