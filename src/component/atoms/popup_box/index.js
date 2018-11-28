import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';

const height = ({ isOpen }) => `${isOpen === true ? 400 : 0}px`;
const width = ({ isOpen }) => `${isOpen === true ? 300 : 0}px`;
const border = ({ isOpen }) => `${isOpen === true ? 1 : 0}px`;

const styles = css`
  position: absolute;
  right: 0px;
  top: 62px;
  border-radius: 3px;
  background-color: ${palette('white', 2, true)};
  width: ${width};
  height: ${height};
  border: ${border} solid ${palette('grayscale', 0, true)};
  transition: height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const PopUpBox = styled(({ isOpen, children, ...props }) =>
  React.createElement(`div`, props, isOpen === true ? children : null)
)`
  ${styles};
`;

PopUpBox.propTypes = {
  isOpen: PropTypes.bool,
};

export { PopUpBox };
