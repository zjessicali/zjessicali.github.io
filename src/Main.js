import Header from "./Home/Components/Header";
import GridContent from "./Home/Components/GridContent";
import Links from "./Home/Components/Links";
import Content from "./Home/Components/Content";

function Main() {
  return (
    <div className="bg-white">
      <Header></Header>
      <Content></Content>
      <div className="md:hidden">
        <Links></Links>
      </div>
    </div>
  );
}

export default Main;
