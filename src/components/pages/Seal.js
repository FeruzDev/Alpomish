import React, {useEffect, useState} from 'react';
import "../../css/sector.css"
import {connect} from "react-redux";
import {getEvents, getEventsDetail, updateState} from "../../redux/action/allActions";
import axios from "axios";
import {API_PATH} from "../const";
import {useHistory, useParams} from "react-router-dom";

const Seal = (props) => {
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const [bascetList, setBascetlist] = useState([])
    const [side, setSide] = useState(false)
    const place = [
        {number: "1", status: "1", range: "1", row: "1"},
        {number: "2", status: "1", range: "1", row: "1"},
        {number: "3", status: "1", range: "1", row: "1"},
        {number: "4", status: "1", range: "1", row: "1"},
        {number: "5", status: "1", range: "1", row: "1"},
        {number: "6", status: "1", range: "1", row: "1"},
        {number: "7", status: "1", range: "1", row: "1"},
        {number: "8", status: "1", range: "1", row: "1"},
        {number: "9", status: "1", range: "1", row: "1"},
        {number: "1", status: "1", range: "1", row: "1"},
        {number: "1", status: "1", range: "1", row: "1"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "2"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "3"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "4"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "5"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
        {number: "1", status: "1", range: "1", row: "6"},
    ]
    const params = useParams();
    const [myItem , SetMyItem] = useState({})
    var url = document.URL
    const last  =  url.substr(url.lastIndexOf('/') + 1) ;

    const selectPlace = (item) => {
        console.log(item)
        setSide(true)
        bascetList.push(item)

    }
    const getDetail = () => {
        axios.get(API_PATH + "event/" +  params.id)
            .then(res => {
                SetMyItem( res.data);
                localStorage.setItem("title", res.data.title)
                localStorage.setItem("desc", res.data.desc)
                localStorage.setItem("age_limit", res.data.age_limit)
                localStorage.setItem("image", res.data.image)
                localStorage.setItem("slug", res.data.slug)
                localStorage.setItem("status", res.data.status)
                localStorage.setItem("eventDate", res.data.eventDate[0]?.eventDate)
                localStorage.setItem("eventTime", res.data.eventDate[0]?.eventTime)
                localStorage.setItem("eventDateStatus", res.data.eventDate[0]?.status)
            })
    }
    useEffect(() => {
        getDetail()
    }, [])
    return (
        <div className="body-site">

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-800" id="offcanvasExampleLabel">Профиль</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex align-items-center">
                        <button className="btn focus-none login-btn rounded-circle" type="button">
                            <i className="fas fa-user"/>
                        </button>
                        <p className="mb-0 ms-3">+998 (99) 999-99-99</p>
                    </div>
                    <div className="card-3d mt-4"
                         style={{background: 'linear-gradient(99.29deg, #387EC1 0.94%, #47A8DF 100%)'}}>
                        <div className="w-lg-45">
                            <img className="mb-3" src="/images/logo_white.png" alt="logo"/>
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по хоккею
                            </p>
                        </div>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-55">
                            <img src="/images/person.png" alt="image" style={{right: '10px'}}/>
                        </div>
                    </div>
                    <div className="card-3d mt-5"
                         style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}}>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-30">
                            <img src="/images/balerina.png" alt="image" style={{left: '10px'}}/>
                        </div>
                        <div className="w-lg-65">
                            <img className="mb-3" src="/images/logo_white.png" alt="logo"/>
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по фигурному катанию
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-6">
                        <div className="px-2 me-3 text-silver fs-20">
                            <i className="fal fa-heart"/>
                        </div>
                        <a href="likes.html" className="text-decoration-none text-black_medium">Избранное</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="px-2 me-3 text-silver fs-20">
                            <i className="fal fa-headset"/>
                        </div>
                        <a href="call.html" className="text-decoration-none text-black_medium">Поддержка</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="px-2 me-3 text-danger fs-20">
                            <i className="far fa-sign-out-alt"/>
                        </div>
                        <a href="logout.html" className="text-decoration-none text-black_medium">Выход</a>
                    </div>
                </div>
            </div>
            <div className="bg-snow">
                <div className="bg-snow-2">
                    <div className="header-carousel mt-4 mb-5">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item "><a href="#"
                                                                        className="text-grey text-decoration-none">Главная</a>
                                    </li>
                                    <li className="breadcrumb-item "><a href="#"
                                                                        className="text-grey text-decoration-none">Мероприятий</a>
                                    </li>
                                    <li className="breadcrumb-item  active" aria-current="page">{localStorage.getItem("title")}</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-lg-6 mt-lg-0 mt-3" style={{borderRadius: '20px'}}>
                                    <img src={localStorage.getItem("image")} className="w-100" alt="view"/>
                                </div>
                                <div
                                    className="col-lg-6 mt-lg-0 mt-3 ps-lg-5 d-flex flex-column justify-content-center">
                                    <p className="fs-32 fw-bold text-black_dark">{localStorage.getItem("title")}</p>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Дата</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">{localStorage.getItem("eventDate")?.slice(8, 10) + " " + monthsRu[Number(localStorage.getItem("eventDate")?.slice(5, 7))] + " " + localStorage.getItem("eventDate")?.slice(0, 4) }  </p>

                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Время</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600"> {localStorage.getItem("eventTime")?.slice(0, 5)}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Возраст</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">{localStorage.getItem("age_limit")}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Где</p>
                                        <p className="w-lg-75 text-blue_5 lh-24 fw-600">Alpomish muz saroyi</p>
                                    </div>
                                    <div className="d-flex">
                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill me-3">
                                            Концерт
                                        </div>
                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill me-3">
                                            Поп-Музыка
                                        </div>
                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill me-3">
                                            Эстрада
                                        </div>
                                    </div>
                                    <div className="d-flex box bg-silver_2 py-3 mt-4"
                                         style={{borderRadius: '10px', width: 'fit-content'}}>
                                        <p className="mb-0 fw-bolder lh-24 text-black_dark me-5">Поделиться</p>
                                        <div className="d-flex">
                                            <img className="mx-3" src="/images/telegram.svg" alt="icons"/>
                                            <img className src="/images/instagram.svg" alt="icons"/>
                                            <img className="mx-3" src="/images/tiktok.svg" alt="icons"/>
                                            <img className="me-3" src="/images/facebook_black.svg" alt="icons"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events mb-7">
                        <div className="container">
                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4 d-flex justify-content-between">Выбрать место <button  onClick={() => setSide(true)}  className=" mini-bascet"> <img src="/images/basket_icon.svg" alt="icon" /></button></p>
                            <div className="mt-3 mb-4 my-seals">
                                {/*<img src="/images/stadion.svg" className="w-100" alt="station" />*/}
                                {/*<img src="/images/view_2.png" className="w-100 mt-4" alt="station" />*/}
                               <div className="frows">
                                   {
                                       place.map((item, index) =>(
                                           <>
                                               {
                                                   item.row === "1" ?
                                                       <button onClick={() => selectPlace(item)}>{item.number}</button>
                                                   : ""
                                               }
                                                </>
                                       ))
                                   }

                               </div>
                                <div className="frows">
                                    {
                                        place.map((item, index) =>(
                                            <>
                                                {
                                                    item.row === "2" ?
                                                        <button onClick={() => selectPlace(item)}>{item.number}</button>
                                                        : ""
                                                }</>
                                        ))
                                    }

                                </div>
                                <div className="frows">
                                    {
                                        place.map((item, index) =>(
                                            <>
                                                {
                                                    item.row === "3" ?
                                                        <button onClick={() => selectPlace(item)}>{item.number}</button>
                                                        : ""
                                                }</>
                                        ))
                                    }

                                </div>
                                <div className="frows">
                                    {
                                        place.map((item, index) =>(
                                            <>
                                                {
                                                    item.row === "4" ?
                                                        <button onClick={() => selectPlace(item)}>{item.number}</button>
                                                        : ""
                                                }</>
                                        ))
                                    }

                                </div>
                                <div className="frows">
                                    {
                                        place.map((item, index) =>(
                                            <>
                                                {
                                                    item.row === "5" ?
                                                        <button onClick={() => selectPlace(item)}>{item.number}</button>
                                                        : ""
                                                }</>
                                        ))
                                    }

                                </div>
                                <div className="frows">
                                    {
                                        place.map((item, index) =>(
                                            <>
                                                {
                                                    item.row === "6" ?
                                                        <button onClick={() => selectPlace(item)}>{item.number}</button>
                                                        : ""
                                                }</>
                                        ))
                                    }

                                </div>
                            </div>


                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4">Описание</p>
                            <p className="text-black_dark fs-20 mb-5">

                                {localStorage.getItem("desc")}

                            </p>

                        </div>
                    </div>
                </div>
            </div>
            {
                side ?
                    <div className="right-sidebar">
                        <div onClick={() => setSide(false)} className="right-sidebar-item-left">

                        </div>
                        <div className={side ? "side-open right-sidebar-item"  : ""}>
                            <button onClick={() => setSide(false)} className="cross">
                                <img src="/images/cros.png" alt=""/>
                            </button>
                            <h2 className="text-center mt-3 mb-3">Корзина</h2>

                            {
                                bascetList?.map((item, index)=>(
                                    <div className="places">
                                        <p className="d-flex justify-content-between ">Juma, 10 Fevral - 19:00 <button><img src="/images/trash.png" alt=""/></button></p>
                                        <div className="d-flex justify-content-between">
                                            <div >
                                                <span className="sm-cart-item-sector d-block">Sektor: Parter </span>
                                                <span>Qator: {" " + item.row} </span> <span>O'rin: {" " + item.number} </span>
                                            </div>
                                            <div>
                                                <span className="d-block">Standart</span>
                                                <span>50 000</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    :
                    ""
            }

        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        eventsItem: state.allReducerData.eventsItem,
        eventsDate: state.allReducerData.eventsDate,
    }
}
export default connect(mapStateToProps, {getEvents, getEventsDetail})(Seal);



