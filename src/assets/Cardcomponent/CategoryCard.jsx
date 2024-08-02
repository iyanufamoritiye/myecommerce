import React, { useState } from "react";
import PropTypes from "prop-types";

const CategoryCard = ({ SvgIcon, categories, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick();
  };

  return (
    <div
      className={`border border-gray-400 w-44 flex flex-col p-6 items-center justify-between h-36 ${
        isActive ? "bg-red-600 text-white" : "hover:bg-red-600 hover:text-white"
      } transition-colors duration-300 cursor-pointer`}
      onClick={handleClick}
    >
      {React.cloneElement(SvgIcon, {
        className: isActive ? "stroke-white" : "stroke-current",
      })}

      <h2 className="text-base font-normal">{categories}</h2>
    </div>
  );
};

CategoryCard.propTypes = {
  SvgIcon: PropTypes.element.isRequired,
  categories: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CategoryCard.defaultProps = {
  onClick: () => {},
};

export default CategoryCard;
