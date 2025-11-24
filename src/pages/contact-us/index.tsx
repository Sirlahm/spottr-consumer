import React, { useState } from "react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import "./contact.css";
import Pattern from "../../assets/pattern.png";

import { Fade } from "react-awesome-reveal";

import { useContactUs } from "../../hooks/useContactUs";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const { contactus, isLoading, error } = useContactUs(
    {
      email,
      message,
      name,
    },
    setName,
    setEmail,
    setMessage
  );

  const handleContactUs = (e: any) => {
    e.preventDefault();
    contactus();
  };

  console.log(error);

  const navigate = useNavigate();

  // ${
  //   navOver
  //     ? "bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
  //     : ""
  //     }
  return (
    <>
      <div className="relative xl:min-h-[100vh] sm:min-h-[160vh] min-h-[100vh] overflow-x-hidden pt-[200px]">
        <div
          className={`
         bg-[#102954]
        fixed top-0 w-[100%] z-[100000000]`}
        >
          <Header />
        </div>
        <div className="sm:px-[15%] px-[10%] mt-[40px] z-[40] relative">
          <div />
          <div className="z-[100]">
            <Fade delay={500}>
              <h2 className="sm:text-[60px] text-[35px] font-[700] text-[#102954]">
                Contact Us
              </h2>
              <section className="sm:text-[24px] text-[16px] mt-[1rem] leading-[2]">
                Mail: hello@theSpottrapp.com
              </section>
              <section className="sm:text-[24px] text-[16px] leading-[2]">
                Tel: +234(0)8073336660
              </section>
              <p className="font-[600] mt-[40px] sm:text-[24px] text-[16px] text-[#102954]">
                Or Type your message here
              </p>
            </Fade>

            <Fade delay={750}>
              <form
                action=""
                className="mt-5 z-[1000]"
                onSubmit={handleContactUs}
              >
                <div className="shadow-wrapper mb-[30px]">
                  <div className="w-[100%] ">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="relative drop-shadow-xl sm:text-[24px] text-[14px] sm:h-[100px] h-[50px] sm:px-[40px] px-[20px]  w-[100%] outline-none"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="shadow-wrapper mb-[30px]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      placeholder="Your email"
                      className="drop-shadow-xl sm:text-[24px] text-[14px] sm:h-[100px] h-[50px] sm:px-[40px] px-[20px]
                        w-[100%]  outline-none"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="sm:h-[340px] h-[200px] bg-[#fff] drop-shadow-xl mb-[100px] flex flex-col justify-between">
                  <div className="w-[100%]">
                    <textarea
                      className="w-[100%]   sm:text-[24px] text-[14px] sm:min-h-[100px] min-h-[50px] sm:p-[40px] p-[20px] outline-none"
                      placeholder="Your Message"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end w-[100%] p-[30px] sm:text-[16px] text-[14px] text-[#102954] font-[600]">
                    <button className="w-100 button-section">
                      {isLoading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              </form>
            </Fade>
          </div>
          <div />
        </div>
      </div>
      {/* <Footer /> */}
      <img
        src={Pattern}
        alt="Pattern"
        className="absolute right-0 sm:top-0 top-[20px] z-[1] w-[100%]"
      />

      <div
        // ref={bottomNavRef}
        className={`z-[200] right-[100px] fixed bottom-[20px] sm:flex hidden items-center
        text-[#274B89] 
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
          onClick={() => (window.location.href = "https://business.spottr.app")}
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
    </>
  );
};

export default Contact;
