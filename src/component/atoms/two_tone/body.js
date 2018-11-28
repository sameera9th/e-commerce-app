import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 50%;
  height: 100%;
  background-color: ${palette('primary', 0, true)};
  z-index: -1;
`;

const BodyStyle = styled.div`
  ${style};
`;

const Body = ({ children }) => {
  return <BodyStyle>{children}</BodyStyle>;
};

export { Body };
