import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <footer
      className="w-full bg-black/40 text-gray-300 py-10 mt-10"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10 items-center text-center sm:text-left">
        {/* Section Title & Email */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] bg-clip-text text-transparent">
            {" Let's Connect Together"}
          </h2>
          <h6 className="text-sm sm:text-base opacity-80 mt-4">
            Reach out via email
          </h6>
          <a
            href="mailto:rajnandinipatra2003@gmail.com"
            className="text-lg sm:text-2xl font-bold text-slate-300 hover:text-blue-500  duration-500 transition-all hover:scale-105 hover:-translate-y-1"
          >
            rajnandinipatra2003@gmail.com
          </a>
        </div>

        {/* WhatsApp Link */}
        <div className="flex flex-col items-center gap-2 -mt-1">
          <span className="text-sm sm:text-base opacity-80">or</span>
          <a
            href="https://wa.me/918910114652?text=Hello%20Rajnandini%2C%20just%20visited%20your%20portfolio%21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-green-600 text-base sm:text-lg duration-500 transition-all hover:scale-105 hover:-translate-y-1"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Divider */}
        <hr className="w-full border-gray-600 mt-4 sm:mt-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 mt-3 text-center sm:text-left">
          {/* Logo */}
          <h2 className="text-2xl sm:text-3xl font-bold">.folio</h2>

          {/* Copyright */}
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Rajnandini Patra. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/mycodewolrd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl duration-500 transition-all hover:scale-125 hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajnandinipatra2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 text-xl duration-500 transition-all hover:scale-125 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href="tel:+918910114652"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 flex items-center text-xl duration-500 transition-all hover:scale-125 hover:-translate-y-1"
            >
              <BiSolidPhoneCall />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
