import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Check-in",
    description: "Check-in to your favorite spots to find the treasures in the city",
  },
  {
    title: "Take tasks",
    description: "Brands make the city tick. Find, engage, win prizes from your favorites"
  },
  {
    title: "Location calls",
    description: "These broadcasts notify you of happy hours, chill events and great stuff",
  },
  {
    title: "Recommend",
    description: "Help others discover the city and earn for yourself everyday",
  },
];

function FeatureRow() {
  return (
    <section className="flex justify-center py-10 px-4 sm:px-6 md:px-10">
      <div className="bg-gradient-to-b from-[#0e2347] to-[#274B89] border border-gray-500 rounded-3xl w-full max-w-6xl">
        <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-white">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 text-left"
            >
              <div className="bg-white/10 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-[#9AD7F3]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BoringSection() {
  return (
    <section className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 py-10 md:py-20">
      {/* Heading */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <p className="font-extrabold text-4xl sm:text-5xl md:text-7xl text-white leading-tight">
          Your Boring Meter
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
          How boring can you be, player? Score points as you explore the city
          whether <br className="hidden md:block" /> alone or with friends.
        </p>
      </div>

      {/* Features */}
      <FeatureRow />
    </section>
  );
}
