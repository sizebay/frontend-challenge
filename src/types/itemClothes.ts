export type ItemClothes = {
  category: string;
  image: string;
  title: string;
  vendor: string;
};

export interface FavoriteClothes {
  favorites: ItemClothes[];
}

export type FavoritesAction = {
  type: 'ADD_TO_FAVORITES';
  payload: ItemClothes;
};
