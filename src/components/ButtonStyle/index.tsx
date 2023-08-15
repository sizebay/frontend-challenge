'use client';

import { Children } from '@/types/children';
import { Button as ButtonUI } from '@nextui-org/react';
import React from 'react';

export const Button = ({ children, ...props }: Children) => {
  return <ButtonUI {...props}>{children}</ButtonUI>;
};
