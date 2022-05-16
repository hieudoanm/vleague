import { useWeb3 } from '@3rdweb/hooks';
import Button from '@mui/material/Button';
import copy from '../../../utils/copy';

const ConnectToMetaMask = () => {
  const { address = '', connectWallet } = useWeb3();

  return (
    <>
      {address.length === 0 && (
        <Button
          type="button"
          variant="contained"
          onClick={() => connectWallet('injected')}
        >
          Connect Wallet
        </Button>
      )}
      {address.length > 0 && (
        <Button
          type="button"
          variant="contained"
          onClick={() => copy(address, 'Public Address')}
        >
          {address.substring(0, 6)}...
          {address.substring(address.length - 4, address.length)}
        </Button>
      )}
    </>
  );
};

export default ConnectToMetaMask;
