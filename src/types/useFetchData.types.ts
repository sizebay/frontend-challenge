import { ItemClothes } from './itemClothes';

export type UseFetchData = {
  loading: boolean;
  error: string | null;
  data: ItemClothes[];
};
