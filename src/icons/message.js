import React from 'react';

export default ({ size = 16, color = '#888' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
    <path fill={color} d="M13.5 0h-11A2.507 2.507 0 0 0 0 2.5v7C0 10.875 1.125 12 2.5 12H12l4 4V2.5C16 1.125 14.875 0 13.5 0zM10 9H4c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm2-4H4c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
);

