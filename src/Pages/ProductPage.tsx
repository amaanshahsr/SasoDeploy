import { useNavigate } from "react-router-dom";
import env from "../Components/env";
import { useEffect, useState } from "react";
import { scrollToTop } from "../Components/ScrollToTop";
import Leaf from "../Components/Leaf";

function ProductPage(props: any) {
  const { product, index } = props;
  const navigate = useNavigate();
  console.log("product", product);
  const navigateTo = (route: string) => {
    navigate(route);
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const [changeUrl, setChangeUrl] = useState<boolean>(false);

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
      id: "antiBact",
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
      url: "Logos/balance.png",
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

  const changeSlide = () => {
    setChangeUrl((old) => !old);
  };

  return (
    <div className=" bg-[#38583e] h-max py-8 lg:p-0 lg:pb-5 ">
      <div
        className={`grid lg:grid-cols-2 ${
          product.title === "Washing machine hygiene cleaner"
            ? "2xl:h-auto"
            : "2xl:h-screen"
        } bg-[#38583e] h-full`}
      >
        <div
          className={`col-span-1 relative flex items-center duration-500 justify-center`}
        >
          <button
            onClick={() => changeSlide()}
            className=" absolute left-0 h-full w-1/2 z-10 backNav opacity-0"
          ></button>
          <button
            onClick={() => changeSlide()}
            className=" absolute right-0 h-full w-1/2 z-10 frontNav opacity-0"
          ></button>
          <img
            className={` drop-shadow-2xl m-auto duration-300  ${
              index % 2 === 0 ? " " : " "
            }   px-6 lg:px-0`}
            src={
              changeUrl
                ? `${env}${product.url}`
                : `${env}${product.catalogueUrl}`
            }
            alt={product.title}
          />
        </div>
        <div className="flex flex-col p-8 md:p-16 lg:p-8 2xl:p-24  items-start justify-around   ">
          <span className="font-title drop-shadow-2xl ">SASO</span>
          <div className="font-semibold font-title drop-shadow-2xl  break-words text-[2.5rem] uppercase sm:text-5xl md:text-6xl mb-5 mt-1   leading-[3rem]">
            {product?.title}
          </div>
          <div className="text-lg  font-body py-2">
            {product?.desc1}
            <br />
            {product.desc2}
          </div>

          <div
            className={`w-full bg-[#dfebe7] rounded-xl shadow-[5px_5px_0px_0px_#7e8f5f] border-2 text-black p-5  grid grid-cols-3 ${
              product.icons.length === 5
                ? `sm:grid-cols-${product.icons.length}`
                : "sm:grid-cols-5 "
            }  gap-5 place-items-center my-5 `}
          >
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
                      className={` h-8 w-8  md:w-16 md:h-16 lg:w-12 lg:h-12 xl:h-20 xl:w-20`}
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
          <button
            onClick={() => {
              navigateTo("/contact");
            }}
            className="text-lg flex justify-center gap-4 items-center [&>svg]:hover:fill-[#dfebe7]  shadow-[5px_5px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black]  mx-auto font-semibold link md:text-xl lg:w-2/4 rounded-md my-3 p-4 duration-1000 ease-out bg-[#dfebe7] hover:bg-[#1b1c17] hover:text-[#dfebe7] text-black "
          >
            Contact Sales
            <svg
              className="w-8 h-8 duration-200 flex-shrink-0 ease-in-out rotate-[45deg] fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          navigateTo("/products");
        }}
        role="button"
        className="h-24 w-3/4 lg:w-1/4 bg-[#a3b18a] my-16 flex justify-center shadow-[5px_5px_0px_0px_#7e8f5f] hover:text-[#7e8f5f] duration-500 [&>svg]:hover:fill-[#7e8f5f] hover:bg-white hover:shadow-[5px_5px_0px_0px_#a3b18a] link cursor-pointer gap-4 items-center font-title text-xl text-white mx-auto rounded-xl  mb-0"
      >
        <svg
          className="w-8 h-8 duration-200 flex-shrink-0 ease-in-out rotate-[270deg]  fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>{" "}
        View All Products
      </div>
    </div>
  );
}

export default ProductPage;
