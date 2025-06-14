import { MINT_SIZE, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import '../index.css'
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const TokenLaunchpad = () => {
    const wallet = useWallet();
    const keypair = Keypair.generate();
    const { connection } = useConnection();



    async function createToken() {
        const name = document.getElementById("name").value;
        const symbol = document.getElementById("symbol").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const initialSupply = document.getElementById("initialSupply").value;

        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_PROGRAM_ID,
            }),
            craeteInitializeMint2Instruction(keypair.publicKey, 6, wallet.publicKey, wallet.publicKey, programId)
        );

        const recentHash = await connection.getLatestBlockhash();
        transaction.recentBlockhash = recentBlockhash.blockhash;
        transaction.feePayer = wallet.publicKey;

        transaction.partialSign(keypair);
        let response = await wallet.sendTransaction(transaction, connection);
        console.log(response);

    }


    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='text-2xl'>Solana Token Launchpad</div>
            <div className='*:px-2 *:py-1 *:border *:border-gray-300 *:rounded-lg flex flex-col gap-2 pb-3'>
                <input id="name" className='inputText' type='text' placeholder='Name' />
                <input id="symbol" className='inputText' type='text' placeholder='Symbol' />
                <input id="imageUrl" className='inputText' type='text' placeholder='Image URL' />
                <input id="initialSupply" className='inputText' type='text' placeholder='Initial Supply' />
            </div>
            <button onClick={createToken} className=''>Launch a token</button>
        </div>
    )
}

export default TokenLaunchpad