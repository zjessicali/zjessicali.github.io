import MainSidePanel from "./Home/Components/MainSidePanel";
import Projects from "./Home/Components/Projects";
function Main() {
  const height = window.innerHeight - 60;
  console.log(window.innerHeight)
console.log(height);
  return (
    <div className={`p-5 grid grid-cols-4 gap-x-10 w-full `} style={{ height: `${height}px` }}>
      <section className="">
        <MainSidePanel></MainSidePanel>
      </section>
      <section className="col-span-3 h-auto overflow-y-scroll">
        <Projects></Projects>
      </section>
    </div>
  );
}

export default Main;
