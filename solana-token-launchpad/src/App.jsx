import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import './App.css'
import TokenLaunchpad from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'


function App() {

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider >
            <WalletMultiButton />
            <TokenLaunchpad />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
