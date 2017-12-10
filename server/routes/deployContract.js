var express = require('express');
var router = express.Router();
let fs = require("fs");
Web3 = require('web3'),
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


module.exports = function () {
  let source = JSON.parse(fs.readFileSync("./../chain/contract.json", "utf8"));
  // let contracts = JSON.parse(source)["contracts"];
  // ABI description as JSON structure
  let abi = source.abi;
  // Smart contract EVM bytecode as hex
  let code = '0x' + source.bytecode;
  // Create Contract proxy class
  let SampleContract = web3.eth.contract(abi);
  // Unlock the coinbase account to make transactions out of it
  console.log("Unlocking coinbase account");
  var password = "";
  try {
    web3.personal.unlockAccount(web3.eth.accounts[0], password);
  } catch (e) {
    console.log(e);
    return;
  }
  var promise = new Promise((resolve,reject)=>{

  console.log("Deploying the contract");
  let contract = SampleContract.new({
    from: web3.eth.accounts[0],
    gas: 4700000,
    data: code
  }, (err, contract) => {
    if (err) {
      console.log(err);
      reject(err);
    } else if (!contract.address) {
      console.log("Waiting to be mined");
    } else {
      console.log("Mined");
      console.log(contract.address);
      resolve(contract.address);
    }

  });
  });
  return promise;
  // Transaction has entered to geth memory pool
  // console.log("contract is being deployed in transaction at txhash: " + contract.transactionHash);
  

}

// http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

