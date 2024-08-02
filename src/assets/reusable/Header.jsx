import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { MdOutlineShoppingCart, MdOutlineCancel } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
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

  return (
    <div className=" w-screen ">
      <div className="text-sm flex gap-2 justify-end py-4 px-24 bg-black">
        <div className="flex jus gap-4 text-center justify-end w-3/4 ">
          <p className="font-normal text-white ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button
            className="   underline decoration-gray-300  text-white  
        font-semibold  -border-b-2 border-b-white  "
          >
            ShopNow
          </button>
        </div>
        <div className="w-1/4 f flex justify-end   ">
          <button
            className=" flex ml-8 items-center underline   decoration-gray-300  text-white  
        font-semibold -border-b-2 border-b-white"
          >
            English <IoIosArrowDown className="h-6 w-6 " />
          </button>
        </div>
      </div>
      <div className="flex  gap-32  pt-8 pb-3 border-b px-24 border-b-gray-300">
        <h1 className="  text-2xl font-bold">Exclusive</h1>
        <div className=" flex justify-between w-full   ">
          <nav className="font-normal text-lg ">
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

          <div className=" flex gap-4   items-center   ">
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
              <div className="relative">
                <LuUser
                  onClick={toggleMenu}
                  className={`h-8 w-8 p-1 rounded-full border border-white ${
                    isOpen ? "bg-red-700 text-white" : ""
                  } hover:bg-red-700 hover:text-white`}
                />
                {isOpen && (
                  <nav className="px-4  pt-4    absolute right-0 top-8 text-white w-[225px]  h-[208px] z-50 bg-gradient-to-r from-purple-400 to-gray-700">
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
