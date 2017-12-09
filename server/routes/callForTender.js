Web3 = require('web3'),
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

module.exports = {
  getAll: contract.getAll,
  getOne: contract.getOne,
  add: contract.add,
  getOffers: contract.getOffers,
  getOffer: contract.getOffer
}

// function getAll(req, res) {
//   web3.
//   res.json({data: "getall"})
// }
//
// function getOne() {
//
// }
//
// function add() {
//
// }
//
// function getOffers() {
//
// }
//
// function getOffer() {
//
// }
