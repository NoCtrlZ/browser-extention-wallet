import Wallet from './key'
import {hash} from './key'

const walletInit = () => {
    let wallet = new Wallet()
    console.log(wallet.publicKey.pairs[0])
    console.log(hash('hllo'))
}

walletInit()
