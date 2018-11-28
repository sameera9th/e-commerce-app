import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  background-color: ${palette('white', 1, true)};
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  border-radius: 3px;
`;

const Style = styled.table`
  ${style};
`;

const Table = ({ children }) => {
  return <Style>{children}</Style>;
};

export { Table };
