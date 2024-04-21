import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const value = localStorage.getItem(key);
      if (value) setValue(JSON.parse(value));
    } catch (error) {
      console.log("Erro ao acessar localStorage", error);
    }
  }, [key])

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);

    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log("Erro salvar localStorage", error);
    }
  }

  return {
    value,
    updateLocalStorage
  }
}