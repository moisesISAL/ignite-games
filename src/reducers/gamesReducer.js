

const initState = {
    popular: [],
    newGames: [],
    upComing: []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_GAMES':
            return {...state}
        default: 
            return {...state}
    }
}

//action creator
// const fetchGames= (userData)=> 
// {
//     return{
//         type: 'FETCH_GAMES',
//      payload: userData --- This is used to send data f.e: password, mail ,etc. and in the reducer is called: return {state, action.payload} 
//     }
// }

// fetchGames({user:'name'});
// //{type: "FETCH_GAMES"}


export default gamesReducer