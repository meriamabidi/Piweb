import React, { useEffect } from 'react';
import { FooterFour, HeaderFive, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import LoginArea from './login-area';


const Login = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFive />
      <Breadcrumb title={'Login Page'} />
      <LoginArea/>
      <FooterFour/>
    </Wrapper>
  );
};

export default Login;