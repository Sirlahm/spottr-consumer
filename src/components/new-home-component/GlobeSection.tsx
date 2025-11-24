import { useState } from "react";
import { Play, X } from "lucide-react";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Image4 from "../../assets/images/image4.jpg";
import Image5 from "../../assets/images/image5.jpg";
import Image6 from "../../assets/images/image6.jpg";
import Image7 from "../../assets/images/image7.jpg";
import Image8 from "../../assets/images/image8.jpg";
import Image9 from "../../assets/images/image9.jpg";
import Image10 from "../../assets/images/image10.jpg";
import Image11 from "../../assets/images/image11.jpg";
import Image12 from "../../assets/images/image12.jpg";
import Image13 from "../../assets/images/image13.jpg";
import WorldGlobe from "./Globe";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl bg-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video Player */}
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-[220px] sm:h-[350px] md:h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default function GlobeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center h-auto md:h-[900px] overflow-hidden px-4 md:px-10 lg:px-20 py-5 md:py-0">
      {/* 🌍 Globe */}
      <div className="relative hidden md:block -translate-x-[130px] -translate-y-[100px]">
        <WorldGlobe width={800} height={800} rotateSpeed={1} />
      </div>

      {/* Mobile Globe (smaller) */}
      <div className="block md:hidden mb-10">
        <WorldGlobe width={320} height={320} rotateSpeed={1} />
      </div>

      {/* 💎 Floating Card Section */}
      <div className="w-full md:w-auto md:absolute md:top-[15%] flex justify-center">
        <div className="bg-[#2F2F2F]/95 backdrop-blur-md px-6 sm:px-10 md:px-12 py-8 sm:py-10 md:py-12 rounded-2xl text-white grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center shadow-lg w-full  mt-[-230px] md:mt-0">
          {/* LEFT SIDE */}
          <div className="md:col-span-2 text-left flex flex-col gap-5 order-1 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
              <span className="text-[#FEC3C7]">Discover.</span>{" "}
              <span className="text-[#9AD7F3]">Play.</span>{" "}
              <span className="text-[#6BDFDA]">Earn.</span>
            </h2>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base max-w-md">
              Chase trading cards, follow your creators who know the city,
              join a global team, or find top brands and mega fairs.
            </p>
            <Button
              text="Watch the videos"
              className="bg-white text-[#274B89] px-5 sm:px-6 py-3 self-start text-sm sm:text-base"
              onClick={openModal}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-3 grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-1.5 order-2 md:order-2">
            {/* Row 1 */}
            {[Image1, Image2, Image3].map((img, i) => (
              <div key={i} className="h-28 sm:h-36 md:h-40">
                <img
                  src={img}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            ))}
            <div className="h-28 sm:h-36 md:h-40"/>

            {/* Row 2 */}
            <div className="h-28 sm:h-36 md:h-40">
              <img src={Image5} className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="h-28 sm:h-36 md:h-40">
              <img src={Image6} className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="h-28 sm:h-36 md:h-40 flex justify-center items-center">
              <button
                onClick={openModal}
                className="bg-[#D9D9D9] flex justify-center items-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full hover:scale-105 transition-transform"
              >
                <Play className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-[#FC752C]" />
              </button>
            </div>
            <div className="h-28 sm:h-36 md:h-40">
              <img src={Image7} className="object-cover w-full h-full rounded-2xl" />
            </div>

            {/* Row 3 */}
            {[Image8, Image9, Image10, Image4].map((img, i) => (
              <div key={i + 8} className="h-28 sm:h-36 md:h-40">
                <img
                  src={img}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            ))}

            {/* Row 4 */}
            <div className="h-28 sm:h-36 md:h-40">
              <img src={Image11} className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="h-28 sm:h-36 md:h-40 flex justify-center items-center">
              <button
                onClick={openModal}
                className="bg-[#D9D9D9] flex justify-center items-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full hover:scale-105 transition-transform"
              >
                <Play className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-[#FC752C]" />
              </button>
            </div>
            <div className="h-28 sm:h-36 md:h-40">
              <img src={Image12} className="object-cover w-full h-full rounded-2xl" />
            </div>
        
            <div className="h-28 sm:h-36 md:h-40 hidden md:block">
              <img src={Image13} className="object-cover w-full h-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* 🎥 Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </section>
  );
}
