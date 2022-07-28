import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import Head from 'next/head';

import PageTemplate from '../components/templates/PageTemplate';
import { PhantomWalletProvider } from '../contexts/phantom';
import '../styles/index.css';

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="favicon.png" sizes="192x192" />
      </Head>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <PhantomWalletProvider>
              <PageTemplate>
                <Component {...pageProps} />
              </PageTemplate>
            </PhantomWalletProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
