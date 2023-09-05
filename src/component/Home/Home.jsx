import React, { useEffect, useState } from 'react';
import '../comman/styles/main.css';
import { Capsules } from '../views/Capsules';
import { Navbar } from '../comman/Header/Navbar';
import background from '../comman/assets/Img/landing-back.jpg'
export const Home = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: '800px',
          width: '100%',
        }}></div>
    </div>
  );
};
