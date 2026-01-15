import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import phone from "../../assets/images/phone-website.png";
import clothes from "../../assets/images/clothes.png";

const CARDS = Array(8).fill({
  title: "Cubana Men Coloured",
  image: clothes,
});

export default function CheckSection() {
  return (
    <section className="rounded-3xl bg-[#D7E7FE] p-6 sm:p-8 md:p-10 mt-10 md:mt-20">
      {/* ✅ Desktop: 2-column | Mobile: stacked */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        {/* Right Side (on desktop): Text + Carousel */}
        <div className="md:col-span-3 order-1 md:order-2 text-[#274B89] flex flex-col space-y-6">
          {/* Text Section */}
          <div className="flex flex-col space-y-3 text-center md:text-left order-1 md:order-1">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Check-in
            </p>
            <p className="text-sm sm:text-lg md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              to see special restaurant menu’s, best offers at supermarkets or
              use the check-in broadcast to see what’s happening around you up
              to 500m.
            </p>
          </div>

          {/* ✅ Phone image on mobile (below text) */}
          <div className="flex justify-center md:hidden order-2 md:order-1">
            <img
              src={phone}
              alt="Check-in phone"
              className="w-[75%] sm:w-[60%] h-auto object-contain drop-shadow-2xl transition-transform duration-500"
            />
          </div>

          {/* ✅ "100+ Check-ins near you" on mobile (below phone) */}
          <div className="bg-white rounded-full px-4 py-2 self-center md:self-start order-3 md:order-1">
            <p className="text-base">100+ Check-ins near you</p>
          </div>

          {/* ✅ Cards Carousel */}
          <div className="order-4 md:order-2 w-full">
            <Swiper
              spaceBetween={16}
              slidesPerView={2.5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              a11y={{ enabled: false }}
              modules={[Autoplay]}
              className="w-full"
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
            >
              {CARDS.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative rounded-2xl overflow-hidden h-[400px] shadow-lg border-4 border-[#9A9393]"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-sm sm:text-base font-bold">
                        {card.title}
                      </p>
                      <p className="text-xs sm:text-sm text-[#D0D5DD]">
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ✅ Left Side (desktop only): Phone */}
        <div className="md:col-span-2 hidden md:flex justify-center order-2 md:order-1">
          <img
            src={phone}
            alt="Check-in phone"
            className="w-[85%] md:w-[90%] h-auto object-contain -rotate-6 drop-shadow-2xl transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
