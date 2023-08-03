import React from 'react';
import Link from 'next/link';
import Item from '@interfaces/Item';
import { useItems } from '@context/Items';

interface ClickableItemProps {
  item: Item;
  id: number;
}

const ClickableItem = (props: ClickableItemProps) => {
  const [imageSrc, setImageSrc] = React.useState('');

  const itemsContext = useItems();

  React.useEffect(() => {
    const srcRegex = /<img[^>]*src\s*=\s*['"]([^'"]+)['"][^>]*>/i; // Courtesy of ChatGPT;
    const matches = props.item.image.match(srcRegex);

    if (matches && matches.length >= 2) setImageSrc(matches[1]);
  }, [props.item.image]);

  return (
    <Link href={{ pathname: "/item", query: { id: props.id.toString(), imageSrc: imageSrc } }}>
      <div className="relative flex cursor-pointer flex-basis-0 flex-grow justify-center select-none backdrop-filter backdrop-blur-md bg-blue-100 group">
        {!itemsContext.fetching && (
          <img
            src={imageSrc}
            alt={props.item.title}
            className="h-44 object-cover flex-grow"
            style={{ minWidth: 180 }}
          />
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 transition-opacity duration-1 ease opacity-0 group-hover:opacity-80 backdrop-blur-md bg-blue-100 flex items-center justify-center transform">
          <span className="user-select-none text-center m-12 text-black">
            {props.item.title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ClickableItem;
