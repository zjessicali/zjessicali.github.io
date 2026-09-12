import SidePanel from "../SidePanel";
import { DATA } from "../data";

import Overview from "./Overview";
import Context from "./Context";
import Problem from "./Problem";
import Solution from "./Solution";
import Reflection from "./Reflection";
import Impact from "./Impact";

import { useState, useEffect } from "react";

function Kaya() {
  var kaya = DATA.projects[4];
  var sections = [
    "Overview",
    "Context",
    "Problem",
    "Solution",
    "Impact",
    "Reflection",
  ];

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
          project={kaya.title}
          blurb={kaya.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-3 h-full overflow-y-scroll animate-fadeUp">
        <Overview></Overview>
        <Context></Context>
        <Problem></Problem>
        <Solution></Solution>
        <Impact></Impact>
        <Reflection></Reflection>
      </section>
    </div>
  );
}

export default Kaya;
