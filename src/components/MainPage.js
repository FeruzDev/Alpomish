import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Banner from "./Banner";
import {API_PATH} from "./const";
import axios from "axios";
import {connect} from "react-redux";
import {getEvents, getNews} from "../redux/action/allActions";
import MainFooter from "./MainFooter";

const MainPage = (props) => {
    const [more, setMore] = useState(8)
    const [moreNews, setMoreNews] = useState(3)
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]



    useEffect(() => {
        props.getEvents()
        props.getNews()
        window.scrollTo(0,0)

    }, [])
    return (
        <div className="body-site">
            <div className="bg-snow">
                <div className="bg-snow-2">
                    <Banner/>

                    <div className="events mb-7 mytf83">
                        <div className="container">
                            <div className="row align-items-center justify-content-between mb-5">
                                <p className="text-blue_1 fw-bold fs-38 col mb-lg-0 mb-4">Ближайшие мероприятия</p>
                                {/*<div className="col-lg-3 d-flex align-items-center">*/}
                                {/*    <select*/}
                                {/*        className="form-select border-0 bg-white_light_1 text-blue_2 rounded-pill focus-none ps-3 me-3">*/}
                                {/*        <option value>Сегодня</option>*/}
                                {/*    </select>*/}
                                {/*    <select*/}
                                {/*        className="form-select border-0 bg-white_light_1 text-blue_2 rounded-pill focus-none ps-3">*/}
                                {/*        <option value>Категория</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}
                            </div>
                            <div className="row row-cols-xl-4 row-cols-md-2 mb-5">
                                {
                                    props.eventsList?.slice(0, more).map((item, index) => (
                                        <Link className="my-3 myf-link" to={"events/detail/" + item?.id}>
                                            <div className="card border-0">
                                                <div className="position-relative">
                                                    <img style={{borderRadius: '19px 19px 0 0'}} src={item?.image} className="card-img-top" alt="card"/>
                                                    <div className="card-status px-3">
                                                        <div
                                                            className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                            Концерт
                                                        </div>
                                                        <div className="text-white">
                                                            <i className="fal fa-heart"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body bg-white shadow-sm d-flex p-4"
                                                     style={{borderRadius: '0 0 19px 19px'}}>
                                                    <div className="me-4">
                                                        <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                            {
                                                                monthsRu[Number(item?.eventDate[0]?.eventDate?.slice(5, 7))].slice(0, 3)
                                                            }
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            {item?.eventDate[0]?.eventDate?.slice(8, 10)}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">{item?.title}</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            {item?.eventDate[0]?.eventTime?.slice(0, 5)} · {item?.eventDate[0]?.eventDate?.slice(8, 10) + " "}
                                                            {monthsRu[Number(item?.eventDate[0]?.eventDate?.slice(5, 7))] + " "}
                                                            {item?.eventDate[0]?.eventDate?.slice(0, 4) + " "}
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className="text-center">
                                {
                                    props.eventsList?.length > 8 ?
                                        <button
                                            className="btn border-blue rounded-pill text-blue px-5 py-3 fw-bold fs-18" onClick={() => setMore(more + 8)}>Больше
                                        </button>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partners mb-6">
                    <div className="container">
                        <p className="text-center fs-40 fw-bold text-blue_1">
                            Наши партнеры
                        </p>
                        <div className="text-center text-grey fs-18 lh-22">
                            Нам посчастливилось работать с определяющими отрасль брендами.
                        </div>
                        <div className="text-center text-grey fs-18">
                            Это лишь некоторые из них.
                        </div>
                        <div
                            className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-2 align-items-center justify-content-center my-5">
                            <div className="text-center my-3">
                                <img src="/images/payme.png" alt="partners"/>
                            </div>
                            <div className="text-center my-3">
                                <img src="/images/click.png" alt="partners"/>
                            </div>
                            <div className="text-center my-3">
                                <img src="/images/oson.png" alt="partners"/>
                            </div>
                            <div className="text-center my-3">
                                <img src="/images/apelsin.png" alt="partners"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="container">
                    <p className="text-center fw-bold fs-40 text-blue_1">Новости</p>
                    <div className="row row-cols-xl-3 row-cols-md-2 mb-5">
                        {
                            props.newsList?.slice(0, moreNews).map((item, index)=>(
                                <Link to={"/news/detail/" + item.id} className="news-card mb-4">
                                    <div className="news-card_img">
                                        <img style={{borderRadius: '19px 19px 19px 19px'}} src={item?.image} alt=""/>
                                    </div>
                                    <p className="news-card_title">
                                        {item?.title}
                                    </p>
                                    <p className="news-card_text">
                                        {item?.short_text}
                                    </p>
                                    <p className="news-card_time">
                                          {item?.created_at.slice(0, 2) + " " + monthsRu[Number(item?.created_at?.slice(3,6))] + " - " +
                                        item?.created_at?.slice(11, 16)}
                                    </p>
                                </Link>

                            ))
                        }
                    </div>
                    {
                        props.newsList?.length > 3
                        ?
                            <div className="text-center">
                                <button className="btn border-blue rounded-pill text-blue px-5 py-3 fw-bold fs-18" onClick={() => setMoreNews(moreNews + 3)}>Больше
                                </button>
                            </div>
                            :
                            ""
                    }

                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return{
        eventsList: state.allReducerData.eventsList,
        newsList: state.allReducerData.newsList,
        eventsItem: state.allReducerData.eventsItem,
    }
}
export default connect(mapStateToProps, {getEvents,getNews})(MainPage);