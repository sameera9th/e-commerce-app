import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';

const height = ({ isActive }) => `${isActive === true ? 100 : 0}%`;
const padding = ({ isActive }) => `${isActive === true ? 20 : 0}px`;

const styles = css`
  border-radius: 3px;
  width: 100%;
  background-color: ${palette('white', 2, true)};
  height: ${height};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: ${padding};
`;

const CollapsibleBody = styled(({ isActive, children, ...props }) =>
  React.createElement(`div`, props, isActive === true ? children : null)
)`
  ${styles};
`;

CollapsibleBody.propTypes = {
  isActive: PropTypes.bool,
};

export { CollapsibleBody };
