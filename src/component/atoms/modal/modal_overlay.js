import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const size = ({ isOpen }) => `${isOpen === true ? 100 : 0}%`;
const top = ({ isOpen }) => `${isOpen === true ? 0 : 0}px`;
const zIndexLevel = ({ level }) =>
  `${level === 1 ? 999999999999991 : 999999999999992}`;

const styles = css`
  position: fixed;
  top: ${top};
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndexLevel};
  overflow: scroll;
  outline: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border: 0px;
  width: ${size};
  height: ${size};
  transition: height 0.01s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverLayStyle = styled.div`
  ${styles};
`;

const ModalOverLay = ({ isOpen, children, level }) => {
  return (
    <OverLayStyle isOpen={isOpen} level={level}>
      {children}
    </OverLayStyle>
  );
};

ModalOverLay.propTypes = {
  isOpen: PropTypes.bool,
  level: PropTypes.number,
};
ModalOverLay.defaultProps = {
  level: 1,
};

export { ModalOverLay };
