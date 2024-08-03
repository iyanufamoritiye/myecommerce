import React from "react";

import ItemCard from "../Cardcomponent/ItemCard";
import Laptop from "../images/Laptop.svg";
import LCD from "../images/LCD.svg";
import Gamepad from "../images/Gamepad.svg";
import Keyboard from "../images/Keyboard.svg";
import NewItemCard from "../Cardcomponent/NewItemCard";

const ForYou = () => {
  return (
    <div className="mb-28">
      <div className="text-start justify-between flex xs:flex-col sm:flex-col mb-10 items-center">
        <div className=" flex gap-2 items-center">
          <div className="h-8 w-4 bg-red-600 rounded-md"></div>
          <h3 className="text-base font-normal text-red-600">This Month</h3>
        </div>

        <button
          className="text-black text-base font-medium border-gray-300  border-2
           hover:border-2 hover:border-gray-600  px-12 py-3 rounded-md "
        >
          See All
        </button>
      </div>

      <div
        className="flex justify-between xs:flex-col sm:flex-col xs:items-center sm:items-center xs:mt-4
      md:grid-cols-2 md:grid md:mt-4 md:place-items-center  lg:grid lg:grid-cols-3 lg:place-items-center"
      >
        <ItemCard
          review={true}
          discount={35}
          imageSrc={Laptop}
          name=" ASUS FHD Gaming Laptop"
          price={700}
          rating={5}
          ratingCount={325}
        />
        <ItemCard
          review={true}
          imageSrc={LCD}
          name="IPS LCD Gaming Monitor"
          price={370}
          rating={5}
          ratingCount={99}
        />
        <ItemCard
          review={true}
          New={true}
          imageSrc={Gamepad}
          name=" HAVIT HV-G92 Gamepad"
          price={120}
          rating={5}
          ratingCount={88}
        />

        <ItemCard
          review={true}
          imageSrc={Keyboard}
          name=" AK-900 Wired Keyboard"
          price={960}
          rating={4}
          ratingCount={75}
        />
      </div>
    </div>
  );
};

export default ForYou;
