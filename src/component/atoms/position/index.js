import React from 'react';
import styled, { css } from 'styled-components';

const selPlaceing = ({ placing }) => {
  if (placing === 'left') {
    return 'flex-start';
  } else if (placing === 'center') {
    return 'center';
  } else if (placing === 'right') {
    return 'flex-end';
  } else {
    return null;
  }
};

const verticalCenter = ({ vertical }) => (vertical === true ? 'center' : null);

const style = css`
  display: flex;
  flex-direction: row;
  justify-content: ${selPlaceing};
  align-items: ${verticalCenter};
`;

const PositionStyle = styled.div`
  ${style};
`;

const Position = ({ children, placing, vertical }) => {
  return (
    <PositionStyle placing={placing} vertical={vertical}>
      {children}
    </PositionStyle>
  );
};
Position.defaultProps = {
  placing: 'left',
  vertical: false,
};
export { Position };
