import styled from "styled-components";
import {MdArrowForward,MdKeyboardArrowRight} from "react-icons/md";

export const HeroContainer=styled.div`
background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 30px;
  height:800px;
  position:relative:
  z-index:1;

  :before{
  	content:"";
  	position:absolute;
  	left:0;
  	bottom:0;
  	right:0;
  	top:0;
  	background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index:2; 
  }
`
/*180deg means to bottom!*/
export const Herobg=styled.div`
top:0;
right:0;
bottom:0;
left:0;
position:absolute;
width:100%;
height:100%;
overflow:hidden;
`

export const Videobg=styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`

export const HeroContent=styled.div`
z-index:3;
position:absolute;
max-width:1200px;
padding:8px 24px;
display:flex;
align-items:center;
flex-direction:column;
`

export const HeroH1=styled.h1`
color:#fff;
text-align:center;
font-size:48px;

@media screen and (max-width:768px){
font-size:40px;
}	

@media screen and (max-width:480px){
font-size:32px;
}
`

export const HeroP=styled.p`
color:#fff;
text-align:center;
margin-top:24px;
font-size:24px;
max-width:600px;


@media screen and (max-width:768px){
font-size:24px;
}	

@media screen and (max-width:480px){
font-size:18px;
}
`
export const HeroBtnWrap=styled.div`
margin-top:33px;
display:flex;
flex-direction:column;
align-items:center;
`
export const ArrowForward=styled(MdArrowForward)`
font-size:20px;
margin-left:8px;
`
export const ArrowRight=styled(MdKeyboardArrowRight)`
font-size:20px;
margin-left:8px;
`
