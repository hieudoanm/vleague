import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" passHref>
              <h1 className="text-xl font-semibold cursor-pointer">Pokédex</h1>
            </Link>
          </div>
          <div>
            <WalletMultiButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
