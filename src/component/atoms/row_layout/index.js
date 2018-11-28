import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const styles = css`
  display: flex;
  flex-direaction: row;
  justify-content: ${ifProp(
    { direction: 'space-between' },
    'space-between',
    ''
  )};
  width: 100%;
`;

const RowStyle = styled.div`
  ${styles};
`;
const RowLayout = ({ children, direction, onClick }) => {
  return (
    <RowStyle direction={direction} onClick={onClick ? onClick : null}>
      {children}
    </RowStyle>
  );
};

export { RowLayout };
