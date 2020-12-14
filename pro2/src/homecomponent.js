import React , { useState, useEffect }from 'react';
import './App.css';
/*import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as LOL, Switch, Route } from 'react-router-dom';*/
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ScrollToTop from "./components/scrolltop";
import HeroSection from "./components/HeroSection";

const Home = () => {
 const [isOpen,setIsOpen] = useState(false)

 const toggle=()=>{
 	setIsOpen(!isOpen)
 }

  return (
  	<>
  	<Navbar toggle={toggle} />
  	<Sidebar toggle={toggle} isOpen={isOpen}/>
         <HeroSection />
    </>
  );
}

export default Home;