import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import HomeProjectcard from "components/HomeProjectcard";

const Home1Page = () => {
  return (
    <>
      <div className="bg-pink-100 flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-row items-center justify-between md:px-5 px-[60px] py-6 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.32px] w-auto"
              size="txtBebasNeueRegular32"
            >
              ANNA CAFFIERO
            </Text>
            <div className="flex flex-col font-inter items-center justify-center w-auto">
              <ul className="flex flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-gray-500 tracking-[-0.48px]"
                  >
                    <Text size="txtInterMedium16">Work</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-gray-500 tracking-[-0.48px]"
                  >
                    <Text size="txtInterMedium16">About</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-gray-500 tracking-[-0.48px]"
                  >
                    <Text size="txtInterMedium16">Contact</Text>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 gap-20 items-center justify-start max-w-[1224px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start pb-[22px] w-[544px] sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="leading-[90.00%] md:text-5xl text-[101px] text-gray-500"
                  size="txtBebasNeueRegular101"
                >
                  <>
                    hi, i am <br />
                    ANNA CAFFIERO.
                  </>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[544px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  A software developer dedicated to developing accessible and
                  intuitive web and mobile applications.
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="bg-black-900 flex flex-row gap-3 h-[54px] md:h-auto items-center justify-center sm:pl-5 pl-6 pr-1.5 py-5 rounded-[27px] w-auto">
                  <Text
                    className="text-base text-white-A700 uppercase w-auto"
                    size="txtManropeBold16"
                  >
                    Contact Me
                  </Text>
                  <Img
                    className="h-[42px] w-[42px]"
                    src="images/img_circle.svg"
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
                    src="images/img_bxllinkedinsvg_gray_50.svg"
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
                    src="images/img_bxlgithubsvg.svg"
                    alt="bxlgithubsvg"
                  />
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
              <Img
                className="h-[700px] md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                src="images/img_bg.png"
                alt="bg"
              />
            </div>
          </div>
          <Line className="bg-gray-800 h-px mt-20 w-full" />
          <div className="font-manrope h-[2418px] sm:h-[2458px] md:h-[4097px] mt-[23px] md:px-5 ml-12 relative w-full">
            <Line className="absolute bg-gray-800 bottom-[1%] h-px inset-x-[0] mx-auto w-full" />
            <div className="absolute flex flex-col md:gap-10 gap-20 h-full inset-[0] items-start justify-start m-auto py-20 w-auto">
              <div id="projectsSection" className="flex flex-col gap-2 items-start justify-start w-[600px] md:w-full">
                <Text
                  className="md:text-5xl text-[76px] text-gray-500 w-auto"
                  size="txtBebasNeueRegular76">

                  Projects
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[600px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  Here are some of the selected projects that showcase my
                  passion for software development.
                </Text>
              </div>
              <List
                className="flex flex-col gap-[120px] items-start w-auto"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row gap-12 items-center justify-start max-w-[1224px] my-0 w-full">
                  <HomeProjectcard className="flex md:flex-1 flex-col h-[600px] md:h-auto items-center justify-start w-[600px] md:w-full" />
                  <div className="flex flex-1 flex-col gap-12 items-start justify-start w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 w-full"
                          size="txtManropeMedium32"
                        >
                          Airbnb Clone
                        </Text>
                        <Text
                          className="leading-[150.00%] md:max-w-full max-w-xl text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          Successfully launched a solo project: an Airbnb clone
                          with core features like intuitive search, detailed
                          listings, and streamlined booking. Key enhancements
                          include an interactive map for visual exploration,
                          responsive design for device flexibility, and unique
                          additions such as a user review system, elevating the
                          user experience.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-500 uppercase w-auto"
                          size="txtManropeSemiBold16"
                        >
                          Project Info
                        </Text>
                        <div className="border-b border-gray-800 border-solid flex flex-col items-end justify-center w-full">
                          <div className="border-gray-800 border-solid border-t flex flex-row gap-2 items-center justify-between py-4 w-full">
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Year
                            </Text>
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              2023
                            </Text>
                          </div>
                          <div className="border-gray-800 border-solid border-t flex flex-row gap-2 items-center justify-between py-4 w-full">
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Role
                            </Text>
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Fullstack Developer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 uppercase w-auto"
                          size="txtManropeBold16Black900"
                        >
                          See on Github
                        </Text>
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_bxlgithubsvg_black_900.svg"
                          alt="bxlgithubsvg"
                        />
                      </div>
                      <Line className="bg-black-900 h-0.5 w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-12 items-center justify-start max-w-[1224px] my-0 w-full">
                  <div className="bg-gray-900_01 flex md:flex-1 flex-col h-[600px] md:h-auto items-center justify-center p-14 md:px-10 sm:px-5 rounded-[12px] w-[600px] md:w-full">
                    <Img
                      className="h-[347px] md:h-auto my-[70px] object-cover rounded-[12px] w-full"
                      src="images/img_image10.png"
                      alt="imageTen"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-12 items-start justify-start w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 w-full"
                          size="txtManropeMedium32"
                        >
                          Mobile Banking App
                        </Text>
                        <Text
                          className="leading-[150.00%] md:max-w-full max-w-xl text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          Collaborated with a team of four to design, implement,
                          and ship to production a cutting-edge mobile banking
                          application. Our solution enables users to exchange
                          currencies and withdraw cash worldwide, significantly
                          reducing exchange fees. We focused on creating a
                          user-friendly interface, and real-time currency
                          conversion features, ensuring a seamless banking
                          experience. This project showcased our collective
                          expertise in developing fintech solutions that cater
                          to the needs of international travelers and global
                          citizens.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-500 uppercase w-auto"
                          size="txtManropeSemiBold16"
                        >
                          Project Info
                        </Text>
                        <div className="border-b border-gray-800 border-solid flex flex-col items-end justify-center w-full">
                          <div className="border-gray-800 border-solid border-t flex flex-row gap-2 items-center justify-between py-4 w-full">
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Year
                            </Text>
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              2023
                            </Text>
                          </div>
                          <div className="border-gray-800 border-solid border-t flex flex-row gap-2 items-center justify-between py-4 w-full">
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Role
                            </Text>
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Fullstack Developer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 uppercase w-auto"
                          size="txtManropeBold16Black900"
                        >
                          View project
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrow.svg"
                          alt="arrow"
                        />
                      </div>
                      <Line className="bg-black-900 h-0.5 w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-12 items-center justify-start max-w-[1224px] my-0 w-full">
                  <div className="bg-gray-900_01 flex md:flex-1 flex-col md:gap-10 gap-[94px] h-[600px] md:h-auto justify-start p-4 rounded-[12px] w-[600px] md:w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[99px] mr-[469px] rounded-[18px] text-center text-sm"
                      color="black_900_01"
                      size="xs"
                      variant="fill"
                    >
                      Challenge
                    </Button>
                    <Img
                      className="h-[306px] sm:h-auto mb-[131px] mx-auto object-cover rounded-[12px] w-[86%] md:w-full"
                      src="images/img_image9.png"
                      alt="imageNine"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-12 items-start justify-start w-full">
                    <div className="flex flex-col gap-8 h-[520px] md:h-auto items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 w-full"
                          size="txtManropeMedium32"
                        >
                          UberEats clone
                        </Text>
                        <Text
                          className="leading-[150.00%] md:max-w-full max-w-xl text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          Independently designed, implemented, and launched a
                          replica of UberEats, a food delivery application,
                          aimed at providing a seamless dining experience. This
                          project involved creating a user-friendly interface
                          for customers to browse local restaurants, place
                          orders, and track deliveries in real-time.
                          Additionally, I integrated features such as order
                          customization, ensuring a convenient and personalized
                          experience for users. By replicating the
                          functionalities of UberEats, I demonstrated my ability
                          to develop robust and intuitive mobile applications
                          that cater to the evolving needs of the food delivery
                          industry.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-500 uppercase w-auto"
                          size="txtManropeSemiBold16"
                        >
                          Project Info
                        </Text>
                        <div className="border-b border-gray-800 border-solid flex flex-col items-end justify-center w-full">
                          <div className="border-gray-800 border-solid border-t flex flex-row gap-2 items-center justify-between py-4 w-full">
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Year
                            </Text>
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              2024
                            </Text>
                          </div>
                          <div className="border-gray-800 border-solid border-t flex flex-row gap-2 items-center justify-between py-4 w-full">
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Role
                            </Text>
                            <Text
                              className="text-base text-gray-500 w-auto"
                              size="txtManropeMedium16"
                            >
                              Fullstack Developer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <div className="flex flex-row gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900 uppercase w-auto"
                            size="txtManropeBold16Black900"
                          >
                            See on Github
                          </Text>
                          <Img
                            className="h-[26px] w-[26px]"
                            src="images/img_bxlgithubsvg_black_900.svg"
                            alt="bxlgithubsvg"
                          />
                        </div>
                        <Line className="bg-black-900 h-0.5 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-bebasneue md:gap-10 items-start justify-between max-w-[1224px] mt-[77px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[101px] text-gray-500"
              size="txtBebasNeueRegular101"
            >
              About me
            </Text>
            <div className="flex flex-1 flex-col font-manrope items-start justify-start max-w-[704px] md:mt-0 mt-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] max-w-[704px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-500"
                  size="txtManropeMedium32"
                >
                  Belgian Full Stack Developer: An Economics Background with a
                  Tech Focus
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
            </div>
          </div>
          <div className="flex flex-col font-manrope gap-1 items-start justify-start mt-[26px] w-auto">
            <Text
              className="text-base text-black-900 uppercase w-auto"
              size="txtManropeBold16Black900"
            >
              <span className="text-black-900 font-manrope text-left font-bold">
                More{" "}
              </span>
              <span className="text-black-900 font-manrope text-left font-bold">
                about
              </span>
              <span className="text-black-900 font-manrope text-left font-bold">
                {" "}
                me
              </span>
            </Text>
            <Line className="bg-black-900 h-0.5 w-full" />
          </div>
          <div className="font-manrope sm:h-[1161px] md:h-[1459px] h-[771px] mt-[390px] md:px-5 relative w-full">
            <Line className="absolute bg-gray-800 h-px inset-x-[0] mx-auto top-[3%] w-full" />
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
                        placeholder="John Doe"
                        className="p-0 placeholder:text-black-900 text-left text-lg w-full"
                        wrapClassName="w-full"
                        size="xs"
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

export default Home1Page;
