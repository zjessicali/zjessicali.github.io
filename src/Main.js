import MainSidePanel from "./Home/Components/MainSidePanel";
import Projects from "./Home/Components/Projects";
function Main() {
  
  return (
    <div className=" grid grid-cols-3 gap-10 w-screen">
      <section className="">
        <MainSidePanel></MainSidePanel>
      </section>
      <section className="col-span-2">
        <Projects></Projects>
      </section>
    </div>
  );
}

export default Main;
