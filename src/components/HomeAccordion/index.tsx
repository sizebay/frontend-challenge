'use client';
import React from 'react';
import { dataHome } from '../../mocks';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { FaTshirt } from 'react-icons/fa';

export const HomeAccordion = () => {
  return (
    <div className="flex flex-col my-8 dark text-foreground bg-background w-full place-items-center rounded-lg py-8 px-4">
      <Accordion
        className="max-w-5xl"
        itemClasses={{
          title: 'font-bold text-size-blue z-10',
          base: 'relative'
        }}
        variant="light"
      >
        {dataHome.features.description.map(data => (
          <AccordionItem
            key={data.title}
            aria-label={data.title}
            title={data.title}
            indicator={
              <div data-testid="indicator">
                <FaTshirt className="fill-size-blue" />
              </div>
            }
            startContent={
              <div
                data-testid="start-content"
                className="h-6 w-6 absolute bg-size-orange z-0 rounded-full top-4"
              />
            }
          >
            {data.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
