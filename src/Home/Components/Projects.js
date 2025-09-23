import { DATA } from "./data.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Projects() {
  const projects = DATA.projects;
  return (
    <div className="h-[calc(100vh-60px)] w-full px-5 py-5">
      <div className="w-full grid grid-cols-2 gap-10 py-5">
        {projects.map((item, i) => {
          return (
            <Link to={item.linkpath} className="h-60">
              <h1 className="font-DM">
                {item.title}&nbsp;
                <span className="opacity-60">—&nbsp;{item.tags}</span>
              </h1>
              <h2 className="opacity-60">{item.context}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

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
