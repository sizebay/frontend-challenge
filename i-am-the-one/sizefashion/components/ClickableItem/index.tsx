import { useItemsContext } from 'context/ItemsContext';
import { IItem } from 'interfaces/IItem';
import React from 'react';

interface IProps {
  item: IItem;
}

const ClickableItem = (props: IProps) => {

  const [imageSrc, setImageSrc] = React.useState('')

  const ItemsContext = useItemsContext();

  React.useEffect(() => {

    const srcRegex = /<img[^>]*src\s*=\s*['"]([^'"]+)['"][^>]*>/i; // Courtesy of ChatGPT
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

    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        display: 'flex',
        cursor: 'pointer',
        flexBasis: 0,
        flexGrow: 1
      }}
    >
      {!ItemsContext.fetching && (
        <img
          src={imageSrc}
          alt={props.item.title}
          style={{
            minWidth: 180,
            maxWidth: 220,
            width: 180,
            height: 180,
            objectFit: 'cover',
            flexBasis: 0,
            flexGrow: 1
          }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transition: 'opacity 0.4s ease',
          opacity: isHovered ? 0.8 : 0,
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          backgroundColor: '#d1ecff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span
          style={{
            userSelect: 'none',
            textAlign: 'center',
            margin: 12
          }}
        >{props.item.title}</span>
      </div>
    </div>

  )
}

export default ClickableItem;