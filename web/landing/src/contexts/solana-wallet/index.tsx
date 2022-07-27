import React, { useState } from 'react';

export const SolanaWalletContext = React.createContext({
  publicKey: '',
  setPublicKey: (publicKey: string) => {
    console.log(publicKey);
  },
});

export const usePhantomWallet = (): {
  publicKey: string;
  setPublicKey: (publicKey: string) => void;
} => {
  const solanaWallet = React.useContext(SolanaWalletContext);
  return solanaWallet;
};

export const SolanaWalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [publicKey, setPublicKey] = useState<string>('');

  return (
    <SolanaWalletContext.Provider value={{ publicKey, setPublicKey }}>
      {children}
    </SolanaWalletContext.Provider>
  );
};
