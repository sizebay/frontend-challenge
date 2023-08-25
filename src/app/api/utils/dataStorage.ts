export type SetDataCache = {
  category: string;
  image: string;
  title: string;
  vendor: string;
  uuid: string;
};

export let externalDataCache: SetDataCache[] = [];

export const setDataCache = (data: SetDataCache[]) => {
  externalDataCache = data;
};
