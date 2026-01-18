import me from "../assets/Emon-Ahmed.webp";
import { motion } from "framer-motion";
function AboutDetailed() {
  return (
    <section id="about" className="bg-background-light dark:bg-background-dark font-sans text-slate-700 dark:text-slate-300 antialiased">
      <div className="relative min-h-screen">
        <main className="relative px-6 sm:px-8 lg:px-12 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            <img
              alt="Portrait of Emon Ahmed"
              className="w-48 h-48 rounded-full border-8 border-background-light dark:border-background-dark object-cover mx-auto shadow-lg"
              src={me}
              loading="lazy"
              width="192"
              height="192"
            />
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">
                  About Me
                </h1>
                <div className="space-y-6 text-lg leading-relaxed font-display text-slate-600 dark:text-slate-400">
                  <p>
                    Hello there, I'm{" "}
                    <strong className="text-slate-800 dark:text-slate-200">
                      Emon Ahmed
                    </strong>
                    . I am a Front-End Developer, with a good knowledge of
                    HTML/CSS, React JS, Node JS, Javascript, Firebase, Heroku
                    for deployment, and also Expertise with Bootstrap, Tailwind
                    CSS, and Sass/Scss.
                  </p>
                  <p>
                    I am experienced with designing and developing complex
                    frontend flows and components and converting any design file
                    to HTML CSS with a fully{" "}
                    <strong className="text-slate-800 dark:text-slate-200">
                      responsive design
                    </strong>
                    . As a junior web developer, I have developed web-based
                    applications from design to code and{" "}
                    <strong className="text-slate-800 dark:text-slate-200">
                      implemented backend technologies
                    </strong>{" "}
                    like Node js, Express js, MongoDB.
                  </p>
                </div>
              </div>
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-24 flex flex-col items-center">
                  <div className="w-px h-16 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="space-y-5 my-5">
                    <a
                      aria-label="GitHub"
                      className="block w-10 h-10 icon-github bg-slate-500 dark:bg-slate-400 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200"
                      href="https://github.com/emon-ahmed-60"
                      target="_blank"
                      style={{
                        maskSize: "60%",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "var(--bg-image)",
                        WebkitMaskSize: "60%",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        "--bg-image":
                          "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 16 16\\'%3E%3Cpath fill-rule=\\'evenodd\\' d=\\'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\\'/%3E%3C/svg%3E')",
                      }}
                    ></a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/emon--ahmed/"
                      aria-label="LinkedIn"
                      className="block w-10 h-10 icon-linkedin bg-slate-500 dark:bg-slate-400 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200"
                      style={{
                        maskSize: "60%",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "var(--bg-image)",
                        WebkitMaskSize: "60%",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        "--bg-image":
                          "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath d=\\'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z\\'/%3E%3C/svg%3E')",
                      }}
                    ></a>
                    <a
                      aria-label="Twitter"
                      className="block w-10 h-10 icon-twitter bg-slate-500 dark:bg-slate-400 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200"
                      href="https://x.com/MdEmon416961?t=Qx0TLN95Ia-AROLIOG2ZlQ&s=09"
                      style={{
                        maskSize: "60%",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "var(--bg-image)",
                        WebkitMaskSize: "60%",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        "--bg-image":
                          "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath d=\\'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.218 3.791 4.649-.69.188-1.425.215-2.155.084.6 1.884 2.342 3.256 4.413 3.294-1.711 1.34-3.863 2.063-6.202 2.063-.404 0-.802-.023-1.195-.069 2.203 1.408 4.823 2.228 7.601 2.228 9.121 0 14.11-7.564 14.11-14.11l-.017-.639c.966-.695 1.8-1.562 2.457-2.548z\\'/%3E%3C/svg%3E')",
                      }}
                    ></a>
                    <a
                      aria-label="Facebook"
                      className="block w-10 h-10 icon-facebook bg-slate-500 dark:bg-slate-400 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200"
                      href="https://www.facebook.com/md.emon.692971"
                      style={{
                        maskSize: "60%",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "var(--bg-image)",
                        WebkitMaskSize: "60%",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        "--bg-image":
                          "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath d=\\'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z\\'/%3E%3C/svg%3E')",
                      }}
                    ></a>
                  </div>
                </div>
              </aside>
            </div>
            </motion.div>
          </div>
        </main>
      </div>


    </section>
  );
}

export default AboutDetailed;
