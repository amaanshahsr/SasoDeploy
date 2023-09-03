import { useState } from "react";
import { useNavigate } from "react-router-dom";
import env from "../Components/env";

function Test() {
  const [bgchange, setBgchange] = useState(false);

  const changeBg = () => {
    setBgchange((old) => !old);
  };

  const navigate = useNavigate();

  const navigateTo = (route: string) => {
    navigate(route);
  };

  const arr = [
    {
      title: "Vegan Excellence",
      body: "Our products are proudly vegan, harnessing the incredible power of plant-based ingredients to deliver unmatched cleaning performance We believe that the bounty of nature holds the key to effective and sustainable cleaning solutions.",
    },
    {
      title: "Chemical-Free Brilliance",
      body: "Say goodbye to the worry of harsh chemicals invading your living spaces. Saso products are formulated without compromise, ensuring that your home is cleaned to perfection without exposing you to harmful toxins.",
    },
    {
      title: "Plant-Powered Potency",
      body: " Nature's botanical wonders take center stage in our formulations. We carefully select and blend plant-derived ingredients that not only cleanse effectively but also infuse your home with refreshing fragrances inspired by the natural world.",
    },
    {
      title: "Non-Toxic Luxury",
      body: "Cleanliness should never come at the cost of your well-being. Saso products offer a luxurious cleaning experience that leaves your home sparkling and pristine, all without compromising your health or the environment.",
    },
  ];
  return (
    <>
      <section className="w-screen h-max lg:h-max xl:h-max relative  bg-[#3A5A40] text-white md:text-[#DAD7CD] backdrop-blur-xl p-8 sm:p-16 lg:p-24 flex  justify-center ">
        <div className="   flex flex-col justify-center gap-7 relative z-20 font-semibold font-title xl:w-[50%] ">
          <h2 className="text-[2.5rem]  sm:text-5xl md:text-7xl leading-[3rem] ">
            Welcome to Saso: Elevate Your Cleaning Experience with Nature
          </h2>
          <p className=" text-lg md:text-xl font-body font-medium">
            At Saso, we believe in the power of nature to transform your home
            into a healthier, safer, and more vibrant living space. Our passion
            for sustainability and well-being has driven us to create a line of
            exceptional household cleaning products that redefine clean. Say
            goodbye to harsh chemicals, toxins, and environmental harm – and say
            hello to a new era of cleaning that nurtures both your home and the
            planet.
          </p>
          <p className=" text-lg md:text-xl font-body font-medium">
            We're not just dedicated to elevating your home environment; we're
            also devoted to preserving the beauty of our planet. Saso products
            are packaged in eco-friendly materials, and our production processes
            are designed to minimize our carbon footprint. With every choice you
            make, you contribute to a brighter future for both your home and the
            Earth.
          </p>
          <button
            onClick={() => {
              navigateTo("/about");
            }}
            className="text-lg interactable link md:text-xl w-max mx-auto p-4 border bg-white text-[#3A5A40] shadow-lg duration-500 ease-out hover:bg-[#3A5A40] hover:text-white "
          >
            Read More
          </button>
        </div>
        {/* <img
          src="/public/backgroundnew.svg"
          className="absolute right-0 top-0 object-cover h-full w-[30%]"
        /> */}
        <img
          src={`${env}pngegg(6).webp`}
          className="absolute scale-125 z-10 hidden lg:block right-0 top-0"
        />
        <img
          src={`${env}pngegg(6).webp`}
          className="absolute scale-125 z-10 mix-blend-overlay md:mix-blend-normal opacity-70 md:opacity-100  left-0 rotate-180 top-0"
        />
      </section>
      <section className="w-screen xl:h-max relative gap-10 z-[5]  text-white md:text-[#DAD7CD]   bg-[#588157]  p-8 sm:p-16 lg:p-24 text-center lg:text-left flex flex-col lg:flex-row  items-start  ">
        <img
          src={`${env}pngegg(4).webp`}
          className="absolute top-0 mix-blend-overlay md:mix-blend-normal md:hidden right-0 z-10"
        />
        <div className="   flex flex-col gap-7 text-9xl font-semibold font-title lg:w-[50%] xl:w-[40%] ">
          <h2 className="text-[2.5rem]  sm:text-5xl md:text-7xl z-30 static  leading-[3rem] ">
            Our Commitment to You{" "}
          </h2>
          <p className=" text-lg md:text-xl z-[801] static font-body font-medium">
            At the heart of Saso is a commitment to crafting products that align
            with your values and prioritize the health of your family, pets, and
            the Earth. Our dedication to purity drives every aspect of what we
            do:
          </p>
        </div>
        <div className="text-lg text-[#3A5A40] grid lg:grid-cols-2 gap-5 md:gap-10 z-20 lg:h-full xl:w-[50%] lg:ml-auto">
          {arr.map((node) => {
            return (
              <div className="list-disc  bg-[#DAD7CD]  rounded-md  shadow-md p-5 ">
                <span className="font-bold block mb-4 ">{node?.title} </span>
                <span className="font-body ">{node?.body}</span>
              </div>
            );
          })}
        </div>
        <img
          className="absolute rotate-90  scale-[75%] xl:scale-105 lg:-left-[20%] xl:-left-[10%] -bottom-[100px] z-10"
          src={`${env}pngegg(1).webp`}
        />
      </section>
      <section
        className={` ${
          bgchange
            ? "bg-white text-[#A3B18A] duration-1000 ease-in-out"
            : "bg-[#A3B18A] text-white duration-1000"
        }  w-screen relative   p-8 sm:p-16 lg:p-24 flex justify-center items-center `}
      >
        <img
          src={`${env}pngegg(3).webp`}
          className="absolute right-0 top-0 z-10 opacity-80 mix-blend-hard-light lg:mix-blend-normal"
        />

        <div className=" flex flex-col gap-7 text-9xl font-semibold text-center font-title z-20 xl:w-[50%] ">
          <h2 className="text-[2.5rem] sm:text-5xl md:text-7xl leading-[3rem] ">
            Join the Saso Revolution
          </h2>
          <p className=" text-lg md:text-xl font-body font-medium">
            When you choose Saso, you're not just selecting cleaning products –
            you're embracing a new way of life that's rooted in harmony with
            nature. We invite you to explore our range of products, from
            all-purpose cleaners that tackle grime with ease, to gentle dish
            soaps that make mealtime cleanup a pleasure. Every product embodies
            the Saso promise: a cleaner, greener, and safer home for you and
            your loved ones.
          </p>
          <button
            onMouseEnter={changeBg}
            onMouseLeave={changeBg}
            onClick={() => {
              navigateTo("/contact");
            }}
            className="text-lg interactable link md:text-xl w-max mx-auto p-5 border bg-white text-[#A3B18A] shadow-lg duration-500 ease-out hover:bg-[#A3B18A] hover:text-white "
          >
            Get In Touch!
          </button>
        </div>
      </section>
      <section className="w-screen relative bg-[#F7FFE5]  p-8 sm:p-16 lg:p-24 text-center flex flex-col justify-center items-center ">
        <div className=" text-[rgb(62,77,33)] z-20 flex flex-col gap-7   mix-blend-multiply text-9xl font-semibold font-title xl:w-[50%]  ">
          <h2 className="text-[2.5rem]  sm:text-5xl md:text-7xl leading-[3rem] ">
            Experience the Saso Difference Today
          </h2>
          <p className=" text-lg md:text-xl font-body font-medium">
            It's time to embark on a cleaning journey that nurtures, protects,
            and shines. Discover the Saso difference for yourself and join the
            growing community of individuals who are transforming their homes
            into havens of purity and vitality. Together, we're shaping a world
            where cleanliness and conscience go hand in hand.
          </p>
          <div className="text-[2.5rem] sm:text-3xl">
            Elevate your cleaning experience with nature – welcome to Saso.
          </div>
          <button
            onClick={() => {
              navigateTo("/products");
            }}
            className="text-lg interactable link md:text-xl w-max mx-auto p-4 border shadow-lg duration-500 ease-out bg-[#3A5A40] text-white "
          >
            View Products
          </button>
        </div>
        <img className="w-screen " src={`${env}Products.webp`} />
      </section>
    </>
  );
}

export default Test;
