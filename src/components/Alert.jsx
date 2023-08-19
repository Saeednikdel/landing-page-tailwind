import React from 'react';

const getClassNames = (type) => {
  const classNames = {
    info: 'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800',
    danger: 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800',
    success:
      'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800',
    warning:
      'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800',
  };
  return (
    classNames[type] ||
    'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800'
  );
};

const Alert = ({ title, message, type }) => {
  const color = getClassNames(type);

  return (
    <div className={`p-4 mb-4 text-sm rounded-lg ${color}`} role="alert">
      <span className="font-medium">{title}</span> {message}
    </div>
  );
};

export default Alert;
