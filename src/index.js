/* @flow */
import { Wallet } from 'rai-wallet';

let CIPHERTEXT = '';
let PASSWORD = '';

export function recoverWallet() : Promise<void> {
    const cachedWallet = new Wallet(PASSWORD);
    cachedWallet.lightWallet(true);
    cachedWallet.load(CIPHERTEXT);
    const seed = cachedWallet.getSeed(PASSWORD);
    console.log(`Congrats! We found your seed: ${ seed }`);
}
