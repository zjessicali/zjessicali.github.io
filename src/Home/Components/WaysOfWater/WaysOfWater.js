import SidePanel from "../SidePanel";
import { DATA } from "../data";

import Overview from "./Overview";
import Client from "./Client";
import Solution from "./Solution";
import Features from "./Features";
import Reflection from "./Reflection";
import Process from "./Process";

import { useState, useEffect } from "react";

function ToughTittiesGallery() {
  var WW = DATA.projects[3];
  var sections = [
    "Overview",
    "Client",
    "Solution",
    "Features",
    "Process",
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
          project={WW.title}
          blurb={WW.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-3 h-full overflow-y-scroll animate-fadeUp">
        <Overview></Overview>
        <Client></Client>
        <Solution></Solution>
        <Features></Features>
        <Process></Process>
        <Reflection></Reflection>
      </section>
    </div>
  );
}

export default ToughTittiesGallery;
