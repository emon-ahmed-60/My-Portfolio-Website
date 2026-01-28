import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Emon Ahmed", "Front-End Web Developer", "Based In Bangladesh"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="w-full overflow-hidden py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-900 dark:text-white leading-tight min-h-[120px] sm:min-h-[160px] md:min-h-[220px] flex items-center justify-center"
        >
          <span ref={el}></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming ideas into exceptional digital experiences. I specialize in building
          responsive, high-performance web applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            My Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full sm:w-auto px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
