import { DATA } from "./data.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Projects() {
  const projects = DATA.projects;

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      className="w-full relative"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="w-full grid grid-cols-2 gap-10 pb-5 z-40 font-DM">
        {projects.map((item, i) => {
          return (
            <Link
              to={item.linkpath}
              className="h-40 md:h-60 lg:h-80"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <h1 className="font-DM pb-1">
                {item.title}&nbsp;
                <span className="opacity-60">—&nbsp;{item.tags}</span>
              </h1>
              <h2 className="opacity-60 pb-4">{item.context}</h2>
              <p className="w-2/3">{item.blurb}</p>
            </Link>
          );
        })}
      </div>
      {hoveredItem && (
        <img
          src={hoveredItem.imgpath}
          alt={hoveredItem.title}
          className="w-[30vw] h-auto fixed pointer-events-none rounded z-0"
          style={{
            top: pos.y + 36, // offset from cursor
            left: pos.x + 16,
          }}
        />
      )}
    </div>
  );
}

export default Projects;
