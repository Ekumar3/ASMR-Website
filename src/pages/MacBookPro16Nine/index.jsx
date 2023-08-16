import React from "react";

import { Button, Img, Text } from "components";

const MacBookPro16NinePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-spacegrotesk items-center justify-start mx-auto p-[397px] md:px-10 sm:px-5 w-full">
        <Img className="h-[130px]" src="images/img_asmr.svg" alt="asmr" />
        <Text
          className="mt-5 sm:text-[39px] md:text-[45px] text-[53px] text-white-A700"
          size="txtSpaceGroteskMedium53"
        >
          Login with Spotify
        </Text>
        <div className="md:h-[104px] h-[78px] my-[13px] relative right-10 w-[51%] sm:w-full">
          <Button className="absolute bg-black-900 border-2 border-solid border-white-A700 cursor-pointer font-light h-max inset-y-[0] leading-[normal] left-[285px] min-w-[101px] my-auto py-[7px] right-[0] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700">
            GO
          </Button>
          <Text
            className="absolute border-2 border-solid border-white-A700 h-full inset-[0] justify-center m-auto pl-[17px] sm:pr-5 pr-[35px] py-[7px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-max"
            size="txtSpaceGroteskLight48"
          >
            Username
          </Text>
        </div>
      </div>
    </>
  );
};

export default MacBookPro16NinePage;
