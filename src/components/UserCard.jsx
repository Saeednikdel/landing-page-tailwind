import React from 'react';
import BtnPrimary from './BtnPrimary';
import BtnSecondary from './BtnSecondary';

const UserCard = ({ item }) => {
  const { image, name, area } = item;

  return (
    <div className="bg-white rounded-3xl shadow dark:bg-gray-800 ">
      <div className="flex flex-col items-center py-8">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={image}
          alt={name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {`${area} Developer`}
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <BtnPrimary>Tutorials</BtnPrimary>
          <BtnSecondary>Contact</BtnSecondary>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
