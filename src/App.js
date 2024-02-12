import './App.css';

import { Route, Routes, HashRouter } from "react-router-dom";

import Navbar from './components/navigation/navbar';

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <HashRouter>
      <div className="main">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter >
  );
}

export default App;
