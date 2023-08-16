'use client';
import { Divider, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black p-6 mt-8">
      <Link href={'/'} className="sm:block font-bold text-inherit w-fit">
        <Image
          className="h-14"
          radius={'none'}
          alt="Sizebay logo"
          src="/Brand_Mark_Tag_Sizebay-REFINED_2x_2_540x.png"
        />
      </Link>
      <Divider className="my-4 bg-size-blue" />
      <div className="flex items-end flex-col text-size-blue">
        <p>Front-end challenge Sizebay</p>
        <p className="text-xs">copyright © Samuel Ramos</p>
      </div>
    </footer>
  );
};
