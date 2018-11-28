import React from 'react';
import { CompanyLogo, Heading } from './../../atoms';

const LoginIntro = () => {
  return (
    <div
      style={{
        marginLeft: '100px',
        position: 'absolute',
        marginTop: '7%',
      }}
    >
      <CompanyLogo size={250} type={2} />
      <Heading level={1} fontWeight={1} grayScale={2}>
        ITSR
      </Heading>
    </div>
  );
};
export default LoginIntro;
