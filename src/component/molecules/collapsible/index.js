import React from 'react';
import { CollapsibleBody } from './../../atoms';
import { DefaultBox, BoxHeader } from './../../atoms/boxes';
import { Heading, RowLayout } from './../../atoms';

const Collapsible = ({ children, header, isActive, onClick, rightSide }) => {
  if (rightSide) {
    return (
      <DefaultBox>
        <BoxHeader isActive={isActive} onClick={onClick}>
          <RowLayout direction="space-between">
            <Heading level={6} fontWeight={1} grayScale={1}>
              {header}
            </Heading>
            {rightSide}
          </RowLayout>
        </BoxHeader>
        <CollapsibleBody isActive={isActive}>{children}</CollapsibleBody>
      </DefaultBox>
    );
  } else {
    return (
      <DefaultBox>
        <BoxHeader isActive={isActive} onClick={onClick}>
          <Heading level={6} fontWeight={1} grayScale={1}>
            {header}
          </Heading>
        </BoxHeader>
        <CollapsibleBody isActive={isActive}>{children}</CollapsibleBody>
      </DefaultBox>
    );
  }
};

export default Collapsible;
