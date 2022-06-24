import React from 'react';
import education from '../img/education.png';

const Hero = ({ openModal }) => {
  return (
    <div className="lg:grid lg:grid-cols-2 2xl:grid-cols-5 bg-white dark:bg-gray-800">
      <div className="px-12 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 xl:mr-0 lg:max-w-full 2xl:col-span-2">
        <div className="xl:max-w-xl">
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
            we provide free programming courses for any one around the world,
            with zero knowledge of programming. if you are a programmer already
            you can join our team of developers or our teachers. share your
            knowledge to make the world a better place. 🌎💕
          </p>
          <div className="space-x-2 mt-4 sm:mt-6">
            <button
              onClick={openModal}
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
  );
};

export default Hero;
