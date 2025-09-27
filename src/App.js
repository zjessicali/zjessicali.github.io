import "./App.css";
import Main from "./Main";
import Nav from "./Home/Components/Nav";
import About from "./Home/Components/About/About";
import YVR from "./Home/Components/YVR/YVR";
import Tinder from "./Home/Components/Tinder/Tinder";
import Sandbox from "./Home/Components/Sandbox/Sandbox";

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
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="toughtittiesgallery" element={<ToughTittiesGallery />} />
          <Route path="YVRAirport" element={<YVR />} />
          <Route path="Tinder" element={<Tinder />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

function Layout() {
  return (
    <div className="">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
