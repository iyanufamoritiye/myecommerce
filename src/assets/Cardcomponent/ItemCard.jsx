import React, { useState, useEffect } from "react";
import { FaRegHeart, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  addItemToWishlist,
  removeWishlistItem,
} from "../component/others/itemSlice";

import { useNavigate } from "react-router-dom";

const ItemCard = ({
  discount,

  imageSrc,
  name,
  originalPrice,
  price,
  rating,
  review,
  wishlist,
  ratingCount,
  New,

  ...props
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupw, setShowPopupw] = useState(false);

  const handleAddToCart = () => {
    if (user) {
      const item = { imageSrc, name, price, quantity: 1, ...props };
      dispatch(addItemToCart(item));
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  const handleLoginRedirect = () => navigate("/login");

  const handleAddToWishlist = () => {
    if (user) {
      const item = {
        discount,
        name,
        imageSrc,
        price,
        rating,
        ratingCount,
        ...props,
      };
      dispatch(addItemToWishlist(item));
      setShowPopupw(false);
    } else {
      setShowPopupw(true);
    }
  };

  const handleLoginRedirectwish = () => {
    navigate("/login");
  };

  const handleRemove = (id) => {
    dispatch(removeWishlistItem(id));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500 " />);
      } else if (i - rating === 0.5) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-500  accent-gray-300" />
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 fil" />);
      }
    }
    return stars;
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked); // Toggle clicked state
  };

  const handleViewClick = () => {
    navigate("/productdetails");
  };

  return (
    <div
      className="relative bg-white  overflow-hidden w-64 mb-10 font-poppins"
      onClick={handleCardClick}
    >
      {/* Discount Badge */}

      <div className="bg-gray-100 p-2 h-64 w-64 relative rounded-md">
        {discount && (
          <div className=" absolute tracking-widest bg-red-500 text-white text-xs font-bold py-1 px-3 h rounded-sm">
            - {discount}%
          </div>
        )}

        {showPopup && (
          <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <p className="mb-4">Login now to add cart item</p>
              <button
                onClick={handleLoginRedirect}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {showPopupw && (
          <div className="fixed xs:w-screen inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <p className="mb-4">Login now to add cart item</p>
              <button
                onClick={handleLoginRedirectwish}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>
              <button
                onClick={() => setShowPopupw(false)}
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 items-end  text-end ">
          {wishlist && (
            <button
              onClick={handleAddToWishlist}
              className="bg-white rounded-full p-2 active:bg-red-600  active:text-white   hover:text-white hover:bg-red-600 shadow-md w-8 h-8 "
            >
              <FaRegHeart className="text-gray-800 active:text-white hover:text-white" />
            </button>
          )}
          {review && (
            <button
              onClick={handleViewClick}
              className="bg-white rounded-full  active:bg-red-600  active:text-white hover:text-white hover:bg-red-600  p-2 shadow-md w-8 h-8"
            >
              <MdOutlineRemoveRedEye className="text-gray-800  active:text-white hover:text-white  " />
            </button>
          )}
        </div>
        <div className="text-center  absolute left-10 top-12  ">
          <img src={imageSrc} alt="Product" className="w-full h-full  " />
        </div>

        {isClicked && (
          <button
            className="absolute xs:w-full left-0 right-0  bottom-0 text-base  rounded-b-md w-full 
           bg-gray-800 text-white py-2  "
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className=" text-start ">
        <div className="mt-4   text-start text-base font-medium text-gray-950  ">
          {name}
        </div>
        <div className="mt-2 flex items-center gap-4 text-center">
          {price && (
            <span className="text-base font-medium text-red-600">${price}</span>
          )}
          {originalPrice && (
            <span className="text-gray-500 line-through mr-2">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center justify-start mt-2">
          {rating && (
            <div className="flex items-center  ">{renderStars(rating)}</div>
          )}
          {ratingCount && (
            <span className="ml-2 text-sm items-center tracking-widest text-gray-600">
              ({ratingCount})
            </span>
          )}
        </div>
      </div>
      <div className="absolute top-3 left-3">
        {New && (
          <button className="  text-white text-xs font-poppins font-normal rounded-sm bg-green-500 px-3 py-1">
            New
          </button>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default ItemCard;
