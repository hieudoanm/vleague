import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { usePhantomWallet } from '../../../contexts/solana-wallet';

type PhantomEvent = 'connect' | 'disconnect';

interface Phantom {
  connect: ({ onlyIfTrusted }: { onlyIfTrusted: boolean }) => Promise<any>;
  disconnect: () => Promise<any>;
  on: (event: PhantomEvent, callback: () => void) => void;
}

const ConnectToPhantom: React.FC = () => {
  const [phantom, setPhantom] = useState<Phantom | null>(null);
  const [connected, setConnected] = useState(false);
  const { publicKey, setPublicKey } = usePhantomWallet();

  useEffect(() => {
    const onLoad = async () => {
      if (window['solana']?.isPhantom) {
        setPhantom(window['solana']);
        const response = await window['solana']?.connect({
          onlyIfTrusted: true,
        });

        const publicKey: string = response?.publicKey?.toString() || '';
        console.log('ConnectToPhantom publicKey', publicKey);
        setPublicKey(publicKey);
      }
    };

    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    phantom?.on('connect', () => {
      setConnected(true);
    });

    phantom?.on('disconnect', () => {
      setConnected(false);
    });
  }, [phantom]);

  const onClickConnect = async () => {
    const response = await phantom?.connect({ onlyIfTrusted: true });
    const publicKey: string = response?.publicKey?.toString() || '';
    setPublicKey(publicKey);
  };

  const onClickDisconnect = () => {
    phantom?.disconnect();
  };

  if (phantom) {
    if (connected) {
      return (
        <Button type="button" variant="contained" onClick={onClickDisconnect}>
          {publicKey.slice(0, 6)}...
          {publicKey.slice(publicKey.length - 4, publicKey.length)}
        </Button>
      );
    }

    return (
      <Button type="button" variant="contained" onClick={onClickConnect}>
        Connect to Phantom
      </Button>
    );
  }

  return (
    <a href="https://phantom.app/" target="_blank" rel="noreferrer">
      <Button type="button" variant="contained">
        Get Phantom
      </Button>
    </a>
  );
};

ConnectToPhantom.displayName = 'ConnectToPhantom';

export default ConnectToPhantom;
