import React, { useEffect } from 'react';
import { FooterFour, HeaderFive, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AboutContact from './about-contact';
import AboutMeArea from './about-me-area';
import ExperienceArea from './experience-area';


const AboutMe = ({team}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFive />
      <AboutMeArea team={team}/>
      <ExperienceArea/>
      {/*<AboutContact/>*/}
      <FooterFour />
    </Wrapper>
  );
};

export default AboutMe;