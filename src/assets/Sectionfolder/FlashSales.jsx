import React from "react";
import ItemCard from "../Cardcomponent/ItemCard";
import Clock from "../reusable/Clock";
import Gamepad from "../images/Gamepad.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Keyboard from "../images/Keyboard.svg";
import LCD from "../images/LCD.svg";
import Chair from "../images/Chair.svg";

const FlashSales = () => {
  return (
    <div className="border-b-2 border-b-gray-100 mb-28">
      <div className="text-start flex gap-2 items-center ">
        <div className="h-8 w-4 bg-red-600 rounded-md"></div>
        <h3 className="text-base font-normal text-red-600">Today’s</h3>
      </div>
      <div className="flex items-center justify-between ">
        <h1 className="text-4xl font-normal text-gray-950 ">Flash Sales</h1>
        <Clock />
        <div className="flex gap-3">
          <div className="bg-gray-100 rounded-full  cursor-pointer hover:bg-gray-300   p-2">
            <FaArrowRight className="  h-3 w-3  " />
          </div>
          <div className="bg-gray-100 rounded-full  cursor-pointer hover:bg-gray-300   p-2">
            <FaArrowLeft className="  h-3 w-3  " />
          </div>
        </div>
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
          discount={40}
          imageSrc={Chair}
          name="S-Series Comfort Chair "
          price={370}
          originalPrice={400}
          rating={4}
          ratingCount={99}
        />
      </div>
      <div className="mb-12">
        <button className=" text-base text-white font-medium bg-red-600 px-6 py-3 rounded-md ">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
