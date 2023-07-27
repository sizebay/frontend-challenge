import x from '@/assets/logo.png';
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
    if (element) {
      element.style.transform = 'rotate(0.5deg)'
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        transform: 'rotate(0.5deg)',
        paddingTop: 36,
        marginBottom: 36,
        marginLeft: 12
      }}
    >
      <span
        style={{
          color: '#6ac0ff',
          position: 'absolute',
          right: 64,
          bottom: 4,
          zIndex: 1,
        }}
      >
        fashion
      </span>
      <Image id='logo' width={220} src={x} alt={'sizebay'} />
    </div>
  )
}

export default Logo;