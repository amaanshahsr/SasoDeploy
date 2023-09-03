import { useEffect } from "react";
import env from "../Components/env";

function Contact() {
  const detailsection = [
    {
      title: "Address",
      data: "Building No.14-267/2 Near Marancode Community Hall, Valacodu .P.O. Punalur. Kollam (Dt.) Kerala(State) 691 331",
    },
    {
      title: "Tel",
      data: "+918714017807",
    },
    {
      title: "Mail",
      data: "sasowmc@gmail.com",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-8 md:p-16 lg:p-24 w-screen overflow-hidden  relative flex lg:justify-end lg:h-screen text-[#344E41] bg-[#DAD7CD]">
      <img
        src={`${env}pngegg(6).webp`}
        className="absolute rotate-180 top-0 left-0 lg:opacity-100 xl:mix-blend-normal mix-blend-overlay"
      />
      <div className="xl:w-[75%] grid grid-cols-2 grid-rows-2 gap-10 z-10   ">
        <section className="col-span-2 gap-10 flex flex-col lg:flex-row lg:justify-between ">
          <div className="lg:w-[50%]">
            <h3 className="text-[3rem] inline-flex  sm:text-5xl md:text-7xl lg:mb-5 font-title font-bold">
              Contact Us
              <svg
                className="w-16 h-16 duration-200 ease-in-out fill-[#344E41] ml-5 hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </h3>
            <p className="font-body text-lg md:text-xl  font-medium">
              We're here to listen, assist, and connect. Whether you have a
              question, feedback, or just want to say hello, we're eager to hear
              from you. Please feel free to reach out using the information
              below, and we'll get back to you as soon as possible.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.8129074250837!2d76.95247525773257!3d9.039369760716376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b067788571bb73b%3A0xa23edb12edbedd53!2sAmmus%20Laboratories!5e0!3m2!1sen!2sin!4v1693067097877!5m2!1sen!2sin"
            className="border-0 xl:w-[400px] xl:h-[350px] w-full h-[400px] "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section className="col-span-2 flex flex-col justify-evenly font-title z-10 relative font-bold w-full mt-10">
          {detailsection?.map((node: any) => {
            return (
              <div
                onClick={() => {
                  if (node.title === "Mail") {
                    window.location.href = "mailto:sasowmc@gmail.com.com";
                  }
                }}
                className={`h-full ${
                  node?.title === "Mail" ? "interactable link" : " "
                }   flex justify-between  border-b p-5 border-[#344E41]
                 relative
                 
                 after:z-[5]
                after:content-[''] after:absolute group after:w-full after:h-full after:top-0 overflow-hidden after:overflow-hidden after:left-0 after:translate-y-[100%] after:opacity-0 hover:after:opacity-100 hover:after:translate-y-0 after:duration-500 duration-500  after:bg-[#3D441E] 
                `}
              >
                <div
                  className={`${
                    node?.title === "Mail" ? "interactable link" : " "
                  } w-[40%] group-hover:text-[#DAD7CD]  z-10`}
                >
                  {node?.title}
                </div>
                <div
                  className={`${
                    node?.title === "Address"
                      ? "text-right"
                      : node?.title === "Mail"
                      ? "interactable link  border-b border-[#344E41]"
                      : " "
                  } h-max   z-10 group-hover:text-[#DAD7CD] `}
                >
                  {node?.data}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Contact;
