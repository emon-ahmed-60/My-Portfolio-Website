import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingProfile from "./components/FloatingProfile";
import AboutDetailed from "./components/AboutDetailed";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">

      <Header />
      <main className="flex-grow flex flex-col w-full">
        <Hero />
        <AboutDetailed />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <FloatingProfile />
    </div>
  );
}

export default App;
