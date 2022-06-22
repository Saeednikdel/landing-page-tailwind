import React from 'react';

const Avatar = ({ image, size }) => {
  const [widthHeight, setWidthHeight] = useState('');
  switch (size) {
    case 'xs':
      setWidthHeight('w-6 h-6');
      break;
    case 'sm':
      setWidthHeight('w-8 h-8');
      break;
    case 'md':
      setWidthHeight('w-10 h-10');
      break;
    case 'lg':
      setWidthHeight('w-20 h-20');
      break;
    case 'xl':
      setWidthHeight('w-36 h-36');
      break;
    default:
      setWidthHeight('w-10 h-10');
      break;
  }
  return (
    <img
      class={`rounded-full ${widthHeight}`}
      src={image}
      alt="Rounded avatar"
    />
  );
};

export default Avatar;
