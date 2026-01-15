import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
    id: string;
    title: string;
    content: {
        heading?: string;
        text: string | string[];
    }[];
}

const accordionData: AccordionItem[] = [
    {
        id: "introduction",
        title: "Introduction",
        content: [
            {
                heading: "1. Introduction",
                text: "Spottr is a productivity platform available online and through mobile applications.",
            },
            {
                heading: "1.1 Purpose",
                text: "The Spottr app helps users to find economic opportunities globally by joining the main ecosystem. Opportunities include, but is not limited to, goods & services for sale, jobs, business opportunities, events, information and other wealth creating opportunities.",
            },
        ],
    },
    {
        id: "access",
        title: "Access",
        content: [
            {
                heading: "2. Access",
                text: [
                    "Users can access Spottr through our mobile applications or web platform.",
                    "Account creation requires valid email address and acceptance of terms.",
                    "Users must maintain the confidentiality of their account credentials.",
                ],
            },
        ],
    },
    {
        id: "disclaimer",
        title: "Disclaimer",
        content: [
            {
                heading: "3. Disclaimer",
                text: [
                    "Spottr provides the platform 'as is' without warranties of any kind.",
                    "We do not guarantee the accuracy or completeness of user-generated content.",
                    "Users engage with opportunities at their own risk.",
                ],
            },
        ],
    },
    {
        id: "service-withdrawal",
        title: "Service withdrawal",
        content: [
            {
                heading: "4. Service Withdrawal",
                text: [
                    "Spottr reserves the right to modify or discontinue services at any time.",
                    "Users may close their accounts at any time through account settings.",
                    "Upon service withdrawal, certain features may become unavailable.",
                ],
            },
        ],
    },
];

export default function AboutAccordions() {
    const [openAccordion, setOpenAccordion] = useState<string>("introduction");

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? "" : id);
    };

    return (
        <section className="space-y-4">
            {accordionData.map((item) => {
                const isOpen = openAccordion === item.id;

                return (
                    <div
                        key={item.id}
                        className="bg-[#143772]/60 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300"
                    >
                        {/* Accordion Header */}
                        <button
                            onClick={() => toggleAccordion(item.id)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#143772]/80 transition-colors duration-200"
                        >
                            <span className="text-white font-semibold text-base sm:text-lg">
                                {item.title}
                            </span>
                            {isOpen ? (
                                <ChevronUp className="text-white/70 w-5 h-5 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="text-white/70 w-5 h-5 flex-shrink-0" />
                            )}
                        </button>

                        {/* Accordion Content */}
                        <div
                            className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                } overflow-hidden`}
                        >
                            <div className="px-6 py-4 space-y-6 border-t border-white/10">
                                {item.content.map((section, index) => (
                                    <div key={index} className="space-y-3">
                                        {section.heading && (
                                            <h3 className="text-white font-semibold text-base">
                                                {section.heading}
                                            </h3>
                                        )}
                                        {Array.isArray(section.text) ? (
                                            <ul className="space-y-2">
                                                {section.text.map((paragraph, pIndex) => (
                                                    <li
                                                        key={pIndex}
                                                        className="text-white/80 text-sm sm:text-base leading-relaxed"
                                                    >
                                                        {paragraph}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                                                {section.text}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
