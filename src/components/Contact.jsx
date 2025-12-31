import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 3000);
    }, (error) => {
        console.log(error.text);
        setStatus('error');
    });
  };
  return (
    <section
      id="contact"
      className="bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 font-sans antialiased py-20 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-slate-600 dark:text-slate-400">
            Get In Touch
          </h1>
          <p className="mt-2 text-lg text-slate-800 dark:text-slate-200">
            I'd love to hear from you.
          </p>
        </motion.header>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-5">
            <div className="p-8 lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send Me Message
                </h2>
                <span className="material-icons-outlined text-slate-500 dark:text-slate-400">
                  send
                </span>
              </div>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full pl-2 py-2 rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-400 focus:ring-primary focus:border-primary"
                    id="name"
                    name="user_name"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full pl-2 py-2 rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-400 focus:ring-primary focus:border-primary"
                    id="email"
                    name="user_email"
                    placeholder="Your Email"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full pl-2 py-2 rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-400 focus:ring-primary focus:border-primary"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800 disabled:opacity-50"
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
                  </button>
                  {status === 'success' && (
                    <p className="mt-2 text-green-600 text-sm">Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="mt-2 text-red-600 text-sm">Failed to send message. Please try again.</p>
                  )}
                </div>
              </form>
            </div>
            <div className="p-8 lg:p-12 border-t border-slate-200 dark:border-slate-700 lg:border-t-0 lg:border-l lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                  <span className="material-icons-outlined text-lg">email</span>
                  <span>emon.webdev60@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                  <span className="material-icons-outlined text-lg">phone</span>
                  <span>+8801318580860</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                  <span className="material-icons-outlined text-lg">
                    language
                  </span>
                  <span>Moulvibazar, Sylhet-Bangladesh.</span>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <a
                  className="p-2 border border-slate-400 dark:border-slate-500 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  href="https://github.com/emon-ahmed-60"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  className="p-2 border border-slate-400 dark:border-slate-500 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  href="https://www.linkedin.com/in/emon--ahmed/"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a
                  className="p-2 border border-slate-400 dark:border-slate-500 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  href="https://x.com/MdEmon416961?t=Qx0TLN95Ia-AROLIOG2ZlQ&s=09"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.215 3.793 4.653-.69.188-1.433.23-2.18.084.613 1.91 2.36 3.22 4.444 3.257-1.75 1.373-3.953 2.16-6.326 2.16-.41 0-.814-.024-1.21-.072 2.268 1.46 4.968 2.312 7.864 2.312 9.425 0 14.58-7.82 14.58-14.58 0-.221-.005-.442-.014-.662.998-.72 1.864-1.62 2.56-2.65z"></path>
                  </svg>
                </a>
                <a
                  className="p-2 border border-slate-400 dark:border-slate-500 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  href="https://www.facebook.com/md.emon.692971"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </section>
  );
}

export default Contact;
