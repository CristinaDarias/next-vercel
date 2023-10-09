import Head from 'next/head'
import { NavBar } from '../NavBar'
import { FC, ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Cristina</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <NavBar/>

      <main className={'main'}>
        
        {children}

      </main>
    </>
  )
}
