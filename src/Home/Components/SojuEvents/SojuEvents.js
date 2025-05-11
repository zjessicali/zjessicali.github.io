import ProjectHeaders from "./ProjectHeaders";
import Client from "./Client";
import BackToTopButton from "../Top";

import { useEffect } from "react";
import Research from "./Research";
import Recommendations from "./Recommendations";

function YVR() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProjectHeaders></ProjectHeaders>
      <Client></Client>
      <Research></Research>
      <Recommendations></Recommendations>
      <BackToTopButton></BackToTopButton>
    </>
  );
}

export default YVR;
