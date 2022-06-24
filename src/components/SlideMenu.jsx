import React from 'react';
import {
  HomeIcon,
  InformationCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  MailIcon,
} from '@heroicons/react/solid';

const SlideMenu = ({ menuClass, openMenu, onClickOutsideListener }) => {
  return (
    <div
      onMouseLeave={() => {
        document.addEventListener('click', onClickOutsideListener);
      }}
      id="slider"
      className={`absolute md:hidden flex flex-col w-80 h-screen py-8 mt-2 space-y-1 text-lg font-semibold left-0 bg-white shadow-2xl dark:bg-gray-800 text-gray-800 dark:text-white ${menuClass}`}>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700 rounded-l-xl flex px-4 py-2 hover:cursor-pointer">
        <HomeIcon className="h-6 w-6 mx-4" />
        Home
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700 flex px-4 py-2 hover:cursor-pointer">
        <AcademicCapIcon className="h-6 w-6 mx-4" />
        Courses
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700 flex px-4 py-2 hover:cursor-pointer">
        <BriefcaseIcon className="h-6 w-6 mx-4" />
        Jobs
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700 flex px-4 py-2 hover:cursor-pointer">
        <InformationCircleIcon className="h-6 w-6 mx-4" />
        About
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700 flex px-4 py-2 hover:cursor-pointer">
        <MailIcon className="h-6 w-6 mx-4" />
        Contact
      </a>
    </div>
  );
};

export default SlideMenu;
