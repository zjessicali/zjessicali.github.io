import { DATA } from "./data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Links from "./Links.js";

function GridContent() {
  const projects = DATA.projects;
  const itemsPerRow = 4;
  const webs = DATA.web;

  // HANDLE PROJECTS HOVER
  const [hoveredItems, setIsHoveredArray] = useState(
    Array(projects.length + 1 + webs.length).fill(0)
  );

  const handleOnHover = (index) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = 1;
      return newArray;
    });
  };

  const handleOutHover = (index) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = 0;
      return newArray;
    });
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // artwork stuff
  const artworks = DATA.art;
  let randArt = artworks[getRandomNumber()];

  function getRandomNumber() {
    // Generate a random number between 0 and 9
    return Math.floor(Math.random() * 10);
  }

  const [hoveredArt, setHoveredArt] = useState(0);

  const handleOnArtHover = () => {
    setHoveredArt(1);
  };

  const handleOutArtHover = () => {
    setHoveredArt(0);
  };

  // Calculate the number of blank columns needed
  const totalProjects = projects.length + 1 + webs.length;
  const blankColumns =
    // ((itemsPerRow - (projects.length % itemsPerRow)) % itemsPerRow) + 2; THIS IS OLD, DUNNO IF IT ACTUALLY WORKS
    itemsPerRow - (totalProjects % itemsPerRow) - 1;
  console.log(blankColumns);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 ">
        {/* PROJECTS */}
        {projects.map((item, i) => {
          return (
            <Link
              to={item.linkpath}
              className="md:border-r-2 border-porple"
              onMouseOver={() => handleOnHover(i)}
              onMouseOut={() => handleOutHover(i)}
            >
              <div className="border-b-2 border-porple w-full aspect-w-1 aspect-h-1 overflow-hidden relative">
                <div className="z-50 absolute md:flex flex-col justify-between h-full w-full hidden">
                  <h3
                    className={`font-Manrope md:text-sm lg:text-lg m-5 md:mx-4 transition-opacity duration-300 ease-in-out ${
                      hoveredItems[i] ? "opacity-0" : ""
                    }`}
                  >
                    {item.tags}
                  </h3>
                  <h2
                    className={`font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 font-medium transition-colors duration-300 ease-linear ${
                      hoveredItems[i] ? "text-pinkie" : ""
                    }`}
                  >
                    {item.title}
                  </h2>
                </div>

                <div
                  className={` transition-all duration-300 ease-out ${
                    hoveredItems[i] ? "opacity-100 scale-105" : "md:opacity-0"
                  }`}
                >
                  <img
                    alt={item.title}
                    src={item.imgpath}
                    className={`z-20 w-full object-cover `}
                  ></img>
                  <div
                    className={`inset-0 z-30 md:opacity-50  md:bg-porple absolute`}
                  ></div>
                </div>
              </div>
              <div className="md:hidden h-24 w-full border-b-2 border-porple bg-white text-left px-6 py-5">
                <h2 className="font-Manrope text-xl">{item.title}</h2>
                <h3 className="font-Manrope opacity-80">{item.tags}</h3>
              </div>
            </Link>
          );
        })}

        {/* ARTWORK */}
        <Link
          to="/art"
          className="border-r-2 border-white"
          onMouseEnter={() => handleOnArtHover()}
          onMouseLeave={() => handleOutArtHover()}
        >
          <div className="border-b-2 border-porple w-full aspect-w-1 aspect-h-1 overflow-hidden relative ">
            <div className="z-50 absolute md:flex flex-col justify-between h-full w-full hidden">
              <h3
                className={`font-Manrope md:text-sm lg:text-lg m-5 md:mx-4 transition-opacity duration-300 ease-in-out ${
                  hoveredArt ? "opacity-0" : ""
                }`}
              >
                Miscellaneous
              </h3>
              <h2
                className={`font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 font-medium transition-colors duration-300 ease-linear ${
                  hoveredArt ? "text-pinkie" : ""
                }`}
              >
                Art
              </h2>
            </div>

            <div
              className={` transition-all duration-300 ease-out overflow-hidden ${
                hoveredArt ? "opacity-100 scale-105" : "md:opacity-0"
              }`}
            >
              <img
                alt={randArt.alt}
                src={randArt.imgpath}
                className={`hidden md:block z-20 w-full  h-full aspect-square object-cover md:h-max `}
              ></img>
              <img
                alt="Self portrait."
                src="/ProjectImages/Art/me.jpg"
                className={`md:hidden z-20 w-full h-full aspect-square object-cover md:h-max `}
              ></img>
              <div
                className={`inset-0 z-30 md:opacity-50  md:bg-porple absolute`}
              ></div>
            </div>
          </div>
          <div className="md:hidden h-24 w-full border-b-2 border-porple bg-white text-left px-6 py-5">
            <h2 className="font-Manrope text-xl">Art</h2>
            <h3 className="font-Manrope opacity-80">Miscellaneous</h3>
          </div>
        </Link>

        {/* WEB */}
        {webs.map((item, i) => {
          return (
            <a
              href={item.linkpath}
              className="md:border-r-2 border-porple"
              onMouseOver={() => handleOnHover(i + projects.length)}
              onMouseOut={() => handleOutHover(i + projects.length)}
            >
              <div className="border-b-2 border-porple w-full aspect-w-1 aspect-h-1 overflow-hidden relative">
                <div className="z-50 absolute md:flex flex-col justify-between h-full w-full hidden">
                  <h3
                    className={`font-Manrope md:text-sm lg:text-lg m-5 md:mx-4 transition-opacity duration-300 ease-in-out ${
                      hoveredItems[i + projects.length] ? "opacity-0" : ""
                    }`}
                  >
                    {item.tags}
                  </h3>
                  <h2
                    className={`font-Manrope md:text-lg lg:text-2xl m-5 md:m-4 font-medium transition-colors duration-300 ease-linear ${
                      hoveredItems[i + projects.length] ? "text-pinkie" : ""
                    }`}
                  >
                    {item.title}
                  </h2>
                </div>

                <div
                  className={` transition-all duration-300 ease-out ${
                    hoveredItems[i + projects.length]
                      ? "opacity-100 scale-105"
                      : "md:opacity-0"
                  }`}
                >
                  <img
                    alt={item.title}
                    src={item.imgpath}
                    className={`z-20 w-full object-cover `}
                  ></img>
                  <div
                    className={`inset-0 z-30 md:opacity-50  md:bg-porple absolute`}
                  ></div>
                </div>
              </div>
              <div className="md:hidden h-24 w-full border-b-2 border-porple bg-white text-left px-6 py-5">
                <h2 className="font-Manrope text-xl">{item.title}</h2>
                <h3 className="font-Manrope opacity-80">{item.tags}</h3>
              </div>
            </a>
          );
        })}

        {/* Add blank cells to fill the row */}
        {Array.from({ length: blankColumns }).map((_, index) => (
          <div
            key={`blank-${index}`}
            className="col-span-1 border-b-2 md:border-r-2 border-porple w-full hidden md:block"
          ></div>
        ))}
        <div className="col-span-1 border-b-2  border-porple w-full aspect-square hidden md:block md:p-4">
          <Links></Links>
        </div>
      </div>
      <div className="z-50 hidden md:flex bottom-0 bg-white  px-6 w-full h-12 "></div>
    </>
  );
}

export default GridContent;

// {projects.map((item, i) => (
//   <div>
//     <div className="border-b-2 border-porple">
//       <img alt="lala" src={item.imgpath}></img>
//     </div>
//     <div className="border-b-2 border-porple text-left px-6 py-5">
//       <h2 className="font-Manrope text-xl">{item.title}</h2>
//       <h3 className="font-Manrope opacity-80">{item.tags}</h3>
//     </div>
//   </div>
// ))}
