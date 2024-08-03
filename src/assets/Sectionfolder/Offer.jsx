import React from "react";

import Clock2 from "../reusable/Clock2";
import JblBoom from "../images/JblBoom.svg";

const Offer = () => {
  return (
    <div className="w-full h-[500px] bg-black   mb-28 px-14 py-16 xs:px-6 flex xs:w-full ">
      <div className="text-start w-2/4 z-50">
        <h6 className="text-[#00FF66] text-base font-semibold text-start mb-8 xs:text-sm  ">
          Categories
        </h6>
        <h1 className="text-white text-start text-5xl font-semibold mb-4 xs:text-3xl md:text-4xl lg:text-4xl  ">
          Enhance Your
        </h1>
        <h1 className="text-white text-start text-5xl font-semibold xs:text-3xl md:text-4xl lg:text-4xl ">
          Music Experience
        </h1>

        <Clock2 />

        <button
          className=" bg-[#00FF66] px-14 py-4 rounded-md text-base xs:text-sm
         xs:px-8 md:text-sm md:px-12 text-white font-medium mt-8"
        >
          Buy Now!
        </button>
      </div>
      <div className=" justify-center items-center mt-6  ">
        <img
          src={JblBoom}
          alt=""
          className="w-full grayscale-0 xs:absolute xs:w-5/6 xs:left-8 md:absolute md:w-4/6 md:left-28"
          style={{
            filter: "drop-shadow( -20px 0 72px rgba(255, 255, 255, 0.4))",
          }}
        />
      </div>
    </div>
  );
};

export default Offer;
