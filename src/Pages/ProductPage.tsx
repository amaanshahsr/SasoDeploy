import env from "../Components/env";

function ProductPage(props: any) {
  const { product, index } = props;

  const certificationArray = [
    {
      url: "Logos/eco-friendly.png",
      Title: "Eco-friendly",
      id: "eco",
    },
    {
      url: "Logos/herbal.png",
      Title: "Herbal Ingredients",
      id: "herb",
    },
    {
      url: "Logos/safe-for-home.png",
      Title: "Safe for Home",
      id: "home",
    },
    {
      url: "Logos/vegan.png",
      Title: "Vegan",
      id: "vegan",
    },
    {
      url: "Logos/non-toxic.png",
      Title: "Non-toxic",
      id: "toxic",
    },
    {
      url: "Logos/chopped-hands.png",
      Title: "No Chopped Hands",
      id: "nochop",
    },
    {
      url: "Logos/odor.png",
      Title: "Removes Odor",
      id: "odor",
    },
    {
      url: "Logos/perfume.png",
      Title: "Natural Fragrance",
      id: "fragrance",
    },
    {
      url: "Logos/recycled.png",
      Title: "Recycled",
      id: "recycle",
    },
    {
      url: "Logos/safe-for-pets.png",
      Title: "Safe for Pets",
      id: "pets",
    },
    {
      url: "Logos/zero-chemicals.png",
      Title: "Chemical-Free",
      id: "zeroChem",
    },
    {
      url: "Logos/zero-synthetic.png",
      Title: "Zero Synthetics",
      id: "zeroSynth",
    },
    {
      url: "Logos/safe-for-children.png",
      Title: "Safe for Baby Skin",
      id: "children",
    },
    {
      url: "Logos/anti-bacterial.png",
      Title: "Anti Bacterial",
      id: "antibact",
    },
    {
      url: "Logos/descales.png",
      Title: "Descales",
      id: "descales",
    },
    {
      url: "Logos/watt-hike.png",
      Title: "Watt Hike",
      id: "watthike",
    },
    {
      url: "Logos/certified.png",
      Title: "Lab Certified",
      id: "certified",
    },
    {
      url: "Logos/balanced.png",
      Title: "pH Balanced",
      id: "balanced",
    },
    {
      url: "Logos/scratch.png",
      Title: "No Scratch Formula",
      id: "scratch",
    },
    {
      url: "Logos/bio-degradable.png",
      Title: "Bio Degradable",
      id: "degrade",
    },
    {
      url: "Logos/alcohol-free.png",
      Title: "Alcohol Free",
      id: "alcohol",
    },
  ];

  const marqueeText = ["Non-Toxic", " Plant Based", "Vegan", "Chemical Free"];

  return (
    <>
      <div className="w-full h-max  bg-[#F8F0E5] py-6 lg:py-0  text-[#333333] grid lg:grid-cols-2  sm:px-6 xl:px-0 2xl:px-0  ">
        <img
          className={`  w-auto object-contain ${
            index % 2 === 0 ? " " : " lg:order-last"
          }  h-full px-6 lg:px-0`}
          src={`${env}${product.url}`}
        />
        <div className="flex flex-col p-8  xl:justify-center ">
          <span className="font-title ">SASO</span>
          <div className="font-semibold font-title break-words text-[2.5rem] uppercase sm:text-5xl md:text-6xl mb-5 mt-1  leading-[3rem]">
            {product?.title}
          </div>
          <div className="text-lg  font-body py-2">
            {product?.desc1}
            <br />
            {product.desc2}
          </div>
          <hr className="border-[#333333] my-5 " />
          <div className="w-full  grid grid-cols-3 sm:grid-cols-5 gap-5 place-items-center my-5 ">
            {certificationArray
              .filter((node: any) => {
                return product?.icons?.includes(node.id);
              })
              .sort()
              .map((node) => {
                return (
                  <div className=" flex flex-col text-center justify-center items-center">
                    <img
                      src={`${env}${node?.url}`}
                      className={` h-8 w-8 md:h-16 md:w-16 xl:h-20 xl:w-20`}
                    />
                    <span className="font-bold font-title my-2  ">
                      {product.title === "Shoe Deodorizer Spray" &&
                      node?.Title === "Natural Fragrance"
                        ? "Long Lasting Fragrance"
                        : product.title === "Car & Bike shampoo" &&
                          node?.Title === "No Chopped Hands"
                        ? " Soft on Hands"
                        : node?.Title}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="bg-[#F8F0E5] border-t border-b border-[#333333]">
        <div className=" font-semibold relative uppercase   marquee text-[#333333]  border-[#333333] font-title sm:text-5xl md:text-6xl flex items-center">
          {marqueeText.map((node) => {
            return (
              <>
                <span className="p-5 border-l  border-r border-[#333333]">
                  {node}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
