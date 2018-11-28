import React from 'react';
import theme from '../../../themes/default';

const Settings = ({ active, size }) => {
  const color =
    active === true ? theme.palette.primary[3] : theme.palette.grayscale[2];
  return (
    <svg
      fill={color}
      style={{ width: size + 'px', height: size + 'px' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
    >
      <path d="M8 14c3.519 0 6.432-2.614 6.92-6H54a1 1 0 1 0 0-2H14.92C14.432 2.614 11.519 0 8 0 4.14 0 1 3.141 1 7s3.14 7 7 7zM8 2c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zM48 42c-3.519 0-6.432 2.614-6.92 6H2a1 1 0 1 0 0 2h39.08c.488 3.386 3.401 6 6.92 6 3.859 0 7-3.141 7-7s-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zM54 27H35.368c-.396-3.602-3.455-6.414-7.161-6.414-3.706 0-6.765 2.813-7.161 6.414H2a1 1 0 1 0 0 2h19.109c.577 3.4 3.536 6 7.098 6s6.52-2.6 7.097-6H54a1 1 0 1 0 0-2zm-25.793 6C25.336 33 23 30.664 23 27.793s2.336-5.207 5.207-5.207 5.207 2.336 5.207 5.207S31.078 33 28.207 33z" />
    </svg>
  );
};
Settings.defaultProps = {
  active: false,
  size: 20,
};
export { Settings };