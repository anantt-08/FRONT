import React,{useState} from 'react';
import {HeroContainer,Herobg,Videobg,HeroContent,HeroBtnWrap,HeroH1,HeroP,ArrowRight,ArrowForward} from "./HeroSectionCSS"; 
import {Button} from "./ButtonElement";
import Video1 from "../video.mp4";
function HeroSection() {
   const [hover,sethover]=useState(false)

  const onhover=()=>{
    sethover(!hover)
  }
/*
onmouseenter and leave for setting up f arrow so that it changes state and renders thecurrent arrow!
*/
  return (
    <>
      <HeroContainer>
      <Herobg> 
      <Videobg autoPlay loop muted src={Video1} type="video/mp4" />
      </Herobg>
      <HeroContent>
      <HeroH1>Virtual Banking Made Easy!</HeroH1>
      <HeroP>
      Sign up to new account and get 250$ in your your account today!
      </HeroP>
      <HeroBtnWrap>
      <Button to="signup" onMouseEnter={onhover} onMouseLeave={onhover}>
        Get Started {hover? <ArrowForward /> : <ArrowRight />}
      </Button>
      </HeroBtnWrap>
      </HeroContent>
    </HeroContainer>
    </>
  );
}

export default HeroSection;
