import { useState } from 'react';
import { Switch } from '@headlessui/react';

import logo from './img/logo.png';
import education from './img/education.png';
import js from './img/js.png';
import python from './img/python.jpg';
import css from './img/css.png';

import Card from './Card';
import NavBar from './components/NavBar';

function App() {
  const [theme, setTheme] = useState('dark');
  const list = [
    {
      title: 'Python',
      image: python,
      text: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant...',
    },
    {
      title: 'JavaScript',
      image: js,
      text: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard...',
    },
    {
      title: 'Css',
      image: css,
      text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML ...',
    },
  ];
  const handle = () => {
    if (theme == '') {
      setTheme('dark');
    } else {
      setTheme('');
    }
  };
  return (
    <div className={`min-h-screen px-auto ${theme}`}>
      <NavBar setTheme={handle} checked={theme == 'dark'} />

      <div className="lg:grid lg:grid-cols-2 2xl:grid-cols-5 bg-white dark:bg-gray-800">
        <div className="px-12 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 xl:mr-0 lg:max-w-full 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src={logo} />
            <img
              className=" mt-6 w-full rounded-lg h-60 drop-shadow-xl object-cover object-center lg:hidden"
              src={education}
            />
            <h1 className=" mt-6 text-2xl font-bold text-gray-900 lg:text-3xl lg:mt-8 dark:text-gray-200">
              you can work from anywhere.
              <br />
              <span className=" text-red-400"> take advantage of it</span>
            </h1>
            <p className="mt-2 text-gray-600 lg:mt-8 dark:text-gray-300">
              Line 8:11: img elements must have an alt prop, either with
              meaningful text, or an empty string for decorative images
              jsx-a11y/alt-text Line 9:11: img elements must have an alt prop,
              either with meaningful text, or an empty string for decorative
              images jsx-a11y/alt-text
            </p>
            <div className="space-x-2 mt-4 sm:mt-6">
              <button
                type="button"
                className="text-white capitalize bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-lg px-5 py-2 text-center">
                book your escape
              </button>
              <button
                type="button"
                className="px-5 py-3 capitalize hover:bg-gray-100 hover:cursor-pointer active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600 text-red-500 focus:ring-2 focus:outline-none focus:ring-gray-300 rounded-full  tracking-wider font-semibold text-sm sm:text-base">
                learn more
              </button>
            </div>
          </div>
        </div>
        <div className="relative 2xl:col-span-3">
          <img
            className=" absolute inset-0 w-full h-full drop-shadow-xl object-cover object-center"
            src={education}
          />
        </div>
      </div>
      <div className="max-w-full mx-auto px-8 lg:px-12 py-8 bg-gray-100  dark:bg-gray-700">
        <div className=" grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {list.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
