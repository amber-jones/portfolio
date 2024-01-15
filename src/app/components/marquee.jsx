"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';

const Marquee = () => {
  useEffect(() => {
    const marquee = document.querySelector('.marquee');

    gsap.to(marquee, {
      x: '-100%',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee heading opacity-10">
        {/* Your content goes here */}
        <span className='pr-10'>UX Design - UI Design - Front end development &nbsp;</span>
        {/* Repeat your content as needed */}
        <span>UX Design - UI Design - Front end development</span>
      </div>
    </div>
  );
};

export default Marquee;

