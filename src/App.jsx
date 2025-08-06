import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Certifications from "./pages/Certifications";
import Blogs from "./pages/Blogs";
import PartnerWithUs from "./pages/PartnerWithUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./styles.css";
import "./styles_premium.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resources" element={<Blogs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
