import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const NavbarLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ];

  // Scroll-based active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    // Observe each section by ID
    NavbarLinks.forEach((item) => {
      const section = document.querySelector(item.link);
      if (section) observer.observe(section);
    });

    return () => {
      NavbarLinks.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // close menu on click
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur-lg bg-black/30"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-2">
        {/* LOGO */}
        <a
          href="#home"
          className="md:text-4xl text-2xl font-bold italic text-transparent bg-gradient-to-r from-[#bd5cf8] via-[#8e6cf5] to-[#bb61c5] bg-clip-text"
        >
          .folio
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden focus:outline-none duration-500 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-8 h-8 text-white" />
          ) : (
            <FiMenu className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {NavbarLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              onClick={() => handleLinkClick(link.link)}
              className={`text-lg transition-all duration-300 hover:text-purple-500 hover:scale-110 hover:-translate-y-1 ${
                activeLink === link.link ? "text-purple-500 font-semibold" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+918910114652"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-600 border border-blue-400 hover:border-blue-600 py-1 px-3 rounded-full text-lg transition duration-300"
          >
            <BiSolidPhoneCall className="text-2xl" />
            Contact Me
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden fixed top-0 left-0 w-full min-h-screen bg-[#000000f0] flex-col items-center justify-center space-y-8 z-40 transition-all duration-500`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>

        {NavbarLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            onClick={() => handleLinkClick(link.link)}
            className={`text-xl text-white hover:text-gray-300 transition ${
              activeLink === link.link ? "text-purple-400 font-semibold" : ""
            }`}
          >
            {link.name}
          </a>
        ))}

        <a
          href="tel:+918910114652"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-600 py-2 px-6 text-lg transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          <BiSolidPhoneCall className="text-2xl" />
          Contact Me
        </a>
      </div>
    </header>
  );
}
