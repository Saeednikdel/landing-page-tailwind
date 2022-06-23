import { useState } from 'react';
import { Switch } from '@headlessui/react';

import logo from './img/logo.png';
import education from './img/education.png';
import js from './img/js.png';
import python from './img/python.jpg';
import css from './img/css.png';
import { XIcon } from '@heroicons/react/solid';

import Card from './components/Card';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');
  const [modalClass, setModalClass] = useState('hidden');

  const list = [
    {
      title: 'Python',
      image: python,
      text: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant...',
    },
    {
      title: 'JavaScript',
      image: js,
      text: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. is used in react-js next-js and many other libraries...',
    },
    {
      title: 'Css',
      image: css,
      text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML ...',
    },
  ];
  const handleTheme = () => {
    if (theme == '') {
      setTheme('dark');
    } else {
      setTheme('');
    }
  };
  const openModal = () => {
    setModalClass('block');
  };
  return (
    <div className={`min-h-screen px-auto ${theme}`}>
      <div className="bg-white dark:bg-gray-600">
        <NavBar
          setTheme={handleTheme}
          checked={theme == 'dark'}
          openModal={openModal}
        />

        <div className="lg:grid lg:grid-cols-2 2xl:grid-cols-5 bg-white dark:bg-gray-800">
          <div className="px-12 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 xl:mr-0 lg:max-w-full 2xl:col-span-2">
            <div className="xl:max-w-xl">
              <img className="h-10" src={logo} />
              <img
                className=" mt-6 w-full rounded-lg h-60 drop-shadow-xl object-cover object-center lg:hidden"
                src={education}
              />
              <h1 className=" mt-6 text-2xl font-bold text-gray-900 lg:text-3xl lg:mt-8 dark:text-gray-200">
                Learn any programming language.
                <br />
                <span className=" text-red-400">zero to hero</span>
              </h1>
              <p className="mt-2 text-lg text-semibold text-gray-600 lg:mt-8 dark:text-gray-300">
                we provide free programming courses for any one around the
                world, with zero knowledge of programming. if you are a
                programmer already you can join our team of developers or our
                teachers. share your knowledge to make the world a better place.
                🌎💕
              </p>
              <div className="space-x-2 mt-4 sm:mt-6">
                <button
                  onClick={() => setModalClass('block')}
                  type="button"
                  className="text-white capitalize bg-red-600 hover:bg-red-700 font-medium rounded-full text-lg px-5 py-2 text-center">
                  join us now
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
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
      <div
        className={`${modalClass} fixed top-1/2 left-1/2 -translate-y-1/2 w-80 -translate-x-1/2 drop-shadow-lg z-50`}>
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setModalClass('hidden')}
              type="button"
              className="absolute top-3 right-2.5 hover:bg-gray-200 dark:hover:bg-slate-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="authentication-modal">
              <XIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-red-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-red-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <a className="text-sm text-red-700 hover:underline dark:text-red-500">
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{' '}
                  <a className="text-red-700 hover:underline dark:text-red-500">
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
