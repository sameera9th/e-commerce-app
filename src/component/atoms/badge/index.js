import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  background-color: ${palette('primary', 0, true)};
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  font-size: 10px;
  justify-content: center;
  aline-item: center;
  display: flex;
  padding-top: 3px;
`;

const BadgeStyle = styled.div`
  ${style};
`;

const Badge = ({ children, isActive }) => {
  if (isActive >= 0) {
    return <BadgeStyle>{children}</BadgeStyle>;
  } else {
    return null;
  }
};

export { Badge };
