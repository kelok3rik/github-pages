import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p>{t.copyright}</p>
        <div className="flex space-x-4">
          <a href="https://github.com/kelok3rik" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/kelok3rik" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;