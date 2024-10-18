import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiGit, SiDocker, SiPostgresql, SiCsharp, SiRabbitmq } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const techs = [
    { id: 1, icon: SiHtml5, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, icon: SiCss3, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, icon: SiJavascript, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 4, icon: SiReact, title: 'React', style: 'shadow-blue-600' },
    { id: 5, icon: SiTailwindcss, title: 'Tailwind', style: 'shadow-sky-400' },
    { id: 6, icon: SiNodedotjs, title: 'Node.js', style: 'shadow-green-500' },
    { id: 7, icon: SiPython, title: 'Python', style: 'shadow-yellow-400' },
    { id: 8, icon: SiGit, title: 'Git', style: 'shadow-red-500' },
    { id: 9, icon: SiDocker, title: 'Docker', style: 'shadow-blue-500' },
    { id: 10, icon: SiPostgresql, title: 'PostgreSQL', style: 'shadow-blue-400' },
    { id: 11, icon: SiCsharp, title: 'C#', style: 'shadow-purple-500' },
    { id: 12, icon: SiRabbitmq, title: 'RabbitMQ', style: 'shadow-orange-400' },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-gray-800 w-full min-h-screen py-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-900 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">{t.mySkills}</p>
          <p className="py-6">{t.skillsIntro}</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon: Icon, title, style }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-white dark:bg-gray-800`}
            >
              <Icon size={50} className="mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;