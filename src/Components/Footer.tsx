import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-[#16302d] ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:mb-0">
            <img
              src="/public/newLogo.png"
              className="h-8 mb-3 sm:mb-0 sm:mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center uppercase text-2xl font-semibold whitespace-nowrap dark:text-white">
              Saso
            </span>
          </div>
          <ul className="flex flex-wrap justify-center  items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <div
                onClick={() => {
                  navigate("/home");
                }}
                className="mr-4 hover:underline md:mr-6 interactable link "
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigate("/about");
                }}
                className="mr-4 hover:underline md:mr-6 interactable link"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigate("/products");
                }}
                className="mr-4 hover:underline md:mr-6 interactable link "
              >
                Products
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigate("/contact");
                }}
                className="hover:underline interactable link"
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm w-max mx-auto  text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <div href="/" className="hover:underline">
            Saso
          </div>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
