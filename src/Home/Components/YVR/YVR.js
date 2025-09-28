import SidePanel from "../SidePanel";
import { DATA } from "../data";
import { useState, useEffect } from "react";

import Overview from "./Overview";
import Projects from "./Projects";

function YVR() {
  var YVR = DATA.projects[0];
  var sections = ["Overview", "Projects"];

  const [height, setHeight] = useState(window.innerHeight - 60);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - 60);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`p-5 grid grid-cols-4 gap-x-10 w-full `}
      style={{ height: `${height}px` }}
    >
      <section className="">
        <SidePanel
          project={YVR.title}
          blurb={YVR.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-3 overflow-y-scroll animate-fadeUp">
        <Overview></Overview>
        <Projects></Projects>
      </section>
    </div>
  );
}

export default YVR;
