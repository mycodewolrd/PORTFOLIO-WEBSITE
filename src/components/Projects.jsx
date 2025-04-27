/* eslint-disable react/prop-types */

import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group transition-all duration-700 hover:scale-105  hover:-translate-y-4">
      <div
        className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl
            opacity-50 -top-5 left-10"
      ></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: project1,
      title: "SEO Keyword Research",
      description:
        "Created an SEO keyword research case study for 'Digital Marketing Course Online' with actionable insights for landing pages, blogs, and FAQs to boost website visibility.",
      link: "https://keyword-research-project.my.canva.site/",
    },
    {
      image: project2,
      title: "Social Media Strategy Plan",
      description:
        "Created a comprehensive social media strategy for a brand, focusing on content planning, audience targeting, and platform-specific growth tactics.",
      link: "https://keyword-research-project.my.canva.site/social-marketing-strategy-plan",
    },
    {
      image: project3,
      title: "Company Portfolio Website",
      description:
        "Developed a fully responsive and SEO-friendly website using HTML, CSS, and Bootstrap, focused on modern layout and smooth user experience.",
      link: "https://mycodewolrd.github.io/Elixir.---Bootstrap-Design/",
    },
  ];
  return (
    <main className="p-4 scroll-mt-28" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center relative mb-10">
          {/* Glowing background shape behind heading */}
          <div className="absolute -z-10 w-72 h-72 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-30 top-[-50px] left-1/2 transform -translate-x-1/2"></div>

          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6 relative z-10">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base relative z-10 max-w-2xl mx-auto">
            Each project reflects my ability to merge strategy, functionality
            and design— from crafting an SEO keyword research plan and building
            a social media strategy to designing a responsive website. I focus
            on delivering solutions that solve real problems and create value
            for brands.
          </p>
        </header>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-auto items-center justify-center max-w-6xl"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
