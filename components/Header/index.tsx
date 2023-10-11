// Header.tsx
import Head from 'next/head';
import Link from 'next/link';
import { Routes } from '@/utils/constants'; 

const Header = () => {
  return (
    <>
      <Head>
        <meta name="description" content="" />  
      </Head>
      
      <div className='w-full flex flex-row justify-between p-6 bg-blue-500 text-white'>
        <Link href={Routes.ReactExample} className='text-xl font-bold'>React example</Link>
        <div className='flex flex-row gap-4'>
          <Link href={Routes.Inicio}>Inicio</Link>
          <Link href={Routes.Ejemplos}>Ejemplos</Link>
          <Link href={Routes.vs21025}>vs21025</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
