import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[27px]" };
const variants = {
  fill: {
    black_900_01: "bg-black-900_01 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
    gray_900: "bg-gray-900",
  },
  outline: { gray_800: "border border-gray-800 border-solid text-gray-500" },
};
const sizes = { xs: "p-2", sm: "p-3.5", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["black_900_01", "black_900", "gray_900", "gray_800"]),
};

export { Button };
