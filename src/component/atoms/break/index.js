import React from "react";
import styled, { css } from "styled-components";
import { palette } from "styled-theme";

const style = css`
  background-color: ${palette("grayscale", 7, true)};
  height: 1px;
  width: 100%;
`;

const BadgeStyle = styled.div`
  ${style};
`;

const Break = ({ children }) => {
  return <BadgeStyle>{children}</BadgeStyle>;
};

export { Break };
