import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Trophy, Users, Clock, ArrowUpRight } from "lucide-react";
import pokemon from "../../assets/images/pokemon.png";
import cup from "../../assets/images/cup.svg";

// --- Card component ---
interface BrandCardProps {
  image: string;
  topBg: string;
  bottomBg: string;
  title: string;
  description: string;
  tokens?: number;
  slots?: number;
  timeLeft?: string;
}

function BrandCard({
  image,
  topBg,
  bottomBg,
  title,
  description,
  tokens = 150,
  slots = 34,
  timeLeft = "02:33min left",
}: BrandCardProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-[#3567E0] w-full max-w-sm mx-auto">
      {/* Top section */}
      <div
        className="relative flex items-center justify-center p-6 h-[220px] sm:h-[240px] md:h-[260px]"
        style={{ backgroundColor: topBg }}
      >
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#FFF6E2] text-[#FFB211] px-3 py-1 rounded-full text-[10px] sm:text-xs shadow-sm">
          <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Ongoing Contest Reward</span>
        </div>

        <img
          src={image}
          alt={title}
          className="w-[150px] sm:w-[180px] md:w-[200px] h-auto object-contain"
        />
      </div>

      {/* Bottom section */}
      <div className="relative p-4 sm:p-6 text-white" style={{ backgroundColor: bottomBg }}>
        {/* Stats */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-5 mb-3">
          <div className="flex items-center gap-2 text-white/90">
            <span className="w-3 h-3 rounded-full bg-[#FF4B4B]" />
            <span className="text-xs sm:text-sm">{tokens} Cliqtokens</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Users className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Slots: {slots}</span>
          </div>
          <div className="flex items-center gap-2 text-[#FF6A5C] font-semibold">
            <Clock className="w-4 h-4" />
            <span className="text-xs sm:text-sm">{timeLeft}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">{description}</p>

        {/* CTA */}
        <button className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center shadow-md">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

// --- BrandSection with two Swipers ---
export default function BrandSection() {
  const cards = [
    { topBg: "#EBD5D1", bottomBg: "#6F59F6" },
    { topBg: "#D8F3DC", bottomBg: "#2D6A4F" },
    { topBg: "#FFE3E3", bottomBg: "#FF6F91" },
    { topBg: "#D7E7FE", bottomBg: "#274B89" },
    { topBg: "#FFF3B0", bottomBg: "#3D405B" },
    { topBg: "#D8F3DC", bottomBg: "#2D6A4F" },
    { topBg: "#FFE3E3", bottomBg: "#FF6F91" },
  ];

  return (
    <section className="p-6 sm:p-8 mt-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Text */}
        <div className="text-white flex flex-col space-y-3 text-center md:text-left md:w-[70%]">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold">Brand contests</p>
          <p className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto md:mx-0">
            Now you can earn while you engage with your favorite brands. Unlock
            previews to save a seat before everyone else and share with your
            friends.
          </p>
        </div>

        {/* Trophy image */}
        <div className=" hidden md:flex justify-center md:justify-start">
          <img
            src={cup}
            alt="Brand contest trophy"
            className="w-[120px] sm:w-[150px] md:w-[180px] object-contain"
          />
        </div>
      </div>

      {/* FIRST SWIPER (moves right) */}
      <div className="mb-10">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {cards.map((c, idx) => (
            <SwiperSlide key={`top-${idx}`}>
              <BrandCard
                image={pokemon}
                topBg={c.topBg}
                bottomBg={c.bottomBg}
                title="Help us decide what..."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing."
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SECOND SWIPER (moves left) */}
      <div className="hidden md:block">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {cards.map((c, idx) => (
            <SwiperSlide key={`bottom-${idx}`}>
              <BrandCard
                image={pokemon}
                topBg={c.topBg}
                bottomBg={c.bottomBg}
                title="Help us decide what..."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing."
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
