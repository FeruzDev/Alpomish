import React, {useEffect, useState} from 'react';
import "../../css/sector.css"
import {connect} from "react-redux";
import {getEvents, getEventsDetail, updateState} from "../../redux/action/allActions";
import axios from "axios";
import {API_PATH, AUTH} from "../const";
import {Link, useHistory, useParams} from "react-router-dom";
import {toast} from "react-toastify";

const Seal = (props) => {
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const [bascetList, setBascetlist] = useState([])
    const [side, setSide] = useState(false)
    const [fPlace, setFPlace] = useState([])
    const params = useParams();
    const [r1, setR1] = useState(false)
    const [r2, setR2] = useState(false)
    const [r3, setR3] = useState(false)
    const [r4, setR4] = useState(false)
    const [r5, setR5] = useState(false)
    const [r6, setR6] = useState(false)
    const [r7, setR7] = useState(false)
    const [myItem , SetMyItem] = useState({})
    const getSeals = () => {
        axios.post(API_PATH + "event-place", {
            "event_id": params?.id,
            "block_name": localStorage.getItem("block_name"),
            "event_date":localStorage.getItem("eventDate"),
            "event_time": localStorage.getItem("eventTime")
        }, AUTH)
            .then(res =>{
                setFPlace(res.data.count_place)
            })
    }
    const selectPlace = (item) => {

        getSeals()
        axios.post(API_PATH + "basket/view", {
            "ticket_id": item?.id,
            // "block_name": item?.block_name,
            // "event_date":item?.event_date,
            // "event_time": item?.event_time
        }, {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res => {
                if (res.data.exists === 0) {
                    axios.post(API_PATH + "basket/add", {
                        "ticket_id": item?.id,
                        // "block_name": item?.block_name,
                        // "event_date":item?.event_date,
                        // "event_time": item?.event_time
                    }, AUTH)
                        .then(res => {
                            // setBascetlist(res.data)
                            getBascet()
                            setSide(true)

                        })
                } else {
                    toast.warning("Это место занято")
                }
            })
            .catch(err =>{
                if(err.response.status === 401){
                    history.push("/login")
                }
            })

    }

    let history = useHistory()
    const sendPay = () => {
      history.push("/bascket")
    }
    const getBascet =()=>{
        axios.get(API_PATH + "basket", {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                setBascetlist(res.data)
            })
    }
    const remove =(id)=>{
        axios.post(API_PATH + "basket/delete-ticket", {"ticket_id": id},  {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                getBascet()
                getSeals()

            })
    }
    const getDetail = () => {
        axios.get(API_PATH + "event/" +  params.id, {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
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
        // window.scrollTo(0, 0)
        getDetail()
        getSeals()
        getBascet()
    }, [side])
    return (
        <div className="body-site">

            
            <div className="bg-snow">
                <div className="bg-snow-2">
                    <div className="header-carousel pt-4 mb-5">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item "><Link to="/"
                                                                        className="text-grey text-decoration-none">Главная</Link>
                                    </li>
                                    <li className="breadcrumb-item "><Link to="/events"
                                                                        className="text-grey text-decoration-none">Мероприятий</Link>
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
                        <div className="container ">
                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4 d-flex justify-content-between">Выбрать место <button  onClick={() => setSide(true)}  className=" mini-bascet"> <img src="/images/basket_icon.svg" alt="icon" /></button></p>
                            {
                                fPlace.length > 0
                                ?
                                    <div className="mt-3 mb-4 my-seals w-100 overflow-scroll-my">
                                        {/*<img src="/images/stadion.svg" className="w-100" alt="station" />*/}
                                        {/*<img src="/images/view_2.png" className="w-100 mt-4" alt="station" />*/}
                                        <div className="frows">
                                            {fPlace.filter(item => item.row === 7).map(item =>(
                                                <span className="count-row">
                                           7
                                      </span>
                                            ))}

                                            {
                                                fPlace.map((item, index) =>(
                                                    <>
                                                        {
                                                            item?.row === 7 ?
                                                                <>
                                                                    <button
                                                                        disabled={item?.status === 0 ? false : true}
                                                                        className={item.range === 1 ? " range-1 " : item.range === 2 ? " range-2 " : item.range === 3 ? " range-3 " :  item.range === 4 ? " range-4 "  : ""}
                                                                        onClick={() => selectPlace(item)}>{item.number}

                                                                        <span className="my_content p-3 justify-content-center">
                                                                    <span className="row   text-center  mt-3 ">
                                                                        Ряд:
                                                                        {" " + item?.block_name}
                                                                    </span>
                                                                    <span className="row mt-3   ">
                                                                         Дата: {" " + item?.event_date}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                       Время  {" " + item?.event_time?.slice(0, 5)}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                        Цена  {" " + item?.price}
                                                                    </span>
                                                                </span>
                                                                    </button>

                                                                </>
                                                                : ""
                                                        }</>
                                                ))
                                            }

                                        </div>

                                        <div className="frows">
                                            {fPlace.filter(item => item.row === 6).map(item =>(
                                                <span className="count-row">
                                           6
                                      </span>
                                            ))}
                                            {
                                                fPlace.map((item, index) =>(
                                                    <>
                                                        {
                                                            item?.row === 6 ?
                                                                <>
                                                                    <button
                                                                        disabled={item?.status === 1 ? true : false}
                                                                        className={item.range === 1 ? " range-1 " : item.range === 2 ? " range-2 " : item.range === 3 ? " range-3 " :  item.range === 4 ? " range-4 "  : ""}
                                                                        onClick={() => selectPlace(item)}>{item.number}

                                                                        <span className="my_content p-3 justify-content-center">
                                                                    <span className="row   text-center  mt-3 ">
                                                                        Ряд:
                                                                        {" " + item?.block_name}
                                                                    </span>
                                                                    <span className="row mt-3   ">
                                                                         Дата: {" " + item?.event_date}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                       Время  {" " + item?.event_time?.slice(0, 5)}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                        Цена  {" " + item?.price}
                                                                    </span>
                                                                </span>
                                                                    </button>

                                                                </>
                                                                : ""
                                                        }</>
                                                ))
                                            }

                                        </div>

                                        <div className="frows">
                                            {fPlace.filter(item => item.row === 5).map(item =>(
                                                <span className="count-row">
                                           5
                                      </span>
                                            ))}
                                            {
                                                fPlace.map((item, index) =>(
                                                    <>
                                                        {
                                                            item?.row === 5 ?
                                                                <>
                                                                    <button
                                                                        disabled={item?.status === 1 ? true : false}
                                                                        className={item.range === 1 ? " range-1 " : item.range === 2 ? " range-2 " : item.range === 3 ? " range-3 " :  item.range === 4 ? " range-4 "  : ""}
                                                                        onClick={() => selectPlace(item)}>{item.number}

                                                                        <span className="my_content p-3 justify-content-center">
                                                                    <span className="row   text-center  mt-3 ">
                                                                        Ряд:
                                                                        {" " + item?.block_name}
                                                                    </span>
                                                                    <span className="row mt-3   ">
                                                                         Дата: {" " + item?.event_date}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                       Время  {" " + item?.event_time?.slice(0, 5)}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                        Цена  {" " + item?.price}
                                                                    </span>
                                                                </span>
                                                                    </button>

                                                                </>
                                                                : ""
                                                        }</>
                                                ))
                                            }

                                        </div>
                                        <div className="frows">
                                            {fPlace.filter(item => item.row === 4).map(item =>(
                                                <span className="count-row">
                                           4
                                      </span>
                                            ))}
                                            {
                                                fPlace.map((item, index) =>(
                                                    <>
                                                        {
                                                            item?.row === 4 ?
                                                                <>
                                                                    <button
                                                                        disabled={item?.status === 1 ? true : false}
                                                                        className={item.range === 1 ? " range-1 " : item.range === 2 ? " range-2 " : item.range === 3 ? " range-3 " :  item.range === 4 ? " range-4 "  : ""}
                                                                        onClick={() => selectPlace(item)}>{item.number}

                                                                        <span className="my_content p-3 justify-content-center">
                                                                    <span className="row   text-center  mt-3 ">
                                                                        Ряд:
                                                                        {" " + item?.block_name}
                                                                    </span>
                                                                    <span className="row mt-3   ">
                                                                         Дата: {" " + item?.event_date}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                       Время  {" " + item?.event_time?.slice(0, 5)}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                        Цена  {" " + item?.price}
                                                                    </span>
                                                                </span>
                                                                    </button>

                                                                </>
                                                                : ""
                                                        }</>
                                                ))
                                            }

                                        </div>
                                        <div className="frows">
                                            {fPlace.filter(item => item.row === 3).map(item =>(
                                                <span className="count-row">
                                           3
                                      </span>
                                            ))}
                                            {
                                                fPlace.map((item, index) =>(
                                                    <>
                                                        {
                                                            item?.row === 3 ?
                                                                <>
                                                                    <button
                                                                        disabled={item?.status === 1 ? true : false}
                                                                        className={item.range === 1 ? " range-1 " : item.range === 2 ? " range-2 " : item.range === 3 ? " range-3 " :  item.range === 4 ? " range-4 "  : ""}
                                                                        onClick={() => selectPlace(item)}>{item.number}

                                                                        <span className="my_content p-3 justify-content-center">
                                                                    <span className="row   text-center  mt-3 ">
                                                                        Ряд:
                                                                        {" " + item?.block_name}
                                                                    </span>
                                                                    <span className="row mt-3   ">
                                                                         Дата: {" " + item?.event_date}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                       Время  {" " + item?.event_time?.slice(0, 5)}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                        Цена  {" " + item?.price}
                                                                    </span>
                                                                </span>
                                                                    </button>

                                                                </>
                                                                : ""
                                                        }</>
                                                ))
                                            }

                                        </div>

                                        <div className="frows">
                                            {fPlace.filter(item => item.row === 2).map(item =>(
                                                <span className="count-row">
                                           2
                                      </span>
                                            ))}
                                            {
                                                fPlace.map((item, index) =>(
                                                    <>
                                                        {
                                                            item?.row === 2 ?
                                                                <>
                                                                    <button
                                                                        disabled={item?.status === 1 ? true : false}
                                                                        className={item.range === 1 ? " range-1 " : item.range === 2 ? " range-2 " : item.range === 3 ? " range-3 " :  item.range === 4 ? " range-4 "  : ""}
                                                                        onClick={() => selectPlace(item)}>{item.number}

                                                                        <span className="my_content p-3 justify-content-center">
                                                                    <span className="row   text-center  mt-3 ">
                                                                        Ряд:
                                                                        {" " + item?.block_name}
                                                                    </span>
                                                                    <span className="row mt-3   ">
                                                                         Дата: {" " + item?.event_date}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                       Время  {" " + item?.event_time?.slice(0, 5)}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                        Цена  {" " + item?.price}
                                                                    </span>
                                                                </span>
                                                                    </button>

                                                                </>
                                                                : ""
                                                        }</>
                                                ))
                                            }

                                        </div>
                                        <div className="frows">
                                            {fPlace.filter(item => item.row === 1).map(item =>(
                                                <span className="count-row">
                                           1
                                      </span>
                                            ))}
                                            {
                                                fPlace?.map((item, index) =>(
                                                    <>
                                                        {
                                                            item.row === 1 ?
                                                                <>
                                                                    <button
                                                                        disabled={item?.status === 1 ? true : false}
                                                                        className={item.range === 1 ? " range-1 " : item.range === 2 ? " range-2 " : item.range === 3 ? " range-3 " :  item.range === 4 ? " range-4 "  : ""}
                                                                        onClick={() => selectPlace(item)}>{item.number}

                                                                        <span className="my_content p-3 justify-content-center">
                                                                    <span className="row   text-center  mt-3 ">
                                                                        Ряд:
                                                                        {" " + item?.block_name}
                                                                    </span>
                                                                    <span className="row mt-3   ">
                                                                         Дата: {" " + item?.event_date}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                       Время  {" " + item?.event_time?.slice(0, 5)}
                                                                    </span>
                                                                    <span className="row mt-3">
                                                                        Цена  {" " + item?.price}
                                                                    </span>
                                                                </span>
                                                                    </button>

                                                                </>
                                                                :
                                                                ""
                                                        }
                                                    </>
                                                ))
                                            }

                                        </div>
                                    </div>
                                    :
                                    ""
                            }



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
                                        <p className="d-flex justify-content-between ">{item.tickets?.event_date?.slice(8,11) + "-" + monthsRu[Number(item.tickets.event_date.slice(5,7))]} Fevral - {item.tickets?.event_time}
                                            <button onClick={() => remove(item.ticket_id)}><img src="/images/trash.png" alt=""/></button></p>
                                        <div className="d-flex justify-content-between">
                                            <div >
                                                <span className="sm-cart-item-sector d-block">Sektor: {item.tickets?.block_name} </span>
                                                <span>Qator: {" " + item.tickets?.row} </span> <span>O'rin: {" " + item.tickets?.place} </span>
                                            </div>
                                            <div>
                                                <span className="d-block">Standart</span>



                                                <span>{item.tickets?.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <button onClick={sendPay} className="sendPay">
                                ОФОРМИТЬ ЗАКАЗ
                            </button>
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



