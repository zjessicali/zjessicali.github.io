import "./App.css";
import Main from "./Main";
import Nav from "./Home/Components/Nav";
import About from "./Home/Components/About/About";
import WaysOfWater from "./Home/Components/WaysOfWater/WaysOfWater";
import Typology from "./Home/Components/Typology/Typology";
import YVR from "./Home/Components/YVR/YVR";
import SojuEvents from "./Home/Components/SojuEvents/SojuEvents";

import {
  Outlet,
  Routes,
  Route,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import ToughTittiesGallery from "./Home/Components/ToughTittiesGallery/ToughTittieGallery";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="toughtittiesgallery" element={<ToughTittiesGallery />} />
          <Route path="waysofwater" element={<WaysOfWater />} />
          <Route path="typology" element={<Typology />} />
          <Route path="YVRAirport" element={<YVR />} />
          <Route path="sojuevents" element={<SojuEvents />} />
        </Route>
      </Routes>
    </HashRouter>
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
