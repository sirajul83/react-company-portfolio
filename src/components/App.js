import * as React from "react";
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
