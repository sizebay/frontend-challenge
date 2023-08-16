export const addToFavorites = item => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: item
  };
};
