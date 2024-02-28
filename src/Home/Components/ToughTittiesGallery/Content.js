import Overview from "./Overview";
import Client from "./Client";
import UserResearch from "./UserResearch";
import Problem from "./Problem";
import Solution from "./Solution";
import DesignDecisions from "./DesignDecisions";
import Impact from "./Impact";
import Reflection from "./Reflection";
import { useEffect } from "react";

function Content() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white text-porple font-Manrope">
      <Overview />
      <Client />
      <UserResearch />
      <Problem />
      <Solution />
      <DesignDecisions />
      <Impact />
      <Reflection />
    </div>
  );
}

export default Content;
