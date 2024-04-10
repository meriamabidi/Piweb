import React, { useEffect } from 'react';
import { FooterFour, HeaderFive, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import FaqArea from './faq-area';


const Faq = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFive />
      {/*<Breadcrumb title={'Ask Question'} />*/}
      <FaqArea />
     {/* <Cta/> */}
      <FooterFour />
    </Wrapper>
  );
};

export default Faq;