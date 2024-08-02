import React from "react";
import Footer from "../../reusable/Footer";
import Header from "../../reusable/Header";

const PageNotFound = () => {
  return (
    <div>
      <Header wishlist={true} cart={true} account={true} />
      <div className=" w-screen h-screen  px-24 sm:px-6 md:px-8 ">
        <div className="mt-12">
          <p className="mb-4 text-start">
            <span className="text-sm text-gray-500 font-normal mr-2">Home</span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm font-normal ">Cart</span>
          </p>
        </div>
        <div className=" w-full h-full flex flex-col justify-center items-center">
          <h1 className=" text-[110px] mb-12 font-medium">404 Not Found</h1>
          <p className="text-base font-normal  mb-24">
            Your visited page not found. You may go home page.
          </p>
          <button
            to="/"
            className="bg-red-500 px-12 py-3 rounded-sm   text-base text-white font-medium "
          >
            Back to home page
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
