import React from "react";
import Link from "react-router-dom/Link";
import styled, { css } from "styled-components";
import { palette } from "styled-theme";

const weight = () => palette("weight", 3, true);
const fontSize = ({ height }) => `${height / 55}rem`;
const color = ({ color }) => palette("grayscale", 4, true);

const styles = css``;

const Links = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  font-weight: ${weight};
  font-size: ${fontSize};
  color: ${color};
`;

const StyledLink = styled(
  ({ disabled, transparent, height, theme, color, children, to }) => (
    <Links
      theme={theme}
      color={color}
      disabled={disabled}
      transparent={transparent}
      height={height}
      to={to}
    >
      {children}
    </Links>
  )
)`
  ${styles};
`;

const LinkButton = ({ children, to }) => {
  return <StyledLink to={to}>{children} </StyledLink>;
};

LinkButton.defaultProps = {
  height: 40,
  color: palette("grayscale", 4, true)
};

export { LinkButton };
