import axios from 'axios';

import { GET_CHALLENGES, ADD_CHALLENGE, DELETE_CHALLENGE, CHALLENGES_LOADING} from './types';

export const getChallenges = () => dispatch => {
    dispatch(setChallengesLoading());
    axios
        .get('/challenges')
        .then(res => dispatch({
            type: GET_CHALLENGES,
            payload: res.data
        }))
};

export const addChallenge = challenge => dispatch => {
    axios
        .post('/challenges', challenge)
        .then(res => dispatch({
            type: ADD_CHALLENGE,
            payload: res.data
        }))
};

export const deleteChallenge = id => dispatch => {
    axios
        .delete(`/challenges/${id}`)
        .then(res => dispatch({
            type: DELETE_CHALLENGE,
            payload: id
        }))
};

export const setChallengesLoading = () => {
    return {
        type: CHALLENGES_LOADING
    }
}