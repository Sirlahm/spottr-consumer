import logo from "../assets/spottr-logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header({
  type,
  setMenuOpen,
}: {
  type?: string;
  setMenuOpen?: (data?: any) => void;
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className={`sm:px-[100px] px-[40px] sm:pb-[50px] pt-[50px] pb-[30px] ${
        openMenu && type === "4"
          ? "bg-gray-400  opacity-m rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img alt="logo" src={logo} />
          <h3 className="logo ml-[13.13px] text-[25px] text-[#fff] font-[700]">
            Spottr
          </h3>
        </button>

        <input
          placeholder="Search for something"
          className="sm:block hidden w-[50%] px-[15px] h-[40px] text-[14px] rounded-full bg-gray-50  opacity-m text-gray-600  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border-[1px]  outline-none"
        />
        <div className="sm:flex hidden items-center">
          <button
            onClick={() =>
              (window.location.href = "https://web.spottr.app/login")
            }
            className="active:opacity-30 hover:opacity-30 text-[#fff] text-[18px]"
          >
            Login
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://web.spottr.app/join")
            }
            className="active:opacity-70 hover:opacity-70 ml-[60px] bg-[#fff] px-[36px] py-[13px] rounded-[33px] text-[#384C6D] font-[700] text-[18px]"
          >
            Sign up
          </button>
        </div>

        {!openMenu && (
          <button
            onClick={() => {
              setOpenMenu(true);
              setMenuOpen && setMenuOpen(true);
            }}
            className="sm:hidden block"
          >
            <img alt="menu" src={menu} className="w-[30px] h-[30px]" />
          </button>
        )}
        {openMenu && (
          <button
            onClick={() => {
              setOpenMenu(false);
              setMenuOpen && setMenuOpen(false);
            }}
            className="sm:hidden block"
          >
            <img alt="menu" src={close} className="w-[30px] h-[30px]" />
          </button>
        )}
        {openMenu && (
          <div
            className={`overflow-y-scroll text-[#fff] py-[50px] ${
              type === "2"
                ? "bg-2"
                : type === "3"
                ? "bg-[#F9D142]"
                : type === "4"
                ? "bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
                : "bg-[#102954]"
            } fixed top-[120px] left-0 w-[100vw] h-[100vh] sm:hidden flex flex-col items-center opacity-m `}
          >
            <button
              onClick={() => {
                setOpenMenu(false);
                setMenuOpen && setMenuOpen(false);
                navigate("/about");
              }}
              className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mb-[40px]"
            >
              About
            </button>
            <button
              onClick={() => {
                setOpenMenu(false);
                setMenuOpen && setMenuOpen(false);
                navigate("/terms");
              }}
              className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mb-[40px]"
            >
              Terms
            </button>
            <button
              onClick={() => {
                setOpenMenu(false);
                setMenuOpen && setMenuOpen(false);
                navigate("/privacy");
              }}
              className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mb-[40px]"
            >
              Privacy
            </button>
            <button
              onClick={() => {
                window.location.href = "https://business.spottr.app";
                setOpenMenu(false);
                setMenuOpen && setMenuOpen(false);
              }}
              className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mb-[40px]"
            >
              Business
            </button>
            <button
              onClick={() => {
                setOpenMenu(false);
                setMenuOpen && setMenuOpen(false);
                navigate("/contact-us");
              }}
              className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]"
            >
              Contact
            </button>

            <button
              onClick={() => {
                window.location.href = "https://web.spottr.app/login";

                setOpenMenu(false);
                setMenuOpen && setMenuOpen(false);
              }}
              className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mt-[80px]"
            >
              Login
            </button>

            <button
              onClick={() => {
                window.location.href = "https://web.spottr.app/join";
                setOpenMenu(false);

                setMenuOpen && setMenuOpen(false);
              }}
              className="mb-[100px] active:opacity-70 hover:opacity-70 mt-[40px] bg-[#fff] px-[36px] py-[13px] rounded-[33px] text-[#384C6D] font-[700] text-[18px] w-fit"
            >
              Sign up
            </button>
          </div>
        )}
      </div>

      {!openMenu && (
        <input
          placeholder="Search for something"
          className="w-[100%] sm:hidden mt-[20px] px-[15px] h-[40px] text-[14px] rounded-full bg-gray-50  opacity-m text-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border-[1px]  outline-none"
        />
      )}
    </header>
  );
}

export default Header;
