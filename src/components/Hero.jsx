import imghero from "/imghero.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import Resume from "/Resume_Rajnandini Patra.pdf";

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 
        sm:px-10 md:px-20 lg:px-32 xl:px-44 pb-4 md:pb-24 pt-24 mt-14 md:mt-0 z-10"
      >
        {/* Text Section */}
        <section
          className="flex-1 md:mr-20 text-center md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white mb-4">
              Hey I’m
              <br />
              <span className="leading-normal font-bold">Rajandini Patra</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#c744ec] mb-2">
              SEO & Digital Marketing Enthusiast
            </h2>
          </header>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 px-2 md:px-0">
            I’m passionate about exploring the digital space and excited to help
            brands grow with SEO, Google Ads, and Social Media Marketing.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start items-center space-x-4 mb-6">
            <a href="https://github.com/mycodewolrd" target="_blank">
              <img
                src={github}
                alt="github"
                className="w-12 h-12 duration-500 transition-all hover:scale-110 hover:-translate-y-1"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rajnandinipatra2003/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className="w-12 h-12 duration-500 transition-all hover:scale-110 hover:-translate-y-1"
              />
            </a>
            <a href={Resume} download>
              <button
                className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] 
              hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg duration-500"
              >
                Download CV
              </button>
            </a>
          </div>
        </section>

        {/* Hero Image with Animation */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative"
        >
          {/* Background Shape Behind Image */}
          <div className="absolute -z-10 w-72 h-72 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-3xl opacity-60 top-10 right-10 "></div>

          {/* Hero Image */}
          <img
            src={imghero}
            alt="Hero Image"
            className="h-[300px] sm:h-[380px] md:h-[485px] w-auto object-cover rounded-lg 
      hidden md:block animate-float"
          />
        </figure>
      </main>
    </div>
  );
}
