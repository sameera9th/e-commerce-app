import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  border-top: 1px solid ${palette('grayscale', 0, true)};
  border-bottom: 1px solid ${palette('grayscale', 0, true)};
  background-color: #f5f9fc;
`;

const Style = styled.tr`
  ${style};
`;

const TableRow = ({ children }) => {
  return <Style>{children}</Style>;
};

export { TableRow };
