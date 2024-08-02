import React from "react";
import { BiSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import Qrcode from "../images/Qrcode.png";
import Appstore from "../images/Appstore.png";
import GooglePlay from "../images/GooglePlay.png";
import { TiSocialFacebook } from "react-icons/ti";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-black max-w-screen md:w-screen p-0- ">
      <div className=" flex gap-16 p-12 text-start xs:flex-col   md:grid md:grid-cols-3  py-16  m-0 max-w-screen justify-center  text-white  ">
        <div className="justify-start">
          <h2 className=" text-2xl font-bold leading-6 mb-8">Exclusive</h2>
          <p className="text-xl font-medium leading-7 mb-8">Subscribe</p>
          <p className="text-base font-normal mb-3">
            Get 10% off your first orde
          </p>

          <div className="relative bg-inherit text-white ">
            <BiSend className="absolute right-4 bottom-3  " />
            <input
              type="text"
              placeholder="Enter your email  "
              className=" border bg-inherit placeholder:text-white   text-white border-white pl-6 py-2   "
            />
          </div>
        </div>
        <div>
          <h2 className=" text-xl  font-medium  leading-7 mb-8  ">Support</h2>
          <p className="text-base font-normal leading-6   mb-4">
            <a href="https://www.google.com/maps/search/?api=1&query=111+Bijoy+sarani,+Dhaka,+DH+1515,+Bangladesh">
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </a>
          </p>
          <p className="text-base font-normal mb-4">
            <a href="mailto:example@exclusive@gmail.com ">
              exclusive@gmail.com
            </a>
          </p>

          <p className="text-base font-normal">
            <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
          </p>
        </div>
        <div>
          <h2 className=" text-xl  font-medium  leading-7 mb-8  ">Account</h2>
          <ul className="text-base font-normal flex flex-col gap-4">
            <li>
              <Link to="#"> My Account</Link>
            </li>
            <li>
              <p>
                <Link to="#">Login / Register</Link>
              </p>
            </li>
            <li>
              <Link>Cart</Link>
            </li>
            <li>
              <Link>Wishlist</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className=" text-xl  font-medium  leading-7 mb-8  ">
            Quick Link
          </h2>
          <ul className="text-base font-normal flex flex-col gap-4">
            <li>
              <Link Link to="#">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link Link to="#">
                Terms Of Use
              </Link>
            </li>

            <li>
              <Link ink to="#">
                FAQ
              </Link>
            </li>

            <li>
              <Link Link to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-2xl font-bold leading-6 mb-8">Download App</h2>
          <p className="text-sm text-gray-400 mb-4">
            Save $3 with App New User Only
          </p>
          <div className=" flex flex-row gap-2 mb-4  ">
            <img src={Qrcode} alt="" />
            <div className="flex flex-col gap-2">
              <img src={GooglePlay} alt="" />
              <img src={Appstore} alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <TiSocialFacebook className="w-6 h-6" />
            <LuTwitter className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <BiLogoLinkedin className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className=" flex justify-center -base xs:text-xs  gap-2 items-center text-center border-t-2 p-4 border-t-gray-800 ">
        <FaRegCopyright className="text-gray-800 text-center font-medium" />
        <span className="text-gray-800 font-medium">
          Copyright Rimel 2022. All right reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
