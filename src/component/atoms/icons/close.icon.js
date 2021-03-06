import React from 'react';
import theme from '../../../themes/default';

const Close = ({ active, size }) => {
  const color =
    active === true ? theme.palette.primary[3] : theme.palette.grayscale[2];
  return (
    <svg
      fill={color}
      style={{ width: size + 'px', height: size + 'px' }}
      xmlns="http://www.w3.org/2000/svg"
      height="64"
    >
      <path
        fill="#1D1D1B"
        d="M28.941 31.786L.613 60.114a2.014 2.014 0 1 0 2.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 0 0 1.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1 0 60.562.589L32.003 29.15 3.441.59A2.015 2.015 0 0 0 .593 3.439l28.348 28.347z"
      />
    </svg>
  );
};

Close.defaultProps = {
  size: 25,
  active: false,
};

export { Close };
