import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getEvents, getNews} from "../../redux/action/allActions";
import {Link, useHistory} from "react-router-dom";
import Slider from "react-slick";

const Events = (props) => {
    const [more, setMore] = useState(8)
    const [moreNews, setMoreNews] = useState(3)
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div   onClick={onClick} className="swiper-button-next swiper-button-next-mini custom-swiper-btn-mini">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                    <path d="M0.399948 0.933316C0.644392 0.688872 0.955503 0.56665 1.33328 0.56665C1.71106 0.56665 2.02217 0.688872 2.26661 0.933316L8.39994 7.06664C8.53327 7.19997 8.62793 7.34442 8.68393 7.49997C8.73905 7.65553 8.7666 7.8222 8.7666 7.99997C8.7666 8.17775 8.73327 8.35019 8.6666 8.5173C8.59994 8.68353 8.51105 8.82219 8.39994 8.9333L2.26661 15.0666C2.02217 15.3111 1.71106 15.4333 1.33328 15.4333C0.955502 15.4333 0.644391 15.3111 0.399947 15.0666C0.155504 14.8222 0.0332807 14.5111 0.0332807 14.1333C0.0332807 13.7555 0.155504 13.4444 0.399948 13.2L5.59994 7.99997L0.399948 2.79998C0.155504 2.55554 0.0332813 2.24443 0.0332813 1.86665C0.0332813 1.48887 0.155504 1.17776 0.399948 0.933316Z" fill="black"/>
                </svg>
            </div>
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className="swiper-button-prev swiper-button-prev-mini custom-swiper-btn-mini">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                    <path d="M8.60005 15.0667C8.35561 15.3111 8.0445 15.4334 7.66672 15.4334C7.28894 15.4334 6.97783 15.3111 6.73339 15.0667L0.600065 8.93336C0.466732 8.80003 0.372066 8.65558 0.316066 8.50003C0.260955 8.34447 0.233399 8.1778 0.233399 8.00003C0.233399 7.82225 0.266732 7.64981 0.333399 7.4827C0.400066 7.31647 0.488954 7.17781 0.600065 7.0667L6.73339 0.933373C6.97783 0.688929 7.28895 0.566706 7.66672 0.566706C8.0445 0.566706 8.35561 0.68893 8.60005 0.933374C8.8445 1.17782 8.96672 1.48893 8.96672 1.8667C8.96672 2.24448 8.8445 2.55559 8.60005 2.80004L3.40006 8.00003L8.60005 13.2C8.8445 13.4445 8.96672 13.7556 8.96672 14.1334C8.96672 14.5111 8.8445 14.8222 8.60005 15.0667Z" fill="black"/>
                </svg>
            </div>
        );
    }
    let history = useHistory()
    const viewEvent =(item)=>{
        history.push("events/detail/" + item)
    }
    useEffect(()=>{
    props.getEvents()
    props.getNews()
}, [])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className="body-site">
                <div className="bg-snow">
                    <div className="bg-snow-2">
                        <div className="header-carousel pt-4   mb-5">
                            <div className="container">
                                <div className="row align-items-center justify-content-between mb-5">
                                    <p className="text-blue_1 fw-bold fs-38 col mb-lg-0 mb-2">Все мероприятия</p>

                                </div>

                            </div>
                        </div>
                        <div className="events mb-7 pb-7">
                            <div className="container">
                                <div className="row row-cols-xl-4 row-cols-md-2 mb-5">

                                    {
                                        props.eventsList?.slice(0, more).map((item, index) => (
                                            <button onClick={() => viewEvent(item?.id)} className="my-3 myf-link border-0 bg-transparent ">
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
                                            </button>
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
                                            {item?.desc.length > 100 ? item?.desc.slice(0, 100) + "..." : item?.desc}
                                        </p>
                                        <p className="news-card_time">12 Март - 16:00
                                            {item?.created_at.slice(8, 10) + " " + monthsRu[Number(item?.created_at?.slice(5, 7))] + " " +
                                            item?.created_at?.eventTime?.slice(0, 5)}
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
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        eventsList: state.allReducerData.eventsList,
        eventsItem: state.allReducerData.eventsItem,
        newsList: state.allReducerData.newsList,

    }
}
export default connect(mapStateToProps, {getEvents, getNews})(Events);