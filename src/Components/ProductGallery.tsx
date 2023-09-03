function ProductGallery() {
  return (
    <div className="w-screen bg-[#3A5A40] relative h-max grid grid-cols-4 gap-10 place-items-center z-30 text-[white]  backdrop-blur-lg p-7 lg:p-14   font-title">
      <h1 className=" writing-mode-vertical font-bold col-span-4 row-span-1 whitespace-nowrap  text-9xl z-30 text">
        Our Products
      </h1>
      <img
        className="hover:scale-110"
        src="/Catalogue/SasoBabyDetergent.webp"
      />
      <img
        // className="absolute top-[5%] right-0"
        src="/Catalogue/SasofloorCleaner.webp"
      />
      <img
        // className="absolute top-[45%] right-0"
        src="/Catalogue/SasoHerbalDishWah.webp"
      />
      <img
        // className=" absolute z-[1]  top-[10%] left-0 "
        src="/Catalogue/SASO Brass Cleaner.webp"
      />
      <img
        // className=" absolute top-[70%]  "
        src="/Catalogue/SASO Car Bike Shampoo.webp"
      />
      <img className="" src="/Catalogue/SASO Cockroach Repellent Spray.webp" />
      <img
        // className=" absolute top-[10%] left-[70%]  "
        src="/Catalogue/SASO Glass Cleaner Spray.webp"
      />
      <img
        // className=" absolute bottom-20  right-[5%] "
        src="/Catalogue/SASO Herbal Dishwasher Machine Liquid Detergent.webp"
      />
      <img
        // className=" absolute  left-[20%] top-[40%]  "
        src="/Catalogue/SASO Herbal Kennel Wash.webp"
      />
      <img
        // className=" absolute  top-[70%]  right-[40%] "
        src="/Catalogue/SASO Shoe Deodorizer Spray.webp"
      />
      <img
        // className=" absolute left-[30%] "
        src="/Catalogue/SASO Solar Panel Cleaner.webp"
      />
      <img
        // className=" absolute  top-[43%] right-[23%] "
        src="/Catalogue/SASOWMC.webp"
      />
    </div>
  );
}

export default ProductGallery;
