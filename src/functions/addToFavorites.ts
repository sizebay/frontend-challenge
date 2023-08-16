import { ItemClothes } from '@/types/itemClothes';

export const addToFavorites = (item: ItemClothes) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: item
  };
};
