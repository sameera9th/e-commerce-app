import React from 'react';
import { Bar, Progress } from './../../atoms/progress';

const ProgressSummary = ({ progress, isActive }) => {
  return (
    <Bar isActive={isActive}>
      <Progress progress={progress} />
    </Bar>
  );
};
ProgressSummary.defaultProps = {
  progress: null,
  isActive: false,
};
export default ProgressSummary;
