const router = require('express').Router();
const bcrypt = require('bcrypt');

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const newUser = new User({username, password})
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    
})
router.route('/login/:username/:password').get((req, res) => {
    const {username, password} = req.params;
    User.find({username: username, password:password})
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err))
})
module.exports = router;