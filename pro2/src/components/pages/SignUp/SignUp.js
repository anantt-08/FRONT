import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

//{... } gives all the props !!
function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
