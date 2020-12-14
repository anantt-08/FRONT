import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavbarContainer,NavbarLogo,MobileIcon,NavItem,NavMenu,NavbarLinks,NavBtn,NavBtnLink} from "./NavbarCSS";

function Navbar({toggle}) {
  return (
    <>
       <Nav>
       <NavbarContainer>
       <NavbarLogo to="/">
        Dollar
       </NavbarLogo>
        <MobileIcon onClick={toggle}>
        <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
        <NavbarLinks to="about">About
        </NavbarLinks>
        </NavItem>
        <NavItem>
        <NavbarLinks to="discover">Discover
        </NavbarLinks>
        </NavItem>
        <NavItem>
        <NavbarLinks to="services">Services
        </NavbarLinks>
        </NavItem>
        <NavItem>
        <NavbarLinks to="signup">SignUp
        </NavbarLinks>
        </NavItem>
         </NavMenu> 
        <NavBtn>
        <NavBtnLink to="/signin">SignIn
        </NavBtnLink>
        </NavBtn>
       </NavbarContainer>
       </Nav>
    </>
  );
}

export default Navbar;