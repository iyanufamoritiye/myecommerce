import React from "react";
import Header from "../../reusable/Header";

import Footer from "../../reusable/Footer";

import FlashSales from "../../Sectionfolder/FlashSales";
import Categories from "../../Sectionfolder/Categories";
import HeroSection from "../../Sectionfolder/HeroSection";
import BestProduct from "../../Sectionfolder/BestProduct";
import Offer from "../../Sectionfolder/Offer";

import Product from "../../Sectionfolder/Product";
import NewArrival from "../../Sectionfolder/NewArrival";
import Service from "../../Sectionfolder/Service";

const Homepage = () => {
  return (
    <div className="  ">
      <Header wishlist={true} cart={true} account={true} />

      <div className="w-screen px-24 sm:px-6 md:px-8  ">
        <HeroSection />
        <FlashSales />
        <Categories />
        <BestProduct />
        <Offer />
        <Product />
        <NewArrival />
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
