const base_url = 'https://api.rawg.io/api/';

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    
    if(month<10){
        return `0${month}`;
    } else{
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    
    if(day<10){
        return `0${day}`;
    } else{
        return day;
    }
}

//current day/month/year
const currentYear = new Date().getFullYear();
currentMonth = getCurrentMonth();
currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear +1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games=?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;

// getCurrentMonth(); //to run this you need to use node js  in terminal