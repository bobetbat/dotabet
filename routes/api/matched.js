const express = require('express');
const router = express.Router();


const Challenge = require('../../models/Challenge');
const MatchedChallenge = require('../../models/MatchedChallenge');

router.post('/match',(req,res) => {
    
    const checkChallenge = {
        steamId: req.body.steamId,
        opponentId: req.body.opponentId,
        amount: req.body.amount
    }; 

    const opponentFound = Challenge.some(challenge => (challenge.steamId === checkChallenge.opponentId && challenge.opponentId === checkChallenge.steamId));

    const matchch = {
        id1: checkChallenge.steamId,
        id2: checkChallenge.opponentId,
        amount: checkChallenge.amount,
    }

    const matchchExists = MatchedChallenge.some(match => ((match.id1 === matchch.id2 && match.id2 === matchch.id1) || (match.id1 === matchch.id1 && match.id2 === matchch.id2)));

    if(matchchExists){
        return res.status(200).json({msg: 'lobby created join it'});
    }

    if(opponentFound){
        return (MatchedChallenge.push(matchch),
                res.status(200).json({msg: 'lobby created'}));
    }

    res.json({ msg: 'again wait for opponent'});

});

module.exports = router;