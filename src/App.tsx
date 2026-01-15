import { useEffect, useState } from "react";
import Home from "./pages/new-home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import NewAbout from "./pages/new-about";
import Contact from "./pages/contact-us";
import NewContact from "./pages/new-contact";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import "./App.css"

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Initial call to set dimensions correctly
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxWidth = 1440;
    const percentage = 100;
    const zoom = width > 620 ? (width * percentage) / maxWidth : 100;
    // @ts-ignore
    document.body.style.zoom = zoom + "%";
  }, [width]);

  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<NewAbout />} />
        <Route path="/about-old" element={<About />} />
        <Route path="/contact-us" element={<NewContact />} />
        <Route path="/contact-us-old" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
