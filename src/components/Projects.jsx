import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "BookCourier",
      description: "BookCourier is a library delivery management system where....",
      fullDescription:
        "BookCourier is a library delivery management system where users can request book pickup or delivery from their nearby libraries. The system helps students, researchers, and readers borrow and return books without physically visiting the library.",
      image: "https://i.ibb.co.com/pvpPbRj0/Screenshot-2025-12-25-175630.png",
      liveLink: "https://bookcourier-5924d.web.app/",
      codeLink: "https://github.com/emon-ahmed-60/BookCourier-client.git",
    },
    {
      title: "ToyStore",
      description: "ToyStore is a fully functional e-commerce....",
      fullDescription:
        "ToyStore is a fully functional e-commerce solution designed to manage online sales of toys. The platform efficiently handles product display, user authentication, shopping cart management, and the checkout process.",
      image: "https://i.ibb.co.com/pvb6Cn50/Screenshot-2025-12-08-230038.png",
      liveLink: "https://cosmic-creponne-24a271.netlify.app/",
      codeLink: "https://github.com/emon-ahmed-60/Toy-store.git",
    },
    {
      title: "Spotify-Clone",
      description: "This project is designed to mimic....",
      fullDescription:
        "This project is designed to mimic the user interface and core functionalities of Spotify. Through this, users will experience song play, pause, volume control, and playlist navigation. This is an attempt to showcase my front-end skills.",
      image: "https://i.ibb.co.com/m5dJrgLp/Screenshot-2025-12-08-160806.png",
      liveLink: "https://spotifycloneing.netlify.app/",
      codeLink: "https://github.com/emon-ahmed-60/Spotify-Clone.git",
    },
    {
      title: "Home Service",
      description: "A modern platform and reliable household....",
      fullDescription:
        "A modern platform and reliable household services in your local area. Built with a user-friendly design and effective search functionality.",
      image: "https://i.ibb.co.com/chDHH48K/home-service.png",
      liveLink: "https://home-service-tau.vercel.app/",
      codeLink: "https://github.com/emon-ahmed-60/HomeService.git",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="w-full py-16 sm:py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A showcase of my recent work and technical experiments
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              {/* ================= Mobile View (No Flip) ================= */}
              <div className="md:hidden bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden h-full flex flex-col">
                <img
                  alt={`Screenshot of the ${project.title} project website`}
                  className="w-full h-48 object-cover"
                  src={project.image}
                  loading="lazy"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex space-x-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center"
                    >
                      Live Link
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center"
                    >
                      Code Link
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* ================= Desktop View (3D Flip) ================= */}
              <div
                className="hidden md:block relative cursor-pointer h-80 w-full perspective outline-none"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onFocus={() => setHoveredProject(index)}
                onBlur={() => setHoveredProject(null)}
                tabIndex={0}
                role="button"
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: hoveredProject === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl bg-white dark:bg-slate-800 flex flex-col overflow-hidden">
                    <div className="border-b border-slate-200 dark:border-slate-700 h-48">
                      <img
                        alt={`Screenshot of the ${project.title} project website`}
                        className="w-full h-full object-cover"
                        src={project.image}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-lg shadow-xl bg-slate-800 dark:bg-slate-900 text-white p-6 flex flex-col justify-between"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <div className="overflow-y-auto">
                      <h3 className="text-2xl font-bold mb-3 text-indigo-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-snug">
                        {project.fullDescription}
                      </p>
                    </div>
                    <div className="mt-4 flex space-x-6 justify-start">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-200 font-medium transition-colors duration-200 flex items-center text-md"
                      >
                        Live Link
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-200 font-medium transition-colors duration-200 flex items-center text-md"
                      >
                        Code Link
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
