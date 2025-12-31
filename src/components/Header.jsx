import { useState } from 'react'
import { motion } from 'framer-motion'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 relative">
          <a
            className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl font-display"
            href="#home"
          >
            E
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
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
              <a
                key={link.name}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors block"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
