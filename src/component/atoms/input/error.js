import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  color: ${palette('primary', 1, true)};
  margin-top: 1px;
  height: 10px;
  font-weight: ${palette('weight', 3, true)};
`;

const ErroStyle = styled.p`
  ${style};
`;

const Error = ({ children }) => {
  return <ErroStyle>{children}</ErroStyle>;
};

export { Error };
