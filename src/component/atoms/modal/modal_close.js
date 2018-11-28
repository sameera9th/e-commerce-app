import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const styles = css`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: 28px;
  ${'' /* position: absolute; */} margin-top:8px;
  color: ${palette('grayscale', 1, true)};
  margin-right: 40px;
`;

const Close = styled.button`
  ${styles};
`;

const ModalClose = ({ children, onClick }) => {
  return <Close onClick={onClick}>{children}</Close>;
};

export { ModalClose };
