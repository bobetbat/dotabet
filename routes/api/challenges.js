const express = require('express');
const router = express.Router();


const Challenge = require('../../models/Challenge');
const matched = require('../../models/MatchedChallenge');


//@route   GET /challenges
//@desc    Get All Challenges
//@access  Pubic
router.get('/', async (req,res) => {
    const challenges = await Challenge.find()
    res.json(challenges)
});

//@route   POST /challenges
//@desc    Create Challenge
//@access  Pubic
router.post('/', (req,res) => {
    const newChallenge = new Challenge({
        steamId: req.body.steamId,
        opponentId: req.body.opponentId,
        amount: req.body.amount
    });
    //const found = Challenge.some(challenge => (challenge.steamId === newChallenge.steamId && challenge.opponentId === newChallenge.opponentId));   

    //Check for data entering
    if (!newChallenge.steamId || !newChallenge.opponentId || !newChallenge.amount){
        return res.status(400).json({msg: 'enter data'});
    }

    //If (check id in steam API)



    //Check for challenge existance
    // if (found){
    //     return res.status(400).json({msg: 'exists already'});
    // }

    newChallenge
        .save()
        .then(challenge => res.json(challenge))
});

//@route DELETE /challenges/:id
//@desc Delete A Challenge
//@access Public

router.delete('/:id', (req, res) => {
    Challenge.findById(req.params.id)
        .then(challenge => challenge.remove().then(() => res.json({ success: true})))
        .catch(err => res.status(404).json({ success: false}));
});

// router.get('/matched', (req,res) => {
    
// });

//create (OLDVERSION)
// router.post('/', (req,res) => {
//     const newChallenge = {
//         steamId: req.body.steamId,
//         opponentId: req.body.opponentId,
//         amount: req.body.amount
//     };
//     // check for data entering
//     if (!newChallenge.steamId || !newChallenge.opponentId || !newChallenge.amount){
//         return res.status(400).json({msg: 'enter data'});
//     }

//     // if (check id in steam API)

//     const found = Challenge.some(challenge => (challenge.steamId === newChallenge.steamId && challenge.opponentId === newChallenge.opponentId));

//     //check for challenge existance     
//     if (found){
//         return res.status(400).json({msg: 'exists already'});
//     }

//     Challenge.push(newChallenge);
//     res.json({ msg: 'wait for opponent'});
// });




module.exports = router;