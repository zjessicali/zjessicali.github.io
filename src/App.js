import "./App.css";
import Main from "./Main";
import Nav from "./Home/Components/Nav";
import About from "./About/About";
import WaysOfWater from "./About/WaysOfWater";
import Typology from "./About/Typology";

import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import ToughTittiesGallery from "./Home/Components/ToughTittiesGallery/ToughTittieGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="toughtittiesgallery" element={<ToughTittiesGallery />} />
          <Route path="waysofwater" element={<WaysOfWater />} />
          <Route path="typology" element={<Typology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
