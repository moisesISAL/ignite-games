import axios from 'axios';
import {popularGamesUrl} from '../api';

//Action creator

export const loadGames = () => async (dispatch) => { //this is the way to create async functions in thunk
    //fetch axios
    const popularData = await axios.get(popularGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
        }
    });
};