import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  background-color: ${palette('white', 1, true)};
  border: 1px solid #ddd;
`;

const Style = styled.tbody`
  ${style};
`;

const Tbody = ({ children }) => {
  return <Style>{children}</Style>;
};

export { Tbody };
