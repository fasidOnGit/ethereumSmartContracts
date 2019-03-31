//Compile is required before Testing or deploying.
//Do not require the soldity code file Eg.Inbox.sol. As node will try to execute it.


const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf-8');
const input = {
  language: 'Solidity',
  sources: {
    'Lottery.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': [ '*' ]
      }
    }
  }
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));
const compiled = output.contracts['Lottery.sol']['Lottery'];
module.exports = {interface: compiled.abi, bytecode: compiled.evm.bytecode.object};