import { DATA } from "./data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Content() {
  const projects = DATA.projects;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mx-6 md:mx-10 lg:mx-20 my-6 md:my-8 lg:my-16">
        {projects.map((item, i) => {
          return (
            <Link to={item.linkpath} className="">
              <div className=" relative">
                <img
                  alt={item.title}
                  src={item.imgpath}
                  className={`w-full object-cover rounded-md`}
                ></img>
                {/* <div
                    className={`inset-0 z-30 md:opacity-50  md:bg-porple absolute`}
                  ></div> */}

                <div className="">
                  {/* <h3
                    className={`font-Manrope md:text-sm lg:text-lg transition-opacity duration-300 ease-in-out `}
                  >
                    {item.tags}
                  </h3> */}
                  <h2
                    className={`font-Manrope md:text-lg lg:text-2xl my-2 md:mt-4  transition-colors duration-300 ease-linear `}
                  >
                    {item.title}
                  </h2>
                </div>
              </div>
              {/* <div className="md:hidden h-24 w-full border-b-2 border-porple bg-white text-left px-6 py-5">
                <h2 className="font-Manrope text-xl">{item.title}</h2>
                <h3 className="font-Manrope opacity-80">{item.tags}</h3>
              </div> */}
            </Link>
          );
        })}
      </div>
      <div className="hidden md:flex border-t border-grey h-14 items-center justify-center">
        <p className="font-Manrope text-grey">
          portfolio designed and coded by yours truly.
        </p>
      </div>
    </>
  );
}

export default Content;
