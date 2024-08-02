import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ImAppleinc } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";

import Iphone from "../images/Iphone.png";

const HeroSection = () => {
  const [Image, setImage] = useState(2);

  const handleChangeImage = (newImage) => {
    setImage(newImage);
  };
  return (
    <div className="flex mb-28 z-0 xs:flex-col sm:flex-col xs:items-center sm:items-center xs:mt-4">
      <div className=" h-[370px]  w-[200px] ">
        <ul className="flex flex-col gap-5  text-start font-normal text-base border-r pr-4 border-r-gray-300 ">
          <li className="flex justify-between  pt-8">
            <Link>Woman’s Fashion</Link>
            <IoIosArrowForward />
          </li>
          <li className="flex justify-between  ">
            <Link>Men’s Fashion </Link>
            <IoIosArrowForward />
          </li>
          <li>
            <Link>Electronics </Link>
          </li>
          <li>
            <Link>Home & Lifestyle </Link>
          </li>
          <li>
            <Link>Medicine </Link>
          </li>
          <li>
            <Link>Sports & Outdoor </Link>
          </li>
          <li>
            <Link>Baby’s & Toys </Link>
          </li>
          <li>
            <Link>Groceries & Pets </Link>
          </li>
          <li className=" ">
            <Link>Health & Beauty </Link>
          </li>
        </ul>
      </div>
      <div className="flex relative  mt-8 ml-8 mb-4 bg-black  h-[370px] w-[900px] text-sm   pr-0">
        <div className=" w-[50%]  p-14 pr-0">
          <div className="flex items-center gap-4 mb-6  ">
            <ImAppleinc className="text-white h-16 w-12" />
            <span className="text-white font-normal">iPhone 14 Series</span>
          </div>
          <div className="mb-6">
            <h1 className="text-white font-bold text-5xl text-start leading-none  ">
              Up to 10% <br /> off Voucher
            </h1>
          </div>
          <div className="flex text-start items-center gap-4">
            <button className="text-white font-normal text-base   pb-2 border-b-2 border-b-white ">
              Shop Now
            </button>
            <FaArrowRightLong className="text-white font-normal text-base" />
          </div>
        </div>
        <div className="w-full  ">
          <img src={Iphone} alt="" className="w-full h-5/6 mt-4" />
        </div>
        <div class="absolute bottom-6 right-96 flex space-x-2">
          {[" ", " ", " ", " ", " "].map((num, index) => (
            <button
              key={index}
              onClick={() => handleChangeImage(index)}
              className={`w-3 h-3 rounded-full ${
                index === Image
                  ? "bg-red-600 border-2 border-white"
                  : "bg-gray-600"
              } hover:border-2 hover:border-white hover:bg-red-600`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
