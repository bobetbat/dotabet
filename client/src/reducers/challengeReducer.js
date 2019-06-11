import { GET_CHALLENGES, ADD_CHALLENGE, DELETE_CHALLENGE, CHALLENGES_LOADING} from '../actions/types';

const initialState = {
    challenges: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CHALLENGES:
            return {
                ...state,
                challenges : action.payload,
                loading: false
            };

        case DELETE_CHALLENGE:
            return {
                ...state,
                challenges: state.challenges.filter(challenge => challenge._id  !== action.payload)
            };

        case ADD_CHALLENGE:
            return {
                ...state,
                challenges: [action.payload, ...state.challenges]
            };

        case CHALLENGES_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}