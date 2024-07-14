import React from 'react';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import WalletContextProvider from './context/WalletContextProvider';

function App() {
  return (
    <WalletContextProvider>
      <Navbar />
      <Marketplace />
    </WalletContextProvider>
  );
}

export default App;
