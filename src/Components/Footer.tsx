import { useLocation, useNavigate } from "react-router-dom";
import env from "./env";
import Contact from "../Pages/Contact";

function Footer() {
  const location = useLocation();
  console.log("location", location);
  const navigate = useNavigate();
  return (
    <footer
      className={`  ${
        location?.pathname.includes("contact")
          ? "dark:bg-[#0D0F04] opacity-40 "
          : location?.pathname.includes("products") &&
            !location?.pathname.includes("products/")
          ? "dark:bg-[#a3b18a] border-[#0D0F04] border "
          : location?.pathname.includes("products/")
          ? "bg-[#a3b18a]"
          : "dark:bg-[#0D0F04] relative z-[90] opacity-70  "
      }`}
    >
      <div className="w-full  max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-col justify-center items-center mb-4 sm:mb-0">
            <img
              src={`${env}newLogo.png`}
              className="h-8 mb-3 sm:mb-0 "
              alt="SASO Logo"
            />
            <span className="self-center font-title uppercase text-2xl font-semibold whitespace-nowrap dark:text-white">
              Saso
            </span>

            <span className=" font-title uppercase text-xs font-semibold whitespace-nowrap dark:text-white">
              an ISO 9001-2015 Certified Company
            </span>
          </div>
          <ul className="flex flex-wrap justify-center  items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <div
                onClick={() => {
                  navigate("/home");
                }}
                className="mr-4 cursor-pointer hover:underline md:mr-6 interactable link "
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigate("/about");
                }}
                className="mr-4 cursor-pointer hover:underline  md:mr-6 interactable link"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigate("/products");
                }}
                className="mr-4 cursor-pointer hover:underline md:mr-6 interactable link "
              >
                Products
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigate("/contact");
                }}
                className="hover:underline  cursor-pointer interactable link"
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  dark:border-gray-700 lg:my-8" />
        <span className="block text-sm w-max mx-auto   sm:text-center ">
          © 2023 Saso. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
