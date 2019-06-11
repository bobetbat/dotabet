const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
    steamId: {
        type: String,
        required: true
    },
    opponentId: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
});

module.exports = Challenge = mongoose.model('challenge', ChallengeSchema);

// const challenges = [
//     {
//         id: 1,
//         name: 'aaaa',
//         email: 'aaa@aaal'
//     },
//     {
//         id: 2,
//         name: 'aaaa',
//         email: 'aaa@aaal'
//     },
//     {
//         id: 3,
//         name: 'aaaa',
//         email: 'aaa@aaal'
//     },
//     {
//         id: 4,
//         name: 'aaaa',
//         email: 'aaa@aaal'
//     }
// ];
// module.exports = challenges;

// class Challenge {
//     constructor() {
//         this.challenges = []
//     }

//     getAll() {
//         return this.challenges
//     }

//     getSingle(id){
//         return this.challenges.id
//     }
//     insert(challenges) {
//         this.challenges.push(challenges)
//     }
// }

// module.exports = new Challenge();