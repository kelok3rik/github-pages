import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon, FaLanguage } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Header = ({ toggleTheme, theme }) => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'contact' },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 px-4 text-gray-900 dark:text-white bg-white dark:bg-gray-800 fixed nav z-10">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a className="link-underline link-underline-black" href="/" target="_blank" rel="noreferrer">
            
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-900 dark:hover:text-white duration-200 link-underline">
            <Link to={link} smooth duration={500}>
              {t[link]}
            </Link>
          </li>
        ))}
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-900 dark:hover:text-white duration-200 link-underline">
          <button onClick={toggleLanguage}>
            <FaLanguage size={20} />
          </button>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-900 dark:hover:text-white duration-200 link-underline">
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {t[link]}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button onClick={toggleLanguage}>
              <FaLanguage size={30} />
            </button>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button onClick={toggleTheme}>
              {theme === 'dark' ? <FaSun size={30} /> : <FaMoon size={30} />}
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;