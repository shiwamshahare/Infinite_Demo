import React from "react";

const TestimonialsCarousel = ({ images }) => {
  return (
    <>
      {images.map((item) => (
        <div
          className="flex justify-center items-center flex-col gap-5  flex-shrink-0 w-full h-full sm:p-5 p-2"
          key={item.id}
        >
          <span className="flex ">
            <img
              src={item.src}
              alt={item.profile}
              className="rounded-full w-auto"
            />
          </span>
          <p className="xl:text-lg text-sm text-start"> {item.desc}</p>
          <p className="place-self-end pr-2 italic xl:text-lg text-sm">
            {item.profile}
          </p>
        </div>
      ))}
    </>
  );
};

export default TestimonialsCarousel;
