import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const githubBaseURL = 'https://github.com/yourusername';
  const projects = [
    {
      id: 1,
      src: 'https://i.imgur.com/Ay4q5Aq.png',
      demo: 'https://i.imgur.com/Ay4q5Aq.png',
      code: `${githubBaseURL}/birdtracker-project`,
      description: 'Descripción breve del primer proyecto.'
    },
    {
      id: 2,
      src: 'https://i.imgur.com/Ay4q5Aq.png',
      demo: 'https://yourproject2.com',
      code: `${githubBaseURL}/project2`,
      description: 'Descripción breve del segundo proyecto.'
    },
    {
      id: 3,
      src: 'https://i.imgur.com/ad3qrQf.png',
      demo: 'https://yourproject3.com',
      code: `${githubBaseURL}/project3`,
      description: 'Descripción breve del tercer proyecto.'
    },
    {
      id: 4,
      src: 'https://i.imgur.com/Ay4q5Aq.png',
      demo: 'https://yourproject4.com',
      code: `${githubBaseURL}/project4`,
      description: 'Descripción breve del cuarto proyecto.'
    },
    {
      id: 5,
      src: 'https://i.imgur.com/xyz1234.png',
      demo: 'https://yourproject5.com',
      code: `${githubBaseURL}/project5`,
      description: 'Descripción breve del quinto proyecto.'
    },
    {
      id: 6,
      src: 'https://i.imgur.com/xyz5678.png',
      demo: 'https://yourproject6.com',
      code: `${githubBaseURL}/project6`,
      description: 'Descripción breve del sexto proyecto.'
    },
    {
      id: 7,
      src: 'https://i.imgur.com/xyz9101.png',
      demo: 'https://yourproject7.com',
      code: `${githubBaseURL}/project7`,
      description: 'Descripción breve del séptimo proyecto.'
    },
    {
      id: 8,
      src: 'https://i.imgur.com/xyz1121.png',
      demo: 'https://yourproject8.com',
      code: `${githubBaseURL}/project8`,
      description: 'Descripción breve del octavo proyecto.'
    },
    {
      id: 9,
      src: 'https://i.imgur.com/xyz3141.png',
      demo: 'https://yourproject9.com',
      code: `${githubBaseURL}/project9`,
      description: 'Descripción breve del noveno proyecto.'
    },
    {
      id: 10,
      src: 'https://i.imgur.com/xyz4151.png',
      demo: 'https://yourproject10.com',
      code: `${githubBaseURL}/project10`,
      description: 'Descripción breve del décimo proyecto.'
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 cursor-pointer text-black dark:text-white z-10"
        onClick={onClick}
      >
        <FaChevronLeft className="text-4xl" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 cursor-pointer text-black dark:text-white z-10"
        onClick={onClick}
      >
        <FaChevronRight className="text-4xl" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div name="projects" className="bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 w-full text-gray-900 dark:text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative">
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

        <Slider {...settings}>
          {projects.map(({ id, src, demo, code, description }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="shadow-md shadow-gray-600 rounded-lg bg-white dark:bg-gray-800 p-4 flex flex-col mx-2" // Añadido mx-2 para separación
            >
              <img
                src={src}
                alt={`project ${id}`}
                className="rounded-md mb-2 duration-200 hover:scale-105"
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              
              <p className="text-sm mb-2">{description}</p>

              <div className="flex items-center justify-between mt-2 space-x-2">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-2 py-1 text-center duration-200 hover:scale-105 text-gray-900 dark:text-white border border-gray-500 rounded text-xs"
                >
                  {t.demo}
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-2 py-1 text-center duration-200 hover:scale-105 text-gray-900 dark:text-white border border-gray-500 rounded text-xs"
                >
                  {t.code}
                </a>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
