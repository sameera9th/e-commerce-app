import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';

const styles = css`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid ${palette('grayscale', 0, true)};
`;

const HeaderStyle = styled.div`
  ${styles};
`;

const ModalHeader = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

ModalHeader.propTypes = {
  isOpen: PropTypes.bool,
};
export { ModalHeader };
