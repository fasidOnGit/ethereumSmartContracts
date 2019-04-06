import Web3 from 'web3';
import * as HDWalletProvider from 'truffle-hdwallet-provider'


const provider = new HDWalletProvider(
  'word win world fall valid field awkward tool bridge knee blush afford',
  // 'https://mainnet.infura.io/L40Is7cV2Vr6TCf0ZCoI'
  // 'https://rinkeby.infura.io/L40Is7cV2Vr6TCf0ZCoI'
  'https://rinkeby.infura.io/v3/53f8390b02fe40b4961e11cfe5d79f20'
);

//Hijacks the provider from the web3 that is installed from Metamask.
const web3 = new Web3(provider);

export default web3;