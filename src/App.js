import "./App.css";
import Main from "./Main";
import Nav from "./Home/Components/Nav";
import About from "./Home/Components/About/About";
import WaysOfWater from "./Home/Components/WaysOfWater/WaysOfWater";

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
