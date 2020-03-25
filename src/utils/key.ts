const PRIVATE_KEY_LENGT = 256
const SIGNATURE_LENGT = 256
const U256_MAX_VALUE = 2 ** 256

export default class Wallet {
    privateKey: PrivateKey
    publicKey: PublicKey
    constructor() {
        this.privateKey = new PrivateKey()
        this.publicKey = new PublicKey()
    }
}

class PrivateKey {
    pairs: Array<[bigint, bigint]>
    constructor() {
        let pairs = []
        for(let i = 0; i < PRIVATE_KEY_LENGT; i++) {
            let pair: [bigint, bigint] = [random_uint256(), random_uint256()]
            pairs.push(pair)
        }
        this.pairs = pairs;
    }
}

class PublicKey {
    pairs: Array<[bigint, bigint]>
    constructor() {
        let pairs = []
        let pair: [bigint, bigint] = [BigInt(0), BigInt(0)]
        pairs.push(pair)
        this.pairs = pairs;
    }
}

const random_uint256 = () => BigInt(Math.floor(Math.random() * U256_MAX_VALUE))
