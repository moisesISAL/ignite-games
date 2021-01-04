

const initState = {
    popular: [],
    newGames: [],
    upComing: [],
    searched: []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_GAMES':
            return {...state, popular: action.payload.popular}
        default: 
            return {...state}
    }
}

//action creator
// const fetchGames= (userData)=> 
// {
//     return{
//         type: 'FETCH_GAMES',
//     //  payload: userData // This is used to send data f.e: password, mail ,etc. and in the reducer is called: return {state, action.payload} 
//     }
// }




export default gamesReducer