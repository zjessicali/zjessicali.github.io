import Header from "./Home/Components/Header";
import GridContent from "./Home/Components/GridContent";
import Links from "./Home/Components/Links";

function Main() {
  return (
    <div className="bg-white">
      <Header></Header>
      <GridContent></GridContent>
      <div className="md:hidden">
        <Links></Links>
      </div>
    </div>
  );
}

export default Main;
