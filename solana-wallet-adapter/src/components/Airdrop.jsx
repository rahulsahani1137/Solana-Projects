import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

const Airdrop = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    const sendAirdropToUser = async () => {
    const amount = document.getElementById('faucetAmount').value
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
        alert("airdropped")
    }

    return (
        <div>
            <input id='faucetAmount' type="text" placeholder='Amount' />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}

export default Airdrop