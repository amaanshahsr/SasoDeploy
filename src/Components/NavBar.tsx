import { useState } from "react";
import { useNavigate } from "react-router-dom";
import env from "./env";

function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);
  const showNav = () => {
    setToggleNav((toggleNav) => !toggleNav);
  };
  const navigate = useNavigate();

  const navigateTo = (route: string) => {
    setToggleNav((toggleNav) => !toggleNav);

    navigate(route);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "Products", path: "/products" },
  ];
  // bg-[#A3B18A]
  return (
    <>
      <div
        id="background"
        className={` h-screen backdrop-blur-sm  bg-white  z-[9998]  font-title overflow-x-hidden  fixed  top-0 right-0 duration-500 ease-in-out flex justify-start items-center  ${
          toggleNav
            ? "w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-7"
            : "w-0 p-0"
        }`}
      >
        {/* <img
          className="w-[500px] absolute opacity-10 left-[5%] bottom-7 "
          src={`${env}newLogo.png`}
        /> */}

        <ul className="flex flex-col items-start  lg:items-start gap-8 whitespace-nowrap  ">
          {navItems?.map((node: any) => (
            <li
              onClick={() => navigateTo(node?.path)}
              className={`border-b cursor-pointer  interactable link border-[#302f16]  w-max navList text-[#302f16] hover:text-[#6D4930] hover:scale-[120%] duration-300 relative`}
            >
              {node?.title}
            </li>
          ))}
        </ul>

        {/* <div className="flex text-7xl lg:text-9xl  justify-center lg:justify-between relative  md:h-[calc(100vh-14rem)] md:w-[calc(100vw-14rem)]  ">
          <ul className="flex flex-col justify-center items-center lg:items-start gap-8 whitespace-nowrap w-[50%]  ">
            {navItems?.map((node: any) => (
              <li
                onClick={() => navigateTo(node?.path)}
                className={`border-b cursor-pointer interactable link border-[#302f16]  w-max navList text-[#302f16] hover:text-[#6D4930] hover:scale-[105%] duration-300 relative`}
              >
                {node?.title}
              </li>
            ))}
            <img
              className="w-24 h-24 lg:hidden  shrink-0 "
              src={`${env}newLogo.png`}
            />
            <span className="text-xs font-body lg:hidden ">
              an ISO 9001-2015 Certified Company
            </span>
          </ul>
          <div className="absolute bottom-0 right-0  hidden lg:flex flex-col items-center">
            <img className="w-32 h-32 " src={`${env}newLogo.png`} />
            <span className="text-xl font-bold font-body mt-3">
              An ISO 9001-2015 Certified Company
            </span>
          </div>
        </div> */}
        <div className="text-black  my-5  absolute bottom-0 left-[50%] -translate-x-[50%] whitespace-nowrap ">
          © 2023 Saso. All Rights Reserved.
        </div>
      </div>
      <div
        onClick={showNav}
        role="button"
        className={`${
          toggleNav ? "before:w-7" : "before:w-0 "
        } border-white interactable mix-blend-difference link border cursor-pointer w-7 h-7  z-[9998] fixed before:content-[''] before:block  hover:before:h-7 before:duration-300 overflow-hidden before:bg-white before:w-7  before:absolute before:top-0 top-10 right-11  `}
      ></div>
    </>
  );
}

export default NavBar;
