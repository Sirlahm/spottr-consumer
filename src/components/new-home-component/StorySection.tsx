import Button from "./Button";
import lady from "../../assets/images/white-lady.png";
import item1 from "../../assets/images/item.jpg";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/img3.jpg";
import star from "../../assets/images/star.svg";
import bigstar from "../../assets/images/big-star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type RecItem = {
  title: string;
  brand: string;
  price: string;
  image: string;
};

const recommendations: RecItem[] = [
  { title: "Spottr Active Wear", brand: "Soundwave", price: "₦150,000.00", image: item1 },
  { title: "U-Fitness Weekly Plan", brand: "Soundwave", price: "₦150,000.00", image: item2 },
  { title: "Zenlife Essentials", brand: "Soundwave", price: "₦150,000.00", image: item3 },
  { title: "Zero Sugar Parfait", brand: "Soundwave", price: "₦150,000.00", image: item1 },
];

// 3 stacked carousels, each with 3–5 slides (dummy data)
const miniCarousels: RecItem[][] = Array.from({ length: 3 }).map((_, idx) => {
  const count = 3 + ((idx + 1) % 3); // 3,4,5
  const pool = [item1, item2, item3, item2, item1];
  const titles = [
    "I Just bought this speaker, It’s perfect for remote work presentations and video calls. The portable design allows easy transport between meetings while maintaining excellent sound quality for professional communication.",
    "I Just bought this speaker, It’s perfect for remote work presentations and video calls. The portable design allows easy transport between meetings while maintaining excellent sound quality for professional communication.",
    "I Just bought this speaker, It’s perfect for remote work presentations and video calls. The portable design allows easy transport between meetings while maintaining excellent sound quality for professional communication.",
    "I Just bought this speaker, It’s perfect for remote work presentations and video calls. The portable design allows easy transport between meetings while maintaining excellent sound quality for professional communication.",
    "I Just bought this speaker, It’s perfect for remote work presentations and video calls. The portable design allows easy transport between meetings while maintaining excellent sound quality for professional communication.",
  ];
  return Array.from({ length: count }).map((__, i) => ({
    title: titles[i % titles.length],
    brand: "Soundwave",
    price: "₦150,000.00",
    image: pool[i % pool.length],
  }));
});

function StoryCard() {
  return (
    <div className="relative rounded-2xl bg-[#383838] text-white overflow-hidden border border-[#F5F5F5] shadow-xl">
      {/* header */}
      <div className="flex items-center gap-3 px-5 py-3">
        <img src={lady} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">Sarah Johnson</span>
          <span className="text-xs text-white/60">2h ago</span>
        </div>
      </div>

      {/* body */}
      <div className="px-5 py-3 text-xs text-white/90 leading-relaxed">
        I just bought this speaker. It’s perfect for remote work presentations and video calls. The portable design allows easy transport between meetings while maintaining excellent sound quality for professional communication.
      </div>

      {/* recommendations */}
      <div className="px-5 pb-5">
        <p className="text-sm font-medium text-white mb-3">Recommendations ({recommendations.length})</p>
        <div className="space-y-2">
          {recommendations.map((rec, i) => (
            <div key={i} className="flex items-center gap-3  bg-[#464748D1] p-3 rounded-md ">
              <img src={rec.image} alt={rec.title} className="w-10 h-10 rounded-md object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">{rec.title}</p>
                <p className="text-[11px] text-white leading-tight">{rec.brand}</p>
              </div>
              <span className="text-[11px] text-white">{rec.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniStoryCard({ data }: { data: RecItem }) {
  return (
    <div className="rounded-2xl bg-[#383838] text-white p-4">
      <div className="flex items-center gap-3">
        <img src={lady} alt="avatar" className="w-7 h-7 rounded-full object-cover" />
        <div className="flex-1">
          <p className="text-sm font-semibold leading-tight">Sarah Johnson</p>
          <p className="text-[11px] text-white/70 leading-tight">2h ago</p>
        </div>
      </div>
      <div className="mt-3 text-xs text-white/80 leading-relaxed">{data.title}</div>
      <div className="mt-2 flex items-center gap-2 bg-[#464748D1] p-2 rounded-md mb-5">
        <img src={data.image} alt={data.title} className="w-12 h-12 rounded-md object-cover" />
        <div className="flex flex-col">
          <span className="text-[11px]">{data.brand}</span>
          <span className="text-[11px] text-white/80">{data.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function StorySection() {
  return (
    <section className="rounded-3xl bg-[#9374FF] p-6 md:p-16  md:mt-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-5  gap-10 items-center">
        {/* Left side */}
        <div className="text-white md:col-span-2 relative">
          <img src={star} alt="spottr" className="absolute top-[-100px] left-0 hidden md:block" />
          <div className="flex flex-col gap-2">
          <p className="font-extrabold text-4xl sm:text-5xl md:text-7xl leading-snug sm:leading-tight lg:leading-[50px] text-center md:text-left">
              Tell your Story
            </p>

            <div className=" mt-3 md:mt-6 text-base max-w-md text-center md:text-left">
              <p>Inspire a mutual to hit their weight loss target or get
            paid to recommend chill summer cruise for other
              users and get paid for</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center md:justify-start">
            <Button text="Build your audience" className="bg-white text-[#274B89] px-6 py-3" />
          </div>  
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-5 md:col-span-3 relative">
        <img src={bigstar} alt="spottr" className="absolute top-0 left-0 z-20 hidden md:block" />
          <div className="col-span-4 z-10">
            <StoryCard />
          </div>
          {/* Right column: 3 vertical carousels with pagination dots */}
          <div className=" hidden md:flex flex-col gap-5 md:col-span-3  md:mt-[-100px] z-30">
            {miniCarousels.map((carousel, idx) => (
              <div key={idx}>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  className="bg-[#383838] border border-[#F5F5F5] rounded-2xl"
                >
                  {carousel.map((c, i) => (
                    <SwiperSlide key={i}>
                      <MiniStoryCard data={c} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}