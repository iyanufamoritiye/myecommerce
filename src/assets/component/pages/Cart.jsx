import React from "react";
import Header from "../../reusable/Header";
import Footer from "../../reusable/Footer";

import CustomCounter from "../../reusable/CustomCounter";

import { useState, useEffect } from "react";
import { FaTimesCircle } from "react-icons/fa";
import {
  removeCartItem,
  updateCartItemQuantity,
  fetchCartItems,
} from "../others/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.item);
  const { items, loading, error } = cart;
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
    calculateSubtotal(); // Recalculate subtotal after quantity change
  };

  const calculateSubtotal = () => {
    const newSubtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  };

  const handleCheckout = () => {
    if (user) {
      navigate("/checkout");
    } else {
      navigate("/signup"); // Redirect to signup if not authenticated
    }
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div>
      <Header wishlist={true} cart={true} account={true} />
      <div className=" w-screen text-start  pr-24 px-24 xs:px-6    mt-12 mb-28 sm:px-6 md:px-8">
        <div>
          <p className="mb-4">
            <span className="text-sm text-gray-500 font-normal mr-2">Home</span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm font-normal ">Cart</span>
          </p>
        </div>
        <div className="mt-16">
          <div className="mb-4">
            {loading && <p className="text-red-500">Loading...</p>}
            <div className="flex justify-between   ">
              {error && <p className="text-red-500">{error}</p>}
              {items.length === 0 && (
                <p className="text-red-500">Your cart is empty.</p>
              )}
            </div>
          </div>
          <table className="w-full text-start   ">
            <thead>
              <tr className=" flex      px-12 items-center border text-start border-gray-200 shadow-md py-6 rounded-md">
                <th className="w-[30%] text-start  ">Product</th>
                <th className="w-[30%] text-start ">Price</th>
                <th className="w-[30%] text-start">Quantity</th>
                <th className=" text-start">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product) => (
                <tr
                  key={product.id}
                  className="flex   border-2  px-12 items-center my-10   border-gray-200 shadow-md py-6 rounded-md"
                >
                  <td className="w-[30%] text-start  ">
                    <div className="flex relative items-center xs:flex-col xs:items-start xs:w-36  w-44 gap-4">
                      <img
                        src={product.imageSrc}
                        alt="product"
                        className="h-10 w-10"
                      />

                      <span className="text-base font-normal xs:hidden">
                        {product.name}
                      </span>
                      <FaTimesCircle
                        className="absolute bottom-3 rounded-full cursor-pointer bg-white text-red-500  "
                        onClick={() => handleRemove(product.id)}
                      />
                    </div>
                  </td>
                  <td className="w-[30%] text-start  ">${product.price}</td>
                  <td className="w-[30%] text-start  ">
                    <CustomCounter
                      className=""
                      initialCount={product.quantity}
                      min={1}
                      max={99}
                      onChange={(newQuantity) =>
                        handleQuantityChange(product.id, newQuantity)
                      }
                    />
                  </td>
                  <td className="text-start">
                    ${product.price * product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-12">
          <button
            onClick={handleContinueShopping}
            className="text-black text-base font-medium border-gray-300  border-2
           hover:border-2 hover:border-gray-600   px-12 py-3 rounded-md "
          >
            Return To Shop
          </button>
          <button
            className="text-black text-base font-medium border-gray-300  border-2
           hover:border-2 hover:border-gray-600  px-12 py-3 rounded-md xs:px-8 "
          >
            Update Cart
          </button>
        </div>

        <div className="mt-16 flex justify-between xs:flex-col items-start">
          <div className="flex  gap-4 items-center    mb-4">
            <input
              type="text"
              name="coupon"
              className="  px-4 py-3 border-gray-300 border rounded-sm"
              placeholder="Coupon code"
            />
            <button className="bg-red-500   xs:px-4 text-base font-medium text-white px-12 py-3 rounded-sm">
              Apply Coupon
            </button>
          </div>
          <div className="w-[470px] h-[324px] xs:w-full xs:p-4 border-2 border-gray-300 p-8 justify-between flex-col flex">
            <h3 className="text-xl font-bold">Cart Total</h3>
            <div className="flex justify-between pb-4 border-b-2 border-b-gray-300">
              <span className="text-base font-medium">Subtotal:</span>
              <span className="text-base font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between  pb-4 border-b-2 border-b-gray-300">
              <span className="text-base font-medium">Discount:</span>
              <span className="text-base font-medium">$0.00</span>
            </div>
            <div className="flex justify-between ">
              <span className="text-base font-medium">Total:</span>
              <span className="text-base font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={handleCheckout}
                className="bg-red-500   xs:px-8    text-white text-base font-medium px-12 py-3  rounded-sm"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
