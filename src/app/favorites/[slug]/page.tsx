'use client';
import { useState } from 'react';
import { Button } from '@/components/ButtonStyle';
import { addToFavorites } from '@/functions/addToFavorites';
import { getCategory } from '@/functions/getCategory';
import { normalizeImage } from '@/functions/normalizeImage';
import { parseURL } from '@/functions/parseUrl';
import { ItemClothes } from '@/types/itemClothes';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Tooltip
} from '@nextui-org/react';

const Page = async ({ params }) => {
  const decodedItem: ItemClothes = parseURL(params);
  const formattedPicture = normalizeImage(decodedItem.image);
  const dispatch = useDispatch();

  const { category } = getCategory(decodedItem.category);

  const [favorite, setFavorite] = useState(false);

  const handleToggleFavorite = () => {
    dispatch(addToFavorites(decodedItem));
    setFavorite(!favorite);
  };

  const tooltipContent = !favorite
    ? 'Remover dos favoritos'
    : 'Adicionar aos favoritos';

  return (
    <section className="flex min-h-[80vh] px-8 justify-center items-center">
      <Card isFooterBlurred className="border-2 h-fit border-size-orange/40">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-slate-900 uppercase font-bold">
            {category}
          </p>
          <h4 className="text-slate-900 font-medium text-xl w-1/2">
            {decodedItem.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={decodedItem.title}
          className="z-0 object-contain"
          src={formattedPicture}
        />
        <CardFooter className="absolute bg-size-orange/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-col items-center flex-grow">
            <p className=" text-slate-900">{decodedItem.vendor}</p>
          </div>
          <Tooltip showArrow={true} content={tooltipContent} color="danger">
            <div>
              <Button
                isIconOnly
                color="danger"
                aria-label="Like"
                onClick={handleToggleFavorite}
              >
                <AiOutlineHeart />
              </Button>
            </div>
          </Tooltip>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Page;
