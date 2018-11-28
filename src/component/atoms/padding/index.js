import React from 'react';

const Padding = ({ size, direction, children }) => {
  let padder = null;
  if (direction === 'left') {
    padder = { paddingLeft: size + 'px' };
  } else if (direction === 'right') {
    padder = { paddingRight: size + 'px' };
  } else if (direction === 'top') {
    padder = { paddingTop: size + 'px' };
  } else if (direction === 'bottom') {
    padder = { paddingBottom: size + 'px' };
  } else if (direction === 'vertical') {
    padder = { paddingTop: size + 'px', paddingBottom: size + 'px' };
  } else if (direction === 'horizantal') {
    padder = { paddingLeft: size + 'px', paddingRight: size + 'px' };
  } else {
    padder = { padding: size + 'px' };
  }
  return <div style={padder}>{children}</div>;
};
Padding.defaultProps = {
  children: null,
  direction: null,
  size: null,
};
export { Padding };
