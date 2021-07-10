const express = require('express');
const router = express.Router();
const User = require('../models/users')

//GET users
router.get('/', async (req, res) => {
    // res.send('LIST OF USERS');
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({ message: err });
    }  
})

//GET user
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json({ message: err });
    })
})

//POST user
router.post('/', (req, res) => {
    User.create(req.body)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json({ message: err });
    })
})

//DELETE user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json({ message: 'problem deleting user' });
    }
})

//PUT user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json({ message: err });
    })
})

module.exports = router;