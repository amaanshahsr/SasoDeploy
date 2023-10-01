import "./App.css";
import Cursor from "./Components/cursor";
import NavBar from "./Components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import ProductGallery from "./Components/ProductGallery";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
import { ProductDetails } from "./Components/ProductDetails";
import { scrollToTop } from "./Components/ScrollToTop";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Cursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<ProductGallery />}></Route>
        <Route
          path="/products/:key"
          element={
            <ProductPage
              product={
                ProductDetails.filter((node: any) => {
                  return (
                    node?.title.toLowerCase().split(" ").join("-") ===
                    location?.pathname.split("/")[2]
                  );
                })[0]
              }
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
