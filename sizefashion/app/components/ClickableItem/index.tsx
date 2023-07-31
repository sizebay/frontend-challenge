
import React from 'react';
import Link from 'next/link';
import { IItem } from '@interfaces/IItem';
import { useItemsContext } from '@context/ItemsContext';

interface IProps {
  item: IItem;
  id: number;
}

const ClickableItem = (props: IProps) => {

  const [imageSrc, setImageSrc] = React.useState('')

  const ItemsContext = useItemsContext();

  React.useEffect(() => {

    const srcRegex = /<img[^>]*src\s*=\s*['"]([^'"]+)['"][^>]*>/i; // Courtesy of ChatGPT;
    const matches = props.item.image.match(srcRegex);

    if (matches && matches.length >= 2) setImageSrc(matches[1]);
  }, [props.item.image]);

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={{ pathname: '/item', query: { id: props.id.toString(), imageSrc: imageSrc } }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative flex cursor-pointer flex-basis-0 flex-grow justify-center select-none backdrop-filter backdrop-blur-md bg-blue-100'
      >
        {!ItemsContext.fetching && (
          <img
            src={imageSrc}
            alt={props.item.title}
            className='h-44 object-cover flex-grow'
            style={{ minWidth: 180 }}
          />
        )}
        <div className={`absolute top-0 right-0 bottom-0 left-0 transition-opacity duration-1 ease ${isHovered ? 'opacity-80' : 'opacity-0'} backdrop-blur-md bg-blue-100 flex items-center justify-center`}>
          <span className="user-select-none text-center m-12 text-black">
            {props.item.title}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ClickableItem;
