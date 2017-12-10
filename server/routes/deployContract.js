var express = require('express');
var router = express.Router();
let fs = require("fs");
Web3 = require('web3'),
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


module.exports = function () {
  let source = fs.readFileSync("./../../chain/contract.json");
  let contracts = JSON.parse(source)["contracts"];
  // ABI description as JSON structure
  let abi = JSON.parse(contracts.SampleContract.abi);
  // Smart contract EVM bytecode as hex
  let code = '0x' + contracts.SampleContract.bin;
  // Create Contract proxy class
  let SampleContract = web3.eth.contract(abi);
  // Unlock the coinbase account to make transactions out of it
  console.log("Unlocking coinbase account");
  var password = "";
  try {
    web3.personal.unlockAccount(web3.eth.accounts[0], password);
  } catch(e) {
    console.log(e);
    return;
  }

  console.log("Deploying the contract");
  let contract = SampleContract.new({from: web3.eth.accounts[0], gas: 1000000, data: code});
  // Transaction has entered to geth memory pool
  console.log("contract is being deployed in transaction at txhash: " + contract.transactionHash);
  waitBlock();

}

// http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// We need to wait until any miner has included the transaction
// in a block to get the address of the contract
async function waitBlock() {
  while (true) {
    let receipt = web3.eth.getTransactionReceipt(contract.transactionHash);
    if (receipt && receipt.contractAddress) {
      console.log("Your contract has been deployed at address: " + receipt.contractAddress);
      break;
    }
    console.log("Waiting a mined block to include your contract... currently in block " + web3.eth.blockNumber);
    await sleep(4000);
  }
}

module.exports = router;
