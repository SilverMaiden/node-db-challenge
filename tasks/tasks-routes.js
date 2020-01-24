
const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.find()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Tasks' });
  });
});

router.get('/:id', (req, res) => {
  Tasks.find(req.params.id)
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Tasks' });
  });
});

router.post('/', (req, res) => {
    Tasks.add(req.body)
    .then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(500).json({message: "failed to add new task."})
    })
})



module.exports = router;
