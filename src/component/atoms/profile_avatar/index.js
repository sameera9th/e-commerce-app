import React from 'react';
import styled from 'styled-components';
import avt from './../../../images/san-antonio-headshots-900x1125.jpg';

// const setSize = ({ size }) => `${size}px`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  paddig: 0px;
  margin: 0px;
  cursor: pointer;
`;

const ProfileAvatar = ({ size, url, children }) => {
  return (
    <Avatar size={size} src={url ? url : avt}>
      {children}
    </Avatar>
  );
};
ProfileAvatar.defaultProps = {
  size: 50,
};
export { ProfileAvatar };
