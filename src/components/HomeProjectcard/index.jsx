import React from "react";

import { Button, Img } from "components";

const HomeProjectcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900_01 flex flex-col md:gap-10 gap-[73px] h-[600px] md:h-auto justify-start p-4 rounded-[12px] w-[600px] md:w-full">
          <Button
            className="cursor-pointer font-manrope font-medium min-w-[145px] mr-[423px] rounded-[18px] text-center text-sm"
            color="black_900_01"
            size="xs"
            variant="fill"
          >
            {props?.dynamicproperty1}
          </Button>
          <Img
            className="h-[347px] sm:h-auto mb-[111px] mx-auto object-cover rounded-[12px] w-[86%] md:w-full"
            src="images/img_work.png"
            alt="work"
          />
        </div>
      </div>
    </>
  );
};

HomeProjectcard.defaultProps = { dynamicproperty1: "Conceptual Work" };

export default HomeProjectcard;
