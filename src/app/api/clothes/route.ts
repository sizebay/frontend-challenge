import { NextResponse } from 'next/server';
import { v4 } from 'uuid';
import { SetDataCache, setDataCache } from '../utils/dataStorage';

const addUuidToItems = (items: SetDataCache[]) => {
  return items.map(item => {
    return {
      ...item,
      uuid: v4()
    };
  });
};

export async function GET() {
  try {
    const response = await fetch(
      'https://static.sizebay.technology/assets/storeCollections.json'
    );
    const data: SetDataCache[] = await response.json();

    const itemsWithUuid = addUuidToItems(data);
    setDataCache(itemsWithUuid);
    return NextResponse.json(itemsWithUuid, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching data' },
      { status: 500 }
    );
  }
}
