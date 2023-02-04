import {UPDATE_STATE} from "../actionTypes/actionType";


const initialState ={

    eventsList: [],
    eventsItem: {},
    eventsDate: {},
    sectionList: [],
    newsList: [],
    newsItem: {},


}
export const allReducer = (state= initialState, action) => {
    switch (action.type){
        case UPDATE_STATE:
            return {...state, ...action.payload}
        default: return state;
    }
}