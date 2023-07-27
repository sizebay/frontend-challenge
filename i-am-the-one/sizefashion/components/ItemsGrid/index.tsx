import { useItemsContext } from 'context/ItemsContext';
import { IItem } from 'interfaces/IItem';
import React from 'react';
import ClickableItem from '../ClickableItem';

export default function ItemsGrid() {

  const ItemsContext = useItemsContext();

  const [data, setData] = React.useState<IItem[]>([]);

  React.useEffect(() => {

    console.log(ItemsContext)

    setData(ItemsContext.manipulatedData)
  }, [ItemsContext])

  if (ItemsContext.fetching) {
    return (
      <div
        style={{
          backgroundColor: '#403b37',
          height: 360,
          marginTop: 6,
          flex: 1
        }}
      >
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div
      style={{
        width: '100%',
        marginTop: 6,
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {data.length === 0 && (<span>Nothing was found :(</span>)}
      {data.length > 0 && data.map((item, i) => <ClickableItem key={i} item={item} />)}
    </div>
  )
}
