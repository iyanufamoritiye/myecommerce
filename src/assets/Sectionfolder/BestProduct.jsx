import React from "react";

import ItemCard from "../Cardcomponent/ItemCard";
import Coat from "../images/Coat.svg";
import GucciBag from "../images/GucciBag.svg";
import RGBCooler from "../images/RGBCooler.svg";
import BookSelf from "../images/BookSelf.svg";

const BestProduct = () => {
  return (
    <div className="mb-28">
      <div className="text-start flex gap-2 items-center">
        <div className="h-8 w-4 bg-red-600 rounded-md"></div>
        <h3 className="text-base font-normal text-red-600">This Month</h3>
      </div>
      <div className=" flex items-center  justify-between mt-6 mb-10">
        <h1 className="text-4xl text-start font-normal text-gray-950 ">
          Best Selling Products
        </h1>

        <button
          className="text-white text-base font-medium   bg-red-600
           hover:bg-red-800 px-12 py-3 rounded-md "
        >
          View All
        </button>
      </div>
      <div className="flex justify-between xs:flex-col sm:flex-col ">
        <ItemCard
          review={true}
          wishlist={true}
          discount={false}
          imageSrc={Coat}
          name=" The north coat"
          price={260}
          originalPrice={360}
          rating={5}
          ratingCount={65}
        />
        <ItemCard
          review={true}
          wishlist={true}
          discount={false}
          imageSrc={GucciBag}
          name="Gucci duffle bag "
          price={960}
          originalPrice={1160}
          rating={5}
          ratingCount={65}
        />
        <ItemCard
          review={true}
          wishlist={true}
          discount={false}
          imageSrc={RGBCooler}
          name=" RGB liquid CPU Cooler"
          price={160}
          originalPrice={170}
          rating={5}
          ratingCount={65}
        />
        <ItemCard
          review={true}
          discount={false}
          wishlist={true}
          imageSrc={BookSelf}
          name=" Small BookSelf "
          price={360}
          rating={5}
          ratingCount={65}
        />
      </div>
    </div>
  );
};

export default BestProduct;
