export default function AboutHero() {
    return (
        <section className="mb-10 md:mb-12">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About Us
            </h1>

            {/* Subtext 1 */}
            <p className="text-white text-base sm:text-lg mb-4">
                Please read our privacy statement carefully as it describes how we collect, use, disclose and protect your information; including any nonpublic personal information.
            </p>

            {/* Subtext 2 */}
            <p className="text-white/70 text-sm sm:text-base">
                By downloading our app and signing up, you accept our terms and conditions of service.
            </p>
        </section>
    );
}
