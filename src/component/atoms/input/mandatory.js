import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const style = css`
  color: ${palette('danger', 0, true)};
`;

const MandatoryStyle = styled.span`
  ${style};
`;

const Mandatory = () => {
  return <MandatoryStyle>*</MandatoryStyle>;
};

export { Mandatory };
