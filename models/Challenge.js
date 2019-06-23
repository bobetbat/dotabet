const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
    steamId: {
        type: String,
        required: true,
        index: true
    },
    opponentId: {
        type: String,
        required: true,
        index: true
    },
    amount: {
        type: String,
        required: true
    }
});

module.exports = Challenge = mongoose.model('challenge', ChallengeSchema);
