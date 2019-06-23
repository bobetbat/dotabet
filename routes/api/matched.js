const express = require('express');
const router = express.Router();


const Challenge = require('../../models/Challenge');
const MatchedChallenge = require('../../models/MatchedChallenge');


router.get('/', async (req,res) => {
    const matched = await MatchedChallenge.find()
    res.json(matched)
});



module.exports = router;