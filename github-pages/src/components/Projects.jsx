import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import BirdTrackerPortada from "../assets/BirdTrackeProyect.png";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      src: BirdTrackerPortada,
      title: t.project1Title,
      description: t.project1Description,
      demo: 'https://yourproject1.com',
      code: ''
    },
    {
      id: 2,
      src: BirdTrackerPortada,
      title: t.project2Title,
      description: t.project2Description,
      demo: 'https://yourproject2.com',
      code: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      src: BirdTrackerPortada,
      title: t.project3Title,
      description: t.project3Description,
      demo: 'https://yourproject3.com',
      code: 'https://github.com/yourusername/project3'
    },
    {
      id: 4,
      src: BirdTrackerPortada,
      title: t.project4Title,
      description: t.project4Description,
      demo: 'https://yourproject4.com',
      code: 'https://github.com/yourusername/project3'
    }
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 w-full text-gray-900 dark:text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t.myProjects}
          </p>
          <p className="py-6">{t.projectsIntro}</p>
        </motion.div>

        {/* Ajuste para 2 tarjetas en pantallas grandes y 1 tarjeta en pantallas pequeñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, description, demo, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden relative group h-64 md:h-80"
            >
              <img
                src={src}
                alt={`project ${id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-sm mb-4 text-gray-300 line-clamp-2">{description}</p>
                <div className="flex justify-end space-x-2">
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs bg-cyan-500 text-white rounded hover:bg-cyan-600 transition duration-300 flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" /> {t.demo}
                    </a>
                  )}
                  {code && (
                    <a
                      href={code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs bg-gray-700 text-white rounded hover:bg-gray-800 transition duration-300 flex items-center"
                    >
                      <FaGithub className="mr-2" /> {t.code}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carta general para invitar a ver más en GitHub */}
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? "¿Quieres ver más proyectos?" : "Want to see more projects?"}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {language === 'es' ? "Si estás interesado en explorar más de las cosas que he construido, te invito a visitar mi perfil de GitHub, donde podrás encontrar otros proyectos y colaboraciones en los que he trabajado." : "If you're interested in exploring more of what I've built, I invite you to visit my GitHub profile, where you can find other projects and collaborations I've worked on."}
          </p>
          <a
            href="https://github.com/kelok3rik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition duration-300"
          >
            {language === 'es' ? "Ver GitHub" : "View GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
