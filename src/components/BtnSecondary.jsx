import React from 'react';

const BtnSecondary = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-full border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
      {children}
    </button>
  );
};

export default BtnSecondary;
