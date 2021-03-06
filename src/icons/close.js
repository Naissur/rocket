import React from 'react';

export default ({ size = 16, color = '#888' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 14 14">
    <path fill={color} d="M8.414 7l5.293-5.293A.999.999 0 1 0 12.293.293L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7" />
  </svg>
);

