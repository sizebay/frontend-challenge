'use client';
import { Children } from '@/types/children';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

const Providers = ({ children }: Children) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
