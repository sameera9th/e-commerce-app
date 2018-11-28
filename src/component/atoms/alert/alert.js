import React from 'react';
import styled, { css } from 'styled-components';

const display = ({ isActive }) => (isActive === true ? 'flex' : 'none');

const style = css`
  flex-direction: row;
  display: ${display};
  background-color: #111111;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  bottom: 50px;
  left: 40px;
  position: fixed;
  padding: 18px 30px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  height: 55px !important;
  z-index: 999999999999994 !important;
`;

const AlertStyle = styled.div`
  ${style};
`;

const Alert = ({ children, isActive }) => {
  return <AlertStyle isActive={isActive}>{children}</AlertStyle>;
};

Alert.defaultProps = {
  isActive: false,
};
export { Alert };
