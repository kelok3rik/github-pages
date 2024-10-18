import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4 text-gray-900 dark:text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">{t.contactMe}</p>
          <p className="py-6">{t.contactIntro}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <form action="https://formsubmit.co/erikrdbs@gmail.com" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder={t.name}
              className="p-2 bg-transparent border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t.email}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder={t.message}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              {t.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
