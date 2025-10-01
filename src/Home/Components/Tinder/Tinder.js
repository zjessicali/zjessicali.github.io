import SidePanel from "../SidePanel";
import { DATA } from "../data";

import Overview from "./Overview";
import Problem from "./Problem";
import Solution from "./Solution";

import { useState, useEffect } from "react";

function Tinder() {
  var TTG = DATA.projects[2];
  var sections = ["Overview", "Problem", "Solution"];

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
          project={TTG.title}
          blurb={TTG.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-3 h-full overflow-y-scroll animate-fadeUp">
        <Overview></Overview>
        <Problem></Problem>
        <Solution></Solution>
      </section>
    </div>
  );
}

export default Tinder;
