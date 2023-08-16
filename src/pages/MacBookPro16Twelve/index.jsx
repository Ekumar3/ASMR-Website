import React from "react";

import { Button, Img, Input, Text } from "components";

const MacBookPro16TwelvePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-spacegrotesk items-center justify-start mx-auto p-[125px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[180px] items-center justify-start max-w-[1351px] mb-[61px] mx-auto w-full">
          <Img className="h-[130px]" src="images/img_asmr.svg" alt="asmr" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[36%] md:w-full">
              <div className="flex flex-row gap-[17px] items-center justify-start w-[65%] md:w-full">
                <Text
                  className="sm:text-[39px] md:text-[45px] text-[53px] text-white-A700"
                  size="txtSpaceGroteskMedium53"
                >
                  Track URL
                </Text>
                <Img
                  className="h-[39px] w-[39px]"
                  src="images/img_question.svg"
                  alt="question"
                />
              </div>
              <div className="h-[78px] relative w-full">
                <Button className="absolute border-2 border-solid border-white-A700 cursor-pointer font-light h-full inset-y-[0] leading-[normal] min-w-[101px] my-auto py-2 right-[0] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700">
                  GO
                </Button>
                <Input
                  name="price"
                  placeholder="SAMPLE URL"
                  className="font-light justify-center leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700 sm:pr-5 sm:text-xl text-2xl text-left text-white-A700 w-full"
                  wrapClassName="absolute border-2 border-solid border-white-A700 inset-[0] m-auto pl-[15px] pr-[35px] py-[23px] w-full"
                ></Input>
              </div>
            </div>
            <div className="h-[490px] md:mt-0 mt-[5px] relative w-[56%] md:w-full">
              <Text
                className="bg-white-A700 border-2 border-solid border-white-A700 h-[77px] justify-center mb-[-2px] pb-[15px] pl-[17px] sm:pr-5 pr-[35px] pt-5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[570px] z-[1]"
                size="txtSpaceGroteskMedium32"
              >
                SONG TITLE
              </Text>
              <Button className="bg-white-A700 border-2 border-solid border-white-A700 cursor-pointer font-medium leading-[normal] mb-[-2px] min-w-[164px] ml-auto mr-[11px] py-[18px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center z-[1]">
                MATCH %
              </Button>
              <div className="h-[415px] md:h-[77px] mt-auto mx-auto pr-[11px] w-full">
                <div className="h-[415px] m-auto w-[99%] md:w-full">
                  <Text
                    className="border-2 border-solid border-white-A700 mb-[-2px] pl-[17px] sm:pr-5 pr-[35px] py-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 z-[1]"
                    size="txtSpaceGroteskLight32"
                  >
                    SONG TITLE 01
                  </Text>
                  <div className="h-[340px] md:h-[77px] mt-auto mx-auto w-full">
                    <div className="h-[340px] m-auto w-full">
                      <Text
                        className="border-2 border-solid border-white-A700 mb-[-2px] pl-[17px] sm:pr-5 pr-[35px] py-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 z-[1]"
                        size="txtSpaceGroteskLight32"
                      >
                        SONG TITLE 02
                      </Text>
                      <div className="h-[265px] md:h-[77px] mt-auto mx-auto w-full">
                        <div className="h-[265px] m-auto w-full">
                          <Text
                            className="border-2 border-solid border-white-A700 mb-[-2px] pl-[17px] sm:pr-5 pr-[35px] py-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 z-[1]"
                            size="txtSpaceGroteskLight32"
                          >
                            SONG TITLE 03
                          </Text>
                          <div className="h-[190px] md:h-[77px] mt-auto mx-auto w-full">
                            <div className="h-[190px] m-auto w-full">
                              <Text
                                className="border-2 border-solid border-white-A700 mb-[-2px] pl-[17px] sm:pr-5 pr-[35px] py-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 z-[1]"
                                size="txtSpaceGroteskLight32"
                              >
                                SONG TITLE 04
                              </Text>
                              <div className="h-[115px] md:h-[77px] mt-auto mx-auto w-full">
                                <div className="h-[115px] m-auto w-full">
                                  <Text
                                    className="border-2 border-solid border-white-A700 mb-[-2px] pl-[17px] sm:pr-5 pr-[35px] py-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 z-[1]"
                                    size="txtSpaceGroteskLight32"
                                  >
                                    SONG TITLE 05
                                  </Text>
                                  <div className="flex mt-auto mx-auto w-full">
                                    <Text
                                      className="border-2 border-solid border-white-A700 my-auto pl-[17px] sm:pr-5 pr-[35px] pt-[13px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                      size="txtSpaceGroteskLight32"
                                    >
                                      SONG TITLE 06
                                    </Text>
                                    <Text
                                      className="border-2 border-solid border-white-A700 ml-[-2px] my-auto pt-3.5 sm:px-5 px-[35px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 z-[1]"
                                      size="txtSpaceGroteskLight32"
                                    >
                                      00%
                                    </Text>
                                  </div>
                                </div>
                                <Button className="absolute border-2 border-solid border-white-A700 cursor-pointer font-light leading-[normal] min-w-[164px] py-[18px] right-[0] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[0]">
                                  00%
                                </Button>
                              </div>
                            </div>
                            <Button className="absolute border-2 border-solid border-white-A700 cursor-pointer font-light leading-[normal] min-w-[164px] py-[18px] right-[0] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[0]">
                              00%
                            </Button>
                          </div>
                        </div>
                        <Button className="absolute border-2 border-solid border-white-A700 cursor-pointer font-light leading-[normal] min-w-[164px] py-[18px] right-[0] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[0]">
                          00%
                        </Button>
                      </div>
                    </div>
                    <Button className="absolute border-2 border-solid border-white-A700 cursor-pointer font-light leading-[normal] min-w-[164px] py-[18px] right-[0] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[0]">
                      00%
                    </Button>
                  </div>
                </div>
                <Button className="absolute border-2 border-solid border-white-A700 cursor-pointer font-light leading-[normal] min-w-[164px] py-[18px] right-[3%] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[0]">
                  00%
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookPro16TwelvePage;
