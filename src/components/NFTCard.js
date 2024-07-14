import React from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

const NFTCard = ({ nft }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const handleBuy = async () => {
    if (!publicKey) {
      alert('Lütfen cüzdanınızı bağlayın!');
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(nft.owner),
        lamports: nft.price * 1000000000, // 1 SOL = 1,000,000,000 Lamports
      })
    );

    try {
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      alert('NFT başarıyla satın alındı!');
    } catch (error) {
      console.error('İşlem hatası:', error);
      alert('Satın alma işlemi başarısız oldu.');
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover rounded" />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{nft.name}</h2>
        <p className="text-gray-600">{nft.description}</p>
        <p className="text-green-500 mt-2">{nft.price} SOL</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleBuy}
        >
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
