import Overview from "./Overview";

import Process from "./Process";
import DesignDecisions from "./DesignDecisions";
// import Impact from "./Impact";
import Reflection from "./Reflection";
import { useEffect } from "react";
import Framing from "./Framing";

function Content() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white text-porple font-Manrope">
      <Overview />
      <Framing />

      <DesignDecisions />

      <Reflection />
    </div>
  );
}

export default Content;
