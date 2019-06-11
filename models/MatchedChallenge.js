const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchedChallengeSchema = new Schema({
    matchedIds: {
        type: Array,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
});

module.exports = MatchedChallenge = mongoose.model('matchedChallenge', MatchedChallengeSchema);
