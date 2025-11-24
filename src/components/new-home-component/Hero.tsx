import lady from "../../assets/images/white-lady.png";
import lady2 from "../../assets/images/lady2.png";

export default function Hero() {
  return (
    <section className="flex flex-col gap-3 px-6 md:px-0">
      {/* Tagline */}
      <div className="bg-white rounded-full px-3 py-1 self-start">
        <p className="text-[#274B89] text-xs sm:text-sm md:text-base font-medium">
          Discover, Play & Earn
        </p>
      </div>

      {/* Main Heading */}
      <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white leading-[1.1] md:leading-[80px] mt-4">
        The city z’now in <br className="hidden sm:block" />
        your pocket
      </h1>

      {/* Subtext */}
      <div className="flex flex-col gap-2 mt-5 max-w-xl">
        <p className="text-white font-semibold text-base sm:text-lg">
          Fancy a Brand?
        </p>
        <p className="text-white text-sm sm:text-base leading-relaxed">
          Get instant alerts when you are close to them and get rewarded <br className="hidden md:block" />
          for interacting with them.
        </p>
      </div>

      {/* Loved by Many */}
      <div className="flex flex-row items-center gap-5 md:gap-3 mt-6 bg-[#17171733] md:bg-[#17171721] rounded-full px-4 sm:px-6 py-2 md:self-start">
        <p className="text-white text-sm sm:text-base font-medium">
          Loved by many
        </p>
        <div className="flex -space-x-3 sm:-space-x-4">
          <img
            src={lady2}
            alt="User 1"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
          />
          <img
            src={lady}
            alt="User 2"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
          />
          <img
            src={lady2}
            alt="User 3"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
          />
          <img
            src={lady}
            alt="User 4"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
          />
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#143772] flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
            +5
          </div>
        </div>
      </div>
    </section>
  );
}
