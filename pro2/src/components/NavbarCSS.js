/*
 fixed height of the navbar
const navBarHeight = "1em";

export const NavBar = styled.div`   
     fixes the navbar to the top 
    position: fixed;
    top:0;
    
     let the navbar take the whole width and do not scroll horizontally 
    display: block;
    overflow: hidden;
    width:100%;
    
     sets a fixed height that we can use when styling the content
        height: ${navBarHeight};
    
     make sure the navbar is in front of the content
    z-index: 5;
    
    background-color: #888;

export const Content = styled.div`
     leave some space at the top for the navbar 
    margin-top: ${navBarHeight};
    
     put the content behind the navbar (smaller z-index)
    z-index: 0;
    
    background-color: #EEE;
*/
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


/*
  ::placeholder {
    color: palevioletred;
  }
*/
export const Nav=styled.div`
  background:transparent;
  margin-top:-80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

@media screen and (max-width:960px){
  transition:0.8 all ease;
 }    
`
export const NavbarContainer=styled.div`
display: flex;
  justify-content: space-between;
  height: 80px;
 z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`
export const NavbarLogo=styled(LinkR)`
 color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`
export const MobileIcon=styled.div`
  display:none;
   margin-right: 0.2rem;

@media  screen and (max-width:768px){
 display:block;
  display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`
export const NavMenu=styled.ul`
display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right:-22px;

/*nav menu display none when small*/
@media screen and (max-width:768px){
  display:none;
}
`
export const NavItem=styled.li`
   height: 80px; 
`

export const NavbarLinks=styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor :pointer;

& .active{
  border-bottom: 3px solid #01bf71;
 }
`

export const NavBtn=styled.nav`
 display: flex;
    align-items: center;

@media screen and (max-width:768px){
display:none
}
`
/*
 transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
*/
export const NavBtnLink=styled(LinkR)`
  border-radius:50px;
  color: #010606;
  background:#01bf71;
  text-decoration: none;
  white-space:nowrap;
  padding: 10px 22px;
  cursor :pointer;
  font-size:16px;
  outline:0;
   border:none;
  transition: all 0.2s ease-in-out; 

 &:hover{
  transition: all 0.2s ease-in-out; 
  background: #fff;
  color:#010606;
 }
`
