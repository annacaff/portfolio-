import React from "react";

const sizeClasses = {
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeBold16Black90001: "font-bold font-manrope",
  txtManropeBold16: "font-bold font-manrope",
  txtManropeMedium32: "font-manrope font-medium",
  txtManropeBold16Black900: "font-bold font-manrope",
  txtBebasNeueRegular101: "font-bebasneue font-normal",
  txtManropeMedium16Gray400: "font-manrope font-medium",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeMedium16: "font-manrope font-medium",
  txtBebasNeueRegular32: "font-bebasneue font-normal",
  txtBebasNeueRegular76: "font-bebasneue font-normal",
  txtInterMedium16: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
