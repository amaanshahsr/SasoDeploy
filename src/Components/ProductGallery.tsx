import { useEffect } from "react";
import { ProductDetails } from "./ProductDetails";
import { scrollToTop } from "./ScrollToTop";
import env from "./env";
import { useNavigate } from "react-router-dom";

function ProductGallery() {
  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();

  const navigateTo = (title: string) => {
    navigate(`/products/${title.toLowerCase().split(" ").join("-")}`);
  };

  return (
    <div className="w-screen relative bg-[#a3b18a] p-8 sm:p-16 lg:p-24 font-title">
      <img
        className="absolute rotate-90 top-[10%]  scale-[125%] xl:scale-105 -left-[30%] lg:-left-[20%] xl:-left-[10%] lg:-bottom-[100px] z-[0]"
        src="https://sasowmc.com/pngegg(1).webp"
      ></img>
      <img
        className="absolute  top-[40%]  scale-[125%] xl:scale-105 -right-[30%] lg:-right-[20%] xl:-right-[10%] -bottom-[100px] z-[0]"
        src="https://sasowmc.com/pngegg(1).webp"
      ></img>
      <img
        className="absolute  left-0  top-[75%]  xl:scale-125  z-[0]"
        src={`${env}neemLeaf.png`}
      ></img>
      {/* <img
        className="fixed top-0   bottom-[2.7%]  xl:scale-125  z-0"
        src="/public/palm-leaf-transparent-background-17.png"
      ></img> */}

      {/* <img
        className="absolute left-[50%] -translate-x-[50%]  top-[40%]  xl:scale-100  z-0"
        src="/public/pngegg(2).webp"
      ></img> */}
      {/* <div className="flex justify-start font-bold drop-shadow-md h-72 bg-leaves w-full xl:text-9xl  text-[#0D0F04] text-[2.5rem]  sm:text-5xl leading-[3rem] font-title  border-b  ">
        Our Catalogue
      </div> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center  mx-2 xl:w-3/4 gap-7 sm:mx-auto ">
        <div className="col-span-full my-10 text-4xl md:text-6xl lg:text-8xl">
          Our Catalogue
        </div>

        {ProductDetails?.map((node, index: number) => {
          return (
            <div
              className={`${
                index === ProductDetails.length - 1 ? "" : ""
              } flex flex-col  w-full h-full  bg-[#a3b18a] rounded-md z-[1] border-[#0D0F04] border-2 relative  items-start`}
            >
              <img
                className="scale-[60%] h-[320px] hover:scale-[75%]  duration-500 mx-auto "
                src={`${env}${node?.catalogueUrl}`}
                alt={node?.title}
              />

              <div className="  w-full interactable link flex flex-col bg-[#7e8f60] items-center rounded-md border-t-[#0D0F04] border-t-2 h-full">
                <span className="p-3  text-center  rounded-t-md font-semibold border-b-[#0D0F04] border-b-2 w-full">
                  SASO
                </span>
                <div className="text-[#0D0F04] uppercase italic text-center p-5 flex flex-col w-full h-full items-center  ">
                  {node?.title}
                </div>
                <button
                  onClick={() => navigateTo(node?.title)}
                  className="after:content-['']  [&>span]:text-black  [&>span]:hover:text-white  after:absolute after:top-0 after:left-0 after:bg-[#0D0F04] after:z-[5] after:rounded-l-full after:text-white after:rounded-r-full after:h-full after:w-0 hover:after:w-full after:duration-300 bg-white interactable  link h-max  text-[#0D0F04] relative mb-5 py-1 px-3 rounded-l-full w-2/4 rounded-r-full "
                >
                  <span className="  link relative z-10">View More</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGallery;
