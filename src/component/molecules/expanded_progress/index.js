import React from 'react';
import { StepProgressItem, StepProgress } from './../../atoms/step_progress';

const ExpandedProgress = () => {
  return (
    <StepProgress>
      <StepProgressItem number={1} active={true}>
        Initiation
      </StepProgressItem>
      <StepProgressItem number={2} active={true}>
        CXO - Approval
      </StepProgressItem>
      <StepProgressItem number={3} active={true}>
        InfoSec - Approval
      </StepProgressItem>
      <StepProgressItem number={4}>
        IT Infrastructure Feasibility Approval
      </StepProgressItem>
      <StepProgressItem number={5}>IT Head Approval</StepProgressItem>
      <StepProgressItem number={6}>
        IT Infrastructure Task Execution
      </StepProgressItem>
      <StepProgressItem number={7}>Ready For Testing</StepProgressItem>
      <StepProgressItem number={8}>Change Request Completion</StepProgressItem>
    </StepProgress>
  );
};

export default ExpandedProgress;
