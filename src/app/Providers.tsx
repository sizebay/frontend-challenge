'use client';
import { globalStore } from '@/store/globalStore';
import { Children } from '@/types/children';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';

const Providers = ({ children }: Children) => {
  return (
    <Provider store={globalStore}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
};

export default Providers;
