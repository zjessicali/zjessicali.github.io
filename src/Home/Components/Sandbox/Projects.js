import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Projects() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  const projs = {
    eun: {
      imgpath:
        "https://res.cloudinary.com/de9qkjreb/image/upload/v1758932928/Screenshot_2025-09-26_172814_sdczjm.png",
    },
    touchpoint: {
      imgpath:
        "https://res.cloudinary.com/de9qkjreb/image/upload/v1758933134/Screenshot_2025-09-26_173204_crbahv.png",
    },
  };

  return (
    <div
      className="w-full relative"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="w-full grid grid-cols-2 gap-10 pb-5 z-40 font-DM">
        <Link
          to="https://eunoiadesign.ca/"
          className="h-40 md:h-60 lg:h-80"
          onMouseEnter={() => setHoveredItem(projs.eun)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <h1 className="font-DM pb-1">
            Eunoia UX Design Jam 2024 Website&nbsp;
            <span className="opacity-60">—&nbsp;Web Development</span>
          </h1>
          <h2 className="opacity-60 pb-4">SFU Design Jam Organization Team</h2>
          <p className="w-2/3">
            Worked in a 4-member team to convert design concepts into
            interactive websites, through React, Tailwind, and Typescript.{" "}
          </p>
        </Link>

        <Link
          to="https://www.sfu.ca/idc/2023/"
          className="h-40 md:h-60 lg:h-80"
          onMouseEnter={() => setHoveredItem(projs.touchpoint)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <h1 className="font-DM pb-1">
            Touchpoint 2023 Website&nbsp;
            <span className="opacity-60">—&nbsp;Web Development</span>
          </h1>
          <h2 className="opacity-60 pb-4">SFU Design Conference</h2>
          <p className="w-2/3">
            Worked with the design team to transform their design concepts to
            functional website.
          </p>
        </Link>
      </div>
      {hoveredItem && (
        <img
          src={hoveredItem.imgpath}
          alt="Sandbox project"
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
