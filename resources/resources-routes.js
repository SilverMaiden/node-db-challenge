
const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Resources' });
  });
});


router.post('/', (req, res) => {
    Resources.add(req.body)
    .then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(500).json({message: error.message})
    })
})


module.exports = router;
