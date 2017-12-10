let router = require('express').Router();


// GET /api/projects
router.get('/projects', getProjects);
// POST /api/projects
router.post('/projects', addProject);

// GET /api/projects/:id
router.get('/projects/:id', getProject);

// GET /api/projects/:id/offers
router.get('/projects/:id/offers', getOffers);
// POST /api/projects/:id/offers
router.post('/projects/:id/offers', addOffer);


function getProjects(req, res) {
  res.json({error:false, data:projects});
}

function getProject(req, res) {
  res.json({error:false, data:projects.find(e => { return e.id === req.params.id})});
}

function addProject(req, res) {
  projects.push(req.body.project);
  // '"{callForTender":{"deadline":"2017-11-11T12:15","offers":[{"sender":"s1","description":"First offer"},{"sender":"s2","description":"Second offer"},{"sender":"s3","description":"3rd offer"}]},"description":"Second project","deadline":"2017-12-30T00:00","affectedTo":"5","state":"Affected","expenses":"255DT Papiers, 4000DT Materiels"},'
  res.json({error: false, data: 'done'});
}

function getOffers(req, res) {
  res.json({error:false, data:projects.find(p => { return p.id === req.params.id}).callForTender.offers});
}

function addOffer(req, res) {
  projects.find(p => { return p.id === req.params.id})[0].callForTender.offers.push(req.body.offer);
  res.json({error: false, data:'done'});
}

let projects = [
  {
    id: '1',
    callForTender: {
      deadline: '2016-11-11T12:15',
      offers: [
        {
          sender: 's1',
          description: 'First offer'
        }, {
          sender: 's2',
          description: 'Second offer'
        }, {
          sender: 's3',
          description: '3rd offer'
        }
      ]
    },
    description: 'First project',
    deadline: '2017-11-30T00:00',
    affectedTo: '2',
    state: 'Finished',
    expenses: '1000DT Ciment, 5000DT Materiels'
  },{
    id: '2',
    callForTender: {
      deadline: '2017-11-11T12:15',
      offers: [
        {
          sender: 's1',
          description: 'First offer'
        }, {
          sender: 's2',
          description: 'Second offer'
        }, {
          sender: 's3',
          description: '3rd offer'
        }
      ]
    },
    description: 'Second project',
    deadline: '2017-12-30T00:00',
    affectedTo: '5',
    state: 'Affected',
    expenses: '255DT Papiers, 4000DT Materiels'
  },{
    id: '3',
    callForTender: {
      deadline: '2018-01-11T12:15',
      offers: [
        {
          sender: 's1',
          description: 'First offer'
        }, {
          sender: 's2',
          description: 'Second offer'
        }, {
          sender: 's3',
          description: '3rd offer'
        }
      ]
    },
    description: 'Third project',
    deadline: '2018-04-14T00:00',
    affectedTo: '5',
    state: 'Open',
    expenses: '300DT Equipements, 10000DT Ordinateurs'
  },{
    id: '4',
    callForTender: {
      deadline: '2017-09-11T12:15',
      offers: [
        {
          sender: 's1',
          description: 'First offer'
        }, {
          sender: 's2',
          description: 'Second offer'
        }, {
          sender: 's3',
          description: '3rd offer'
        }
      ]
    },
    description: 'Fourth project',
    deadline: '2018-04-14T00:00',
    affectedTo: '5',
    state: 'Affected',
    expenses: '300DT Equipements, 10000DT Ordinateurs'
  }
]

module.exports = router;
