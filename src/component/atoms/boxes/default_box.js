import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const borderActive = ({ border }) => `${border === true ? 1 : 0}px`;
const shadowActive = ({ shadow, Shadowlevel }) =>
  `${
    shadow === false
      ? null
      : Shadowlevel === 1
        ? `0 5px 47px 25px rgba(0,0,0,0.14)`
        : `0 -1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24) `
  }`;

const style = css`
  background-color: ${palette('white', 1, true)};
  border: ${borderActive} solid ${palette('grayscale', 0, true)};
  box-shadow: ${shadowActive};
  border-radius: 2px;
`;

const Box = styled.div`
  ${style};
`;

const DefaultBox = ({ border, shadow, children, Shadowlevel }) => {
  return (
    <Box border={border} shadow={shadow} Shadowlevel={Shadowlevel}>
      {children}
    </Box>
  );
};

DefaultBox.defaultProps = {
  border: null,
  shadow: true,
  Shadowlevel: null,
};
export { DefaultBox };
