import React, { useEffect, useState } from 'react';
import NFTCard from './NFTCard';

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Gerçek NFT verilerini API veya blockchain'den çekme kodu
    const fetchNFTs = async () => {
      // Örnek veri
      const nftData = [
        {
          id: 1,
          name: "NFT 1",
          description: "Bu bir NFT açıklamasıdır.",
          price: 1.5,
          image: "https://via.placeholder.com/400",
          owner: "ExampleOwnerPublicKey" // Bu alanı gerçek cüzdan adresi ile doldurun
        },
        {
          id: 2,
          name: "NFT 2",
          description: "Bu başka bir NFT açıklamasıdır.",
          price: 2.0,
          image: "https://via.placeholder.com/400",
          owner: "ExampleOwnerPublicKey" // Bu alanı gerçek cüzdan adresi ile doldurun
        }
      ];
      setNfts(nftData);
    };

    fetchNFTs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map(nft => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
