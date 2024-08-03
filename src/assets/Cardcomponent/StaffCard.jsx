import React from "react";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

const StaffCard = ({ imageSrc, name, position, ...props }) => {
  return (
    <div className="w-[370px] xs:w-full ">
      <img
        src={imageSrc}
        alt="saff"
        className=" w-full h-[430px] rounded-t-md  object-cover"
      />
      <div className="mt-6">
        <div className="flex flex-col items-start gap-1">
          {name && (
            <span className="text-3xl font-medium text-gray-950"> {name}</span>
          )}

          {position && (
            <span className="text-base font-normal text-gray-950">
              {position}
            </span>
          )}
        </div>
        <div className="flex mt-2 mb-4 gap-4">
          <LuTwitter className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
          <BiLogoLinkedin className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
