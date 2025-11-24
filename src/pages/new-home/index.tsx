import Navbar from "../../components/new-home-component/Navbar"
import Hero from "../../components/new-home-component/Hero"
import GlobeSection from "../../components/new-home-component/GlobeSection"
import BoringSection from "../../components/new-home-component/BoringSection"
import CheckSection from "../../components/new-home-component/CheckSection"
import BrandSection from "../../components/new-home-component/BrandSection"
import StorySection from "../../components/new-home-component/StorySection"
import Footer from "../../components/new-home-component/Footer"
import DynamicCardCarousel from "../../components/new-home-component/DynamicCard"
import CommunitySection from "../../components/new-home-component/CommunitySection"
import MultiRowDynamicCarousel from "../../components/new-home-component/MultiRowMixedCardsCarousel"

function Home() {
  return (
    <div className='bg-[#274B89]'>
      <div className="min-h-screen  md:pt-3 pb-9">
        <Navbar />
       
        <main className='mt-20'>
          <div className="max-w-7xl mx-auto">
            <Hero />
            <GlobeSection />
            <BoringSection />
            <div className=" px-5 md:px-0">
            <CheckSection />
            </div>
       


          </div>
          <BrandSection />
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <StorySection />
          </div>
          <MultiRowDynamicCarousel />
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <CommunitySection />
          </div>


          <DynamicCardCarousel />
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <Footer />

          </div>
        </main>
      </div>
    </div>

  )
}

export default Home
