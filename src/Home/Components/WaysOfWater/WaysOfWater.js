import ProjectHeaders from "./ProjectHeaders";
import ProjectDetails from "./ProjectDetails";
import Content from "./Content";
import BackToTopButton from "../Top";

import { useEffect } from "react";

function WaysOfWater() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProjectHeaders></ProjectHeaders>
      <ProjectDetails></ProjectDetails>
      <Content />
      <BackToTopButton></BackToTopButton>
    </>
  );
}

export default WaysOfWater;
