import React, { useEffect } from 'react';
import { FooterFour, HeaderFive, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import RegisterArea from './register-area';


const Register = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFive />
   <Breadcrumb title={'Register Page'} />
      <RegisterArea/>
      <FooterFour />
    </Wrapper>
  );
};

export default Register;