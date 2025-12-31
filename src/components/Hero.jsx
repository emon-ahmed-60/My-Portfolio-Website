import { useRef, useEffect } from "react";
import Typed from "typed.js";

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
    <section id="home" className="w-full overflow-hidden py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-white leading-tight min-h-[160px] md:min-h-[200px] flex items-center justify-center text-center">
          <span ref={el}></span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
