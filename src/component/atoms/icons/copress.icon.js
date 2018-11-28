import React from 'react';
import theme from '../../../themes/default';

const Compress = ({ color, size }) => {
  return (
    <svg
      fill={theme.palette.grayscale[0]}
      style={{
        width: size + 'px',
        height: size + 'px',
        color: theme.palette.grayscale[0],
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 342.946 342.946"
    >
      <path
        fill={theme.palette.grayscale[2]}
        d="M342.946 21.213L321.733 0 207.526 114.208V51.425h-30V165.42h113.995v-30h-62.782zM51.424 207.846h62.464L0 321.733l21.213 21.213L135.419 228.74v63.101h30V177.846H51.424z"
      />
    </svg>
  );
};
Compress.defaultProps = {
  size: 20,
  color: '#DDDDDD',
};
export { Compress };
