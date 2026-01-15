export default function ContactHero() {
    return (
        <section className="text-center mb-12 md:mb-16">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white leading-tight">
                Reach our <span className="text-[#FF6B4A]">Help Desk</span> for support
            </h1>

            {/* Subtext */}
            <p className="text-white/80 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                Questions? Need assistance? Our dedicated support team is here to<br className="hidden sm:block" />
                help you every step of the way
            </p>
        </section>
    );
}
