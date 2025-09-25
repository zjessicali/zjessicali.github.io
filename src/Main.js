import MainSidePanel from "./Home/Components/MainSidePanel";
import Projects from "./Home/Components/Projects";
function Main() {
  const height = window.innerHeight - 60;
  console.log(window.innerHeight)
console.log(height);
  return (
    <div className={`p-5 grid grid-cols-4 gap-x-10 w-full h-[100vh-60px] h-${height}`}>
      <section className="h-full">
        <MainSidePanel></MainSidePanel>
      </section>
      <section className="col-span-3 overflow-y-scroll">
        <Projects></Projects>
      </section>
    </div>
  );
}

export default Main;
