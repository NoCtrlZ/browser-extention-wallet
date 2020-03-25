import { SHA256 } from 'crypto-ts'f

const PRIVATE_KEY_LENGT = 256
const SIGNATURE_LENGT = 256
const U256_MAX_VALUE = 2 ** 256

export default class Wallet {
    privateKey: PrivateKey
    publicKey: PublicKey
    constructor() {
        let prvPairs = [],
        pubPairs = []
        for(let i = 0; i < PRIVATE_KEY_LENGT; i++) {
            let [adam, eve] = prvKeyPair();
            let prvPair: [bigint, bigint] = [adam, eve]
            let pubPair: [bigint, bigint] = [hash(String(adam)), hash(String(eve))]
            prvPairs.push(prvPair)
            pubPairs.push(pubPair)
        }
        this.privateKey = new PrivateKey(prvPairs)
        this.publicKey = new PublicKey(pubPairs)
    }
}

class PrivateKey {
    pairs: Array<[bigint, bigint]>
    constructor(pairs: Array<[bigint, bigint]>) {
        this.pairs = pairs;
    }
}

class PublicKey {
    pairs: Array<[bigint, bigint]>
    constructor(pairs: Array<[bigint, bigint]>) {
        this.pairs = pairs;
    }
}

const prvKeyPair = () => [randomUint256(), randomUint256()]
const randomUint256 = () => BigInt(Math.floor(Math.random() * U256_MAX_VALUE))
export const hash = (uint256: string) => SHA256(uint256)
