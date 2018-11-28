import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const setWidth = ({ width }) => `${width}px`;
const setVisibility = ({ isActive }) => `${isActive === true ? 0 : 1}`;

const style = css`
  width: ${setWidth};
  background-color: ${palette('grayscale', 0, true)};
  height: 10px;
  border-radius: 10px;
  ${'' /* visibility: ${setVisibility}; */} margin-top: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: ${setVisibility};
  overflow: hidden;
`;

const Style = styled.div`
  ${style};
`;

const Bar = ({ isActive, width, children }) => {
  return (
    <Style isActive={isActive} width={width}>
      {children}
    </Style>
  );
};
Bar.defaultProps = {
  isActive: false,
  width: 100,
};
export { Bar };
