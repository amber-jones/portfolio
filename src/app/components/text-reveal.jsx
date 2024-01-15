"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TextReveal = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const lineElement = lineRef.current;

    const tl = gsap.timeline();

    tl.from(lineElement.querySelectorAll('.line span'), {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <div className="line" ref={lineRef}>
      <span>Text 1</span>
      <span>Text 2</span>
      <span>Text 3</span>
      {/* Add more spans as needed */}
    </div>
  );
};

export default TextReveal;