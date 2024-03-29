import {UPDATE_STATE} from "../actionTypes/actionType";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {useParams} from "react-router-dom";

export function updateState (data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export function getEvents(){
    return function (dispatch){
        axios.get(API_PATH + "event")
            .then(res => {
                dispatch(updateState({eventsList: res.data}));

            })
    }
}
export function getEventsDetail(id){

    return function (dispatch){
        var url = document.URL
        const last  =  url.substr(url.lastIndexOf('/') + 1) ;
        axios.get(API_PATH + "event/" +  last)
            .then(res => {
                dispatch(updateState({eventsItem: res.data}));
                dispatch(updateState({eventsDate: res.data.eventsDate[0]}));

            })
    }
}
export function getNews(){
    return function (dispatch){
        axios.get(API_PATH + "news")
            .then(res => {
                dispatch(updateState({newsList: res.data}));

            })
    }
}
export function getNewsDetail(id){

    return function (dispatch){
        var url = document.URL
        const last  =  url.substr(url.lastIndexOf('/') + 1) ;
        axios.get(API_PATH + "news/" +  last)
            .then(res => {
                dispatch(updateState({newsItem: res.data}));

            })
    }
}


export function getSections(){
    return function (dispatch){
        axios.get(API_PATH + "katok-service")
            .then(res => {
                dispatch(updateState({sectionList: res.data.data}));

            })
    }
}
export function getBascketList(){
    return function (dispatch){
        axios.get(API_PATH + "basket", {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res => {
                dispatch(updateState({bascketList: res.data}));

            })
    }
}