let express = require('express'),
    router = express.Router(),
    callForTender = require('./callForTender')


// GET /api/projects/:id
router.get('/projects/:id', callForTender.getOne);
// GET /api/projects
router.get('/projects', callForTender.getAll)
// POST /api/projects
router.post('/projects', callForTender.add)

// GET /api/projects/:id/offers
router.get('/projects/:id/offers', callForTender.getOffers);
// GET /api/projects/:id/offers/:id
router.get('/projects/:id/offers/:id', callForTender.getOffer);

module.exports = router;
