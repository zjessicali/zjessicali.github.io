import { useState } from "react";

// IDEA: INSTEAD OF SO MANY CAROUSEL DO A CLICK ME TOGGLE! TO SEE THE MOCKUPS

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // const thumbnail=/(images.length+1);
  return (
    <div className="w-full relative">
      {/* Main Image */}
      <div className="relative h-72 md:h-[460px] w-full flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="h-full object-contain rounded-md"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center items-center lg:mt-2">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="p-4 opacity-60 text-xs hover-link"
        >
          prev
        </button>
        <div className="flex justify-center gap-1 ">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-auto h-6 md:h-8 lg:h-12 object-cover rounded-sm cursor-pointer 
              ${index === currentIndex ? "" : "opacity-40"}
            `}
            />
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-4 opacity-60 text-xs hover-link"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
