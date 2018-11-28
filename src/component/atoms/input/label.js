import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const fontSize = ({ height }) => `${height / 35.5555555556}rem`;

const style = css`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: ${palette('weight', 2, true)};
  font-size: ${fontSize};
  color: ${palette('grayscale', 8, true)};
`;

const LabelStyle = styled.label`
  ${style};
`;

const Label = ({ children, height }) => {
  return <LabelStyle height={height}>{children}</LabelStyle>;
};
Label.defaultProps = {
  height: 30,
};
export { Label };
