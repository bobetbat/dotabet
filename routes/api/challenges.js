const express = require('express');
const router = express.Router();


const Challenge = require('../../models/Challenge');
const MatchedChallenge = require('../../models/MatchedChallenge');


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
router.post('/', async (req,res) => {
    
    //Check for data entering
    if (!req.body.steamId || !req.body.opponentId || !req.body.amount){
        return res.status(400).json({msg: 'enter data'});
    }

    //Existance check
    const exist = await Challenge.findOne({
        $and : [
            { steamId: req.body.steamId },
            { opponentId: req.body.opponentId },
            { amount: req.body.amount }
        ]
    })

    if (exist != null){
        return res.status(400).json({msg: 'exists already' });
    }

    //Selffighter
    if (req.body.steamId == req.body.opponentId){
        return res.status(400).json({msg: 'cant fight yourself'});
    }

    //matched challenge
    const matchedOne = await Challenge.findOne({
        $and : [
            { steamId: req.body.opponentId },
            { opponentId: req.body.steamId },
            { amount: req.body.amount }
        ]
    })
    
    if(matchedOne == null){
        const newChallenge = new Challenge({
            steamId: req.body.steamId,
            opponentId: req.body.opponentId,
            amount: req.body.amount
        });

        newChallenge
            .save()
            .then(challenge => res.json(challenge))
        
    }else{
        try {
            await matchedOne.remove()
            const newMatchedChallenge = new MatchedChallenge({
                matchedIds: {
                    id1: req.body.opponentId,
                    id2: req.body.steamId
                },
                amount: req.body.amount
            });

            newMatchedChallenge
                .save()
                .then(matched => res.json(matched))

        } catch (e) {
            res.status(404).json({
                success: false,
                error: e.message
            })
        }

    }

    

    //If (check id in steam API)



    //Check for challenge existance
    // if (found){
    //     return res.status(400).json({msg: 'exists already'});
    // }

});

//@route DELETE /challenges/:id
//@desc Delete A Challenge
//@access Public

router.delete('/:id', async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id)
        await challenge.remove()
        res.json({ success: true })
    } catch (e) {
        res.status(404).json({
            success: false,
            error: e.message
        })
    }
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