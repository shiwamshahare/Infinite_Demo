import React, { useState, useEffect } from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    "/Images/gallery-img-01.jpg",
    "/Images/gallery-img-02.jpg",
    "/Images/gallery-img-03.jpg",
    "/Images/gallery-img-04.jpg",
    "/Images/gallery-img-05.jpg",
    "/Images/gallery-img-06.jpg",
    "/Images/gallery-img-01.jpg",
    "/Images/gallery-img-02.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === 0) {
        setCurrent((prev) => {
          if (prev === images.length - 5) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative xl:p-28 lg:p-20 md:p-20 sm:p-14 p-6 h-full w-full flex justify-between flex-col items-center mb-12">
      <div className=" flex flex-col lg:w-2/3 justify-center items-center">
        <h2 className="blue-text text-4xl p-2 font-semibold">Gallery</h2>
        <p className="lg:text-md text-sm lg:text-center lg:p-2 ">
          Suscipit animi, tenetur qui eos quas doloremque? excepturi quam
          obcaecati repellendus voluptate eligendi dolorem voluptatibus,
          aspernatur, dolores inventore.
        </p>
      </div>
      <div className="w-full relative overflow-hidden">
        <div
          className="flex lg:w-1/5 sm:w-2/4 m-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          <GalleryCarousel images={images} />
        </div>
      </div>
      <div className="absolute z-[3] bottom-0 mx-12">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`md:h-5 h-3 w-3 md:w-5 ${
              idx === current ? "bg-btn" : "bg-gray-400"
            } rounded-full m-2 ${idx > 3 ? "hidden" : "inline-block"} `}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
