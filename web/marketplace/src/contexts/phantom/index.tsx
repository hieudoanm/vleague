import React, { createContext, useState } from "react";

export const PhantomWalletContext = createContext({
  publicKey: "",
  setPublicKey: (_publicKey: string) => {
    return;
  },
});

export const usePhantomWallet = (): {
  publicKey: string;
  setPublicKey: (publicKey: string) => void;
} => {
  const solanaWallet = React.useContext(PhantomWalletContext);
  return solanaWallet;
};

export const PhantomWalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [publicKey, setPublicKey] = useState<string>("");

  return (
    <PhantomWalletContext.Provider value={{ publicKey, setPublicKey }}>
      {children}
    </PhantomWalletContext.Provider>
  );
};
