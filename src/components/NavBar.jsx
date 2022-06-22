import React, { useState } from 'react';
import logo from '../img/logo.png';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

const NavBar = ({ setTheme, checked }) => {
  const [menu, setMenu] = useState(false);
  const [menuClass, setMenuClass] = useState('hidden');
  const handle = () => {
    if (!menu) {
      setMenuClass('flex');
    } else {
      setMenuClass('hidden');
    }
    setMenu(!menu);
  };
  return (
    <nav class="bg-white dark:bg-gray-800 shadow-sm border-1 px-2 sm:px-4 py-2.5 sticky top-0 left-0 right-0 z-10">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="flex items-center">
          <a href="#">
            <img src={logo} class=" mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
          <button
            type="button"
            className="hover:cursor-pointer rounded-xl border p-1 border-gray-300 dark:border-gray-600"
            onClick={setTheme}>
            {checked ? (
              <SunIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
        <div class="flex md:order-2  items-center">
          <button
            type="button"
            class="text-white capitalize bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 text-center mr-3 ">
            Get started
          </button>
          <button
            type="button"
            onClick={handle}
            className=" md:hidden hover:cursor-pointer">
            {menu ? (
              <XIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
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
      <div class="md:hidden">
        <div
          class={`absolute flex-col items-center self-end py-8 mt-0 space-y-2 font-semibold sm:w-auto sm:self-center left-6 right-6 bg-white shadow-lg dark:bg-gray-800 ${menuClass}`}>
          <a
            className=" text-gray-800 dark:text-white w-80 text-center py-1"
            href="#">
            Home
          </a>
          <a
            className=" text-gray-800 dark:text-white w-80 text-center py-1"
            href="#">
            About
          </a>
          <a
            className=" text-gray-800 dark:text-white w-80 text-center py-1"
            href="#">
            Courses
          </a>
          <a
            className=" text-gray-800 dark:text-white w-80 text-center py-1"
            href="#">
            Jobs
          </a>
          <a
            className=" text-gray-800 dark:text-white w-80 text-center py-1"
            href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
