import React from "react";
import Ps5 from "../images/Ps5.svg";
import AttrativeWoman from "../images/AttrativeWoman.svg";
import Speaker from "../images/Speaker.svg";
import GucciPef from "../images/GucciPef.svg";

const NewArrival = () => {
  return (
    <div className=" mb-28">
      <div className="text-start flex gap-2 items-center">
        <div className="h-8 w-4 bg-red-600 rounded-md"></div>
        <h3 className="text-base font-normal text-red-600">Featured</h3>
      </div>
      <div className=" flex items-center  justify-between mt-6 mb-10">
        <h1 className="text-4xl text-start font-normal text-gray-950 ">
          New Arrival
        </h1>
      </div>

      <div className="grid grid-cols-4 xs:grid-cols-2 w-full h-[600px]   sm:grid-cols-2 gap-6 text-white text-start">
        <div className="relative bg-black row-span-2 col-span-2  ">
          <img src={Ps5} alt="" className="absolute bottom-0 z-10 " />
          <div className="absolute z-50  bottom-0 p-6   ">
            <h3 className="text-xl font-bold mb-3">PlayStation 5</h3>
            <p className="font-normal text-gray-200 text-sm mb-3">
              Black and White version of the PS5
              <br /> coming out on sale.
            </p>
            <button className="text-base font-normal border-b-[1px] border-b-gray-300 ">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" relative bg-black row-span-1 col-span-2 ">
          <img
            src={AttrativeWoman}
            alt=""
            className="absolute bottom-0 right-0 z-10 "
          />
          <div className="absolute z-50 bottom-0 p-6">
            <h3 className="text-xl font-bold  mb-3">Women’s Collections</h3>
            <p className="font-normal text-gray-200 text-sm mb-3">
              Featured woman collections that <br /> give you another vibe.
            </p>
            <button className="text-base font-normal  border-b-[1px] border-b-gray-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative bg-black row-span-1 col-span-1 ">
          <img
            src={Speaker}
            alt=""
            className="absolute bottom-6 left-6  z-10 "
            style={{
              filter: "drop-shadow( 20px 0 72px rgba(255, 255, 255, 0.4))",
            }}
          />
          <div className="absolute bottom-0 z-50 p-6">
            <h3 className="text-xl font-bold mb-3">Speakers</h3>
            <p className="font-normal text-gray-200 text-sm mb-3">
              Amazon wireless speakers
            </p>
            <button className="text-base font-normal border-b-[1px] border-b-gray-300 ">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative bg-black row-span-1 col-span-1 ">
          <img
            src={GucciPef}
            alt=""
            className="absolute  bottom-6 left-6 z-10 "
            style={{
              filter: "drop-shadow( 20px 0 72px rgba(255, 255, 255, 0.4))",
            }}
          />
          <div className="absolute bottom-0 z-50 p-6">
            <h3 className="text-xl font-bold mb-3">Perfume</h3>
            <p className="font-normal text-gray-200 text-sm mb-3">
              GUCCI INTENSE OUD EDP
            </p>
            <button className="text-base font-normal border-b-[1px] border-b-gray-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
