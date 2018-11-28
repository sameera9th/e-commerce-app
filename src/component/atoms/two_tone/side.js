import React from 'react';
import styled, { css } from 'styled-components';

const style = css`
  position: relative;
  z-index: 2;
`;

const SideStyle = styled.div`
  ${style};
`;

const Side = ({ children }) => {
  return <SideStyle>{children}</SideStyle>;
};

export { Side };
