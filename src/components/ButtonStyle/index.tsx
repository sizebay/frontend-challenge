'use client';

import { ButtonProps, Button as ButtonUI } from '@nextui-org/react';

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonUI {...props}>{children}</ButtonUI>;
};
