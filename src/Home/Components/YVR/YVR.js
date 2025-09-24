import SidePanel from "../SidePanel";
import { DATA } from "../data";

import Overview from "./Overview";
import Projects from "./Projects";

function YVR() {
  var YVR = DATA.projects[0];
  var sections = ["Overview", "Projects"];
  // useEffect(() => {
  //   // Scroll to the top of the page when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className=" grid grid-cols-3 gap-10 w-screen">
      <section className="">
        <SidePanel
          project={YVR.title}
          blurb={YVR.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-2 px-5 py-5 h-[calc(100vh-80px)] overflow-y-scroll">
        <Overview></Overview>
        <Projects></Projects>
      </section>
    </div>
  );
}

export default YVR;
