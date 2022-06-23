import React, { useState } from 'react';
import logo from '../img/logo.png';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

const NavBar = ({ setTheme, checked }) => {
  const [menu, setMenu] = useState(false);
  const [menuClass, setMenuClass] = useState('hidden');
  const openMenu = () => {
    if (!menu) {
      setMenuClass('slide-in');
    } else {
      setMenuClass('slide-out');
    }
    setMenu(!menu);
  };
  const onClickOutsideListener = () => {
    openMenu();
    document.removeEventListener('click', onClickOutsideListener);
  };
  return (
    <nav class="backdrop-blur-2xl backdrop-brightness-200 dark:backdrop-brightness-50 shadow-sm border-1 px-2 sm:px-4 py-2.5 sticky top-0 left-0 right-0 z-10">
      <div class="container flex flex-wrap flex-row-reverse justify-between items-center mx-auto">
        <div class="flex items-center">
          <button
            type="button"
            className="hover:cursor-pointer rounded-xl border p-1 border-gray-300 dark:border-gray-600"
            onClick={setTheme}>
            {checked ? (
              <SunIcon className="h-6 w-6 active:animate-spin text-gray-700 dark:text-gray-300" />
            ) : (
              <MoonIcon className="h-6 w-6 active:animate-spin text-gray-700 dark:text-gray-300" />
            )}
          </button>

          <button
            type="button"
            class="text-white capitalize bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 ml-3 ">
            Get started
          </button>
        </div>
        <div class="flex md:order-2  items-center">
          <button
            type="button"
            onClick={openMenu}
            className=" md:hidden hover:cursor-pointer">
            {menu ? (
              <XIcon className="h-6 w-6 active:animate-spin text-gray-700 dark:text-gray-300" />
            ) : (
              <MenuIcon className="h-6 w-6 active:animate-spin text-gray-700 dark:text-gray-300" />
            )}
          </button>
          <a href="#">
            <img src={logo} class=" ml-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        onMouseLeave={() => {
          document.addEventListener('click', onClickOutsideListener);
        }}
        id="slider"
        class={`absolute md:hidden flex flex-col w-60 h-screen py-8 mt-2 space-y-2 font-semibold left-0 bg-white shadow-2xl dark:bg-gray-800 ${menuClass}`}>
        <a
          className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  pl-10 py-1"
          href="#">
          Home
        </a>
        <a
          className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  pl-10 py-1"
          href="#">
          About
        </a>
        <a
          className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  pl-10 py-1"
          href="#">
          Courses
        </a>
        <a
          className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  pl-10 py-1"
          href="#">
          Jobs
        </a>
        <a
          className=" text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  pl-10 py-1"
          href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
