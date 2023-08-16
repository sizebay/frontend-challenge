import { ItemClothes } from '@/types/itemClothes';

export const storageFavoritesClothes = localStorage.getItem('favorites');

export const saveStorageClothes = (favorites: ItemClothes[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
