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

const NewItemCard = ({
  New,

  discount,
  imageSrc,
  name,
  price,
  rating,
  ratingCount,
  colors,
  wishlist,
  review,
  originalPrice,

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

  const [selectedColor, setSelectedColor] = useState(colors ? colors[0] : "");
  const [showColorOptions, setShowColorOptions] = useState(false);

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

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleColorButtonClick = () => {
    e.stopPropagation();
    setShowColorOptions(!showColorOptions);
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
          <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
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
            <button className="bg-white rounded-full  active:bg-red-600  active:text-white hover:text-white hover:bg-red-600  p-2 shadow-md w-8 h-8">
              <MdOutlineRemoveRedEye className="text-gray-800  active:text-white hover:text-white  " />
            </button>
          )}
        </div>
        <div className="text-center  absolute left-8 top-8  ">
          <img src={imageSrc} alt="Product" className="w-full h-full  " />
        </div>

        {isClicked && (
          <button
            className="absolute  left-0 right-0  bottom-0 text-base  rounded-b-md w-full 
            bg-gray-800 text-white py-2  "
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className=" text-start flex flex-col gap-2 ">
        <div className="mt-4   text-start text-base font-medium text-gray-950  ">
          {name}
        </div>

        <div className="flex gap-4 ">
          {price && (
            <span className="text-base font-medium text-red-600">${price}</span>
          )}
          <div className="flex gap-2">
            {rating && <div className=" flex  ">{renderStars(rating)}</div>}
            {ratingCount && (
              <span className="ml-2 text-sm tracking-widest text-gray-600">
                ({ratingCount})
              </span>
            )}
          </div>
        </div>
        <div>
          {colors && (
            <div className=" relative flex gap-1 items-center">
              <div className="flex  gap-1 items-center">
                <input
                  type="radio"
                  className="appearance-none cursor-pointer w-3 h-3 rounded-full m-2 ring-2  ring-offset-2 ring-gray-950  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-950"
                  style={{ backgroundColor: selectedColor }}
                  onClick={handleColorButtonClick}
                />
              </div>
              <div>
                <input
                  type="radio"
                  className="appearance-none  h-5 w-5 cursor-pointer   bg-red-600 rounded-full"
                  onClick={handleColorButtonClick}
                />

                {showColorOptions && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                    {colors.map((color) => (
                      <div
                        key={color}
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          e.stopPropagation();
                          handleColorChange(color);
                          setShowColorOptions(true);
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="capitalize">{color}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
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

export default NewItemCard;
