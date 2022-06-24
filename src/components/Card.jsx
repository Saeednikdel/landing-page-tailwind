import React from 'react';

function Card({ item }) {
  return (
    <div className="flex flex-col space-y-1 bg-white dark:bg-gray-800">
      <div className="flex items-center p-4">
        <img
          className=" h-12 w-12 rounded object-cover object-center "
          src={item.image}
        />

        <h3 className="text-xl px-4 font-semibold text-gray-800 dark:text-white">
          {item.title}
        </h3>
      </div>
      <p className="text-gray-800 dark:text-gray-300 text-lg p-4">
        {item.text}
        <a className="hover:cursor-pointer text-red-500 ml-4 hover:text-red-600">
          read more
        </a>
      </p>
    </div>
  );
}

export default Card;
