'use client';
import SIDE from '@/app/enums/Side';
import { useItems } from '@context/Items';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductImage from './ProductImage';

const scrollAmount = 720;

const Carousel = (): React.JSX.Element => {
  const itemsContext = useItems();
  const scrollableDivRef = useRef<HTMLDivElement | null>(null);

  const handleScrollClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    const scrollableDiv = scrollableDivRef.current;
    const side = event.currentTarget.value as SIDE;

    if (scrollableDiv) {
      scrollableDiv.scrollBy({
        left: side === SIDE.LEFT ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-full relative">

      <button
        value={SIDE.LEFT}
        onClick={handleScrollClick}
        className="flex items-center justify-center cursor-pointer w-16 text-white transition select-none absolute h-80 left-0"
        style={{ backgroundColor: "#d1ecff" }}
      >
        <FaChevronLeft />
      </button>

      <div className="bg-blue-200 flex w-full px-16">
        <div ref={scrollableDivRef} className="scrollable-div flex flex-row overflow-x-hidden overflow-y-hidden whitespace-nowrap">
          {itemsContext.dataFromSource.map((item, key) => (
            <div className="flex h-80" style={{ backgroundColor: "white", minWidth: 360 }} key={key}>
              <ProductImage dirtyString={item.image} />
            </div>
          ))}
        </div>
      </div>

      <button
        value={SIDE.RIGHT}
        onClick={handleScrollClick}
        className="flex items-center justify-center cursor-pointer w-16 text-white transition select-none absolute h-80 right-0"
        style={{ backgroundColor: "#d1ecff" }}
      >
        <FaChevronRight />
      </button>

    </div>
  );
};

export default Carousel;
