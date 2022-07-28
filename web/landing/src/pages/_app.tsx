import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextIntlProvider } from 'next-intl';
import client from '../apollo';
import LoadingBar from '../components/molecules/LoadingBar';
import { SolanaWalletProvider } from '../contexts/solana-wallet';
import TeamsProvider from '../contexts/teams';
import theme from '../contexts/theme';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;

  return (
    <>
      <Head>
        <title>V.League</title>
      </Head>
      <SolanaWalletProvider>
        <NextIntlProvider messages={pageProps.messages}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <UserProvider>
              <ApolloProvider client={client}>
                <TeamsProvider>
                  <LoadingBar />
                  <AnyComponent {...pageProps} />
                </TeamsProvider>
              </ApolloProvider>
            </UserProvider>
          </ThemeProvider>
        </NextIntlProvider>
      </SolanaWalletProvider>
    </>
  );
};

export default App;
