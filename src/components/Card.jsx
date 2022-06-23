import React from 'react';

function Card({ item }) {
  return (
    <div className="mt-20 flex flex-col space-y-2 items-center rounded-3xl bg-white dark:bg-gray-800 drop-shadow">
      <img
        className=" h-44 shadow w-44 rounded-3xl -mt-16 object-cover object-center "
        src={item.image}
      />

      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {item.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-lg p-8">
        {item.text}
        <a className="hover:cursor-pointer text-red-500 ml-4 hover:text-red-600">
          read more
        </a>
      </p>
    </div>
  );
}

export default Card;
