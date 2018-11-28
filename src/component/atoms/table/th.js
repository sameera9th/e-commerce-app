import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  background-color: ${palette('rgbascale', 1, true)};
  border-top: 1px solid ${palette('grayscale', 0, true)};
  border-bottom: 1px solid ${palette('grayscale', 0, true)};
  color: ${palette('grayscale', 2, true)};
  padding: 15px;
  text-align: left;
  font-size: 13px;
`;

const Style = styled.th`
  ${style};
`;

const TableHead = ({ children }) => {
  return <Style>{children}</Style>;
};

export { TableHead };
