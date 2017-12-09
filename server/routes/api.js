let express = require('express'),
    router = express.Router(),
    callForTender = require('./callForTender')
    // Web3 = require('web3'),
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


// GET /api/calls-for-tender/:id
router.get('/calls-for-tender/:id', callForTender.getOne);
// GET /api/calls-for-tender
router.get('/calls-for-tender', callForTender.getAll)
// POST /api/calls-for-tender
router.post('/calls-for-tender', callForTender.add)

// GET /api/calls-for-tender/:id/offers
router.get('/calls-for-tender/:id/offers', callForTender.getOffers);
// GET /api/calls-for-tender/:id/offers/:id
router.get('/calls-for-tender/:id/offers/:id', callForTender.getOffer);


module.exports = router;
