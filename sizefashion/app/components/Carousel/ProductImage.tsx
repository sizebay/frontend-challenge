import React from 'react';

interface ProductImageProps { dirtyString: string; }

const ProductImage = ({ dirtyString }: ProductImageProps) => {
    const imageSlotRef = React.useRef(null);

    dirtyString = dirtyString.replace(/\"/g, `"`);

    const productImage = `${dirtyString}</img>`;

    React.useEffect(() => {
        if (!imageSlotRef.current) return;
        imageSlotRef.current.innerHTML = productImage; // Property 'innerHTML' does not exist on type 'never'.ts(2339)
    }, [imageSlotRef]);

    return <div className="object-cover" ref={imageSlotRef} />;
};

export default ProductImage;
