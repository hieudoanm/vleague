import React from 'react';
import 'reflect-metadata';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;

  return (
    <>
      <Head>
        <title>V.League</title>
      </Head>
      <AnyComponent {...pageProps} />
    </>
  );
};

export default App;
