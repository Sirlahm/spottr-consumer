import React from "react";
import rating from "../assets/rating.svg";
import man from "../assets/man.svg";

function ConcertCard() {
  return (
    <div className="move-hor w-fit py-[10px] px-[21px] bg-[#fff] rounded-[3px]">
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
  );
}

export default ConcertCard;
