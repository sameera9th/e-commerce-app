import React from 'react';
import { Alert, CloseArea } from './../../atoms/alert';

const QuickAlert = ({ children, isActive, onClick }) => {
  return (
    <Alert isActive={isActive}>
      {children}
      <CloseArea onClick={onClick} />
    </Alert>
  );
};

QuickAlert.defaultProps = {
  children: null,
  isActive: false,
};
export default QuickAlert;
