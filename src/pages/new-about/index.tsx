import Navbar from "../../components/new-home-component/Navbar"
import Footer from "../../components/new-home-component/Footer"
import AboutHero from "../../components/new-home-component/AboutHero"
import AboutAccordions from "../../components/new-home-component/AboutAccordions"

function About() {
    return (
        <div className='bg-[#274B89]'>
            <div className="min-h-screen md:pt-3 pb-9">
                <Navbar />

                <main className='mt-10'>
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <AboutHero />
                        <AboutAccordions />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 md:px-0 mt-20">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default About
