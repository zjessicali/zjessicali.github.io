import Giving from "./Giving";
import Swift from "./Swift";
import Twin from "./Twin";
import Fair from "./Fair";

function Projects() {
  return (
    <div className="w-full mb-16 font-DM">
      <h1 className="font-DM text-pinkie uppercase mb-6">Projects</h1>
      <Giving></Giving>
      <Swift></Swift>
      <Twin></Twin>
      <Fair></Fair>
    </div>
  );
}
export default Projects;
