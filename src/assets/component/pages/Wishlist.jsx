import React, { useState, useEffect } from "react";
import Header from "../../reusable/Header";
import Footer from "../../reusable/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem, fetchWishlistItems } from "../others/itemSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import ItemCard from "../../Cardcomponent/ItemCard";
import ForYou from "../../Sectionfolder/ForYou";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.item);
  const { items, loading, error } = wishlist;

  useEffect(() => {
    dispatch(fetchWishlistItems());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeWishlistItem(id));
  };

  return (
    <div>
      <Header wishlist={true} cart={true} account={true} />
      <div className="w-screen px-24 mt-12 mb-28 sm:px-6 md:px-8 xs:px-4 ">
        <div>
          <p className="mb-4">
            <span className="text-sm text-gray-500 font-normal mr-2">Home</span>
            <span className="text-sm text-gray-500 font-normal mr-2">/</span>
            <span className="text-sm font-normal">Wishlist</span>
          </p>
        </div>
        <div className="mt-16">
          {loading && <p>Loading...</p>}
          <div className="flex justify-between   ">
            {error && (
              <p className="text-red-500">Login to Add wishlist item </p>
            )}
            {items.length === 0 && (
              <p className="text-red-500">Your cart is empty.</p>
            )}
          </div>
          <div className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
            {items.map((product) => (
              <div className="relative" key={product.id}>
                <ItemCard
                  deleteItem={true}
                  discount={product.discount}
                  imageSrc={product.imageSrc}
                  name={product.name}
                  price={product.price}
                />
                <button
                  onClick={() => handleRemove(product.id)}
                  className=" absolute top-2 right-2   bg-white rounded-full  active:bg-red-600  active:text-white hover:text-white hover:bg-red-600  p-2 shadow-md w-8 h-8"
                >
                  <RiDeleteBin5Line className="text-gray-800  active:text-white hover:text-white  " />
                </button>
              </div>
            ))}
          </div>
        </div>
        <ForYou />
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
