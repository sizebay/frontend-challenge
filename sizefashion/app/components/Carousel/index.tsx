"use client";
import { useItemsContext } from '@context/ItemsContext';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const scrollAmount = 720;

const Carousel = (): React.JSX.Element => {

  const ItemsContext = useItemsContext();

  React.useEffect(() => {
    let scrollableDiv: HTMLElement | null;
    let scrollLeftButton: HTMLElement | null;
    let scrollRightButton: HTMLElement | null;

    if (document) {
      scrollableDiv = document.querySelector('.scrollable-div');
      scrollLeftButton = document.getElementById('scrollLeftButton');
      scrollRightButton = document.getElementById('scrollRightButton');

      if (scrollableDiv) {

        if (scrollLeftButton) {
          scrollLeftButton.addEventListener('click', () => {
            scrollableDiv?.scrollBy({
              left: -scrollAmount,
              behavior: 'smooth',
            });
          });

          scrollLeftButton?.addEventListener('mouseenter', () => handleFocus(scrollLeftButton));
          scrollLeftButton?.addEventListener('mouseleave', () => handleBlur(scrollLeftButton));
        };

        if (scrollRightButton) {
          scrollRightButton.addEventListener('click', () => {
            scrollableDiv?.scrollBy({
              left: scrollAmount,
              behavior: 'smooth',
            });
          });

          scrollRightButton?.addEventListener('mouseenter', () => { handleFocus(scrollRightButton) });
          scrollRightButton?.addEventListener('mouseleave', () => { handleBlur(scrollRightButton) });
        };
      };
    };

    return () => {
      if (document) {
        if (scrollableDiv) scrollableDiv = null;
        if (scrollLeftButton) scrollLeftButton.removeEventListener('focus', () => { })
        if (scrollRightButton) scrollRightButton.removeEventListener('focus', () => { })
      };
    };

  }, []);

  const handleFocus = (element: HTMLElement | null): void => {
    if (element) element.style.backgroundColor = '#e2f3ff'
  };

  const handleBlur = (element: HTMLElement | null): void => {
    if (element) element.style.backgroundColor = '#d1ecff'
  };

  return (
    <div className='flex w-full'>

      <div id="scrollLeftButton" className='flex items-center justify-center cursor-pointer w-16 text-white transition select-none absolute h-80 left-0'>
        <FaChevronLeft />
      </div>

      <div className='bg-blue-200 flex w-full px-16'>
        <div className='scrollable-div flex flex-row overflow-x-hidden overflow-y-hidden whitespace-nowrap'>
          {ItemsContext.dataFromSource.map((item, key) =>
            <div
              className='flex h-80 object-cover'
              style={{ backgroundColor: 'white', minWidth: 360 }}
              key={key}
            >
              {/* YOLO */}<div dangerouslySetInnerHTML={{ __html: item.image }} />
            </div>
          )}
        </div>
      </div>

      <div id="scrollRightButton" className='flex items-center justify-center cursor-pointer w-16 text-white transition select-none absolute h-80 right-0'>
        <FaChevronRight />
      </div>

    </div>
  );
};

export default Carousel;
