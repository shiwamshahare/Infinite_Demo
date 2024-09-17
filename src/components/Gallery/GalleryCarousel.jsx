import React from "react";

const GalleryCarousel = ({ images }) => {
  return (
    <>
      {images.map((imgsrc, idx) => (
        <div
          className="flex justify-center items-center flex-col gap-5  flex-shrink-0 w-full h-full p-5"
          key={idx}
        >
          <span className="flex ">
            <img src={imgsrc} alt={imgsrc} className=" w-auto" />
          </span>
        </div>
      ))}
    </>
  );
};

export default GalleryCarousel;
