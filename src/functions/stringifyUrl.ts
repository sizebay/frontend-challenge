import { ItemClothes } from '@/types/itemClothes';

export const stringifyUrl = (item: ItemClothes) =>
  encodeURIComponent(JSON.stringify(item));
