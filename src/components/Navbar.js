import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">NFT Marketplace</div>
        <div className="text-white">
          <WalletMultiButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
