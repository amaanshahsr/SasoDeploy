import "./App.css";
import Cursor from "./Components/cursor";
import NavBar from "./Components/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductGallery from "./Components/ProductGallery";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Cursor />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<ProductGallery />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
