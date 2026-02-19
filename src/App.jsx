import { useState } from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}
import AreasofFocus from "./pages/AreasofFocus";
import About from "./pages/about";
import Contact from "./pages/ContactUs";
import Plans from "./pages/plans";
import Process from "./pages/process";
import Systems from "./pages/Systems";

export default function App() {
  const [alreadyShown, setAlreadyShown] = useState(() =>
    sessionStorage.getItem("preloaderShown") === "true"
  );

  const markPreloaderShown = () => {
    sessionStorage.setItem("preloaderShown", "true");
    setAlreadyShown(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Preloader alreadyShown={alreadyShown} setAlreadyShown={markPreloaderShown} />
      <Header alreadyShown={alreadyShown} />
      <Routes>
        <Route path="/" element={<Home alreadyShown={alreadyShown} />} />
        <Route path="/areas" element={<AreasofFocus />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/process" element={<Process />} />
        <Route path="/systems" element={<Systems />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
