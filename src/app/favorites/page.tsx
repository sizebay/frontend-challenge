'use client';
import { getCategory } from '@/functions/getCategory';
import { stringifyUrl } from '@/functions/stringifyUrl';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import React from 'react';
import { Card, CardFooter, Image } from '@nextui-org/react';
import { Button } from '@/components/ButtonStyle';
import { normalizeImage } from '@/functions/normalizeImage';

const Page = async () => {
  const { favorites } = useSelector(({ favorites }) => favorites);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-4">
      <div className="flex flex-row items-center justify-between gap-4">
        {favorites.length > 0 ? (
          favorites.map(item => {
            const { category, className } = getCategory(item.category);
            const formattedPicture = normalizeImage(item.image);
            return (
              <Card
                key={item.title}
                isFooterBlurred
                radius="lg"
                className="border-2 border-size-orange/40"
              >
                <Image
                  alt={item.title}
                  className="object-cover h-52 w-52"
                  src={formattedPicture}
                />
                <CardFooter className="justify-between before:bg-white/10 border-size-orange/40 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny ">{category}</p>
                  <Link
                    href={`/favorites/${stringifyUrl(item)}`}
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
          })
        ) : (
          <div className="flex flex-col text-center gap-4">
            <p className="text-2xl">Nenhum item favoritado!</p>
            <p className="text-xs">
              Visite nossa coleção para encontrar a peça que mais te agrada
            </p>
            <Link href={'/clothes'} className="underline text-xs">
              Clique aqui!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
