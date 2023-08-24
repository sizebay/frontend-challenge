'use client';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ButtonStyle';
import { getCategory } from '@/functions/getCategory';
import { normalizeImage } from '@/functions/normalizeImage';
import { stringifyUrl } from '@/functions/stringifyUrl';
import { ItemClothes } from '@/types/itemClothes';
import { Card, CardFooter, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { dataClothes } from '@/mocks';
import { twMerge } from 'tailwind-merge';
import useFetchData from '@/hooks/useFetchData';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const { data } = useFetchData();

  const filteredData = useMemo(() => {
    return selectedCategory
      ? data.filter(item => item.category === selectedCategory)
      : data;
  }, [selectedCategory, data]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center gap-4">
      <div className="flex flex-row flex-wrap items-center gap-4 px-8 justify-center">
        {dataClothes.filters.map(filter => (
          <Button
            key={filter.label}
            onClick={() => setSelectedCategory(filter.category)}
            className={twMerge(
              selectedCategory === filter.category && 'bg-size-blue'
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4 px-8 justify-center">
        {filteredData.map(item => {
          const { category, className } = getCategory(item.category);
          const formattedPicture = normalizeImage(item.image);
          return (
            <Card
              key={item.title}
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <Image
                alt={item.title}
                className="object-cover h-52 w-52"
                src={formattedPicture}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny ">{category}</p>
                <Link
                  href={`/clothes/${stringifyUrl(item)}`}
                  key={item.title}
                  passHref
                  className={className}
                >
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Visitar
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
