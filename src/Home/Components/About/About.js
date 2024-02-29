import { useState, useEffect } from "react";
import { DATA } from ".././data";

function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const artworks = DATA.art;
  let randArt = artworks[getRandomNumber()];

  function getRandomNumber() {
    // Generate a random number between 0 and 9
    return Math.floor(Math.random() * 10);
  }

  const [hoveredItems, setIsHoveredArray] = useState(Array(2).fill(0));

  const handleOnHover = (index) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = 1;
      return newArray;
    });
    // randArt = artworks[getRandomNumber()];
  };

  const handleOutHover = (index) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = 0;
      return newArray;
    });
  };
  return (
    <div className=" w-full border-t-2 border-porple bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:border-r-2 border-r-white">
        <div className="border-b-2 md:border-r-2 border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 font-medium">
            Open to work!
          </p>
        </div>
        <div className="border-b-2 md:border-r-2 border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 font-medium">
            Based in Vancouver BC
          </p>
        </div>
        <div className="border-b-2 md:border-r-2 border-porple aspect-square w-full"></div>
        <div
          className="border-b-2  border-b-porple border-r-2 border-white w-full aspect-square flex flex-col justify-end"
          onMouseOver={() => handleOnHover(0)}
          onMouseOut={() => handleOutHover(0)}
        >
          <p
            className={`font-Manrope md:text-4xl m-5 md:m-4 font-medium ${
              hoveredItems[0] ? "hidden" : ""
            }`}
          >
            jessica <br></br>
            zhen li :)
          </p>
          <img
            alt="It's me!"
            src="/ProjectImages/Self.png"
            className={`z-20 w-full h-full object-cover md:h-max ${
              hoveredItems[0] ? "overflow-hidden" : "hidden"
            }`}
          ></img>
        </div>
        <div className="border-b-2 md:border-r-2 border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope md:mx-4 md:my-2 md:leading-none lg:leading-none">
            Simon Fraser University's (2019 - present):
          </p>
          <p className="font-Manrope md:text-lg lg:text-2xl md:mx-4 font-medium md:leading-none">
            School of Computing Science
          </p>
          <p className="font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 md:mt-2 font-medium md:leading-none">
            School of Interactive Arts and Technology
          </p>
        </div>
        <div className="border-b-2 md:border-r-2 border-porple w-full"></div>
        <div className="border-b-2 md:border-r-2 border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope md:text-lg lg:text-2xl md:mx-4 font-medium md:leading-none">
            user experience
          </p>
          <p className="font-Manrope md:text-lg lg:text-2xl md:mx-4 md:mt-2 font-medium md:leading-none">
            ui/visual design
          </p>
          <p className="font-Manrope md:text-lg lg:text-2xl md:mx-4 md:mt-2 font-medium md:leading-none">
            interaction design
          </p>
          <p className="font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 md:mt-2 font-medium md:leading-none">
            prototyping
          </p>
        </div>
        <div className="border-b-2  border-porple w-full"></div>
        <div className="border-b-2 md:border-r-2 border-porple w-full"></div>
        <div
          className="border-b-2 md:border-r-2 border-porple w-full aspect-square flex flex-col justify-end"
          onMouseEnter={() => handleOnHover(1)}
          onMouseLeave={() => handleOutHover(1)}
        >
          <p
            className={`font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 font-medium ${
              hoveredItems[1] ? "hidden" : ""
            }`}
          >
            I like to draw and paint :)
          </p>
          <img
            alt={randArt.alt}
            src={randArt.imgpath}
            className={`z-20 w-full h-full aspect-square object-cover md:h-max ${
              hoveredItems[1] ? "" : "hidden"
            }`}
          ></img>
        </div>
        <div className="border-b-2 md:border-r-2 border-porple w-full"></div>
        <div className="border-b-2 border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope  m-5 md:m-4 font-medium">
            portfolio designed and coded by yours truly
          </p>
        </div>
      </div>
      <div className="z-50 hidden md:flex bottom-0 bg-white  px-6 w-full h-12 "></div>
    </div>
  );
}

export default About;
