import React from 'react';

const SlideMenu = ({menuClass, openMenu, onClickOutsideListener }) => {
  return (
    <div
      onMouseLeave={() => {
        document.addEventListener('click', onClickOutsideListener);
      }}
      id="slider"
      className={`absolute md:hidden flex flex-col w-80 h-screen py-8 mt-2 space-y-2 font-semibold left-0 bg-white shadow-2xl dark:bg-gray-800 ${menuClass}`}>
      <a
        onClick={openMenu}
        className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-16 py-1"
        href="#">
        Home
      </a>
      <a
        onClick={openMenu}
        className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-16 py-1"
        href="#">
        About
      </a>
      <a
        onClick={openMenu}
        className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-16 py-1"
        href="#">
        Courses
      </a>
      <a
        onClick={openMenu}
        className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-16 py-1"
        href="#">
        Jobs
      </a>
      <a
        onClick={openMenu}
        className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-16 py-1"
        href="#">
        Contact
      </a>
    </div>
  );
};

export default SlideMenu;
