import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { MdOutlineShoppingCart, MdOutlineCancel } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { FaTimes, FaBars } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../component/others/authSlice";

const Header = ({ wishlist, cart, account }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.item.cart.items);
  const wishlistItems = useSelector((state) => state.item.wishlist.items);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const [isOpenBar, setIsOpenBar] = useState(false);

  const toggleMenuBar = () => {
    setIsOpenBar(!isOpenBar);
  };
  const toggleMenuBarclose = () => {
    setIsOpenBar(isOpenBar);
  };

  return (
    <div className=" w-screen     ">
      <div className="text-sm flex gap-2  xs:flex-col justify-end  xs:px-6 py-4 px-24 bg-black">
        <div className="flex xs:flex-col gap-4 text-center justify-end w-3/4 xs:w-full   ">
          <p className="font-normal text-white xs: ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button
            className="   underline decoration-gray-300  text-white  
        font-semibold  -border-b-2 border-b-white   "
          >
            ShopNow
          </button>
        </div>
        <div className="w-1/4 f flex justify-end xs:justify-center xs:w-full">
          <button
            className=" flex ml-8 items-center underline xs:ml-0  decoration-gray-300  text-white  
        font-semibold -border-b-2 border-b-white"
          >
            English <IoIosArrowDown className="h-6 w-6 " />
          </button>
        </div>
      </div>
      <div
        className="flex  xs:flex-col xs:gap-4  xs:py-4 sm:flex-col sm:gap-4  
         sm:py-4 md:flex-col md:gap-4  md:py-4
       sm:px-8 md:px-12 xs:px-6 
      
      xs:pb-8   gap-32  pt-8 pb-3 border-b px-24   border-b-gray-300"
      >
        <div className=" xs:flex xs:justify-between sm:flex sm:justify-between md:flex md:justify-between lg:w-full lg:flex lg:gap-4">
          <div className="    xl:hidden relative">
            <FaBars
              onClick={toggleMenuBar}
              className="h-6 w-6 cursor-pointer "
            />
            {isOpenBar && (
              <nav className="font-normal p-4 shadow-md shadow-gray-100 md:top-32 lg:top-20 text-lg absolute z-50 top-40 -left-4   w-[225px] h-screen bg-white l-0 ">
                <ul className="flex gap-4 items-start flex-col ">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/signup ">Signup</Link>
                  </li>
                </ul>
                <ul className="flex gap-4 py-4 items-start flex-col mt-8 pl-3 border-2 border-gray-300 bg-gray-50 ">
                  <li className="flex w-full c items-center ">
                    <Link>Woman’s Fashion</Link>
                    <IoIosArrowForward />
                  </li>
                  <li className="flex w-full justify-between items-center ">
                    <Link>Men’s Fashion </Link>
                    <IoIosArrowForward />
                  </li>
                  <li>
                    <Link>Electronics </Link>
                  </li>
                  <li>
                    <Link>Home & Lifestyle </Link>
                  </li>
                  <li>
                    <Link>Medicine </Link>
                  </li>
                  <li>
                    <Link>Sports & Outdoor </Link>
                  </li>
                  <li>
                    <Link>Baby’s & Toys </Link>
                  </li>
                  <li>
                    <Link>Groceries & Pets </Link>
                  </li>
                  <li className=" ">
                    <Link>Health & Beauty </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          <h1 className="  text-2xl font-bold">Exclusive</h1>
          {account && user && (
            <div className="relative   xl:hidden lg:hidden">
              <LuUser
                onClick={toggleMenu}
                className={`h-8 w-8 p-1 rounded-full border border-white ${
                  isOpen ? "bg-red-700 text-white" : ""
                } hover:bg-red-700 hover:text-white`}
              />
              {isOpen && (
                <nav className="p-4   absolute right-0 top-8 text-white w-[225px]  h-[208px] z-50 bg-gradient-to-r from-purple-400 to-gray-700">
                  <ul className="flex flex-col items-start   gap-1  ">
                    <li className="flex justify-between items-center gap-1  text-sm font-normal  ">
                      <LuUser className="h-8 w-8 p-1 items-center " />
                      <Link to="/account">Manage My Account</Link>
                    </li>
                    <li className="flex justify-between items-center gap-1 text-sm font-normal    ">
                      <FiShoppingBag className="h-8 w-8 p-1" />
                      <Link to="/cart">My Order</Link>
                    </li>
                    <li className="flex justify-between items-center  gap-1 text-sm font-normal   ">
                      <MdOutlineCancel className="h-8 w-8 p-1" />
                      <Link to="*">My Cancellations</Link>
                    </li>
                    <li className="flex justify-between items-center  gap-1  text-sm font-normal   ">
                      <FaRegStar className="h-8 w-8 p-1" />
                      <Link to="*">My Reviews</Link>
                    </li>
                    <li className="flex justify-between items-center  gap-1  text-sm font-normal   ">
                      <LuUser className="h-8 w-8 p-1" />
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          )}
        </div>
        <div className=" flex justify-between w-full    ">
          <nav className="font-normal text-lg xs:hidden lg:hidden md:hidden sm:hidden">
            <ul className="flex gap-8 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/signup ">Signup</Link>
              </li>
            </ul>
          </nav>

          <div
            className=" flex gap-4   items-center xs:w-full xs:justify-between xs:gap-0 sm:w-full
           sm:justify-between sm:gap-0 md:w-full md:justify-end    "
          >
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 text-sm py-2 placeholder-gray-800 pl-6 pr-12  font-normal rounded-md "
              />
              <IoSearchOutline className="absolute right-4 top-2 h-5 w-5 " />
            </div>
            {wishlist && (
              <div className="relative">
                <FiHeart
                  className="h-6 w-6 cursor-pointer"
                  onClick={handleWishlist}
                />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 h-5 w-5  -right-2 bg-red-500 text-white rounded-full p-1     text-xs">
                    {wishlistItems.length}
                  </span>
                )}
              </div>
            )}
            {cart && (
              <div className="relative">
                <MdOutlineShoppingCart
                  className="h-6 w-6 cursor-pointer"
                  onClick={handleCart}
                />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 h-5 w-5  -right-2 bg-red-500 text-white rounded-full p-1     text-xs">
                    {cartItems.length}
                  </span>
                )}
              </div>
            )}

            {account && user && (
              <div className="relative xs:hidden sm:hidden  md:hidden">
                <LuUser
                  onClick={toggleMenu}
                  className={`h-8 w-8 p-1 rounded-full border border-white ${
                    isOpen ? "bg-red-700 text-white" : ""
                  } hover:bg-red-700 hover:text-white`}
                />
                {isOpen && (
                  <nav className="p-4   absolute right-0 top-8 text-white w-[225px]  h-[208px] z-50 bg-gradient-to-r from-purple-400 to-gray-700">
                    <ul className="flex flex-col items-start   gap-1  ">
                      <li className="flex justify-between items-center gap-1  text-sm font-normal  ">
                        <LuUser className="h-8 w-8 p-1 items-center " />
                        <Link to="/account">Manage My Account</Link>
                      </li>
                      <li className="flex justify-between items-center gap-1 text-sm font-normal    ">
                        <FiShoppingBag className="h-8 w-8 p-1" />
                        <Link to="/cart">My Order</Link>
                      </li>
                      <li className="flex justify-between items-center  gap-1 text-sm font-normal   ">
                        <MdOutlineCancel className="h-8 w-8 p-1" />
                        <Link to="/contact">My Cancellations</Link>
                      </li>
                      <li className="flex justify-between items-center  gap-1  text-sm font-normal   ">
                        <FaRegStar className="h-8 w-8 p-1" />
                        <Link to="/contact">My Reviews</Link>
                      </li>
                      <li className="flex justify-between items-center  gap-1  text-sm font-normal   ">
                        <LuUser className="h-8 w-8 p-1" />
                        <Link onClick={handleLogout}>Logout</Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
