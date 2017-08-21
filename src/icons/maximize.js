import React from 'react';

export default ({ size = 16, color = '#888' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
    <path
      fill={color}
      fillRule="evenodd"
      d="M7.707 10.293a.999.999 0 0 0-1.414 0L2 14.586V11a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H3.414l4.293-4.293a.999.999 0 0 0 0-1.414zM17 0h-6a1 1 0 1 0 0 2h3.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414L16 3.414V7a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1z" />
  </svg>
);
