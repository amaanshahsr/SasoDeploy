import { useEffect } from "react";
import ProductPage from "../Pages/ProductPage";
import { ProductDetails } from "./ProductDetails";
import { scrollToTop } from "./ScrollToTop";

function ProductGallery() {
  useEffect(() => {
    scrollToTop();
  }, []);
  // const imageArray = [
  //   "SasoBabyDetergent.webp",
  //   "SasofloorCleaner.webp",
  //   "SasoHerbalDishWah.webp",
  //   "SASO Brass Cleaner.webp",
  //   "SASO Car Bike Shampoo.webp",
  //   "SASO Cockroach Repellent Spray.webp",
  //   "SASO Glass Cleaner Spray.webp",
  //   "SASO Herbal Dishwasher Machine Liquid Detergent.webp",
  //   "SASO Herbal Kennel Wash.webp",
  //   "SASO Shoe Deodorizer Spray.webp",
  //   "SASO Solar Panel Cleaner.webp",
  //   "SASOWMC.webp",
  // ];
  return (
    <div className="w-screen   font-title">
      <div className="bg-[#F8F0E5] flex justify-center border-t border-b border-[#333333]  p-8 sm:p-16 text-[#333333] text-[2.5rem]  sm:text-5xl md:text-7xl leading-[3rem] font-bold ">
        Our Products
      </div>
      {ProductDetails?.map((node: any, index: number) => {
        return <ProductPage product={node} index={index} />;
      })}
    </div>
  );
}

export default ProductGallery;
