import React from 'react';
import './HeroSection.css';
import { Link} from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container' style={{ background: `url('images/gallery-7.jpg') center center/cover no-repeat` }}>
      <div className='bg-image-overlay'></div>
      <h1>Readers Are Leaders Of Tomorrow</h1>
      <div className='hero-btns'>
        <h1>Best Book Rent App</h1> 
      </div>
    </div>
  );
}

export default HeroSection;
