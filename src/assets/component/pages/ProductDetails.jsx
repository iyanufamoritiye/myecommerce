import React, { useEffect, useState } from "react";
import Footer from "../../reusable/Footer";
import Header from "../../reusable/Header";
import Pad1 from "../../images/Pad1.svg";
import Pad2 from "../../images/Pad2.svg";
import Pad3 from "../../images/Pad3.svg";
import Pad4 from "../../images/Pad4.svg";
import Pad5 from "../../images/Pad5.svg";
import Gamepad from "../../images/Gamepad.svg";
import Keyboard from "../../images/Keyboard.svg";
import LCD from "../../images/LCD.svg";
import RGBCooler from "../../images/RGBCooler.svg";

import { FaRegHeart, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import ItemCard from "../../Cardcomponent/ItemCard";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ initialCount = 1, min = 1, max = 99, onChange }) => {
  // Example validation schema
  const [count, setCount] = useState(initialCount);
  const navigate = useNavigate();

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count, onChange]);

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  const handleBuyNow = () => {
    navigate("/cart");
  };

  return (
    <div>
      <Header wishlist={true} cart={true} account={true} />
      <div className=" w-screen mt-12 mb-24 px-24 sm:px-6 md:px-8 xs:px-4 ">
        <div className="m">
          <p className="mb-4 text-start">
            <span className="text-sm text-gray-500 font-normal mr-2">Home</span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm font-normal ">Cart</span>
          </p>
        </div>
        <div className="flex mb-24 mt-16 gap-12">
          <div className="   flex   gap-4">
            <div className="w-[170px]  flex flex-col gap-4">
              <div className="w-full h-[138px]  hover:scale-110 transform transition-transform duration-300  bg-gray-100 p-2 ">
                <img src={Pad2} alt="gamepad" className="" />
              </div>
              <div className="w-full h-[138px]  hover:scale-110 transform transition-transform duration-300  bg-gray-100 p-2">
                <img src={Pad3} alt="gamepad" />
              </div>
              <div className="w-full h-[138px]  hover:scale-110 transform transition-transform duration-300  bg-gray-100 p-2">
                <img src={Pad4} alt="gamepad" />
              </div>
              <div className="w-full h-[138px]  hover:scale-110 transform transition-transform duration-300  bg-gray-100 p-2">
                <img src={Pad5} alt=" gamepad" />
              </div>
            </div>

            <img
              src={Pad1}
              alt=" gamepad"
              className="w-[ px] h-[full x]     bg-gray-100 p-2"
            />
          </div>
          <div className="text-start">
            <h2 className="text-2xl font-semibold mb-3">
              Havic HV G-92 Gamepad
            </h2>
            <div className="flex mb-3 gap-2">
              <div className="flex gap-1">
                <FaStar className="text-yellow-500 " />
                <FaStar className="text-yellow-500 " />
                <FaStar className="text-yellow-500 " />
                <FaStar className="text-yellow-500 " />
                <FaStar className="text-gray-300 " />
              </div>
              <span className="text-gray-400 text-base">(150 Reviews)</span>
              <span className="text-gray-400 text-base">|</span>
              <span className="  text-green-400  text-base ">In Stock</span>
            </div>
            <div className="mb-3">
              <span className="text-2xl font-normal">$192.00</span>
            </div>
            <div className="mb-5  border-b-2 border-gray-400 pb-5">
              <p className="text-base font-normal">
                PlayStation 5 Controller Skin High quality vinyl with air
                <br />
                channel adhesive for easy bubble free install & mess
                <br /> free removal Pressure sensitive.
              </p>
            </div>
            <div className=" flex gap-3 mt-2 mb-4 items-center">
              <label htmlFor=" color-blue" className="text-xl font-normal">
                Colours:
              </label>

              <input
                type="radio"
                name="color"
                id="color-blue"
                value="blue"
                defaultChecked
                className="w-5 h-5 mr-2  
                active:appearance-auto hover:appearance-auto  hover:accent-blue-500 active:bg-blue-500 "
              />
              <input
                type="radio"
                name="color"
                id="color-red"
                value="red"
                className="w-5 h-5 mr-2 appearance-none bg bg-red-500 rounded-full 
                active:appearance-auto hover:appearance-auto  hover:accent-red-500 active:bg-red-500 "
              />
            </div>
            <div className="flex gap-8 mb-6">
              <label htmlFor=" color-blue" className="text-xl font-normal">
                Size:
              </label>
              <div className="flex gap-2">
                <button
                  className="border-2 h-8 w-8 rounded-md border-gray-400 active:bg-red-500
               hover:bg-red-500  active:border-none hover:border-none hover:text-white
               active:text-white"
                >
                  XS
                </button>
                <button
                  className="border-2 h-8 w-8 rounded-md border-gray-400 active:bg-red-500
               hover:bg-red-500  active:border-none hover:border-none hover:text-white
               active:text-white"
                >
                  S
                </button>
                <button
                  defaultChecked
                  className="h-8 w-8  rounded-md  bg-red-500 text-white active:bg-red-700
               hover:bg-red-700  active:border-none hover:border-none hover:text-white
               active:text-white"
                >
                  M
                </button>
                <button
                  className="border-2 h-8 w-8 rounded-md border-gray-400 active:bg-red-500
               hover:bg-red-500  active:border-none hover:border-none hover:text-white
               active:text-white"
                >
                  L
                </button>
                <button
                  className="border-2 h-8 w-8 rounded-md border-gray-400 active:bg-red-500
               hover:bg-red-500  active:border-none hover:border-none hover:text-white
               active:text-white"
                >
                  XL
                </button>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex rounded-md  ">
                <button
                  onClick={handleDecrement}
                  className=" text-2xl font-normal focus:outline-none border-2 rounded-s-md border-gray-300  px-2 py-1"
                >
                  <FaMinus />
                </button>
                <span className="text-2xl font-normal border-2 border-x-0  border-gray-300 px-2 py-1 ">
                  {String(count).padStart(2, "0")}
                </span>
                <button
                  onClick={handleIncrement}
                  className=" text-2xl font-normal  text-white bg-red-500  rounded-e-md  focus:outline-none   px-2 py-1"
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="bg-red-500 border-red-500 border
                 text-base font-medium text-white px-8 py-3 rounded-md "
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              <div
                className="border-2 relative  hover:bg-red-500 active:bg-red-500 
               text-gray-500 hover:text-white active:text-white  w-12 
                border-gray-300 rounded-md  text-base font-medium active:border-none hover:border-none "
              >
                <FaRegHeart className="absolute h-6 w-6 left-3 top-3" />
              </div>
            </div>
            <div className="w-full mt-8 border  border-gray-900 rounded-md">
              <div className=" flex py-4   px-8 gap-2 border-b-2 border-gray-300">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_261_4843)">
                    <path
                      d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 11.8182H11.6667"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.81836 15.4545H8.48503"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 19.0909H11.6667"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4843">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="flex flex-col gap-4">
                  <h5 className="text-base font-medium">Free Delivery</h5>
                  <p className="text-xs font-normal underline decoration-gray-900">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex py-4   px-8   gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_261_4865)">
                    <path
                      d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4865">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="flex  flex-col gap-4">
                  <h5 className="text-base font-medium">Return Delivery</h5>
                  <p className="text-xs font-normal">
                    Free 30 Days Delivery Returns.
                    <span className="underline decoration-gray-900">
                      Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-28">
          <div className="text-start flex gap-2 mb-12 items-center">
            <div className="h-8 w-4 bg-red-600 rounded-md"></div>
            <h3 className="text-base font-normal text-red-600">Related Item</h3>
          </div>

          <div className="flex justify-between">
            <ItemCard
              review={true}
              wishlist={true}
              discount={40}
              imageSrc={Gamepad}
              name=" HAVIT HV-G92 Gamepad"
              price={120}
              originalPrice={160}
              rating={5}
              ratingCount={88}
            />
            <ItemCard
              review={true}
              wishlist={true}
              discount={40}
              imageSrc={Keyboard}
              name=" AK-900 Wired Keyboard"
              price={960}
              originalPrice={1160}
              rating={4}
              ratingCount={75}
            />
            <ItemCard
              review={true}
              wishlist={true}
              discount={40}
              imageSrc={LCD}
              name="IPS LCD Gaming Monitor"
              price={370}
              originalPrice={400}
              rating={5}
              ratingCount={99}
            />
            <ItemCard
              review={true}
              wishlist={true}
              imageSrc={RGBCooler}
              name=" RGB liquid CPU Cooler"
              price={160}
              originalPrice={170}
              rating={5}
              ratingCount={65}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
