import Link from 'next/link';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        menuOpen ? '' : 'hidden'
      } sm:flex sm:justify-center sm:items-center mt-4`}
    >
      <div className="flex flex-col sm:flex-row">
        <Link href="/" passHref>
          <span className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
            Home
          </span>
        </Link>
        <Link href="/products" passHref>
          <span className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
            Shop
          </span>
        </Link>
        <Link href="/about" passHref>
          <span className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
            About
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
