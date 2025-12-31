import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaWordpress, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiGreensock, SiSass, SiFirebase } from "react-icons/si";

function Skills() {
  const skillsData = [
    {
      category: 'Technical Skills',
      items: [
        { name: 'HTML/HTML5', level: 95, icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS/CSS3', level: 90, icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Javascript', level: 85, icon: <FaJs />, color: '#F7DF1E' },
      ],
    },
    {
      category: 'Framework/Library Skills',
      items: [
        { name: 'React Js', level: 90, icon: <FaReact />, color: '#61DAFB' },
        { name: 'Node js/Express js', level: 75, icon: <FaNodeJs />, color: '#339933' },
        { name: 'Tailwind', level: 95, icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Bootstrap', level: 85, icon: <FaBootstrap />, color: '#7952B3' },
      ],
    },
    {
      category: 'Familiar Skills',
      items: [
        { name: 'Jquery', level: 70, icon: <SiJquery />, color: '#0769AD' },
        { name: 'Gsap', level: 65, icon: <SiGreensock />, color: '#88CE02' },
        { name: 'SASS/SCSS', level: 80, icon: <SiSass />, color: '#CC6699' },
      ],
    },
    {
      category: 'Other Skills',
      items: [
        { name: 'Git/Github', level: 85, icon: <FaGithub />, color: '#E7E8E8' },
        { name: 'Firebase Auth', level: 80, icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'Wordpress', level: 75, icon: <FaWordpress />, color: '#21759B' },
        { name: 'Figma UI/UX', level: 70, icon: <FaFigma />, color: '#F24E1E' },
      ],
    },
  ]

  return (
    <section id='skills' className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Skills
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Check my skills list that I love to work with.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {group.category}
                </h3>
                <ul className="space-y-6">
                  {group.items.map((skill, idx) => (
                    <li key={idx} className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <span style={{ color: skill.color }} className="text-lg">
                            {skill.icon}
                          </span>
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700 overflow-hidden">
                        <motion.div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Skills
