import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 8px 25px 15px 25px;
  height: 60px;
`;

const SpacingStyle = styled.div`
  ${styles};
`;

const ModalSpacing = ({ isOpen, children }) => {
  return <SpacingStyle isOpen={isOpen}>{children}</SpacingStyle>;
};

export { ModalSpacing };
