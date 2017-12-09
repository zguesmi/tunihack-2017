Web3 = require('web3'),
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

module.exports = {
  getProjects: contract.getProjects(),
  getProject: contract.getProject(id),
  addProject: contract.addProject(project),
  getOffers: contract.getOffers(),
  getOffer: contract.getOffer(id),
  addOffer: contract.addOffer(offer),
}
