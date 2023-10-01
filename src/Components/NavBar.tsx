import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        className={` h-screen  bg-white  z-[9998]  font-title overflow-x-hidden  fixed  top-0 right-0 duration-500 ease-in-out flex justify-start items-center  ${
          toggleNav ? "w-full sm:w-1/2  lg:w-1/3 xl:w-1/4 p-7" : "w-0 p-0"
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
        <div className="text-black  my-5  absolute bottom-0 left-[50%] -translate-x-[50%] whitespace-nowrap ">
          © 2023 Saso. All Rights Reserved.
        </div>
      </div>
      <div
        onClick={showNav}
        role="button"
        className={`${
          toggleNav ? "before:w-7" : "before:w-0 "
        } border-white  mix-blend-difference link border cursor-pointer w-7 h-7  z-[9998] fixed before:content-[''] before:block  hover:before:h-7 before:duration-300 overflow-hidden before:bg-white before:w-7  before:absolute before:top-0 top-10 right-11  `}
      ></div>
    </>
  );
}

export default NavBar;
