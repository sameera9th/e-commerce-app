import React from 'react';
import styled from 'styled-components';
import { LinkButton, Badge } from './../../atoms';
import { palette } from 'styled-theme';

const NavigationItem = ({ to, name, active, count, type, icon }) => {
  const ItemRow = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding: 6px 12px 6px 12px;
    background-color: ${active === false
      ? palette('white', 1, true)
      : palette('rgbascale', 0, true)};
    width: 258px;
    transition: background-color 250ms ease-out, color 250ms ease-out,
      border-color 250ms ease-out;
    &:hover,
    &:focus,
    &:active {
      background-color: ${palette('rgbascale', 0, true)};
    }
  `;
  const Margin = styled.div`
    margin-top: 4px;
    margin-left: 4px;
    flex-direction: row;
    display: flex;
  `;
  const Item = styled.div`
    flex-direction: row;
    display: flex;
    margin-left: ${type === 1 ? 20 + 'px' : 0 + 'px'};
    color: ${active === true
      ? palette('primary', 0, true)
      : palette('rgbascale', 4, true)};
  `;

  const IconBlock = styled.div`
    width: 24px;
  `;
  const BadgeBlock = styled.div`
    margin-top: ${type === 1 ? 2 + 'px' : 4 + 'px'};
  `;

  return (
    <LinkButton to={to}>
      <ItemRow>
        <Item>
          <IconBlock>{icon}</IconBlock>
          <Margin>{name}</Margin>
        </Item>
        <BadgeBlock>
          <Badge isActive={count}>{count}</Badge>
        </BadgeBlock>
      </ItemRow>
    </LinkButton>
  );
};
NavigationItem.defaultProps = {
  to: '/',
  name: null,
  active: false,
  type: null,
};

export default NavigationItem;
