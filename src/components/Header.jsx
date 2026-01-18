import { useState } from 'react'
import { motion } from 'framer-motion'
import { scroller } from 'react-scroll'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: 'HOME', to: 'home' },
    { name: 'ABOUT', to: 'about' },
    { name: 'PROJECTS', to: 'projects' },
    { name: 'SKILLS', to: 'skills' },
    { name: 'SERVICES', to: 'services' },
    { name: 'CONTACT', to: 'contact' },
  ]

  // Custom click handler to prevent default behavior and use scroller
  const handleScrollToSection = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -80, // Offset for sticky header
    })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 relative">
          <button
            className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl font-display cursor-pointer transition-transform hover:scale-110"
            onClick={() => handleScrollToSection('home')}
            aria-label="Scroll to home section"
          >
            E
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span
                key={link.name}
                className="nav-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                onClick={() => handleScrollToSection(link.to)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleScrollToSection(link.to)
                  }
                }}
              >
                {link.name}
              </span>
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
              <span
                key={link.name}
                className="nav-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors block cursor-pointer"
                onClick={() => {
                  handleScrollToSection(link.to)
                  setIsMenuOpen(false)
                }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleScrollToSection(link.to)
                    setIsMenuOpen(false)
                  }
                }}
              >
                {link.name}
              </span>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
