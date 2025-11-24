import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/spottr-logo.svg";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#how" },
  { label: "About", href: "#features" },
  { label: "Contact", href: "#testimonials" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Disable background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur md:bg-[#143772]/95 md:rounded-full md:max-w-7xl md:mx-auto md:mt-2">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center focus:outline-none"
        >
          <img alt="logo" src={logo} className="h-8 w-auto" />
          <h3 className="logo ml-[13.13px] text-[25px] text-[#fff] font-[700]">
            Spottr
          </h3>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#274B89] shadow-sm hover:opacity-95 transition-all duration-200"
        >
          Download App
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#274B89] p-2 bg-white rounded-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={25} color="#274B89"/>
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-[#143772] text-white shadow-xl z-50 flex flex-col p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img alt="logo" src={logo} className="h-7 w-auto" />
            <h3 className="ml-3 text-[22px] font-bold">Spottr</h3>
          </div>
          <button
            className="text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-white transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-8 border-t border-white/20"></div>

        {/* Download Button */}
        <a
          href="#cta"
          onClick={() => setIsOpen(false)}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#274B89] shadow-sm hover:opacity-95 transition-all duration-200"
        >
          Download App
        </a>
      </div>
    </header>
  );
}
