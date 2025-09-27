import MainSidePanel from "../MainSidePanel";
import Projects from "./Projects";

import { useState, useEffect } from "react";

function Sandbox() {
  const [height, setHeight] = useState(window.innerHeight - 60);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - 60);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`p-5 grid grid-cols-4 gap-x-10 w-full `}
      style={{ height: `${height}px` }}
    >
      <section className="">
        <MainSidePanel></MainSidePanel>
      </section>
      <section className="col-span-3 h-auto overflow-y-auto">
        <Projects></Projects>
      </section>
    </div>
  );
}

export default Sandbox;
