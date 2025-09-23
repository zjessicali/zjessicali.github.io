import SidePanel from "../SidePanel";
import { DATA } from "../data";

import Overview from "./Overview";

function ToughTittiesGallery() {
  var TTG = DATA.projects[2];
  var sections = [
    "Overview",
    "Client",
    "Problem",
    "Solution",
    "Reflection",
    "Impact",
  ];
  // useEffect(() => {
  //   // Scroll to the top of the page when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className=" grid grid-cols-3 gap-10 w-screen">
      <section className="">
        <SidePanel
          project={TTG.title}
          blurb={TTG.blurb}
          sections={sections}
        ></SidePanel>
      </section>
      <section className="col-span-2 px-5 py-5 h-[calc(100vh-80px)] overflow-y-scroll">
        <Overview></Overview>
      </section>
    </div>
  );
}

export default ToughTittiesGallery;
