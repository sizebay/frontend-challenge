import Item from "@interfaces/Item";
import Error from "@interfaces/Error";

const url = process.env.NEXT_PUBLIC_API_URL;

interface ItemsReponse {
  data: Item[];
  error: false | Error;
}

export async function fetchProducts(): Promise<ItemsReponse> {
  const endpoint = 'storeCollections.json';

  let itemsReponse: ItemsReponse = {
    data: [],
    error: false
  };

  try {
    const response = await fetch(url + endpoint);

    if (!response.ok) throw new Error('network');

    const jsonData: Item[] = await response.json();

    itemsReponse = {
      ...itemsReponse,
      data: jsonData,
    };

    return itemsReponse;

  } catch (error) {

    itemsReponse = {
      ...itemsReponse,
      error: { message: error, code: 1 }
    };

    return itemsReponse;
  }
};
