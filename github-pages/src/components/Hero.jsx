import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import  ErikHD  from '../assets/ErikHD.jpg';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-7xl font-bold text-gray-900 dark:text-white"
          >
            {t.fullStackDev}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 py-4 max-w-md"
          >
            {t.experience}
          </motion.p>

          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mr-4"
            >
              <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                {t.viewProjects}
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center"
            >
              <a href="https://github.com/kelok3rik" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 transition-colors duration-300 mr-4">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/kelok3rik" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 transition-colors duration-300">
                <FaLinkedin size={30} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img src={ErikHD} alt="Erik" className="rounded-full w-48 h-48" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;