export const getData = async () => {
  const res = await fetch(
    'https://static.sizebay.technology/assets/storeCollections.json',
    { cache: 'no-store' }
  );
  return res.json();
};
