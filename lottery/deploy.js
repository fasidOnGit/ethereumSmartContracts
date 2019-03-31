const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
    'word win world fall valid field awkward tool bridge knee blush afford',
    'https://mainnet.infura.io/L40Is7cV2Vr6TCf0ZCoI'
    // 'https://rinkeby.infura.io/L40Is7cV2Vr6TCf0ZCoI'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode})
        .send({ gas: '1000000', from: accounts[0]});
    console.log('Contract deployed to', result.options.address);
};
deploy();