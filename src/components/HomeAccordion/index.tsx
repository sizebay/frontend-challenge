'use client';
import { dataHome } from '@/mocks';
import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';
import { FaTshirt } from 'react-icons/fa';

export const HomeAccordion = () => {
  return (
    <div className="flex flex-col my-8 dark text-foreground bg-background w-full place-items-center rounded-lg py-8 px-4">
      <Accordion
        className="max-w-5xl"
        fullWidth
        itemClasses={{
          title: 'font-bold text-size-blue'
        }}
        variant="light"
      >
        {dataHome.features.description.map(data => (
          <AccordionItem
            key={data.title}
            aria-label={data.title}
            title={data.title}
            indicator={<FaTshirt className="fill-size-blue" />}
          >
            {data.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
