import React, { useState } from 'react';

const Alert = ({ title, message, type }) => {
  const [color, setColor] = useState('');
  switch (type) {
    case 'info':
      setColor('text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800');
      break;
    case 'danger':
      setColor('text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800');
      break;
    case 'success':
      setColor(
        'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800'
      );
      break;
    case 'warning':
      setColor(
        'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800'
      );
      break;
    default:
      setColor('text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800');
      break;
  }
  return (
    <div class={`p-4 mb-4 text-sm  rounded-lg ${color}`} role="alert">
      <span class="font-medium">{title}</span> {message}
    </div>
  );
};

export default Alert;
