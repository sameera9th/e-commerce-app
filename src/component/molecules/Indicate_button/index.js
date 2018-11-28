import React from 'react';
import { Button, Expand, Compress } from './../../atoms';

const IndicateButton = ({ onClick, isExpand }) => {
  return (
    <Button boxShadow={false} type="btn-transparent" onClick={onClick}>
      {isExpand === false ? <Expand /> : <Compress />}
    </Button>
  );
};

IndicateButton.defaultProps = {
  isExpand: false,
};
export default IndicateButton;
