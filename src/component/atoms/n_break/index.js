import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const fontSize = ({ height }) => `${height / 55}rem`;

const style = css`
  font-size: ${fontSize};
  font-weight: ${palette('weight', 1, true)};
  padding: 20px 20px;
`;

const Break = styled.div`
  ${style};
`;

const NBreak = ({ children }) => {
  return <Break>{children}</Break>;
};

NBreak.defaultProps = {
  height: 40,
};
export { NBreak };
