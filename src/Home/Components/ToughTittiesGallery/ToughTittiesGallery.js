import SidePanel from "../SidePanel";
import { DATA } from "../data";

import Overview from "./Overview";
import Client from "./Client";
import Problem from "./Problem";
import Solution from "./Solution";
import Reflection from "./Reflection";
import Impact from "./Impact";

import { useState, useEffect } from "react";

function ToughTittiesGallery() {
  var TTG = DATA.projects[1];
  var sections = [
    "Overview",
    "Client",
    "Problem",
    "Solution",
    "Reflection",
    "Impact",
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
          project={TTG.title}
          blurb={TTG.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-3 h-full overflow-y-scroll animate-fadeUp">
        <Overview></Overview>
        <Client></Client>
        <Problem></Problem>
        <Solution></Solution>
        <Reflection></Reflection>
        <Impact></Impact>
      </section>
    </div>
  );
}

export default ToughTittiesGallery;
