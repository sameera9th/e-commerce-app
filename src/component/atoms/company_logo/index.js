import React from 'react';
import styled from 'styled-components';
// import DefaultImage from './../../../images/kisscc0-shopping-cart-shopping-centre-logo-shopping-list-shopping-cart-5b5f96de4eb6b9.8805151715329911983224.jpg';
import LogoBig from './../../../images/1200px-Dialog_Axiata_logo.svg.png';

const CompanyLogo = ({ size, imgUrl, type }) => {
  const ImageSmall = styled.img`
    width: ${size + 'px'};
    height: ${size + 'px'};
  `;
  const ImageBig = styled.img`
    width: ${size + 'px'};
  `;

  if (type === 1) {
    return <ImageSmall src={imgUrl} />;
  } else {
    return <ImageBig src={LogoBig} />;
  }
};
CompanyLogo.defaultProps = {
  imgUrl: LogoBig,
  type: 1,
};
export { CompanyLogo };
