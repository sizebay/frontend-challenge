import { HomeAccordion } from '@/components/HomeAccordion';
import { dataHome } from '@/mocks';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 text-foreground gap-9">
      <section className="flex flex-row items-baseline gap-3 relative">
        <div className="h-8 w-8 absolute bg-size-orange z-0 rounded-full" />
        <div className="h-8 w-8 absolute bg-size-orange z-0 rounded-full bottom-2 right-0" />
        <h1 className="text-8xl z-10">{dataHome.title}</h1>
        <h4 className="text-4xl z-10">{dataHome.subTitle}</h4>
      </section>
      <div className="text-center">
        {dataHome.description.map(data => (
          <p key={data} className="text-xl">
            {data}
          </p>
        ))}
      </div>
      <HomeAccordion />
      <div className="text-center flex">
        <p>{dataHome.footer}</p>
      </div>
      <div className="relative">
        <div className="h-8 w-8 absolute bg-size-orange -z-10 rounded-full -top-2 -left-4" />
        <Link href={'/clothes'} className="z-10 text-xl font-semibold">
          Ver toda coleção!
        </Link>
      </div>
    </main>
  );
}
