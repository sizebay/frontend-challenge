import { Button } from '@/components/ButtonStyle';
import { getData } from '@/functions/getData';
import { stringifyUrl } from '@/functions/stringifyUrl';
import Link from 'next/link';
import React from 'react';

const Page = async () => {
  const data = await getData();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-4">
      <Link href={'/'}>
        <Button>Back</Button>
      </Link>
      <div className="flex min-h-screen flex-col items-center justify-between gap-4">
        {data.map(item => {
          return (
            <Link
              href={`clothes/${stringifyUrl(item)}`}
              key={item.title}
              passHref
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
