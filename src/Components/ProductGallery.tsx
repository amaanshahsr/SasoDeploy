import env from "./env";

function ProductGallery() {
  const imageArray = [
    "SasoBabyDetergent.webp",
    "SasofloorCleaner.webp",
    "SasoHerbalDishWah.webp",
    "SASO Brass Cleaner.webp",
    "SASO Car Bike Shampoo.webp",
    "SASO Cockroach Repellent Spray.webp",
    "SASO Glass Cleaner Spray.webp",
    "SASO Herbal Dishwasher Machine Liquid Detergent.webp",
    "SASO Herbal Kennel Wash.webp",
    "SASO Shoe Deodorizer Spray.webp",
    "SASO Solar Panel Cleaner.webp",
    "SASOWMC.webp",
  ];
  return (
    <div className="w-screen bg-[#3A5A40] relative h-max grid md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center z-30 text-[white]  backdrop-blur-lg p-7 lg:p-14   font-title">
      <h1 className=" writing-mode-vertical font-bold md:col-span-2 lg:col-span-4 row-span-1 whitespace-nowrap sm:text-5xl md:text-7xl  lg:text-9xl z-30 text">
        Our Products
      </h1>
      {imageArray.map((node) => {
        return (
          <img className="hover:scale-110" src={`${env}Catalogue/${node}`} />
        );
      })}
    </div>
  );
}

export default ProductGallery;
