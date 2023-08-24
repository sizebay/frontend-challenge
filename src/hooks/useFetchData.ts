import { getData } from '@/functions/getData';
import { ItemClothes } from '@/types/itemClothes';
import { UseFetchData } from '@/types/useFetchData.types';
import { useEffect, useState } from 'react';

const useFetchData = (): UseFetchData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ItemClothes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const fetchedData: ItemClothes[] = await getData();
        setData(fetchedData);
      } catch (error) {
        setError('Ocorreu um erro ao obter os dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    loading,
    error,
    data
  };
};

export default useFetchData;
