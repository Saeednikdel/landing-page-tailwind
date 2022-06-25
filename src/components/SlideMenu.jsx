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
      className={`absolute md:hidden flex flex-col w-2/3 h-screen mt-3 pt-10 space-y-1 text-lg font-semibold left-0 bg-white shadow-2xl dark:bg-gray-800 text-gray-700 dark:text-gray-200 ${menuClass}`}>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-500 bg-gray-100 dark:bg-gray-700 rounded-l-full flex px-1 py-2 hover:cursor-pointer ml-4">
        <HomeIcon className="h-6 w-6 mx-4" />
        Home
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700  rounded-l-full flex px-1 py-2 hover:cursor-pointer ml-4">
        <AcademicCapIcon className="h-6 w-6 mx-4" />
        Courses
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700  rounded-l-full flex px-1 py-2 hover:cursor-pointer ml-4">
        <BriefcaseIcon className="h-6 w-6 mx-4" />
        Jobs
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700  rounded-l-full flex px-1 py-2 hover:cursor-pointer ml-4">
        <InformationCircleIcon className="h-6 w-6 mx-4" />
        About
      </a>
      <a
        onClick={openMenu}
        className="hover:bg-gray-100 dark:hover:bg-gray-700  rounded-l-full flex px-1 py-2 hover:cursor-pointer ml-4">
        <MailIcon className="h-6 w-6 mx-4" />
        Contact
      </a>
    </div>
  );
};

export default SlideMenu;
