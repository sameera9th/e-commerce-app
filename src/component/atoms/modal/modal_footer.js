import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';

const disply = ({ isOpen }) => `${isOpen === true ? 'visible' : 'hidden'}`;

const styles = css`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  border-top: 1px solid ${palette('grayscale', 0, true)};
  background: #fff;
  position: absolute;
  bottom: 0px;
  width: 100%;
  transition: height 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  visibility: ${disply};
`;

const ModalStyle = styled.div`
  ${styles};
`;

const ModalFooter = ({ isOpen, children }) => {
  return <ModalStyle isOpen={isOpen}>{children}</ModalStyle>;
};

ModalFooter.propTypes = {
  isOpen: PropTypes.bool,
};
export { ModalFooter };
