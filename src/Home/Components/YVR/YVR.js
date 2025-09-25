import SidePanel from "../SidePanel";
import { DATA } from "../data";

import Overview from "./Overview";
import Projects from "./Projects";


function YVR() {
  var YVR = DATA.projects[0];
  var sections = ["Overview", "Projects"];

  return (
    <div className=" grid grid-cols-4 gap-10 w-screen">
      <section className="">
        <SidePanel
          project={YVR.title}
          blurb={YVR.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-3 h-[calc(100vh-80px)] overflow-y-scroll">
        <Overview></Overview>
        <Projects></Projects>
      </section>
    </div>
  );
}

export default YVR;
