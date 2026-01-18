import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaServer, FaMobileAlt } from 'react-icons/fa'

function Services() {
    const services = [
        {
            icon: <FaCode className="text-4xl" />,
            title: 'Frontend Development',
            description: 'Building responsive and interactive web applications using modern frameworks like React, with clean code and best practices.',
            color: '#3b82f6',
        },
        {
            icon: <FaPaintBrush className="text-4xl" />,
            title: 'UI/UX Implementation',
            description: 'Transforming designs into pixel-perfect interfaces with smooth animations, ensuring excellent user experience across all devices.',
            color: '#8b5cf6',
        },
        {
            icon: <FaServer className="text-4xl" />,
            title: 'Backend Integration',
            description: 'Seamless API integration and backend connectivity, working with RESTful services and modern backend technologies.',
            color: '#10b981',
        },
        {
            icon: <FaMobileAlt className="text-4xl" />,
            title: 'Responsive Design',
            description: 'Creating mobile-first, responsive layouts that work flawlessly on all screen sizes, from smartphones to desktops.',
            color: '#f59e0b',
        },
    ]

    return (
        <section id="services" className="w-full py-20 md:py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display">
                        What I Do
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Services I offer to bring your ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="service-card group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div
                                className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 transition-all duration-300 group-hover:scale-110"
                                style={{
                                    boxShadow: `0 4px 14px ${service.color}20`,
                                }}
                            >
                                <div style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Decorative gradient border on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: `linear-gradient(135deg, ${service.color}15, transparent)`,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
