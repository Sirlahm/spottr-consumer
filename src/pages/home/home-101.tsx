import React, { useEffect, useRef, useState } from "react";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
import sneakers from "../../assets/sneakers.svg";
import rating from "../../assets/rating.svg";
import man from "../../assets/man.svg";
import lady from "../../assets/lady.svg";
import guy from "../../assets/guy.svg";
import map from "../../assets/map.svg";
import { useNavigate } from "react-router-dom";

import Globe from "../../components/Globe/globe";
import Header from "../../components/Header";
import { elementsOverlap } from "../../utils/elements-overlap";

function Home101() {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const bottomNavRef = useRef(null);
  const bodyRef = useRef(null);
  const navRef = useRef(null);

  const [isOver, setIsOver] = useState(false);
  const [navOver, setNavOver] = useState(false);

  window.addEventListener("scroll", (e) => {
    setIsOver(elementsOverlap(cardRef.current, bottomNavRef.current));
    setNavOver(elementsOverlap(bodyRef.current, navRef.current));
  });
  useEffect(() => {
    setIsOver(elementsOverlap(cardRef.current, bottomNavRef.current));
    setNavOver(elementsOverlap(bodyRef.current, navRef.current));
  }, [isOver, navOver]);
  return (
    <div className="relative bg-[#102954] xl:min-h-[100vh] sm:min-h-[160vh] min-h-[100vh] overflow-x-hidden pt-[200px]">
      <div
        ref={navRef}
        className={`${
          navOver
            ? "bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            : ""
        } fixed top-0 w-[100%] z-[100000000]`}
      >
        <Header />
      </div>
      <div ref={bodyRef}>
        <div className="max-[620px]:mt-[30px] flex max-[620px]:relative justify-between items-center sm:pl-[100px] max-[620px]:px-[40px] max-[620px]">
          <div className="z-[20]">
            <h3 className="text-[#fff] font-[700] sm:text-[98px] text-[43px] sm:leading-[96.04px] leading-[40px]">
              Never feel
            </h3>
            <h3 className="mt-[15px] text-[#E97A35] font-[700] sm:text-[98px] text-[43px] sm:leading-[96.04px] leading-[40px]">
              lost in a city
            </h3>
            <p className="mt-[29px] text-[#fff] sm:text-[24px] text-[14px] leading-[36px]">
              Discover the best food, people and events around the world{" "}
            </p>

            <div className="mt-[30px] flex sm:items-center sm:flex-row flex-col">
              <button className="w-fit active:opacity-70 hover:opacity-70 bg-[#fff] px-[36px] py-[13px] rounded-[33px] text-[#384C6D] font-[700] text-[18px]">
                Get Started
              </button>

              <div className="flex items-center sm:mt-[0px] mt-[40px]">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://play.google.com/store/apps/details?id=com.spottr.android.app")
                  }
                  className="active:opacity-70 hover:opacity-70 sm:ml-[56px] mr-[41px] flex items-center text-[#fff] text-[16px] font-[600]"
                >
                  <img alt="playstore" src={playstore} className="mr-[4px]" />
                  Google Play
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://apps.apple.com/ng/app/spottr/id1608332735")
                  }
                  className="active:opacity-70 hover:opacity-70 flex items-center text-[#fff] text-[16px] font-[600]"
                >
                  <img alt="appstore" src={appstore} className="mr-[4px]" />
                  App Store
                </button>
              </div>
            </div>
          </div>
          <div className="sm:hidden absolute ">
            {/* <Globe /> */}
            <img alt="globe" src={map} />
          </div>
          <div className="mr-[-150px] relative sm:block hidden">
            <Globe width={760} height={800} />

            {/* CARD 1 */}
            <div className="move-hor absolute top-[50px] w-fit px-[13px] pt-[18px] pb-[20px] flex bg-[#fff] rounded-[3px]">
              <img alt="shoe" src={sneakers} />

              <div className="ml-[13px]">
                <h4 className="leading-[19.19px] text-[15.74px] font-[700] text-[#061E48]">
                  Nike sneakers
                </h4>
                <p className="text-[#1569FA] text-[12.24px] font-[700]">
                  Fashion
                </p>
                <p className="mt-[2px] text-[#061E48] text-[10.49px] font-[700]">
                  Coker & Sons
                </p>

                <div className="flex items-center mt-[8.89px] ">
                  <p className="text-[#AAB4C3] font-[700] text-[12px]">
                    Lagos, Nigeria
                  </p>

                  <span className="ml-[42px] bg-[#DDE6F6] font-[700] text-[9.74px] text-[#274B89] rounded-[3.48px]">
                    ₦10,000.00
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              ref={cardRef}
              className="move-hor absolute bottom-[200px] w-fit py-[10px] px-[21px] bg-[#fff] rounded-[3px]"
            >
              <div className="flex">
                <div className="mr-[18px]">
                  <img alt="man" src={man} />
                  <img alt="rating" src={rating} className="mt-[-6px]" />
                </div>
                <div>
                  <h5 className="font-[700] text-[#061E48] text-[12px] mb-[6px]">
                    Burna boy concert
                  </h5>
                  <p className="mb-[18px] text-[10px] text-[#274B89]">
                    Available Tickets: 100{".  "}Unit: Tix
                  </p>

                  <div className="flex items-center">
                    <button className="text-[#929AA7] text-[8px] font-[700] mr-[97px]">
                      Search
                    </button>
                    <button className="text-[#929AA7] text-[8px] font-[700]">
                      Hold for more option
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-[6.03px] h-[1.5px]" />
              <div className="flex items-center justify-between">
                <p className="font-[700] text-[7px] text-[#929AA7] ">
                  Lagos, Nigeria {".  03 Aug 2020: 01:05PM"}
                </p>

                <button className="bg-[#C2E0FF] px-[8px] py-[6px] rounded-[3px] text-[#274B89] font-[600]">
                  ₦4,800,000
                </button>
              </div>
            </div>

            <img
              className="absolute top-[120px] rotate right-[300px]"
              alt="guy"
              src={guy}
            />
            <img
              className="absolute top-[350px] rotate  "
              alt="lady"
              src={lady}
            />
          </div>
        </div>

        <div
          ref={bottomNavRef}
          className={`right-[100px] fixed bottom-[20px] sm:flex hidden items-center ${
            isOver ? "text-[#274B89]" : "text-[#fff]"
          }`}
        >
          <button
            onClick={() => navigate("/about")}
            className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mr-[22px]"
          >
            About
          </button>
          <button
            onClick={() => navigate("/terms")}
            className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mr-[22px]"
          >
            Terms
          </button>
          <button
            onClick={() => navigate("/privacy")}
            className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mr-[22px]"
          >
            Privacy
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://business.spottr.app")
            }
            className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mr-[22px]"
          >
            Business
          </button>
          <button
            onClick={() => navigate("/contact-us")}
            className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home101;
