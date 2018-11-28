import React from 'react';
import styled from 'styled-components';
import {
  ProfileIcon,
  ProfileAvatar,
  RowLayout,
  Heading,
  Text,
  Padding,
} from '../../atoms';

const ItemRow = styled.div`
  &:after {
    content: '';
    width: 0;
    height: 30px;
    border: 1px solid #ddd;
    margin-left: 25px;
  }
  :last-child:after {
    border: 0px;
  }
`;

const AssignOrder = ({ url, size, name, comment, outcome, status }) => {
  return (
    <ItemRow>
      <Padding direction="vertical" size={13}>
        <RowLayout>
          {url === true ? (
            <ProfileAvatar url={url} />
          ) : (
            <ProfileIcon size={50} />
          )}
          <div style={{ marginLeft: '10px' }}>
            <Heading fontWeight={1} grayScale={3} level={4}>
              {name}
            </Heading>
            <div>
              <RowLayout>
                <Text level={12} grayScale={1} fontWeight={6}>
                  <em>Comment :</em>
                </Text>
                <Text level={12} grayScale={1} fontWeight={3}>
                  {comment}
                </Text>
              </RowLayout>
              <RowLayout>
                <Text level={12} grayScale={1} fontWeight={6}>
                  <em>Outcome :</em>
                </Text>
                <Text level={12} grayScale={1} fontWeight={3}>
                  {outcome}
                </Text>
              </RowLayout>
            </div>
          </div>
        </RowLayout>
      </Padding>
    </ItemRow>
  );
};

AssignOrder.defaultProps = {
  url: null,
  size: 50,
  name: null,
  comment: null,
  outcome: null,
  margin: 0,
};
export default AssignOrder;
