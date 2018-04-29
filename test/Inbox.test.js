require('events').EventEmitter.defaultMaxListeners = 0;
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // A Constructor
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts, inbox;
/*
* interface - ABI - To be able to Javascript to understand the solidity contract.
* ganache.provider() - A provider function that is required to talk to the Ethereum NEtwork from the web3.
* bytecode - The compiled contract code that needs to get deployed into the blockchain
*/

beforeEach(async ()=>{
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    
    //Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data:bytecode, arguments: ['Hello'] })
        .send({ from:accounts[0], gas:'1000000'});
    inbox.setProvider(provider);
});


describe('Inbox', () => {
    it('deploys a contract' , ()=>{
        assert.ok(inbox.options.address);
    });

    it('has a default message', async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hello');
    });

    it('setMessage test', async ()=>{
        await inbox.methods.setMessage('now').send({from:accounts[2]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'now');

    })
});

