import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CommunitySection() {
  const swiperRef = useRef<any>(null);

  const slides = [
    {
      title: "Global Community",
      description:
        "The 2 rooms community connects. Join a room, complete tasks, cheer your peers on, win exclusive prizes, land a Spottr grant and host the most insane parties.",
      team1: { name: "Join Team White", bg: "bg-white", textColor: "text-white", btnBg: "bg-black", btnText: "text-white" },
      team2: { name: "Join Team Black", bg: "bg-black", textColor: "text-black", btnBg: "bg-white", btnText: "text-black" },
    },
    {
      title: "Trading Cards",
      description:
        "Yes. You read that right. Now you can chase trading cards from the brands you love, your favorite products and celebrities - only on Spottr",
        team1: { name: "Join Team White", bg: "bg-white", textColor: "text-white", btnBg: "bg-black", btnText: "text-white" },
        team2: { name: "Join Team Black", bg: "bg-black", textColor: "text-black", btnBg: "bg-white", btnText: "text-black" },
    },
    // {
    //   title: "Entrepreneurs’ Room",
    //   description:
    //     "Network with business founders, get insights from top mentors, and collaborate on ideas that push innovation forward.",
    //   team1: { name: "Join Startup Team", bg: "bg-white", textColor: "text-black", btnBg: "bg-black", btnText: "text-white" },
    //   team2: { name: "Join Investors Circle", bg: "bg-black", textColor: "text-white", btnBg: "bg-white", btnText: "text-black" },
    // },
  ];

  return (
    <section className="rounded-3xl bg-[#17171717] p-4 sm:p-8 gap-6 sm:gap-10 mt-10 relative overflow-hidden">
      {/* Arrows */}
      <div className="flex gap-3 z-10 justify-end mb-4 sm:mb-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        className="pb-6 sm:pb-10"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col space-y-10 sm:space-y-20">
              {/* Slide header */}
              <div className="text-white flex flex-col space-y-2 sm:space-y-3 justify-center items-center max-w-full sm:max-w-4xl mx-auto text-center">
                <p className="text-3xl sm:text-4xl md:text-6xl font-bold">{slide.title}</p>
                <p className="text-sm sm:text-lg md:text-xl leading-relaxed">{slide.description}</p>
              </div>

              {/* Teams */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full sm:w-[80%] mx-auto">
                <div
                  className={`${slide.team1.bg} p-6 sm:p-8 rounded-3xl flex justify-center items-end h-[350px] sm:h-[400px] md:h-[500px]`}
                >
                  <Button
                    text={slide.team1.name}
                    className={`${slide.team1.btnText} ${slide.team1.btnBg} p-2 px-4 sm:px-6 text-xs sm:text-sm font-light`}
                  />
                </div>
                <div
                  className={`${slide.team2.bg} p-6 sm:p-8 rounded-3xl flex justify-center items-end h-[350px] sm:h-[400px] md:h-[500px]`}
                >
                  <Button
                    text={slide.team2.name}
                    className={`${slide.team2.btnText} ${slide.team2.btnBg} p-2 px-4 sm:px-6 text-xs sm:text-sm font-light`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
