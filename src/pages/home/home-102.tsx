import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import phone from "../../assets/phone.svg";
import ConcertCard from "../../components/ConcertCard";
import lady from "../../assets/lady.svg";
import guy from "../../assets/guy.svg";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
import { elementsOverlap } from "../../utils/elements-overlap";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function Home102() {
  const navigate = useNavigate();

  const [isOver, setIsOver] = useState(false);
  const cardRef = useRef(null);
  const bottomNavRef = useRef(null);
  const bodyRef = useRef(null);
  const navRef = useRef(null);

  const [navOver, setNavOver] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  window.addEventListener("scroll", (e) => {
    setIsOver(elementsOverlap(cardRef.current, bottomNavRef.current));
    setNavOver(elementsOverlap(bodyRef.current, navRef.current));
  });
  useEffect(() => {
    setIsOver(elementsOverlap(cardRef.current, bottomNavRef.current));
    setNavOver(elementsOverlap(bodyRef.current, navRef.current));
  }, [isOver, navOver]);
  return (
    <div
      className={`relative xl:min-h-[100vh] sm:min-h-[160vh] min-h-[100vh]  bg-2 sm:pt-[180px] pt-[220px] ${
        menuOpened ? "overflow-y-hidden" : ""
      }`}
    >
      <div
        ref={navRef}
        className={` ${
          navOver && !menuOpened
            ? "bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            : "bg-2-h"
        } fixed top-0 w-[100%] z-[100000000]`}
      >
        <Header type="2" setMenuOpen={setMenuOpened} />
      </div>

      <div ref={bodyRef}>
        <div className="flex sm:px-[100px] px-[40px] justify-between">
          <div className="relative bounce-animation sm:block hidden">
            <img alt="mockup" src={phone} />
            <div className="absolute top-[150px] right-[-50px] rotate-[-5deg]">
              <ConcertCard />
            </div>

            <img
              className="absolute top-[0px] rotate right-[100px]"
              alt="guy"
              src={guy}
            />
            <img
              className="absolute bottom-[150px] right-[20px] rotate  "
              alt="lady"
              src={lady}
            />
            <img
              className="absolute bottom-[90px] rotate"
              alt="guy"
              src={guy}
            />
            <img
              className="absolute top-[350px] rotate  "
              alt="lady"
              src={lady}
            />
          </div>

          <div className="sm:ml-[60px] sm:mt-[60px] mt-[40px] sm:w-[70%]">
            <h3 className="text-shadow text-[#fff] font-[700] sm:text-[70px] text-[40px] sm:leading-[88.2px] leading-[55px]">
              Enjoy the best
            </h3>
            <h3 className="text-shadow text-[#fff] font-[700] sm:text-[70px] text-[40px] sm:leading-[88.2px] leading-[55px]">
              mobile experience
            </h3>
            <h5 className="text-shadow-m sm:mt-[21px] mt-[12px] text-[#167987] font-[700] sm:text-[40px] text-[20px] leading-[49px]">
              As you wander through the city{" "}
            </h5>
            <p className="text-shadow-sm sm:mt-[42px] mt-[12px] text-[#fff] sm:text-[24px] text-[18px] sm:leading-[36px] leading-[30px]">
              Discover the best food, people and events around the world{" "}
            </p>

            <div
              ref={cardRef}
              className="mt-[30px] flex sm:items-center sm:flex-row flex-col"
            >
              <button className="active:opacity-70 hover:opacity-70 bg-[#fff] px-[36px] py-[13px] rounded-[33px] text-[#384C6D] font-[700] text-[18px] w-fit">
                Get Started
              </button>

              <div className="flex items-center  sm:mt-[0px] mt-[40px]">
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
        </div>

        <div
          ref={bottomNavRef}
          className={`right-[100px] fixed bottom-[20px] sm:flex hidden items-center text-[#fff] ${
            isOver ? "opacity-30" : "opacity-100"
          }
        `}
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

export default Home102;
