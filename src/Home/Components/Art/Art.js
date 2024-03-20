import ProjectHeaders from "./ProjectHeaders";
// import ProjectDetails from "./ProjectDetails";
// import Content from "./Content";
import BackToTopButton from "../Top";
import Content from "./Content";

import { useEffect } from "react";

function Art() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProjectHeaders></ProjectHeaders>

      <Content />

      <BackToTopButton></BackToTopButton>
    </>
  );
}

export default Art;
