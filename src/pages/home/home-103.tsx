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

function Home103() {
  const navigate = useNavigate();
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
    <div className="pt-[200px] relative  xl:min-h-[100vh] sm:min-h-[160vh] min-h-[100vh]  bg-[#F9D142]">
      <div
        ref={navRef}
        className={`${
          navOver
            ? "bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            : ""
        } fixed top-0 w-[100%] z-[100000000]`}
      >
        <Header type="3" />
      </div>

      <div ref={bodyRef}>
        <div className="flex sm:px-[100px] px-[40px] justify-between">
          <div className="sm:mr-[60px] sm:mt-[100px] mt-[40px] sm:w-[70%]">
            <h3 className="text-[#fff] font-[700] sm:text-[70px] text-[40px] sm:leading-[88.2px] leading-[55px]">
              Lifestyle,
            </h3>
            <h3 className="text-[#fff] font-[700] sm:text-[70px] text-[40px] sm:leading-[88.2px] leading-[55px]">
              Commerce,
            </h3>
            <h3 className="text-[#fff] font-[700] sm:text-[70px] text-[40px] sm:leading-[88.2px] leading-[55px]">
              Your best friend
            </h3>
            <p className="sm:mt-[42px] mt-[10px] text-[#5E3023] sm:text-[24px] text-[14px] leading-[36px]">
              Shopping deals, wallets, all you need in your pocket{" "}
            </p>

            <div className="mt-[30px]  flex sm:items-center sm:flex-row flex-col">
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

          <div className="relative bounce-animation sm:block hidden">
            <img alt="mockup" src={phone} className="rotate-[20deg]" />
            <div className="absolute top-[150px] left-[-50px] rotate-[5deg]">
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
        </div>

        <div
          className={`right-[100px] fixed bottom-[20px] sm:flex hidden items-center text-[#000]
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

export default Home103;
