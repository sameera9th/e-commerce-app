import React from "react";
import theme from "../../../themes/default";

const FaceBook = ({ color, size }) => {
  return (
    <svg
      fill={theme.palette.grayscale[3]}
      style={{
        width: size + "px",
        height: size + "px",
        color: theme.palette.grayscale[3]
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z" />
    </svg>
  );
};
FaceBook.defaultProps = {
  size: 20,
  color: "#DDDDDD"
};
export { FaceBook };