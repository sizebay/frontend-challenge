import {
  storageFavoritesClothes,
  saveStorageClothes
} from '@/functions/locaStorage';
import {
  FavoriteClothes,
  FavoritesAction,
  ItemClothes
} from '@/types/itemClothes';
import { isEqual } from 'lodash';

const initialState: FavoriteClothes = {
  favorites: storageFavoritesClothes ? JSON.parse(storageFavoritesClothes) : []
};

export const favoriteStore = (
  state = initialState,
  action: FavoritesAction
) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const existingItemIndex = state.favorites.findIndex((item: ItemClothes) =>
        isEqual(item, action.payload)
      );

      if (existingItemIndex !== -1) {
        const updatedFavorites = state.favorites.filter(
          item => !isEqual(item, action.payload)
        );
        saveStorageClothes(updatedFavorites);
        return {
          ...state,
          favorites: updatedFavorites
        };
      } else {
        const updatedFavorites = [...state.favorites, action.payload];
        saveStorageClothes(updatedFavorites);
        return {
          ...state,
          favorites: updatedFavorites
        };
      }
    default:
      return state;
  }
};
