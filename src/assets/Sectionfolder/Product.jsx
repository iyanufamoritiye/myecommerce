import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

import NewItemCard from "../Cardcomponent/NewItemCard";
import DogFood from "../images/DogFood.svg";
import Camera1 from "../images/Camera1.svg";
import Laptop from "../images/Laptop.svg";
import CurologyProduct from "../images/CurologyProduct.svg";
import MercedesBenz from "../images/MercedesBenz.svg";
import SoccerCleat from "../images/SoccerCleat.svg";
import USBGamepad from "../images/USBGamepad.svg";
import SaintJacket from "../images/SaintJacket.svg";

const Product = () => {
  return (
    <div className=" mb-28">
      <div className="text-start flex gap-2 items-center">
        <div className="h-8 w-4 bg-red-600 rounded-md"></div>
        <h3 className="text-base font-normal text-red-600">Our Products</h3>
      </div>
      <div className=" flex items-center  justify-between mt-6 mb-10  xs:flex-col sm:flex-col">
        <h1 className="text-4xl text-start font-normal text-gray-950 ">
          Explore Our Products
        </h1>
        <div className="flex gap-3">
          <div className="bg-gray-100 rounded-full cursor-pointer hover:bg-gray-300 p-2">
            <FaArrowRight className="  h-3 w-3  " />
          </div>
          <div className="bg-gray-100 rounded-full cursor-pointer hover:bg-gray-300   p-2">
            <FaArrowLeft className="  h-3 w-3  " />
          </div>
        </div>
      </div>
      <div className="flex justify-between  xs:flex-col sm:flex-col">
        <NewItemCard
          review={true}
          wishlist={true}
          imageSrc={DogFood}
          name=" Breed Dry Dog Food"
          price={100}
          rating={3}
          ratingCount={35}
          discount={false}
        />
        <NewItemCard
          review={true}
          wishlist={true}
          imageSrc={Camera1}
          name=" CANON EOS DSLR Camera"
          price={360}
          rating={4}
          ratingCount={95}
          discount={false}
        />
        <NewItemCard
          review={true}
          wishlist={true}
          imageSrc={Laptop}
          name=" ASUS FHD Gaming Laptop"
          price={700}
          rating={5}
          ratingCount={325}
          discount={false}
        />
        <NewItemCard
          review={true}
          wishlist={true}
          discount={false}
          imageSrc={CurologyProduct}
          name=" Curology Product Set"
          price={500}
          rating={4}
          ratingCount={145}
        />
      </div>
      <div className="flex justify-between xs:flex-col sm:flex-col">
        <NewItemCard
          review={true}
          wishlist={true}
          discount={false}
          New={true}
          imageSrc={MercedesBenz}
          name=" Kids Electric Car"
          price={960}
          rating={5}
          ratingCount={65}
          colors={["Red"]}
        />
        <NewItemCard
          review={true}
          discount={false}
          wishlist={true}
          imageSrc={SoccerCleat}
          name="Jr. Zoom Soccer Cleats"
          price={1160}
          rating={5}
          ratingCount={35}
          colors={["yellow"]}
        />
        <NewItemCard
          review={true}
          wishlist={true}
          discount={false}
          New={true}
          imageSrc={USBGamepad}
          name=" GP11 Shooter USB Gamepad"
          price={660}
          rating={4.5}
          ratingCount={35}
          colors={["black"]}
        />
        <NewItemCard
          review={true}
          discount={false}
          wishlist={true}
          imageSrc={SaintJacket}
          name=" Quilted Satin Jacket"
          price={660}
          rating={4.5}
          ratingCount={55}
          colors={["black"]}
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

export default Product;
