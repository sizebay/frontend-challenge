'use client';

import { Spinner } from '@nextui-org/react';
import React from 'react';

export const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Spinner label="Loading..." color="default" />
    </div>
  );
};
