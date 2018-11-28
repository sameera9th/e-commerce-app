import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const borderActive = ({ isActive }) => `${isActive === true ? 1 : 0}px`;

const style = css`
  border-bottom: ${borderActive} solid ${palette('grayscale', 0, true)};
  border-radius: 3px 3px 0px 0px;
  padding: 15px;
  cursor: pointer;
  width: 100%;
`;

const Box = styled.div`
  ${style};
`;

const BoxHeader = ({ children, isActive, onClick }) => {
  return (
    <Box isActive={isActive} onClick={onClick}>
      {children}
    </Box>
  );
};

BoxHeader.defaultProps = {
  border: null,
  isActive: false,
};
export { BoxHeader };
