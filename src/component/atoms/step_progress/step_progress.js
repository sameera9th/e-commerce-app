import React from 'react';
import styled, { css } from 'styled-components';

const style = css`
  position: relative;
  padding-left: 45px;
  list-style: none;
  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 15px;
    width: 10px;
    height: 100%;
    border-left: 2px solid #ccc;
  }
`;

const StepStart = styled.ul`
  ${style};
`;

const StepProgress = ({ children }) => {
  return <StepStart>{children}</StepStart>;
};

export { StepProgress };
