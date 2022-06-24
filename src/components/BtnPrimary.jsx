import React from 'react';

const BtnPrimary = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-full hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
      {children}
    </button>
  );
};

export default BtnPrimary;
