import React from "react";

import Clock2 from "../reusable/Clock2";
import JblBoom from "../images/JblBoom.svg";

const Offer = () => {
  return (
    <div className="w-full h-[500px] bg-black mb-28 px-14 py-16 flex ">
      <div className="text-start w-2/4">
        <h6 className="text-[#00FF66] text-base font-semibold text-start mb-8  ">
          Categories
        </h6>
        <h1 className="text-white text-start text-5xl font-semibold mb-4 ">
          Enhance Your
        </h1>
        <h1 className="text-white text-start text-5xl font-semibold ">
          Music Experience
        </h1>

        <Clock2 />

        <button className=" bg-[#00FF66] px-14 py-4 rounded-md text-base  text-white font-medium mt-8">
          Buy Now!
        </button>
      </div>
      <div className=" justify-center items-center mt-6  ">
        <img
          src={JblBoom}
          alt=""
          className="w-full grayscale-0"
          style={{
            filter: "drop-shadow( -20px 0 72px rgba(255, 255, 255, 0.4))",
          }}
        />
      </div>
    </div>
  );
};

export default Offer;
