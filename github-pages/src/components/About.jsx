import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div 
      name="about" 
      className="w-full min-h-screen bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center md:text-left">
            {t.aboutMe}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl mt-10 md:mt-20 text-center md:text-left"
        >
          {t.aboutText1}
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-center md:text-left"
        >
          {t.aboutText2}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
