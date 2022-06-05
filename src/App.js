import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/services" element={<Services />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
    </div>
  );
}

export default App;
