import { useEffect, useState } from "react";
import Home from "./pages/new-home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact-us";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import "./App.css"

function App() {
  const [width, setWidth] = useState(1440);
  const maxWidth = 1440;
  const percentage = 100;

  let dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  let zoom =
    dimensions.width > 620 ? (dimensions.width * percentage) / maxWidth : 100;

  function handleResize() {
    dimensions.width = window.innerWidth;
    setWidth(window.innerWidth);
    zoom = width > 620 ? (dimensions.width * percentage) / maxWidth : 100;
    // @ts-ignore
    document.body.style.zoom = zoom + "%";
  }

  // @ts-ignore
  document.body.style.zoom = zoom + "%";

  //change dimension on page resize
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
