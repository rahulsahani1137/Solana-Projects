import './App.css'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdaper } from '@solana/wallet-adapter-wallets';
import {
	WalletModalProvider,
	WalletDisconnectButton,
	WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css'
import Airdrop from './components/Airdrop';

function App() {
	return (
		<ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/JdgL5NilRGmk77B2AI58gSbXf1kZJZHi"}>
			<WalletProvider wallets={[]} autoConnect>
				<WalletModalProvider>
					<WalletMultiButton />
					<WalletDisconnectButton />
					<Airdrop />
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	)
}

export default App
