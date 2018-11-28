import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const setWeight = ({ bold }) =>
  bold === true ? palette('weight', 2, true) : palette('weight', 5, true);
const style = css`
  background-color: ${palette('white', 1, true)};
  border-top: 1px solid ${palette('grayscale', 0, true)};
  font-weight: ${setWeight};
  padding: 13px;
`;

const Style = styled.td`
  ${style};
`;

const TableData = ({ children, bold }) => {
  return <Style bold={bold}>{children}</Style>;
};
TableData.defaultProps = {
  bold: false,
};
export { TableData };
