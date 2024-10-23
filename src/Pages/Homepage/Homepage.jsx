import React from 'react';
import Header from '../../Components/header/Header';
import Nav1 from '../../Components/nav1/Nav1';
import "./Homepage.css"
import Nav2 from '../../Components/nav2/Nav2';

const Homepage = () => {
  return (
    <div className='body'>
        <Header />  
      <Nav1 />
      <Nav2 />
        
      
    </div>
  )
}

export default Homepage
