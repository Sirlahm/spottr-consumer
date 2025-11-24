import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import img1 from "../../assets/images/img.jpg";
import img2 from "../../assets/images/img1.jpg";
import img3 from "../../assets/images/img2.png";
import img4 from "../../assets/images/img3.jpg";
import img5 from "../../assets/images/img4.png";

import Button from "./Button";

type Card = {
    id: number;
    title: string;
    image: string;
    widthPx: number;
    // optional per-card height if you want per-card heights
    heightPx?: number;
};

const SAMPLE_IMAGES = [
    // you can replace these with your own local images (e.g. import pokemon from ...)
    img1,
    img2,
    img3,
    img4,
    img5,
];

function makeCards(total = 30): Card[] {
    const widths = [180, 200, 250, 380, 320, 260, 370, 500];
    const titles = [
        "The top 10 cars for Nigerian roads",
        "Best streetwear brands in Lagos",
        "Tastiest burritos in Abuja",
        "Inside Nigeria’s sneaker culture",
        "Ice cream spots you can’t miss",
        "Best nightlife experiences in Nigeria",
        "Hidden food gems",
        "Weekend road trips",
        "Budget cars for Nigerian roads",
        "Luxury driving spots",
    ];

    return Array.from({ length: total }).map((_, i) => ({
        id: i + 1,
        title: titles[i % titles.length],
        image: SAMPLE_IMAGES[i % SAMPLE_IMAGES.length],
        widthPx: widths[Math.floor(Math.random() * widths.length)],
        heightPx: 220, // change if you want mixed heights per card
    }));
}

/**
 * MultiRowDynamicCarousel
 * - 3 rows
 * - each row: slidesPerView: "auto", slides have inline width in px (card.widthPx)
 * - autoplay continuous (delay: 0 + big speed) + freeMode for smooth non-snapping
 */
export default function MultiRowDynamicCarousel({
    totalCards = 30,
    rows = 2,
}: {
    totalCards?: number;
    rows?: number;
}) {
    const allCards = makeCards(totalCards);

    // split into `rows` subarrays (evenly)
    const chunkSize = Math.ceil(allCards.length / rows);
    const rowsData = Array.from({ length: rows }).map((_, r) =>
        allCards.slice(r * chunkSize, r * chunkSize + chunkSize)
    );

    return (
        <div className="py-8 px-6 mt-10">
            <div className="max-w-[1400px] mx-auto space-y-6">
                {rowsData.map((rowCards, rowIndex) => {
                    // alternate direction for each row
                    const reverse = rowIndex % 2 === 1;

                    return (
                        <div key={rowIndex} className="relative">
                            {/* optional left/right fade to hint there's more */}
                            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10"
                                style={{ background: "linear-gradient(90deg, rgba(33,52,91,1), rgba(33,52,91,0))" }} />
                            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10"
                                style={{ background: "linear-gradient(270deg, rgba(33,52,91,1), rgba(33,52,91,0))" }} />

                            <Swiper
                                modules={[Autoplay, FreeMode]}
                                spaceBetween={16}
                                slidesPerView={"auto"}
                                loop={true}
                                freeMode={{
                                    enabled: true,
                                    sticky: false,
                                }}
                                // continuous motion: delay 0 and large speed
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    reverseDirection: reverse,
                                }}
                                speed={rowIndex === 1 ? 18000 : 12000} // optionally make the middle row slower/faster
                                className="py-4"
                            >
                                {rowCards.map((card) => (
                                    <SwiperSlide
                                        key={card.id}
                                        // force the slide width via inline style so it never expands to full width
                                        style={{
                                            width: `${card.widthPx}px`,
                                            height: `${card.heightPx ?? 220}px`,
                                        }}
                                        className="shrink-0"
                                    >
                                        <article
                                            className="relative rounded-2xl overflow-hidden h-full flex items-end p-4"
                                            style={{
                                                backgroundImage: `url(${card.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            {/* overlay gradient for readable text */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                            <h3 className="relative text-white font-bold text-xl md:text-2xl leading-snug max-w-full">
                                                {card.title}
                                            </h3>
                                        </article>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-16">
            <Button
                text="Visit Our Blog"
                className="bg-white text-[#274B89] text-xl md:text-2xl px-10 py-3  md:px-20 md:py-5"
            />
            </div>
          
        </div>
    );
}
