import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { font, palette } from "styled-theme";

const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`;
const color = ({ fontColor, grayScale, type }) => {
  if (type === "danger") {
    return palette("danger", 0, true);
  } else {
    return fontColor
      ? fontColor
      : palette("grayscale", grayScale ? grayScale : 1, true);
  }
};
const weight = ({ fontWeight }) =>
  palette("weight", fontWeight ? fontWeight : 1, true);

const styles = css`
  font-family: ${font("primary")};
  font-weight: ${weight};
  font-size: ${fontSize};
  margin: 0;
  color: ${color};
  z-index: -999999999999;
`;

const Heading = styled(
  ({
    level,
    children,
    reverse,
    palette,
    fontColor,
    fontWeight,
    grayScale,
    type,
    theme,
    ...props
  }) => React.createElement(`h${level}`, props, children)
)`
  ${styles};
`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.number,
  type: PropTypes.string
};

Heading.defaultProps = {
  level: 1,
  palette: "grayscale"
};

export { Heading };
