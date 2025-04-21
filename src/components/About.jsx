import img_about1 from "/img_about1.png";
import img_about2 from "/img_about2.png";
import img_about from "/img_about.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 pt-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image Section */}
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          {/* Background Blur Circle */}
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] 
            bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 
            z-0 right-5 -top-2 md:top-10 rounded-full"
          ></div>

          {/* Floating Side Images */}
          <img
            src={img_about1}
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 
            w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg animate-float-slow"
          />
          <img
            src={img_about2}
            alt="about picture 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 
            rounded-lg shadow-lg animate-float"
          />
          <img
            src={img_about}
            alt="about picture"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 
            w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg animate-float-reverse"
          />
        </figure>

        {/* Text Section */}
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          {/* Purple Background Glow */}
          <div
            className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl 
            opacity-50 -top-5 left-10"
          ></div>

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>

          <div className="text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            <p>
              I’m a creative digital marketing enthusiast with a passion for
              branding and the digital space. Recently, I’ve been diving into{" "}
              <span className="font-bold">SEO, Google Ads </span>, and{" "}
              <span className="font-bold">Social Media Marketing </span> to
              build skills that drive online growth.
            </p>
            <p className="mt-4">
              I hold a{" "}
              <span className="font-bold">
                Bachelor’s degree in Business Administration
              </span>{" "}
              with a specialization in Marketing. With certifications in{" "}
              <span className="font-bold">
                Digital Marketing, CRM, and Project Management
              </span>{" "}
              I bring a mix of creativity and strategy to everything I do.
            </p>
            <p className="mt-4">
              Having hands-on experience in{" "}
              <span className="font-bold">Web Development</span> enables me to
              create responsive, SEO-friendly websites that align with marketing
              goals. I’m eager to apply my skills, collaborate with experienced
              teams, and grow in the digital marketing field.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
