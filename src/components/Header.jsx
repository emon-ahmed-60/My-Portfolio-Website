import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, scroller } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'HOME', to: 'home' },
    { name: 'ABOUT', to: 'about' },
    { name: 'PROJECTS', to: 'projects' },
    { name: 'SKILLS', to: 'skills' },
    { name: 'SERVICES', to: 'services' },
    { name: 'CONTACT', to: 'contact' },
  ];

  // Keep this for the logo button if needed, or convert it to Link too.
  // Converting logo to Link for consistency is better but the prompt focused on menu items.
  // I will keep manual handler for the logo for now as it's a specific "Scroll to home" action not part of the main nav loop in the same way.
  const handleScrollToHome = () => {
    scroller.scrollTo('home', {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center pb-4 relative">
          <button
            className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl font-display cursor-pointer transition-transform hover:scale-110"
            onClick={handleScrollToHome}
            aria-label="Scroll to home section"
          >
            E
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="nav-link text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="material-icons-outlined text-gray-800 dark:text-gray-200">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 flex flex-col space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="nav-link text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors block py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
