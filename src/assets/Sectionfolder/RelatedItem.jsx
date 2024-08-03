import React from "react";
import ItemCard from "../Cardcomponent/ItemCard";
import Gamepad from "../images/Gamepad.svg";
import Keyboard from "../images/Keyboard.svg";
import LCD from "../images/LCD.svg";
import RGBCooler from "../images/RGBCooler.svg";

const RelatedItem = () => {
  return (
    <div className="mb-28">
      <div className="text-start flex gap-2 mb-12 items-center">
        <div className="h-8 w-4 bg-red-600 rounded-md"></div>
        <h3 className="text-base font-normal text-red-600">Related Item</h3>
      </div>

      <div
        className="flex justify-between xs:flex-col sm:flex-col xs:items-center sm:items-center xs:mt-4
      md:grid-cols-2 md:grid md:mt-4 md:place-items-center  lg:grid lg:grid-cols-3 lg:place-items-center"
      >
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
  );
};

export default RelatedItem;
