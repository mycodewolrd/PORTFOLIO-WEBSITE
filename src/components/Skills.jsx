/* eslint-disable react/prop-types */

import SEO from "/SEO.png";
import AdCampaign from "/campaign.webp";
import Development from "/development.png";
import imghero from "/imghero.png";

const skillsData = [
  {
    id: 1,
    image: SEO,
    title: "Search Engine Optimization",
    description:
      "Experienced in on-page and off-page SEO techniques, including keyword research, meta optimization, and content strategy to improve search engine visibility and drive organic traffic.",
  },
  {
    id: 2,
    image: AdCampaign,
    title: "Social Media Marketing",
    description:
      "Skilled in creating engaging content and running targeted campaigns across platforms like Instagram, Facebook, and LinkedIn to boost brand awareness and audience engagement.",
  },
  {
    id: 3,
    image: Development,
    title: "Web Development",
    description:
      "Proficient in building responsive, SEO-friendly websites using HTML, CSS, Bootstrap, Tailwind CSS and JavaScript with a focus on clean structure, performance, and user experience.",
  },
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-600 transition-all duration-700 hover:scale-105 hover:-translate-y-2">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base hover:text-white">{description}</p>
  </article>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      {/* Background blur circle */}
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      {/* Floating left image */}
      <img
        src={imghero}
        alt="Left picture"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70 animate-float"
      />

      {/* Title and grid */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise <br />{" "}
            <span className="text-purple-400">and Skills</span>
          </h1>
          <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
            I blend creativity with technical skills, specializing in digital
            marketing, web development, and media branding. My goal is to craft
            user-centric solutions that not only look great but deliver tangible
            results.
          </p>
        </header>

        {/* Skills Grid */}
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 max-w-7xl mx-auto"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>

      {/* Floating right image */}
      <img
        src={imghero}
        alt="Right picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70 animate-float-reverse"
      />
    </section>
  );
}
