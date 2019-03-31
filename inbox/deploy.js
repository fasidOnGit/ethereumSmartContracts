const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const MNEMONICS = 'word win world fall valid field awkward tool bridge knee blush afford';
const RINEKEY_NODE = 'https://rinkeby.infura.io/v3/53f8390b02fe40b4961e11cfe5d79f20';

const PROVIDER = new HDWalletProvider(MNEMONICS, RINEKEY_NODE);

const web3 = new Web3(PROVIDER);

const deploy  = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there']})
    .send({gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to',result.options.address);
};
deploy();