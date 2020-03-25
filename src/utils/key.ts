const PRIVATE_KEY_LENGT = 256
const SIGNATURE_LENGT = 256

class Wallet {
    privateKey: PrivateKey
    publicKey: PublicKey
    constructor() {
        this.privateKey = new PrivateKey()
        this.publicKey = new PublicKey()
    }
}

class PrivateKey {
    pairs: Array<[number, number]>
    constructor() {
        let pairs = []
        let pair: [number, number] = [0, 0]
        pairs.push(pair)
        this.pairs = pairs;
    }
}

class PublicKey {
    pairs: Array<[number, number]>
    constructor() {
        let pairs = []
        let pair: [number, number] = [0, 0]
        pairs.push(pair)
        this.pairs = pairs;
    }
}
