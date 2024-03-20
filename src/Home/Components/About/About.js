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
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope text-sm md:text-lg lg:text-2xl m-5 md:m-4 font-medium">
            Open to work!
          </p>
        </div>
        <div className="border-b-2  border-b-porple border-r-2 border-white md:border-r-2 md:border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope text-sm md:text-lg lg:text-2xl m-5 md:m-4 font-medium">
            Based in Vancouver BC
          </p>
        </div>
        <div className="border-b-2 border-r-2 border-porple aspect-square w-full"></div>
        <div className="border-b-2 border-b-porple border-r-2 border-white w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope text-sm md:text-lg lg:text-2xl m-5 md:m-4 font-medium">
            jessica zhen li :)
          </p>
        </div>
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope hidden md:block text-sm m-5 mb-0 md:text-base md:mx-4 md:my-2 md:leading-none lg:leading-none">
            Simon Fraser University's (2019 - present):
          </p>
          <p className="md:hidden font-Manrope text-xs m-5 mb-1 ">
            SFU's (2019 - present):
          </p>
          <p className="font-Manrope mx-5 mb-2 leading-tight text-sm md:text-lg lg:text-2xl md:mx-4 font-medium md:leading-none">
            School of{" "}
            <span className="hidden md:inline">Computing Science</span>
            <span className=" md:hidden">CS</span>
          </p>
          <p className="font-Manrope text-sm md:text-lg lg:text-2xl m-5 mt-0 md:m-4 md:mt-1 font-medium leading-none">
            School of{" "}
            <span className="hidden md:inline">
              Interactive Arts and Technology
            </span>
            <span className=" md:hidden">IAT</span>
          </p>
        </div>
        <div className="border-b-2 border-b-porple border-r-2 border-white md:border-r-2 md:border-porple  w-full aspect-square "></div>
        <div className="border-b-2 border-r-2 border-porple md:border-r-2 md:border-porple w-full aspect-square flex flex-col justify-end">
          <p className="font-Manrope text-sm md:text-base m-5 md:m-4 font-medium">
            portfolio designed and coded by yours truly
          </p>
        </div>
        <div className=" border-b-2 border-porple w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Self.png"
            className=" overflow-hidden z-20  w-full h-full object-cover md:h-max "
          ></img>
        </div>
        <div className="hidden md:block border-b-2 border-r-2 border-porple w-full "></div>
        <div className="hidden md:block border-b-2 border-b-porple border-r-2 border-white md:border-r-2 md:border-porple  w-full aspect-square flex flex-col justify-end"></div>
        <div className="hidden md:block border-b-2 border-r-2 border-porple w-full "></div>
        <div className="hidden md:block border-b-2 border-porple w-full h-full aspect-square "></div>
      </div>
      <div className="z-50 hidden md:flex bottom-0 bg-white  px-6 w-full h-12 "></div>
      <div className="md:hidden h-12"></div>
    </div>
  );
}

export default About;
