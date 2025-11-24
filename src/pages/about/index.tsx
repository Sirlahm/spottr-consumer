import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { elementsOverlap } from "../../utils/elements-overlap";
import Globe from "../../components/Globe/globe";

import sideDot from "../../assets/side-dots.svg";
import arrow from "../../assets/arrow.svg";
import pattern from "../../assets/pattern.svg";
import cartoon from "../../assets/cartoon.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

import "animate.css/animate.min.css";

function About() {
  const bodyRef = useRef(null);
  const navRef = useRef(null);

  const [navOver, setNavOver] = useState(false);

  window.addEventListener("scroll", (e) => {
    setNavOver(elementsOverlap(bodyRef.current, navRef.current));
  });
  useEffect(() => {
    setNavOver(elementsOverlap(bodyRef.current, navRef.current));
  }, [navOver]);
  return (
    <div className="relative bg-[#102954] min-h-[100vh] overflow-x-hidden pt-[200px]">
      <div
        ref={navRef}
        className={`${
          navOver ? "bg-[#102954]" : ""
        } fixed top-0 w-[100%] z-[100000000]`}
      >
        <Header />
      </div>
      {/* VALUE */}
      <div ref={bodyRef}>
        <div className="relative sm:px-[100px] px-[20px] sm:py-[80px] py-[40px] text-[#fff] font-[700]">
          <h6 className="sm:text-[24px] text-[16px] mb-[24px] leading-[66.64px]">
            OUR VALUE
          </h6>
          <h3 className="sm:text-[68px] text-[36px] sm:leading-[66.64px] leading-[50px] mb-[181px]">
            Helping you find the best product, location, event & business deals
            as you wander through a city{" "}
          </h3>

          <img
            alt="icon"
            src={sideDot}
            className="absolute left-0 bottom-[94px]"
          />
        </div>

        <div className=" bg-[#fff]">
          <AnimationOnScroll animateIn="animate__backInLeft">
            <div className="relative sm:px-[100px] px-[20px] sm:py-[203px] py-[50px] text-[#384C6D] font-[700]">
              <h6 className="sm:text-[24px] text-[16px] mb-[24px] leading-[66.64px]">
                NEVER MISS THAT DEAL
              </h6>
              <h3 className="sm:text-[68px] text-[36px] sm:leading-[66.64px] leading-[50px] ">
                Close transaction deals anywhere and anytime and 0.2s fast with
                our multicurrency wallet for fiat & crypto{" "}
              </h3>

              <img
                alt="icon"
                src={sideDot}
                className="absolute right-0 bottom-[160px]"
              />
              <img
                alt="icon"
                src={sideDot}
                className="absolute right-0 bottom-[23px]"
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className=" bg-[#102954]">
          <AnimationOnScroll animateIn="animate__backInRight">
            <div className="max-h-[100vh] overflow-y-hidden relative flex flex-col items-center sm:px-[100px] px-[20px] sm:py-[203px] py-[50px] text-[#fff] font-[700]">
              <h3 className="sm:text-[68px] text-[36px] text-center mb-[24px] leading-[66.64px]">
                Where we are… after all, SpottR
              </h3>

              <div className="mb-[-600px] sm:block hidden">
                <Globe width={1032} height={1088.32} />
              </div>
              <div className="mb-[-200px] sm:hidden block">
                <Globe />
              </div>
              <img
                alt="icon"
                src={sideDot}
                className="absolute left-0 bottom-[160px]"
              />
            </div>
          </AnimationOnScroll>
        </div>

        <div className="bg-[#fff]">
          <AnimationOnScroll animateIn="animate__backInLeft">
            <div className="relative flex flex-col items-center sm:px-[100px] px-[20px] sm:py-[203px] py-[50px] text-[#384C6D] font-[700]">
              <h3 className="sm:text-[68px] text-[36px] text-center text-center leading-[66.64px] ">
                Want to stay in the loop?{" "}
              </h3>

              <label className="mb-[83px] rounded-[8.87px] sm:text-[24px] text-[14px] mt-[82px] flex items-center border-[1px] border-[#E6E6E6] sm:h-[100px] h-[50px] sm:w-[70%] w-[100%]">
                <input
                  type="email"
                  className="outline-none sm:px-[52px] px-[20px] flex-1"
                  placeholder="Type your email here"
                />

                <button className="sm:px-[36px] px-[15px] font-[700] text-[#384C6D] border-l-[1px] border-l-[#929AA7]">
                  Subscribe
                </button>
              </label>

              <button className="active:opacity-50 hover:opacity-50 text-[#384C6D] sm:text-[24px] text-[14px] font-[700]">
                Read all news here {">>"}
              </button>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="w-[100%]">
          <div className="flex items-center max-[620px]:justify-between sm:py-[49px] py-[20px] sm:px-[100px] px-[20px] bg-[#ECF7FF]">
            <h3 className="text-[#102954] sm:mr-[50.73px] font-[700] sm:text-[80px] text-[30px] leading-[78.4px]">
              For Business
            </h3>
            <img alt="arrow" src={arrow} className="max-[620px]:w-[24px]" />
          </div>
          <div className="relative max-h-[100vh] w-[100%] sm:py-[145px] py-[40px] flex flex-col items-center overflow-y-hidden">
            <div className="relative w-[80%] flex flex-col items-end bg-[#fff] rounded-[35px] py-[30px] px-[60px]">
              <img
                alt="running"
                src={cartoon}
                className="absolute top-[-90px] left-[-150px] sm:block hidden"
              />

              <div className="flex flex-col items-center sm:max-w-[494.65px] max-w-[100%]">
                <h5 className="text-center sm:text-[48px] text-[20px] font-[700] text-[#384C6D] leading-[47.04px]">
                  Ready to discover the best deals
                </h5>

                <button className="sm:px-[51px] px-[20px] sm:h-[69px] h-[45px] mt-[14.25px] bg-[#EB8A4E] rounded-[33px] text-[#fff]">
                  Get Started
                </button>
              </div>
            </div>
            <img
              alt="pattern"
              src={pattern}
              className="absolute top-[-110px] right-[-10px] sm:block hidden"
            />
            <img
              alt="pattern"
              src={pattern}
              className="absolute bottom-[-200px] left-[0px] rotate-180 sm:block hidden"
            />

            <div
              className={`absolute bottom-[33px] right-[100px] sm:flex hidden justify-end items-center text-[#fff]`}
            >
              <button className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mr-[22px]">
                About
              </button>
              <button className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mr-[22px]">
                Terms
              </button>
              <button className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mr-[22px]">
                Privacy
              </button>
              <button className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mr-[22px]">
                Business
              </button>
              <button className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
