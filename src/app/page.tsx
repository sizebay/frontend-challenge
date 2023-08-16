import { HomeAccordion } from '@/components/HomeAccordion';
import { dataHome } from '@/mocks';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 text-foreground gap-9">
      <section className="flex flex-row items-baseline gap-3 ">
        <h1 className="text-8xl">{dataHome.title}</h1>
        <h4 className="text-4xl">{dataHome.subTitle}</h4>
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
      <Link href={'/clothes'} className="text-xl">
        Ver toda coleção!
      </Link>
    </main>
  );
}
