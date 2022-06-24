import React from 'react';
import BtnPrimary from './BtnPrimary';
import BtnSecondary from './BtnSecondary';
const UserCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-8">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={item.image}
          alt={item.name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {item.area + ' Developer'}
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <BtnPrimary>Toturials</BtnPrimary>
          <BtnSecondary>Contact</BtnSecondary>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
