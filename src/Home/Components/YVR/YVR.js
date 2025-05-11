import ProjectHeaders from "./ProjectHeaders";
import Overview from "./Overview";
import Swift from "./Swift";
import Giving from "./Giving";
import Socks from "./Socks";
import Fair from "./Fair";
import Twin from "./Twin";
import BackToTopButton from "../Top";

import { useEffect } from "react";

function YVR() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      <ProjectHeaders></ProjectHeaders>
      <Overview></Overview>
      <Swift></Swift>
      <Giving></Giving>
      <Socks></Socks>
      <Fair></Fair>
      <Twin></Twin>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default YVR;
