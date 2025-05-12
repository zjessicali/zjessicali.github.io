import ProjectHeaders from "./ProjectHeaders";
import Client from "./Client";
import BackToTopButton from "../Top";

import { useEffect } from "react";
import Research from "./Research";
import Recommendations from "./Recommendations";
import ProjectDetails from "./ProjectDetails";

function YVR() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      <ProjectHeaders></ProjectHeaders>
      <ProjectDetails></ProjectDetails>
      <Client></Client>
      <Research></Research>
      <Recommendations></Recommendations>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default YVR;
