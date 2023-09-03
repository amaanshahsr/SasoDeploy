import env from "../Components/env";

function AboutUs() {
  // before:h-max before:absolute before:content-[''] before:top-0 before:left-0 before:w-1/3 before:bg-red-400 before:z-10
  return (
    <div className="p-8 sm:p-16 lg:p-24 w-screen relative  bg-[#DAD7CD]">
      <img
        src={`${env}pngwing.com(1).png`}
        className="absolute top-0 right-0 mix-blend-soft-light  z-10"
      />
      <div className="flex flex-col  text-[#426047]  ">
        <h2 className="text-[2.5rem] md:place-self-end relative z-30 font-bold font-title sm:text-5xl md:text-9xl leading-[3rem] my-8 ">
          About Us{" "}
        </h2>
        <div className=" w-full flex flex-col justify-between relative z-[2] border-b border-t py-8 lg:py-16 border-t-[#426047] border-b-[#426047] ">
          <div className="font-title  text-[2.5rem] font-semibold sm:text-5xl md:text-7xl leading-[3rem]">
            Our Story
          </div>
          <div className="text-lg md:text-xl xl:w-3/4 font-body  leading-loose  mt-[3%] ">
            It gives us great pleasure to offer ourselves as a new market
            entrant to the rapidly expanding Home Care Cleaning Industry.We,
            Ammu’s Laboratories specialized in bringing innovative organic
            household cleaning products to the customer,while completely
            adhering to the Make in India initiative.We are a monopoly
            manufacturer of "ORGANIC HOME CARE CLEANING PRODUCTS '' that do not
            contain Caustic Soda, SLS, SLES, Acid Slurry, Ammonia, Benzalkonium
            Chloride or any other Chemicals. Plant derived natural ingredients,
            enriched with potent & innate astringent herbs that are
            Anti-Bacterial and Anti-Fungal in combination.As we all know, the
            aesthetic value of Indian flora is well known, and our goods are
            free of toxins and environmentally safe.
          </div>
          <div className="text-lg md:text-xl xl:w-3/4 font-body leading-loose  mt-[3%] ">
            Now we realised that our everyday household cleaners contained
            extremely hazardous compounds with potentially disastrous side
            effects. According to studies, hazardous chemicals in typical
            household cleansers cause a variety of health problems ranging from
            acute dangers like skin or respiratory problems, chemical burns, or
            watery eyes to chronic hazards like cancer, fertility disorders,
            ADHD, and more.
          </div>
          <div className="text-lg md:text-xl xl:w-3/4 font-title font-bold  leading-loose  mt-[3%] ">
            This was not OK with us.
          </div>
          <div className="text-lg md:text-xl xl:w-3/4 font-title font-bold leading-loose  mt-[3%] ">
            This is where the SASO story began.
          </div>
        </div>
        <div className=" w-full flex flex-col  justify-between relative z-[2] border-b border-b-[#426047] py-8 lg:py-16 ">
          <div className="font-title md:place-self-end text-[2.5rem] font-semibold sm:text-5xl md:text-7xl leading-[3rem]">
            Our Mission
          </div>
          <div className="text-lg md:text-xl  md:place-self-end md:text-right xl:w-3/4 font-body  leading-loose  mt-[3%] ">
            Join us on our mission to redefine Clean/Hygiene and establish
            amazing habits to live by.
            <br />
            <br /> Experience the excellence of hygienic living with SASO. We
            care about hygiene because
            <span className="font-title font-extrabold"> you</span> matter the
            most. Your health care, Our at most priority
          </div>
        </div>
        <div className=" w-full flex flex-col  justify-between relative z-[2]  border-b border-b-[#426047] py-8 lg:py-16 ">
          <div className="font-title text-[2.5rem] font-semibold sm:text-5xl md:text-7xl leading-[3rem]">
            Our Vision
          </div>
          <div className="text-lg md:text-xl xl:w-3/4 font-body  leading-loose  mt-[3%] ">
            We provide a hygienic environment within our company that improves
            the lives of everyone with whom we come into contact on a daily
            basis. We set an example of doing business with integrity and
            transparency, and create a new paradigm for business development
            that demonstrates honesty, compassion and “Doing the Right Thing,”
            leading to financial and personal success for all parties involved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
