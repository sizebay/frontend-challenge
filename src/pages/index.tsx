import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import MainHeader from "@/components/layout/MainHeader";
import TaskManagerView from "@/views/TaskManagerView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sizebay Challenge</title>
        <meta name="description" content="Sizebay Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <TaskManagerView />
    </Layout>
  );
}
