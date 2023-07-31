'use client';
import { useItemsContext } from '@context/ItemsContext';
import { IItem } from '@interfaces/IItem';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const ProductDetails = () => {

  const { grabItem, populate } = useItemsContext();

  const [item, setItem] = React.useState<IItem>();

  React.useEffect(() => { getInfo() }, []);

  const router = useRouter();
  const itemIndex = Number(useSearchParams().get('id'));
  const imageSrc = useSearchParams().get('imageSrc');

  const handleBack = () => router.back();

  const getInfo = async () => {
    try {
      await populate();
    } catch (error) {
    } finally {
      const _item = await grabItem(itemIndex);
      setItem(_item);
    };
  };

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium urna nec dui elementum convallis. Nulla in mollis purus. Sed posuere, mi id tincidunt dapibus, ex elit congue lectus, eget aliquet urna mi ut arcu.';

  return (
    <div className="bg-white">
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 focus:outline-none focus:shadow-outline mb-2"
        onClick={handleBack}
      >
        Back
      </button>
      <img className="" src={imageSrc || ''} alt={item?.title} />
      <h2 className="text-xl color-black font-semibold mb-1">{item?.title}</h2>
      <p className="text-sm text-gray-500 mb-0.5">{item?.category}</p>
      <p className="text-base text-gray-700 mb-2">{item?.vendor}</p>
      <p className="text-base text-gray-700">{description}</p>
    </div>
  );
};

export default ProductDetails;
