import React, { memo } from 'react';
import colors from '@noths/styles-config/src/colors';

const Burger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 68 47"
    className="gc-icon gc-icon--burger"
    height="22px"
    width="22px"
  >
    <path
      d="M63.5 9h-59C2 9 0 7 0 4.5S2 0 4.5 0h59C66 0 68 2 68 4.5S66 9 63.5 9zM63.5 28h-59C2 28 0 26 0 23.5S2 19 4.5 19h59c2.5 0 4.5 2 4.5 4.5S66 28 63.5 28zM63.5 47h-59C2 47 0 45 0 42.5S2 38 4.5 38h59c2.5 0 4.5 2 4.5 4.5S66 47 63.5 47z"
      fill={colors.emperor}
    />
  </svg>
);

export default Burger;
