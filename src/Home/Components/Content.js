import { DATA } from "./data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Content() {
  const projects = DATA.projects;
  const webs = DATA.web;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-6 md:mx-10 lg:mx-20 my-6 md:my-8 lg:my-16">
        {projects.map((item, i) => {
          return (
            <Link to={item.linkpath} className="group">
              <div className=" overflow-hidden rounded-md">
                <img
                  alt={item.title}
                  src={item.imgpath}
                  className={`w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 transform-gpu will-change-transform origin-center`}
                ></img>
              </div>
              <div className="">
                <h2
                  className={`font-Manrope md:text-lg lg:text-2xl mt-2 md:my-1 md:mt-3  transition-colors duration-300 ease-linear `}
                >
                  {item.title}
                </h2>
                <h3 className="font-Manrope text-xs text-grey">{item.tags}</h3>
              </div>
            </Link>
          );
        })}
        {webs.map((item, i) => {
          return (
            <a href={item.linkpath} className="group">
              <div className=" overflow-hidden rounded-md">
                <img
                  alt={item.title}
                  src={item.imgpath}
                  className={`w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 transform-gpu will-change-transform origin-center`}
                ></img>
              </div>

              <div className="">
                <h2
                  className={`font-Manrope md:text-lg lg:text-2xl mt-2 md:my-1 md:mt-3  transition-colors duration-300 ease-linear `}
                >
                  {item.title}
                </h2>
                <h3 className="font-Manrope text-xs text-grey">{item.tags}</h3>
              </div>
            </a>
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
