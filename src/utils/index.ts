import Wallet from './key'

const walletInit = () => {
    let wallet = new Wallet()
    console.log(wallet.privateKey.pairs[0])
}

walletInit()
