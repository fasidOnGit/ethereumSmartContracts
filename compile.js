//Compile is required before Testing or deploying.
//Do not require the soldity code file Eg.Inbox.sol. As node will try to execute it.


const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];