"use client";
import x from '@assets/logo.png';
import Image from 'next/image';
import React, { useRef, useLayoutEffect } from 'react';

const Logo = (): JSX.Element => {
  const logoRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    if (logoRef.current) {
      logoRef.current.style.transition = "transform 0.3s ease";
      logoRef.current.style.transform = "rotate(-0.5deg)";
    }
  };

  const onMouseLeave = () => {
    if (logoRef.current) logoRef.current.style.transform = "rotate(0.5deg)";
  };

  useLayoutEffect(() => {
    if (logoRef.current) {
      logoRef.current.addEventListener("mouseenter", onMouseEnter);
      logoRef.current.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (logoRef.current) {
        logoRef.current.removeEventListener("mouseenter", onMouseEnter);
        logoRef.current.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <div className="flex justify-center transform rotate-0.5 p-9 ml-3" ref={logoRef}>
      <Image className="select-none" id="logo" width={220} src={x} alt="sizebay" />
    </div>
  );
};

export default Logo;
