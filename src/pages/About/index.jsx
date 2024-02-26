import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";

const AboutPage = () => {
  return (
    <>
      <div className="bg-pink-100 flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-row items-center justify-between md:px-5 px-[60px] py-6 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.32px] w-auto"
              size="txtBebasNeueRegular32"
            >
              Anna Caffiero
            </Text>
            <div className="flex flex-col font-manrope items-center justify-center w-auto">
              <ul className="flex flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list">
                <li>
                  <a href="javascript:" className="text-base text-gray-500">
                    <Text size="txtManropeMedium16">Work</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-base text-gray-500">
                    <Text size="txtManropeMedium16">About</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-base text-gray-500">
                    <Text size="txtManropeMedium16">Contact</Text>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1224px] mt-[139px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[101px] text-gray-500"
              size="txtBebasNeueRegular101"
            >
              About me
            </Text>
            <div className="flex flex-1 flex-col font-manrope gap-12 items-start justify-start max-w-[704px] md:mt-0 mt-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] max-w-[704px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-500"
                  size="txtManropeMedium32"
                >
                  Belgian Software Developer: An Economics Background with a
                  Tech Focus.{" "}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[704px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  <>
                    Based in Belgium but open to relocation, I am a full stack
                    developer eagerly seeking dynamic opportunities to challenge
                    and grow my skills. My background in Economics enriches my
                    approach to creating efficient and accessible software.
                    Driven by a passion for problem-solving, I&#39;m constantly
                    exploring new technologies, currently focusing on React.js
                    and Python. Outside of programming, I indulge in fitness,
                    fashion, and traveling, always on the lookout for new
                    experiences.
                  </>
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-end justify-start w-auto sm:w-full">
                <div className="bg-black-900_02 flex flex-row gap-3 h-[54px] md:h-auto items-center justify-center sm:pl-5 pl-6 pr-1.5 py-5 rounded-[27px] w-auto">
                  <Text
                    className="text-base text-black-900_01 uppercase w-auto"
                    size="txtManropeBold16Black90001"
                  >
                    <span className="text-white-A700 font-manrope text-left font-bold">
                      Download
                    </span>
                    <span className="text-black-900_01 font-manrope text-left font-bold">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-manrope text-left font-bold">
                      Resume
                    </span>
                  </Text>
                  <Img
                    className="h-[42px] w-[42px]"
                    src="images/img_circle_gray_50_02.svg"
                    alt="circle"
                  />
                </div>
                <Button
                  className="flex h-[54px] items-center justify-center w-[54px]"
                  shape="circle"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[26px]"
                    src="images/img_bxllinkedinsvg_white_a700.svg"
                    alt="bxllinkedinsvg"
                  />
                </Button>
                <Button
                  className="flex h-[54px] items-center justify-center w-[54px]"
                  shape="circle"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[26px]"
                    src="images/img_bxlgithubsvg_white_a700.svg"
                    alt="bxlgithubsvg"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="h-[700px] max-w-[1224px] mt-[93px] mx-auto w-full"
            src="images/img_image.svg"
            alt="image_One"
          />
          <div className="h-[428px] sm:h-[468px] md:h-[584px] mt-10 md:px-5 relative w-full">
            <div className="mt-10 md:px-5 w-full flex justify-between items-center">
            <div className="pl-10">
              <Text
                className="text-[76px] md:text-5xl text-gray-500" size="txtBebasNeueRegular76">

                My Capabilities
              </Text>
              </div>
              <div className="max-w-[600px] md:max-w-full text-right mr-10">
                <Text
                  className="leading-[150.00%] text-gray-500 text-lg mb-4" size="txtManropeRegular18">
                  <>
                    I&#39;m dedicated to continuously expanding my tech skills.
                    My expertise spans HTML, CSS, Python, JavaScript (React.js,
                    Node.js, Webpack), Ruby on Rails, Figma, Git, GitHub, SQL,
                    and Heroku, allowing me to deliver versatile and innovative
                    web development solutions.
                  </>
                </Text>
                <div className="flex flex-col items-start justify-start max-w-[704px] w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-[87%]">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold min-w-[124px] rounded-[28px] text-xl text-center uppercase"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        HTML
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[114px] rounded-[28px] text-xl text-center uppercase"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        CSS
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[175px] rounded-[28px] text-xl text-center uppercase"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        Javascript
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[146px] rounded-[28px] text-xl text-center uppercase"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        PYTHON
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-4/5 md:w-full">
                      <Button
                        className="cursor-pointer font-bold min-w-[196px] rounded-[28px] text-xl text-center uppercase"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        RUBY ON RAILS
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[112px] rounded-[28px] text-xl text-center uppercase"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        SQL
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[140px] rounded-[28px] text-xl text-center uppercase"
                        shape="round"
                        color="gray_800"
                        size="md"
                        variant="outline"
                      >
                        GITHUB
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="absolute bg-gray-800 bottom-[6%] h-px inset-x-[0] mx-auto w-full" />
          </div>
          <div className="font-manrope sm:h-[1270px] md:h-[1568px] h-[771px] mt-[499px] md:px-5 relative w-full">
            <Line className="absolute bg-gray-800 h-px inset-x-[0] mx-auto top-[1%] w-full" />
            <div className="absolute flex md:flex-col flex-row gap-6 h-full inset-[0] items-center justify-start m-auto max-w-[1224px] py-20 w-full">
              <div className="flex flex-1 flex-col gap-6 h-full items-start justify-between w-full">
                <div className="flex flex-col font-bebasneue gap-10 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="md:text-5xl text-[76px] text-gray-500 w-auto"
                      size="txtBebasNeueRegular76"
                    >
                      Let’s connect
                    </Text>
                    <div className="flex flex-col font-manrope gap-2 items-start justify-start w-auto">
                      <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtManropeRegular18"
                        >
                          Say hello at
                        </Text>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtManropeRegular18"
                          >
                            annacaffiero@gmail.com
                          </Text>
                          <Line className="bg-gray-500 h-px w-full" />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-lg w-auto"
                          size="txtManropeRegular18"
                        >
                          For more info, here’s my
                        </Text>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-gray-500 text-lg w-auto"
                            size="txtManropeRegular18"
                          >
                            resume
                          </Text>
                          <Line className="bg-gray-500 h-px w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_bxllinkedinsvg_black_900.svg"
                      alt="bxllinkedinsvg_One"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_bxlgithubsvg_black_900.svg"
                      alt="bxlgithubsvg_One"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_bxllinkedinsvg.svg"
                      alt="bxllinkedinsvg_Two"
                    />
                  </div>
                </div>
                <Text
                  className="text-base text-gray-400 w-auto"
                  size="txtManropeMedium16Gray400"
                >
                  © 2024 Anna Caffiero
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtManropeMedium16"
                      >
                        Name
                      </Text>
                      <Input
                        name="frameFive"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[51px] w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtManropeMedium16"
                      >
                        Email
                      </Text>
                      <Input
                        name="frameFive_One"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[51px] w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtManropeMedium16"
                      >
                        Subject
                      </Text>
                      <Input
                        name="frameFive_Two"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-[51px] w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtManropeMedium16"
                      >
                        Message
                      </Text>
                      <TextArea
                        className="bg-gray-300 border-0 gap-2.5 px-4 py-3 rounded w-full"
                        name="frameFive_Three"
                        placeholder=""
                      ></TextArea>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[54px] min-w-[140px] text-base text-center uppercase"
                    shape="round"
                    color="black_900"
                    size="md"
                    variant="fill"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
