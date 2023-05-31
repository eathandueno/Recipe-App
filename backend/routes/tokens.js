const router = require('express').Router();

let Tokens = require('../models/userTokens.model');
router.route('/:username').get((req,res) => {
    const {username} = req.params;
    Tokens.find({username: username})
        .then(userTokens => res.json(userTokens))
        .catch(err => res.status(400).json("Error: " + err))
})
router.route('/add/:username').post((req,res) => {
    const {username} = req.params;
    const newTokens = new Tokens({username})
    newTokens.save()
        .then(() => res.json('Token balance established'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/spend/:username', (req, res) => {
    const { username } = req.params;

    Tokens.findOne({ username })
    .then((userTokens) => {
        if (userTokens) {
        if (userTokens.tokens > 0) {
            userTokens.tokens -= 1; // Subtract one token from balance
            userTokens.save()
            .then(() => res.json('Token spent successfully'))
            .catch((err) => res.status(400).json('Error: ' + err));
        } else {
            res.status(400).json('Insufficient tokens');
        }
        } else {
        res.status(404).json('User not found');
        }
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;