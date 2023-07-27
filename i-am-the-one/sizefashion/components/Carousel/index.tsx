import { useItemsContext } from 'context/ItemsContext';
import React from 'react';

export default function Carousel() {

  const scrollAmount = 720;

  const ItemsContext = useItemsContext();

  React.useEffect(() => {
    populate()
    let scrollableDiv: HTMLElement | null;
    let scrollLeftButton: HTMLElement | null;
    let scrollRightButton: HTMLElement | null;

    if (document) {
      scrollableDiv = document.querySelector('.scrollable-div');
      scrollLeftButton = document.getElementById('scrollLeftButton');
      scrollRightButton = document.getElementById('scrollRightButton');

      if (scrollableDiv) {

        if (scrollLeftButton) {
          scrollLeftButton.addEventListener('click', () => {
            scrollableDiv?.scrollBy({
              left: -scrollAmount,
              behavior: 'smooth',
            });
          });

          scrollLeftButton?.addEventListener('mouseenter', () => handleFocus(scrollLeftButton));
          scrollLeftButton?.addEventListener('mouseleave', () => handleBlur(scrollLeftButton));

        }

        if (scrollRightButton) {
          scrollRightButton.addEventListener('click', () => {
            scrollableDiv?.scrollBy({
              left: scrollAmount,
              behavior: 'smooth',
            });
          });

          scrollRightButton?.addEventListener('mouseenter', () => { handleFocus(scrollRightButton) });
          scrollRightButton?.addEventListener('mouseleave', () => { handleBlur(scrollRightButton) });
        }
      }
    }

    return () => {
      if (document) {
        if (scrollableDiv) scrollableDiv = null;
        if (scrollLeftButton) scrollLeftButton.removeEventListener('focus', () => { })
        if (scrollRightButton) scrollRightButton.removeEventListener('focus', () => { })
      }
    };

  }, []);

  const handleFocus = (element: HTMLElement | null): void => {
    if (element) element.style.backgroundColor = '#e2f3ff'
  }

  const handleBlur = (element: HTMLElement | null): void => {
    if (element) element.style.backgroundColor = '#d1ecff'
  }

  const populate = async () => await ItemsContext.populate();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%'
      }}
    >
      <div
        id="scrollLeftButton"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          width: 64,
          color: 'white',
          transition: 'background-color 0.1s ease',
          userSelect: 'none',
          position: 'absolute',
          height: 376,
          left: 0,
        }}
      >
        {/* fiquei com preguica de colocar pacote de icone hehe */}
        {'<'}
      </div>

      <div
        style={{
          backgroundColor: '#d1ecff',
          display: 'flex',
          width: '100%',
          padding: '0px 64px'
        }}
      >
        <div
          className='scrollable-div'
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'hidden',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {ItemsContext.dataFromSource.map((item) => {
            return (
              <div
                style={{
                  backgroundColor: 'white',
                  height: 360,
                  minWidth: 360,
                  margin: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  objectFit: 'fill'
                }}
              >
                {/* aqui eu fiz do jeito que não se deve fazer */}
                <div style={{ borderRadius: 200, }} dangerouslySetInnerHTML={{ __html: item.image }} />
              </div>
            )
          })}
        </div>
      </div>

      <div
        id="scrollRightButton"
        style={{
          backgroundColor: '#d1ecff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 64,
          transition: 'background-color 0.1s ease',
          color: 'white',
          cursor: 'pointer',
          userSelect: 'none',
          position: 'absolute',
          height: 376,
          right: 0
        }}
      >

        {'>'}
      </div>
    </div>
  )
}
