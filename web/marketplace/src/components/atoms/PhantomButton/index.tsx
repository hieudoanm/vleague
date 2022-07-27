import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react';
import { usePhantomWallet } from '../../../contexts/phantom';
import copy from '../../../utils/copy';

type SolanaEvent = 'connect' | 'disconnect';

type Solana = {
  isPhantom: boolean;
  connect: ({ onlyIfTrusted }: { onlyIfTrusted: boolean }) => Promise<any>;
  disconnect: () => Promise<any>;
  on: (event: SolanaEvent, callback: () => void) => void;
};

declare global {
  interface Window {
    solana: Solana;
  }
}

const PhantomButton: React.FC = () => {
  const [phantom, setPhantom] = useState<Solana | null>(null);
  const [connected, setConnected] = useState(false);
  const { publicKey, setPublicKey } = usePhantomWallet();

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    phantom?.on('connect', () => {
      setConnected(true);
    });

    phantom?.on('disconnect', () => {
      setConnected(false);
    });
  }, [phantom]);

  const load = async () => {
    const { solana } = window;

    if (!solana) {
      return;
    }

    if (!solana.isPhantom) {
      return;
    }

    setPhantom(solana);

    if (publicKey) {
      return;
    }

    try {
      const response = await solana.connect({ onlyIfTrusted: true });
      const publicKey: string = response?.publicKey?.toString() || '';
      setPublicKey(publicKey);
    } catch (error) {
      console.error(error);
    }
  };

  const connect = async () => {
    try {
      const response = await phantom?.connect({ onlyIfTrusted: true });
      const publicKey: string = response?.publicKey?.toString() || '';
      setPublicKey(publicKey);
    } catch (error: any) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  };

  const disconnect = () => {
    phantom?.disconnect();
  };

  if (phantom) {
    if (connected) {
      return (
        <ButtonGroup variant="contained">
          <Button type="button" onClick={() => copy(publicKey, 'Public Key')}>
            {publicKey.slice(0, 6)}...
            {publicKey.slice(publicKey.length - 4, publicKey.length)}
          </Button>
          <Button type="button" onClick={disconnect}>
            <Logout fontSize="small" />
          </Button>
        </ButtonGroup>
      );
    }

    return (
      <Button type="button" variant="contained" onClick={connect}>
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

export default PhantomButton;
