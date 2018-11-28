import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  font-size: 24px;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  position: relative;
  top: -8px;
  cursor: pointer;
  transition: all 250ms ease-out, color 250ms ease-out;
  &:hover {
    background-color: ${palette('grayscale', 4, true)};
  }
`;

const CloseStyle = styled.div`
  ${style};
`;

const CloseArea = ({ onClick }) => {
  return (
    <CloseStyle onClick={onClick}>
      <span style={{ marginLeft: '-1px', marginTop: '-2px' }}>&times;</span>
    </CloseStyle>
  );
};

export { CloseArea };
