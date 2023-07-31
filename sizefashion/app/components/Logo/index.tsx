"use client";
import x from '@assets/logo.png'
import Image from 'next/image';
import React from 'react';

const Logo = (): JSX.Element => {

  React.useEffect(() => {

    let logo: HTMLElement | null;

    if (document) {
      logo = document.getElementById('logo');

      if (logo) {
        logo.addEventListener('mouseenter', () => onMouseEnter(logo));
        logo.addEventListener('mouseleave', () => onMouseLeave(logo));
      }
    }
    return () => {

      if (document) {
        if (logo) logo.removeEventListener('mouseenter', () => { })
        if (logo) logo.removeEventListener('mouseleave', () => { })
      }
    }

  }, []);

  const onMouseEnter = (element: HTMLElement | null): void => {
    if (element) {
      element.style.transition = 'transform 0.3s ease'
      element.style.transform = 'rotate(-0.5deg)'
    }
  }

  const onMouseLeave = (element: HTMLElement | null): void => {
    if (element) element.style.transform = 'rotate(0.5deg)'
  }

  return (
    <div className="flex justify-center transform rotate-0.5 p-9 ml-3">
      <Image className="select-none" id='logo' width={220} src={x} alt={'sizebay'} />
    </div>
  )
}

export default Logo;
