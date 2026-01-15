import { useState } from "react";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import contactLady from "../../assets/images/contact-lady.png";
import Button from "./Button";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        agreePolicy: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]:
                type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 mb-16">
            {/* Left Side - Image with Social Icons */}
            <div className="relative">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 relative  h-[650px]">
                    <img
                        src={contactLady}
                        alt="Customer support representative"
                        className="w-full h-full object-cover"
                    />

                    {/* Social Media Icons Overlay */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 md:gap-6">
                        <a
                            href="#facebook"
                            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#274B89]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#274B89] transition-all duration-200"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="#twitter"
                            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#274B89]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#274B89] transition-all duration-200"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="#linkedin"
                            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#274B89]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#274B89] transition-all duration-200"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="#youtube"
                            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#274B89]/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#274B89] transition-all duration-200"
                            aria-label="YouTube"
                        >
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="backdrop-blur-sm rounded-2xl md:rounded-3xl p-3 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Get in touch
                </h2>
                <p className="text-white/70 text-sm mb-6">
                    Send us a message by filling the forms below.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            required
                        />
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="abc@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        required
                    />

                    {/* Subject */}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject???"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        required
                    />

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Tell us a little bit about the problem you are encountering"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                        required
                    />

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            name="agreePolicy"
                            id="agreePolicy"
                            checked={formData.agreePolicy}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 rounded border-white/30 bg-white/20 text-[#274B89] focus:ring-2 focus:ring-white/50 cursor-pointer"
                            required
                        />
                        <label
                            htmlFor="agreePolicy"
                            className="text-white/80 text-sm cursor-pointer"
                        >
                            You agree to our friendly{" "}
                            <a href="#privacy" className="underline hover:text-white">
                                privacy policy
                            </a>
                            .
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                        text="Send message"
                        className="w-full bg-[#143772] text-white px-6 py-3.5 text-base font-semibold hover:bg-[#0f2d5a] shadow-lg mt-10 "
                    />
                </form>
            </div>
        </section>
    );
}
