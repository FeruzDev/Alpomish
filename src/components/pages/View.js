import React, {useEffect, useState} from 'react';
import "../../css/sector.css"
import {connect} from "react-redux";
import {getEvents, getEventsDetail, updateState} from "../../redux/action/allActions";
import axios from "axios";
import {API_PATH} from "../const";
import {Link, useHistory, useParams} from "react-router-dom";

// Get ID from URL

const View = (props) => {
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const history = useHistory()

    const feruzjalilov = (value) => {
        console.log(value)
        localStorage.setItem("block_name", value)
        history.push("/events/detail/"+ params.id + "/seal")

    }
    const params = useParams();

    const [myItem , SetMyItem] = useState({})
    var url = document.URL
    const last  =  url.substr(url.lastIndexOf('/') + 1) ;
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("type")
    const name = queryParameters.get("name")
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
                console.log( res.data);
            })
    }
    useEffect(() => {
        getDetail()
        console.log(queryParameters)
        console.log(type)
        console.log(name)
    }, [])
    return (
        <div className="body-site">
            <div className="bg-snow">
                <div className="bg-snow-2">
                    <div className="header-carousel mt-4 mb-5">
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
                        <div className="container">
                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4">Выбрать сектор</p>
                            {/*<div className="mt-3 mb-4">*/}
                            {/*    <img src="/images/stadion.svg" className="w-100" alt="station" />*/}
                            {/*    <img src="/images/view_2.png" className="w-100 mt-4" alt="station" />*/}
                            {/*</div>*/}
                            <div className="select-sector-f w-100 d-flex justify-content-center">
                                {/*<svg width="1170" height="801" viewBox="0 0 1170 801" fill="none"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg">*/}
                                {/*    <path*/}
                                {/*        d="M0 700.5V100C0 44.8 44.8 0 100 0H1070C1125.2 0 1170 44.8 1170 100V700.5C1170 755.7 1125.2 800.5 1070 800.5H100C44.8 800.5 0 755.8 0 700.5Z"*/}
                                {/*        fill="white"/>*/}
                                {/*    <path*/}
                                {/*        d="M1112 59L1002.4 170.5C1044.2 211.6 1071.4 270.2 1074.3 335.8C1090.4 335.8 1117.3 335.8 1139.6 335.8V128C1139.7 101.2 1129.1 76.9 1112 59Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1096.9 209.8C1088.5 186 1076.6 164 1061.8 144.5L1033.4 171.9C1045.4 187.7 1055 205.6 1061.8 224.9C1070.3 249.1 1074.3 275.1 1073.4 301L1111.1 302.6C1112.1 271 1107.3 239.4 1096.9 209.8Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M1096.3 209.2C1088 185.7 1076.3 163.9 1061.7 144.7L1043.5 162.2C1056.3 179.1 1066.5 198.3 1073.7 218.8C1082.9 244.9 1087.2 272.9 1086.2 300.9L1110.4 301.9C1111.5 270.3 1106.7 238.7 1096.3 209.2Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M1092.8 208.5C1084.8 186 1073.6 165.2 1059.7 146.6L1052.3 153.7C1065.4 171.4 1076.1 191.2 1083.7 212.5C1093.6 240.2 1098.4 269.8 1097.6 299.5L1107.4 299.8C1108.1 268.6 1103.2 237.6 1092.8 208.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M1070.6 156.2L1039.4 182.6L1038.6 181.5L1069.9 155.1L1070.6 156.2Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1077.3 167L1045.2 192L1044.5 190.9L1076.6 165.9L1077.3 167Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1084.2 179.4L1050.5 201.9L1049.9 200.7L1083.5 178.2L1084.2 179.4Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1090.8 193.6L1056.2 214.1L1055.6 212.9L1090.2 192.4L1090.8 193.6Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1096.7 208.5L1060.6 225.7L1060.1 224.4L1096.2 207.3L1096.7 208.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1101.5 223.5L1064.4 237.9L1063.9 236.6L1101.1 222.2L1101.5 223.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1105.8 240.5L1067.6 251.2L1067.3 249.9L1105.5 239.2L1105.8 240.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1108.4 255.9L1069.6 263L1069.4 261.6L1108.2 254.5L1108.4 255.9Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1110.3 271.5L1071.1 275.7L1071 274.3L1110.2 270.2L1110.3 271.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1111.1 286.5L1071.8 287.4V286.1L1111 285.1L1111.1 286.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1072.16 300.385L1072.1 311.185L1111 311.379L1111.06 300.579L1072.16 300.385Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1066.1 319.1H1139.6V128C1139.6 101.2 1129.1 76.9 1112 59L999.4 173.5C1037.7 210.7 1062.6 262 1066.1 319.1Z"*/}
                                {/*        className="f-hover" onClick={() => feruzjalilov("A1")} fill-opacity="0.3"/>*/}
                                {/*    <path*/}
                                {/*        d="M1074.6 341.6H1139.7V335.6C1117.4 335.6 1090.5 335.6 1074.4 335.6C1074.4 337.6 1074.5 339.6 1074.6 341.6Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path d="M841.8 690.1H343.8V771.9H841.8V690.1Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M841.8 28H343.8V109.8H841.8V28Z" fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M118.3 429.7V370.7C118.3 259.7 208.3 169.7 319.3 169.7H829C940 169.7 1030 259.7 1030 370.7V429.7C1030 540.7 940 630.7 829 630.7H319.3C208.3 630.7 118.3 540.7 118.3 429.7Z"*/}
                                {/*        fill="#1D92FF" fill-opacity="0.5"/>*/}
                                {/*    <path d="M343.8 720.7V711.2H452.8V720.7H343.8Z" fill="#FFD600"/>*/}
                                {/*    <path d="M673.3 711.2H475.1V720.7H673.3V711.2Z" fill="#FFD600"/>*/}
                                {/*    <path d="M841.8 711.2H695.6V720.7H841.8V711.2Z" fill="#FFD600"/>*/}
                                {/*    <path d="M452.8 724.8H343.8V733.7H452.8V724.8Z" fill="#FFD600"/>*/}
                                {/*    <path d="M452.8 94.1H343.8V103H452.8V94.1Z" fill="#FFD600"/>*/}
                                {/*    <path d="M673.3 724.8H475.1V733.7H673.3V724.8Z" fill="#FFD600"/>*/}
                                {/*    <path d="M673.3 94.1H475.1V103H673.3V94.1Z" fill="#FFD600"/>*/}
                                {/*    <path d="M841.8 724.8H695.6V733.7H841.8V724.8Z" fill="#FFD600"/>*/}
                                {/*    <path d="M840.5 94.1H695.6V103H840.5V94.1Z" fill="#D9D9D9"/>*/}
                                {/*    <path d="M452.8 80.5H343.8V90H452.8V80.5Z" fill="#FFD600"/>*/}
                                {/*    <path d="M673.3 80.5H475.1V90H673.3V80.5Z" fill="#FFD600"/>*/}
                                {/*    <path d="M840.5 80.5H695.6V90H840.5V80.5Z" fill="#D9D9D9"/>*/}
                                {/*    <path d="M452.8 697.6H343.8V707.1H452.8V697.6Z" fill="#FFD600"/>*/}
                                {/*    <path d="M452.8 66.8H343.8V76.3H452.8V66.8Z" fill="#FFD600"/>*/}
                                {/*    <path d="M673.3 697.6H475.1V707.1H673.3V697.6Z" fill="#FFD600"/>*/}
                                {/*    <path d="M673.3 66.8H475.1V76.3H673.3V66.8Z" fill="#FFD600"/>*/}
                                {/*    <path d="M841.8 697.6H695.6V707.1H841.8V697.6Z" fill="#FFD600"/>*/}
                                {/*    <path d="M840.5 66.8H695.6V76.3H840.5V66.8Z" fill="#D9D9D9"/>*/}
                                {/*    <path d="M841.8 94.1H695.6V103H841.8V94.1Z" fill="#FFD600"/>*/}
                                {/*    <path d="M841.8 80.5H695.6V90H841.8V80.5Z" fill="#FFD600"/>*/}
                                {/*    <path d="M841.8 66.8H695.6V76.3H841.8V66.8Z" fill="#FFD600"/>*/}
                                {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
                                {/*          d="M639.1 401.6H574.8V471.6C609.5 470.9 638.1 440.4 639.1 401.6ZM644.1 401.6H695.5V398.2H644.1C643.4 356.7 612.7 323.2 574.7 322.5V169.8H571.6V322.6C533.9 323.7 503.5 357 502.9 398.3H452.7V401.7H503C504 442.6 534.2 475.6 571.7 476.7V630.8H574.8V476.6C612.6 475.9 643.1 442.8 644.1 401.6ZM571.7 471.6V401.6H508C508.9 440.2 537.3 470.5 571.7 471.6ZM507.9 398.2H571.6V327.5C537.1 328.6 508.6 359.3 507.9 398.2ZM574.8 327.5V398.2H639.2C638.5 359.1 609.7 328.3 574.8 327.5Z"*/}
                                {/*          fill="white"/>*/}
                                {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
                                {/*          d="M179 602.8H175.9V197.1H179V369.7C182.2 369.9 185.3 370.7 188.2 372C191.6 373.6 194.7 375.8 197.3 378.7C199.9 381.6 202 385 203.4 388.8C204.5 391.8 205.2 395 205.5 398.3H941.4C941.6 394.8 942.3 391.4 943.5 388.1C944.9 384.3 947 380.9 949.6 378C952.2 375.1 955.3 372.8 958.7 371.3C962 369.8 965.6 369 969.2 368.9V196.4H972.3V602.8H969.2V430.9C965.6 430.9 962 430.1 958.7 428.5C955.3 426.9 952.2 424.7 949.6 421.8C947 418.9 944.9 415.5 943.5 411.7C942.3 408.5 941.6 405 941.4 401.5H205.6C205.5 405.2 204.8 408.9 203.5 412.3C202.1 416.1 200 419.5 197.4 422.4C194.8 425.3 191.7 427.6 188.3 429.1C185.4 430.4 182.2 431.2 179.1 431.4V602.8H179ZM944.9 401.6C945.1 404.6 945.7 407.5 946.7 410.3C947.9 413.6 949.8 416.6 952.1 419.1C954.4 421.6 957.1 423.6 960.1 425C963 426.3 966.1 427 969.3 427.1V401.5H944.9V401.6ZM969.3 372.7C966.2 372.7 963 373.4 960.1 374.8C957.1 376.2 954.4 378.2 952.1 380.7C949.8 383.2 948 386.2 946.7 389.5C945.7 392.3 945 395.2 944.9 398.2H969.3V372.7ZM179 398.2V373.4C181.7 373.6 184.4 374.3 186.9 375.4C189.9 376.8 192.6 378.8 194.9 381.3C197.2 383.8 199 386.8 200.3 390.1C201.3 392.7 201.9 395.4 202.1 398.1H179V398.2ZM179 401.6H202.2C202.1 404.8 201.5 408 200.3 411C199.1 414.3 197.2 417.3 194.9 419.8C192.6 422.3 189.9 424.3 186.9 425.7C184.4 426.9 181.7 427.5 179 427.7V401.6Z"*/}
                                {/*          fill="white"/>*/}
                                {/*    <path*/}
                                {/*        d="M879.2 439.8C918 439.8 949.5 474.4 949.5 517.2C949.5 559.9 918 594.6 879.2 594.6C840.4 594.6 808.9 559.9 808.9 517.2C808.9 474.5 840.4 439.8 879.2 439.8ZM879.2 591.2C916.3 591.2 946.4 558.1 946.4 517.2C946.4 476.3 916.3 443.2 879.2 443.2C842.1 443.2 812 476.3 812 517.2C812 558.1 842.1 591.2 879.2 591.2Z"*/}
                                {/*        fill="white"/>*/}
                                {/*    <path*/}
                                {/*        d="M268.5 439.8C307.3 439.8 338.8 474.4 338.8 517.2C338.8 559.9 307.3 594.6 268.5 594.6C229.7 594.6 198.2 559.9 198.2 517.2C198.2 474.5 229.7 439.8 268.5 439.8ZM268.5 591.2C305.6 591.2 335.7 558.1 335.7 517.2C335.7 476.3 305.6 443.2 268.5 443.2C231.4 443.2 201.3 476.3 201.3 517.2C201.3 558.1 231.4 591.2 268.5 591.2Z"*/}
                                {/*        fill="white"/>*/}
                                {/*    <path*/}
                                {/*        d="M879.2 204.6C918 204.6 949.5 239.3 949.5 282C949.5 324.7 918 359.4 879.2 359.4C840.4 359.4 808.9 324.8 808.9 282C808.9 239.2 840.4 204.6 879.2 204.6ZM879.2 355.9C916.3 355.9 946.4 322.8 946.4 281.9C946.4 241 916.3 207.9 879.2 207.9C842.1 207.9 812 241.1 812 282C812 322.9 842.1 355.9 879.2 355.9Z"*/}
                                {/*        fill="white"/>*/}
                                {/*    <path*/}
                                {/*        d="M268.5 204.6C307.3 204.6 338.8 239.3 338.8 282C338.8 324.7 307.3 359.4 268.5 359.4C229.7 359.4 198.2 324.8 198.2 282C198.2 239.2 229.7 204.6 268.5 204.6ZM268.5 355.9C305.6 355.9 335.7 322.8 335.7 281.9C335.7 241 305.6 207.9 268.5 207.9C231.4 207.9 201.3 241 201.3 281.9C201.3 322.8 231.4 355.9 268.5 355.9Z"*/}
                                {/*        fill="white"/>*/}
                                {/*    <path d="M345 697.6H343.8V733.7H345V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M367.9 697.6H366.7V733.7H367.9V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M391.4 697.6H390.2V733.7H391.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M414.3 697.6H413.1V733.7H414.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M437.2 697.6H436V733.7H437.2V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M352.4 697.6H351.2V733.7H352.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M375.9 697.6H374.7V733.7H375.9V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M398.8 697.6H397.6V733.7H398.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M421.8 697.6H420.6V733.7H421.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M445.3 697.6H444.1V733.7H445.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M360.4 697.6H359.2V733.7H360.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M383.4 697.6H382.2V733.7H383.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M406.3 697.6H405.1V733.7H406.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M429.8 697.6H428.6V733.7H429.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M452.7 697.6H451.5V733.7H452.7V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M452.8 724.8H343.8V733.7H452.8V724.8Z" fill="#FFD600"/>*/}
                                {/*    <path d="M452.8 697.6H343.8V707.1H452.8V697.6Z" fill="#FFD600"/>*/}
                                {/*    <path d="M345 697.6H343.8V733.7H345V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M367.9 697.6H366.7V733.7H367.9V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M391.4 697.6H390.2V733.7H391.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M414.3 697.6H413.1V733.7H414.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M437.2 697.6H436V733.7H437.2V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M352.4 697.6H351.2V733.7H352.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M375.9 697.6H374.7V733.7H375.9V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M398.8 697.6H397.6V733.7H398.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M421.8 697.6H420.6V733.7H421.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M445.3 697.6H444.1V733.7H445.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M360.4 697.6H359.2V733.7H360.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M383.4 697.6H382.2V733.7H383.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M406.3 697.6H405.1V733.7H406.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M429.8 697.6H428.6V733.7H429.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M452.7 697.6H451.5V733.7H452.7V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M697.3 697.6H695.6V733.7H697.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M728 697.6H726.3V733.7H728V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M759.5 697.6H757.8V733.7H759.5V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M790.3 697.6H788.6V733.7H790.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M821 697.6H819.3V733.7H821V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M707.2 697.6H705.5V733.7H707.2V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M738.8 697.6H737.1V733.7H738.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M769.5 697.6H767.8V733.7H769.5V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M800.2 697.6H798.5V733.7H800.2V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M831.8 697.6H830.1V733.7H831.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M718 697.6H716.3V733.7H718V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M748.8 697.6H747.1V733.7H748.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M779.5 697.6H777.8V733.7H779.5V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M811 697.6H809.3V733.7H811V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M841.8 697.6H840.1V733.7H841.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M697.3 66.8H695.6V102.9H697.3V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M728 66.8H726.3V102.9H728V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M759.5 66.8H757.8V102.9H759.5V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M790.3 66.8H788.6V102.9H790.3V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M821 66.8H819.3V102.9H821V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M707.2 66.8H705.5V102.9H707.2V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M738.8 66.8H737.1V102.9H738.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M769.5 66.8H767.8V102.9H769.5V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M800.2 66.8H798.5V102.9H800.2V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M831.8 66.8H830.1V102.9H831.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M718 66.8H716.3V102.9H718V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M748.8 66.8H747.1V102.9H748.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M779.5 66.8H777.8V102.9H779.5V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M811 66.8H809.3V102.9H811V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M841.8 66.8H840.1V102.9H841.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M345 66.8H343.8V102.9H345V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M367.9 66.8H366.7V102.9H367.9V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M391.4 66.8H390.2V102.9H391.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M414.3 66.8H413.1V102.9H414.3V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M437.2 66.8H436V102.9H437.2V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M352.4 66.8H351.2V102.9H352.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M375.9 66.8H374.7V102.9H375.9V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M398.8 66.8H397.6V102.9H398.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M421.8 66.8H420.6V102.9H421.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M445.3 66.8H444.1V102.9H445.3V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M360.4 66.8H359.2V102.9H360.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M383.4 66.8H382.2V102.9H383.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M406.3 66.8H405.1V102.9H406.3V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M429.8 66.8H428.6V102.9H429.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M452.7 66.8H451.5V102.9H452.7V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M492.4 697.6H491.2V733.7H492.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M602 697.6H600.8V733.7H602V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M515.9 697.6H514.7V733.7H515.9V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M626.1 697.6H624.9V733.7H626.1V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M539.4 697.6H538.2V733.7H539.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M649.7 697.6H648.5V733.7H649.7V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M563 697.6H561.8V733.7H563V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M673.2 697.6H672V733.7H673.2V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M476.3 697.6H475.1V733.7H476.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M586.5 697.6H585.3V733.7H586.5V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M500.4 697.6H499.2V733.7H500.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M610.7 697.6H609.5V733.7H610.7V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M524 697.6H522.8V733.7H524V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M634.2 697.6H633V733.7H634.2V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M547.5 697.6H546.3V733.7H547.5V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M657.1 697.6H655.9V733.7H657.1V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M571 697.6H569.8V733.7H571V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M484.3 697.6H483.1V733.7H484.3V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M594.6 697.6H593.4V733.7H594.6V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M507.8 697.6H506.6V733.7H507.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M618.1 697.6H616.9V733.7H618.1V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M531.4 697.6H530.2V733.7H531.4V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M641.6 697.6H640.4V733.7H641.6V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M555.5 697.6H554.3V733.7H555.5V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M665.8 697.6H664.6V733.7H665.8V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M579.1 697.6H577.9V733.7H579.1V697.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M492.4 66.8H491.2V102.9H492.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M602 66.8H600.8V102.9H602V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M515.9 66.8H514.7V102.9H515.9V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M626.1 66.8H624.9V102.9H626.1V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M539.4 66.8H538.2V102.9H539.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M649.7 66.8H648.5V102.9H649.7V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M563 66.8H561.8V102.9H563V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M673.2 66.8H672V102.9H673.2V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M476.3 66.8H475.1V102.9H476.3V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M586.5 66.8H585.3V102.9H586.5V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M500.4 66.8H499.2V102.9H500.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M610.7 66.8H609.5V102.9H610.7V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M524 66.8H522.8V102.9H524V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M634.2 66.8H633V102.9H634.2V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M547.5 66.8H546.3V102.9H547.5V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M657.1 66.8H655.9V102.9H657.1V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M571 66.8H569.8V102.9H571V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M484.3 66.8H483.1V102.9H484.3V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M594.6 66.8H593.4V102.9H594.6V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M507.8 66.8H506.6V102.9H507.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M618.1 66.8H616.9V102.9H618.1V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M531.4 66.8H530.2V102.9H531.4V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M641.6 66.8H640.4V102.9H641.6V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M555.5 66.8H554.3V102.9H555.5V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M665.8 66.8H664.6V102.9H665.8V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M579.1 66.8H577.9V102.9H579.1V66.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1139.6 331.4H1074.6V464.2H1139.6V331.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M452.8 690.1H343.8V771.9H452.8V690.1Z" className="f-hover"*/}
                                {/*          onClick={() => feruzjalilov("B5")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M452.1 28H343.1V109.8H452.1V28Z" className="f-hover"*/}
                                {/*          onClick={() => feruzjalilov("A5")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M841.8 690.1H695.6V771.9H841.8V690.1Z" className="f-hover"*/}
                                {/*          onClick={() => feruzjalilov("B3")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M841.1 28H694.9V109.8H841.1V28Z" className="f-hover"*/}
                                {/*          onClick={() => feruzjalilov("A3")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M673.3 690.1H475.1V771.9H673.3V690.1Z" className="f-hover"*/}
                                {/*          onClick={() => feruzjalilov("B4")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M672.6 28H474.4V109.8H672.6V28Z" className="f-hover"*/}
                                {/*          onClick={() => feruzjalilov("A4")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M1139.5 331.4H1074.5V464.2H1139.5V331.4Z" fill="#D9D9D9"*/}
                                {/*          className="f-hover" onClick={() => feruzjalilov("D1")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M1100.6 339.6H1109.3V451.4H1100.6V339.6Z" fill="#FFD600"/>*/}
                                {/*    <path d="M1097 358H1088.9V426.9H1097V358Z" fill="#FFD600"/>*/}
                                {/*    <path d="M1121.7 339.6H1113V451.4H1121.7V339.6Z" fill="#FFD600"/>*/}
                                {/*    <path d="M1121.7 356.6H1088.9V358H1121.7V356.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 382.5H1088.9V383.9H1121.7V382.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 407.8H1088.9V409.2H1121.7V407.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 433H1088.9V434.4H1121.7V433Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 339.6H1100.6V341H1121.7V339.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 365.5H1088.9V366.9H1121.7V365.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 390.7H1088.9V392.1H1121.7V390.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 415.9H1088.9V417.3H1121.7V415.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 441.9H1088.9V443.3H1121.7V441.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 348.4H1100.6V349.8H1121.7V348.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 373.7H1088.9V375.1H1121.7V373.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 398.9H1088.9V400.3H1121.7V398.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 424.8H1088.9V426.2H1121.7V424.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 450H1100.6V451.4H1121.7V450Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1097 358H1088.9V442.6H1097V358Z" fill="#FFD600"/>*/}
                                {/*    <path d="M1121.7 340.3H1113V451.4H1121.7V340.3Z" fill="#FFD600"/>*/}
                                {/*    <path d="M1121.7 356.6H1088.9V358H1121.7V356.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 382.5H1088.9V383.9H1121.7V382.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 407.8H1088.9V409.2H1121.7V407.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 433H1088.9V434.4H1121.7V433Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 339.6H1100.6V341H1121.7V339.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 365.5H1088.9V366.9H1121.7V365.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 390.7H1088.9V392.1H1121.7V390.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 415.9H1088.9V417.3H1121.7V415.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 441.9H1088.9V443.3H1121.7V441.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 348.4H1100.6V349.8H1121.7V348.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 373.7H1088.9V375.1H1121.7V373.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 398.9H1088.9V400.3H1121.7V398.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 424.8H1088.9V426.2H1121.7V424.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1121.7 450H1100.6V451.4H1121.7V450Z" fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1112 59C1093.8 39.9 1068.1 28 1039.6 28H857.2V109.8C857.4 109.8 857.6 109.8 857.8 109.8C913.4 109.8 964.1 132.7 1002.4 170.4L1112 59Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1011.6 99.3C1000.6 91.5 989 84.8 976.9 79.3C950.7 67.5 922.5 61.6 894.2 62.1L894.3 72.8C921.3 72.4 948.2 78 973.2 89.2C984.9 94.5 996 100.9 1006.5 108.4L1011.6 99.3Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M1012.6 97.5C1002 90.2 990.9 83.9 979.3 78.8C952.6 67 924 61.3 895.2 62.2L896.2 103.8C919.8 103.1 943.3 107.7 965.2 117.4C974.8 121.7 984.1 126.9 992.8 132.9L1012.6 97.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M1012.7 97.3C1001.9 89.8 990.5 83.4 978.7 78.1C952 66.3 923.4 60.6 894.6 61.5L895.3 88.1C920.8 87.3 946.1 92.3 969.7 102.8C980.3 107.5 990.5 113.3 1000.1 120L1012.7 97.3Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M1012.6 97.5C1002 90.2 990.9 83.9 979.3 78.8C952.6 67 924 61.3 895.2 62.2L895.5 75.6C922.6 74.8 949.6 80.1 974.8 91.3C985.8 96.2 996.3 102.1 1006.3 109L1012.6 97.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M896.2 61.4H883.8V105H896.2V61.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M905.5 61.4H904.3V105H905.5V61.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M914.9 61.9L912.5 105L911.3 104.9L913.7 61.8L914.9 61.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M924.5 62.8L920.1 105.9L918.9 105.8L923.2 62.7L924.5 62.8Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M933.9 64.3L927.7 107L926.5 106.8L932.7 64L933.9 64.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M943.2 66.1L935.2 108.5L934 108.2L942 65.9L943.2 66.1Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M952.6 68.5L943.4 110.6L942.2 110.3L951.4 68.2L952.6 68.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M962.3 71.7L950.9 113.1L949.7 112.8L961.1 71.3L962.3 71.7Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M972 75L959 115.9L957.8 115.5L970.8 74.6L972 75Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M983 79.8L968.7 120.2L967.5 119.7L981.8 79.3L983 79.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M994 85.3L976.8 124.3L975.7 123.7L992.9 84.7L994 85.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M1003.9 91.1L984.5 128.8L983.5 128.1L1002.8 90.4L1003.9 91.1Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
                                {/*          d="M1112 59C1093.8 39.9 1068.1 28 1039.6 28H857.2V112.7C912.3 114.6 962.1 137.4 999.4 173.5L1112 59Z"*/}
                                {/*          className="f-hover" onClick={() => feruzjalilov("A2")} fill-opacity="0.3"/>*/}
                                {/*    <path*/}
                                {/*        d="M1112 740.9L1002.4 629.4C1044.2 588.3 1071.4 529.7 1074.3 464.1C1090.4 464.1 1117.3 464.1 1139.6 464.1V671.8C1139.7 698.6 1129.1 722.9 1112 740.9Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1096.9 590C1088.5 613.8 1076.6 635.8 1061.8 655.3L1033.4 627.9C1045.4 612.1 1055 594.2 1061.8 574.9C1070.3 550.7 1074.3 524.7 1073.4 498.8L1111.1 497.2C1112.1 528.9 1107.3 560.5 1096.9 590Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M1096.3 590.7C1088 614.2 1076.3 636 1061.7 655.2L1043.5 637.7C1056.3 620.8 1066.5 601.6 1073.7 581.1C1082.9 555 1087.2 527 1086.2 499L1110.4 498C1111.5 529.6 1106.7 561.1 1096.3 590.7Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M1092.8 591.3C1084.8 613.8 1073.6 634.6 1059.7 653.2L1052.3 646.1C1065.4 628.4 1076.1 608.6 1083.7 587.3C1093.6 559.6 1098.4 530 1097.6 500.3L1107.4 500C1108.1 531.2 1103.2 562.3 1092.8 591.3Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M1069.9 644.7L1038.6 618.3L1039.4 617.3L1070.6 643.6L1069.9 644.7Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1076.6 634L1044.5 609L1045.2 607.8L1077.3 632.9L1076.6 634Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1083.5 621.7L1049.9 599.2L1050.5 598L1084.2 620.5L1083.5 621.7Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1090.2 607.5L1055.6 587L1056.2 585.8L1090.8 606.3L1090.2 607.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1096.2 592.6L1060.1 575.4L1060.6 574.2L1096.7 591.3L1096.2 592.6Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1101.1 577.7L1063.9 563.2L1064.4 561.9L1101.5 576.4L1101.1 577.7Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1105.5 560.6L1067.3 550L1067.6 548.6L1105.8 559.3L1105.5 560.6Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1108.2 545.3L1069.4 538.2L1069.6 536.9L1108.4 544L1108.2 545.3Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1110.2 529.7L1071 525.5L1071.1 524.2L1110.3 528.3L1110.2 529.7Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1111 514.7L1071.8 513.8V512.4L1111.1 513.4L1111 514.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1110.99 488.41L1072.09 488.603L1072.14 499.403L1111.04 499.21L1110.99 488.41Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1066.1 480.7H1139.6V671.9C1139.6 698.7 1129.1 723 1112 740.9L999.4 626.3C1037.7 589.1 1062.6 537.9 1066.1 480.7Z"*/}
                                {/*        className="f-hover" onClick={() => feruzjalilov("B1")} fill-opacity="0.3"/>*/}
                                {/*    <path*/}
                                {/*        d="M1112 740.9C1093.8 760 1068.1 771.9 1039.6 771.9H857.2V690.1C857.4 690.1 857.6 690.1 857.8 690.1C913.4 690.1 964.1 667.2 1002.4 629.5L1112 740.9Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M1011.6 700.5C1000.6 708.3 989 715 976.9 720.5C950.7 732.3 922.5 738.2 894.2 737.7L894.3 727C921.3 727.4 948.2 721.8 973.2 710.6C984.9 705.3 996 698.9 1006.5 691.4L1011.6 700.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M1012.6 702.4C1002 709.7 990.9 716 979.3 721.1C952.6 732.9 924 738.6 895.2 737.7L896.2 696.1C919.8 696.8 943.3 692.2 965.2 682.5C974.8 678.2 984.1 673 992.8 667L1012.6 702.4Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M1012.7 702.6C1001.9 710.1 990.5 716.5 978.7 721.8C952 733.6 923.4 739.3 894.6 738.4L895.3 711.8C920.8 712.6 946.1 707.6 969.7 697.1C980.3 692.4 990.5 686.6 1000.1 679.9L1012.7 702.6Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M1012.6 702.4C1002 709.7 990.9 716 979.3 721.1C952.6 732.9 924 738.6 895.2 737.7L895.5 724.3C922.6 725.1 949.6 719.8 974.8 708.6C985.8 703.7 996.3 697.8 1006.3 690.9L1012.6 702.4Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M896.2 694.8H883.8V738.4H896.2V694.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M905.5 694.8H904.3V738.4H905.5V694.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M913.7 738.1L911.3 694.9L912.5 694.8L914.9 738L913.7 738.1Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M923.2 737.2L918.9 694.1L920.1 693.9L924.5 737L923.2 737.2Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M932.7 735.8L926.5 693L927.7 692.8L933.9 735.6L932.7 735.8Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M942 734L934 691.6L935.2 691.3L943.2 733.7L942 734Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M951.4 731.6L942.2 689.6L943.4 689.2L952.6 731.3L951.4 731.6Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M961.1 728.6L949.7 687.1L950.9 686.7L962.3 728.2L961.1 728.6Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M970.8 725.3L957.8 684.4L959 683.9L972 724.8L970.8 725.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M981.8 720.5L967.5 680.1L968.7 679.6L983 720L981.8 720.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M992.9 715.1L975.7 676.2L976.8 675.6L994 714.5L992.9 715.1Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M1002.8 709.5L983.5 671.7L984.5 671.1L1003.9 708.8L1002.8 709.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
                                {/*          d="M1112 740.9C1093.8 760 1068.1 771.9 1039.6 771.9H857.2V687.2C912.3 685.3 962.1 662.5 999.4 626.4L1112 740.9Z"*/}
                                {/*          className="f-hover" onClick={() => feruzjalilov("B2")} fill-opacity="0.3"/>*/}
                                {/*    <path*/}
                                {/*        d="M49.9 59L159.5 170.5C117.7 211.6 90.5 270.2 87.6 335.8C71.5 335.8 44.6 335.8 22.3 335.8V128C22.3 101.2 32.8 76.9 49.9 59Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M65 209.8C73.4 186 85.3 164 100.1 144.5L128.5 171.9C116.5 187.7 106.9 205.6 100.1 224.9C91.7 249.1 87.8 275 88.7 301L51 302.6C49.8 271 54.6 239.4 65 209.8Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M65.7 209.2C74 185.7 85.7 163.9 100.3 144.7L118.5 162.2C105.7 179.1 95.5 198.3 88.3 218.8C79.1 244.9 74.8 272.9 75.8 300.9L51.6 301.9C50.4 270.3 55.2 238.7 65.7 209.2Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M69.2 208.5C77.2 186 88.4 165.2 102.3 146.6L109.7 153.7C96.6 171.4 85.9 191.2 78.3 212.5C68.4 240.2 63.6 269.8 64.4 299.5L54.6 299.8C53.8 268.6 58.8 237.6 69.2 208.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M92.1 155.1L123.3 181.5L122.6 182.6L91.3 156.2L92.1 155.1Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M85.3 165.9L117.5 190.9L116.8 192L84.6 167L85.3 165.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M78.4 178.2L112.1 200.7L111.5 201.9L77.8 179.4L78.4 178.2Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M71.7 192.4L106.4 212.9L105.8 214.1L71.1 193.6L71.7 192.4Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M65.7 207.3L101.9 224.4L101.4 225.7L65.2 208.5L65.7 207.3Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M60.9 222.2L98 236.6L97.6 237.9L60.4 223.5L60.9 222.2Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M56.4 239.2L94.7 249.9L94.4 251.2L56.1 240.5L56.4 239.2Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M53.7 254.5L92.5 261.6L92.3 263L53.5 255.9L53.7 254.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M51.8 270.2L91 274.3L90.9 275.7L51.7 271.5L51.8 270.2Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M50.9 285.1L90.2 286.1L90.1 287.4L50.9 286.5V285.1Z" fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M89.7741 300.407L50.8741 300.601L50.9279 311.401L89.8279 311.207L89.7741 300.407Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M95.8 319.1H22.3V128C22.3 101.2 32.8 76.9 49.9 59L162.5 173.6C124.3 210.7 99.3 262 95.8 319.1Z"*/}
                                {/*        className="f-hover" onClick={() => feruzjalilov("A7")} fill-opacity="0.3"/>*/}
                                {/*    <path*/}
                                {/*        d="M87.4 341.6H22.3V335.6C44.6 335.6 71.5 335.6 87.6 335.6C87.5 337.6 87.4 339.6 87.4 341.6Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path d="M87.3 331.4H22.3V464.2H87.3V331.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M87.4 331.4H22.4V464.2H87.4V331.4Z" fill="#D9D9D9" className="f-hover"*/}
                                {/*          onClick={() => feruzjalilov("C1")} fill-opacity="0.3"/>*/}
                                {/*    <path d="M61.3 451.4H52.6V339.6H61.3V451.4Z" fill="#FFD600"/>*/}
                                {/*    <path d="M73.1 358H65V426.9H73.1V358Z" fill="#FFD600"/>*/}
                                {/*    <path d="M49 339.6H40.3V451.4H49V339.6Z" fill="#FFD600"/>*/}
                                {/*    <path d="M73.1 356.6H40.3V358H73.1V356.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 382.5H40.3V383.9H73.1V382.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 407.8H40.3V409.2H73.1V407.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 433H40.3V434.4H73.1V433Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M61.4 339.6H40.3V341H61.4V339.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 365.5H40.3V366.9H73.1V365.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 390.7H40.3V392.1H73.1V390.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 415.9H40.3V417.3H73.1V415.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 441.9H40.3V443.3H73.1V441.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M61.4 348.4H40.3V349.8H61.4V348.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 373.7H40.3V375.1H73.1V373.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 398.9H40.3V400.3H73.1V398.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 424.8H40.3V426.2H73.1V424.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M61.4 450H40.3V451.4H61.4V450Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 358H65V442.6H73.1V358Z" fill="#FFD600"/>*/}
                                {/*    <path d="M49 340.3H40.3V451.4H49V340.3Z" fill="#FFD600"/>*/}
                                {/*    <path d="M73.1 356.6H40.3V358H73.1V356.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 382.5H40.3V383.9H73.1V382.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 407.8H40.3V409.2H73.1V407.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 433H40.3V434.4H73.1V433Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M61.4 339.6H40.3V341H61.4V339.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 365.5H40.3V366.9H73.1V365.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 390.7H40.3V392.1H73.1V390.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 415.9H40.3V417.3H73.1V415.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 441.9H40.3V443.3H73.1V441.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M61.4 348.4H40.3V349.8H61.4V348.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 373.7H40.3V375.1H73.1V373.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 398.9H40.3V400.3H73.1V398.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M73.1 424.8H40.3V426.2H73.1V424.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M61.4 450H40.3V451.4H61.4V450Z" fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M49.9 59C68.1 39.9 93.8 28 122.3 28H304.7V109.8C304.5 109.8 304.3 109.8 304.1 109.8C248.5 109.8 197.8 132.7 159.5 170.4L49.9 59Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M150.4 99.3C161.4 91.5 173 84.8 185.1 79.3C211.3 67.5 239.5 61.6 267.8 62.1L267.7 72.8C240.7 72.4 213.8 78 188.8 89.2C177.1 94.5 166 100.9 155.5 108.4L150.4 99.3Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M149.3 97.5C159.9 90.2 171 83.9 182.6 78.8C209.3 67 237.9 61.3 266.7 62.2L265.7 103.8C242.1 103.1 218.6 107.7 196.7 117.4C187.1 121.7 177.8 126.9 169.1 132.9L149.3 97.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M149.2 97.3C160 89.8 171.4 83.4 183.2 78.1C209.9 66.3 238.5 60.6 267.3 61.5L266.6 88.1C241.1 87.3 215.8 92.3 192.2 102.8C181.6 107.5 171.4 113.3 161.8 120L149.2 97.3Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M149.3 97.5C159.9 90.2 171 83.9 182.6 78.8C209.3 67 237.9 61.3 266.7 62.2L266.4 75.6C239.3 74.8 212.3 80.1 187.1 91.3C176.1 96.2 165.6 102.1 155.6 109L149.3 97.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M278.1 61.4H265.7V105H278.1V61.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M257.6 61.4H256.4V105H257.6V61.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M248.3 61.8L250.7 104.9L249.4 105L247 61.9L248.3 61.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M238.7 62.7L243.1 105.8L241.8 105.9L237.5 62.8L238.7 62.7Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M229.3 64L235.4 106.8L234.2 107L228.1 64.3L229.3 64Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M220 65.9L228 108.2L226.8 108.5L218.7 66.1L220 65.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M210.5 68.2L219.8 110.3L218.6 110.6L209.3 68.5L210.5 68.2Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M200.8 71.3L212.2 112.8L211 113.1L199.7 71.7L200.8 71.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M191.1 74.6L204.1 115.5L203 115.9L190 75L191.1 74.6Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M180.1 79.3L194.4 119.7L193.3 120.2L179 79.8L180.1 79.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M169 84.7L186.3 123.7L185.2 124.3L167.9 85.3L169 84.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M159.1 90.4L178.5 128.1L177.4 128.8L158.1 91.1L159.1 90.4Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
                                {/*          d="M49.9 59C68.1 39.9 93.8 28 122.3 28H304.7V112.7C249.6 114.6 199.8 137.4 162.5 173.5L49.9 59Z"*/}
                                {/*          className="f-hover" onClick={() => feruzjalilov("A6")} fill-opacity="0.3"/>*/}
                                {/*    <path*/}
                                {/*        d="M49.9 740.9L159.5 629.4C117.7 588.3 90.5 529.7 87.6 464.1C71.5 464.1 44.6 464.1 22.3 464.1V671.8C22.3 698.6 32.8 722.9 49.9 740.9Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M65 590C73.4 613.8 85.3 635.8 100.1 655.3L128.5 627.9C116.5 612.1 106.9 594.2 100.1 574.9C91.6 550.7 87.6 524.7 88.5 498.8L50.8 497.2C49.8 528.9 54.6 560.5 65 590Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M65.7 590.7C74 614.2 85.7 636 100.3 655.2L118.5 637.7C105.7 620.8 95.5 601.6 88.3 581.1C79 554.9 74.8 527 75.8 498.9L51.6 497.9C50.4 529.6 55.2 561.1 65.7 590.7Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M69.2 591.3C77.2 613.8 88.4 634.6 102.3 653.2L109.7 646.1C96.6 628.4 85.9 608.6 78.3 587.3C68.4 559.6 63.6 530 64.4 500.3L54.6 500C53.8 531.2 58.8 562.3 69.2 591.3Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M91.3 643.6L122.6 617.3L123.3 618.3L92.1 644.7L91.3 643.6Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M84.6 632.9L116.8 607.8L117.5 609L85.3 634L84.6 632.9Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M77.8 620.5L111.5 598L112.1 599.2L78.4 621.7L77.8 620.5Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M71.1 606.3L105.8 585.8L106.4 587L71.7 607.5L71.1 606.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M65.2 591.3L101.4 574.2L101.9 575.4L65.7 592.6L65.2 591.3Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M60.4 576.4L97.6 561.9L98 563.2L60.9 577.7L60.4 576.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M56.1 559.3L94.4 548.6L94.7 550L56.4 560.6L56.1 559.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M53.5 544L92.3 536.9L92.5 538.2L53.7 545.3L53.5 544Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M51.7 528.3L90.9 524.2L91 525.5L51.8 529.7L51.7 528.3Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M50.9 513.4L90.1 512.4L90.2 513.8L50.9 514.7V513.4Z" fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M50.9136 488.502L50.8598 499.302L89.7598 499.496L89.8136 488.696L50.9136 488.502Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M95.8 480.7H22.3V671.9C22.3 698.7 32.8 723 49.9 740.9L162.5 626.3C124.3 589.1 99.3 537.9 95.8 480.7Z"*/}
                                {/*        className="f-hover" onClick={() => feruzjalilov("B7")} fill-opacity="0.3"/>*/}
                                {/*    <path*/}
                                {/*        d="M49.9 740.9C68.1 760 93.8 771.9 122.3 771.9H304.7V690.1C304.5 690.1 304.3 690.1 304.1 690.1C248.5 690.1 197.8 667.2 159.5 629.5L49.9 740.9Z"*/}
                                {/*        fill="#AFAFAF"/>*/}
                                {/*    <path*/}
                                {/*        d="M150.4 700.5C161.4 708.3 173 715 185.1 720.5C211.3 732.3 239.5 738.2 267.8 737.7L267.7 727C240.7 727.4 213.8 721.8 188.8 710.6C177.1 705.3 166 698.9 155.5 691.4L150.4 700.5Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M149.3 702.4C159.9 709.7 171 716 182.6 721.1C209.3 732.9 237.9 738.6 266.7 737.7L265.7 696.1C242.1 696.8 218.6 692.2 196.7 682.5C187.1 678.2 177.8 673 169.1 667L149.3 702.4Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path*/}
                                {/*        d="M149.2 702.6C160 710.1 171.4 716.5 183.2 721.8C209.9 733.6 238.5 739.3 267.3 738.4L266.6 711.8C241.1 712.6 215.8 707.6 192.2 697.1C181.6 692.4 171.4 686.6 161.8 679.9L149.2 702.6Z"*/}
                                {/*        fill="#FFD600" fill-opacity="0.8"/>*/}
                                {/*    <path*/}
                                {/*        d="M149.3 702.4C159.9 709.7 171 716 182.6 721.1C209.3 732.9 237.9 738.6 266.7 737.7L266.4 724.3C239.3 725.1 212.3 719.8 187.1 708.6C176.1 703.7 165.6 697.8 155.6 690.9L149.3 702.4Z"*/}
                                {/*        fill="#FFD600"/>*/}
                                {/*    <path d="M278.1 694.8H265.7V738.4H278.1V694.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M257.6 694.8H256.4V738.4H257.6V694.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M247 738L249.4 694.8L250.7 694.9L248.3 738.1L247 738Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M237.5 737L241.8 693.9L243.1 694.1L238.7 737.2L237.5 737Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M228.1 735.6L234.2 692.8L235.4 693L229.3 735.8L228.1 735.6Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M218.7 733.7L226.8 691.3L228 691.6L220 734L218.7 733.7Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M209.3 731.3L218.6 689.2L219.8 689.6L210.5 731.6L209.3 731.3Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M199.7 728.2L211 686.7L212.2 687.1L200.8 728.6L199.7 728.2Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M190 724.8L203 683.9L204.1 684.4L191.1 725.3L190 724.8Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M179 720L193.3 679.6L194.4 680.1L180.1 720.5L179 720Z" fill="#AFAFAF"/>*/}
                                {/*    <path d="M167.9 714.5L185.2 675.6L186.3 676.2L169 715.1L167.9 714.5Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path d="M158.1 708.8L177.4 671.1L178.5 671.7L159.1 709.5L158.1 708.8Z"*/}
                                {/*          fill="#AFAFAF"/>*/}
                                {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
                                {/*          d="M49.9 740.9C68.1 760 93.8 771.9 122.3 771.9H304.7V687.2C249.6 685.3 199.8 662.5 162.5 626.4L49.9 740.9Z"*/}
                                {/*          className="f-hover" onClick={() => feruzjalilov("B6")} fill-opacity="0.3"/>*/}
                                {/*</svg>*/}

                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="800" viewBox="0 0 728 517" fill="none">
                                    <g clip-path="url(#clip0_7_1450)">
                                        <rect width="1360" height="517" fill="transparent"/>
                                        <rect width="1360" height="517" fill="transparent"/>
                                        <g filter="url(#filter0_d_7_1450)">
                                            <rect x="29" y="31" width="668" height="457" rx="190" fill="#D5D6D5"/>
                                        </g>
                                        <path d="M124.5 239C124.5 178.525 173.525 129.5 234 129.5H489C552.789 129.5 604.5 181.211 604.5 245V274C604.5 338.341 552.341 390.5 488 390.5H240C176.211 390.5 124.5 338.789 124.5 275V239Z" stroke="white"/>
                                        <path d="M129.5 244C129.5 183.525 178.525 134.5 239 134.5H486C547.027 134.5 596.5 183.973 596.5 245V274C596.5 335.027 547.027 384.5 486 384.5H244C180.763 384.5 129.5 333.237 129.5 270V244Z" stroke="white"/>
                                        <path d="M136.5 248C136.5 188.629 184.629 140.5 244 140.5H485C543.266 140.5 590.5 187.734 590.5 246V276C590.5 332.057 545.057 377.5 489 377.5H244C184.629 377.5 136.5 329.371 136.5 270V248Z" stroke="white"/>
                                        <path d="M143.5 245C143.5 190.048 188.048 145.5 243 145.5H484C538.952 145.5 583.5 190.048 583.5 245V276C583.5 328.743 540.743 371.5 488 371.5H243C188.048 371.5 143.5 326.952 143.5 272V245Z" stroke="white"/>
                                        <path d="M149.5 246C149.5 193.809 191.809 151.5 244 151.5H483C534.639 151.5 576.5 193.361 576.5 245V273C576.5 324.639 534.639 366.5 483 366.5H243C191.361 366.5 149.5 324.639 149.5 273V246Z" stroke="white"/>
                                        <path d="M155.5 250C155.5 197.809 197.809 155.5 250 155.5H477C528.639 155.5 570.5 197.361 570.5 249V270C570.5 320.534 529.534 361.5 479 361.5H249C197.361 361.5 155.5 319.639 155.5 268V250Z" stroke="white"/>
                                        <path d="M162.5 251C162.5 198.809 204.809 156.5 257 156.5H470C521.639 156.5 563.5 198.361 563.5 250V266C563.5 319.295 520.295 362.5 467 362.5H256C204.361 362.5 162.5 320.639 162.5 269V251Z" stroke="white"/>
                                        <path d="M169.5 256C169.5 203.809 211.809 161.5 264 161.5H463C514.639 161.5 556.5 203.361 556.5 255V265C556.5 316.639 514.639 358.5 463 358.5H263C211.361 358.5 169.5 316.639 169.5 265V256Z" stroke="white"/>
                                        <path d="M176.5 256C176.5 203.809 218.809 161.5 271 161.5H455C506.639 161.5 548.5 203.361 548.5 255V265C548.5 316.639 506.639 358.5 455 358.5H270C218.361 358.5 176.5 316.639 176.5 265V256Z" stroke="white"/>
                                        <rect x="321" y="88" width="98" height="33" fill="#0A075F"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("A4")}/>
                                        <rect x="257" y="88" width="52" height="33" fill="#1B75BA"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("A5")}/>
                                        <rect x="431" y="88" width="72" height="33" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("A3")}/>
                                        <rect x="257" y="397" width="52" height="33" fill="#1B75BA"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("B5")}/>
                                        <rect x="431" y="397" width="72" height="33" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("B3")}/>
                                        <rect x="321" y="397" width="98" height="33" fill="#0A075F"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("B4")}/>
                                        <rect x="613" y="225" width="30" height="67" fill="#0A075F"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("D1")}/>
                                        <rect width="30" height="67" transform="matrix(-1 0 0 1 124 226)" fill="#0A075F"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("C1")}/>
                                        <path d="M642.5 305.5H613C611 331.5 596.167 354.667 589 363L615.5 389.5C639.5 364.3 643.5 323 642.5 305.5Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("B1")}/>
                                        <path d="M94.1385 307H124C126.013 333 138.785 349.667 146 358C140.631 363.333 128.457 379.6 120 388C95.8378 362.8 93.1318 324.5 94.1385 307Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("B7")}/>
                                        <path d="M642.502 212H613.001C611.001 186 596.167 162.833 589 154.5L615.501 128C639.502 153.2 643.502 194.5 642.502 212Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("A1")}/>
                                        <path d="M94 212.5H124C126.013 186.5 139.785 166.333 147 158C141.631 152.667 128.457 138.9 120 130.5C95.8378 155.7 92.9932 195 94 212.5Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("A7")}
                                        />
                                        <path d="M593 108.5C571.8 92.9 549.5 89.5 529 88.5V123C542.5 122 560.5 133 568 138L593 108.5Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("A2")}/>
                                        <path d="M224.5 88.5C198 85.5 163 91.5 140.5 110C146.039 115.539 162.277 132.277 168.5 138.5C187 123 215.5 120 224.5 120.5V88.5Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("A6")}/>
                                        <path d="M224 429.5C198 431 167 427.5 141.5 408C147.017 402.503 160.802 383.675 167 377.5C185.365 392.945 215.051 397.481 224 397L224 429.5Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("B6")}
                                        />
                                        <path d="M593 409.5C571.8 425.1 549.5 428.5 529 429.5V395C542.5 396 560.5 385 568 380L593 409.5Z" fill="#246BB5"
                                              className="f-hover"
                                              onClick={() => feruzjalilov("B2")}/>
                                        <g opacity="0.5" style={{position: "relative", zIndex: "-1"}}>
                                            <path d="M117.5 221C117.5 163.286 164.286 116.5 222 116.5H516C572.057 116.5 617.5 161.943 617.5 218V301C617.5 357.057 572.057 402.5 516 402.5H224C165.182 402.5 117.5 354.818 117.5 296V221Z" stroke="white"/>
                                            <path d="M110.5 210C110.5 154.495 155.495 109.5 211 109.5H523C579.057 109.5 624.5 154.943 624.5 211V307C624.5 363.057 579.057 408.5 523 408.5H217C158.182 408.5 110.5 360.818 110.5 302V210Z" stroke="white"/>
                                            <path d="M104.5 203C104.5 147.495 149.495 102.5 205 102.5H530C586.057 102.5 631.5 147.943 631.5 204V315C631.5 371.057 586.057 416.5 530 416.5H211C152.182 416.5 104.5 368.818 104.5 310V203Z" stroke="white"/>
                                            <path d="M98.5 204C98.5 143.525 147.525 94.5 208 94.5H530C589.371 94.5 637.5 142.629 637.5 202V317C637.5 375.818 589.818 423.5 531 423.5H210C148.42 423.5 98.5 373.58 98.5 312V204Z" stroke="white"/>
                                        </g>
                                        <rect x="67" y="60" width="602" height="399" rx="130" stroke="white" stroke-width="6"/>
                                        <rect x="180" y="155" width="362" height="207" rx="53" fill="url(#paint0_linear_7_1450)"/>
                                        <rect x="589" y="240" width="17" height="34" fill="url(#paint1_linear_7_1450)"/>
                                        <rect x="227" y="121" width="33" height="26" transform="rotate(-90 227 121)" fill="url(#paint2_linear_7_1450)"/>
                                        <rect x="253" y="397" width="33" height="26" transform="rotate(90 253 397)" fill="url(#paint3_linear_7_1450)"/>
                                        <path d="M622.42 263H617.264V248.455H622.463C623.926 248.455 625.186 248.746 626.241 249.328C627.297 249.906 628.109 250.737 628.678 251.821C629.25 252.905 629.537 254.203 629.537 255.713C629.537 257.228 629.25 258.53 628.678 259.619C628.109 260.708 627.293 261.544 626.227 262.126C625.167 262.709 623.898 263 622.42 263ZM620.339 260.365H622.293C623.202 260.365 623.966 260.204 624.587 259.882C625.212 259.555 625.68 259.051 625.993 258.369C626.31 257.683 626.469 256.797 626.469 255.713C626.469 254.638 626.31 253.76 625.993 253.078C625.68 252.396 625.214 251.894 624.594 251.572C623.973 251.25 623.209 251.089 622.3 251.089H620.339V260.365ZM638.058 248.455V263H634.983V251.374H634.897L631.566 253.462V250.734L635.167 248.455H638.058Z" fill="white"/>
                                        <path d="M111.098 258.547H107.987C107.93 258.144 107.814 257.787 107.639 257.474C107.464 257.157 107.239 256.887 106.964 256.665C106.69 256.442 106.373 256.272 106.013 256.153C105.658 256.035 105.272 255.976 104.855 255.976C104.102 255.976 103.446 256.163 102.888 256.537C102.329 256.906 101.896 257.446 101.588 258.156C101.28 258.862 101.126 259.719 101.126 260.727C101.126 261.764 101.28 262.635 101.588 263.341C101.901 264.046 102.336 264.579 102.895 264.939C103.454 265.299 104.1 265.479 104.834 265.479C105.246 265.479 105.627 265.424 105.977 265.315C106.332 265.206 106.647 265.048 106.922 264.839C107.196 264.626 107.424 264.368 107.604 264.065C107.788 263.762 107.916 263.417 107.987 263.028L111.098 263.043C111.018 263.71 110.816 264.354 110.494 264.974C110.177 265.59 109.749 266.142 109.209 266.629C108.674 267.112 108.035 267.496 107.291 267.78C106.553 268.059 105.717 268.199 104.784 268.199C103.487 268.199 102.327 267.905 101.304 267.318C100.286 266.731 99.4811 265.881 98.8892 264.768C98.3021 263.656 98.0085 262.309 98.0085 260.727C98.0085 259.141 98.3068 257.792 98.9034 256.679C99.5 255.566 100.31 254.719 101.332 254.136C102.355 253.549 103.506 253.256 104.784 253.256C105.627 253.256 106.408 253.374 107.128 253.611C107.852 253.848 108.494 254.193 109.053 254.648C109.611 255.098 110.066 255.649 110.416 256.303C110.771 256.956 110.999 257.704 111.098 258.547ZM119.546 253.455V268H116.471V256.374H116.386L113.055 258.462V255.734L116.656 253.455H119.546Z" fill="white"/>
                                        <path d="M105.771 183H102.476L107.497 168.455H111.46L116.474 183H113.179L109.536 171.778H109.422L105.771 183ZM105.565 177.283H113.349V179.683H105.565V177.283ZM118.715 183L124.745 171.068V170.969H117.721V168.455H127.927V171.004L121.89 183H118.715Z" fill="white"/>
                                        <path d="M176.771 117H173.476L178.497 102.455H182.46L187.474 117H184.179L180.536 105.778H180.422L176.771 117ZM176.565 111.283H184.349V113.683H176.565V111.283ZM194.722 117.199C193.974 117.194 193.252 117.069 192.556 116.822C191.865 116.576 191.245 116.176 190.695 115.622C190.146 115.068 189.71 114.334 189.388 113.42C189.071 112.507 188.913 111.384 188.913 110.054C188.917 108.832 189.057 107.741 189.332 106.78C189.611 105.814 190.009 104.995 190.525 104.322C191.046 103.65 191.668 103.139 192.393 102.788C193.117 102.433 193.929 102.256 194.829 102.256C195.799 102.256 196.656 102.445 197.4 102.824C198.143 103.198 198.74 103.707 199.19 104.351C199.644 104.995 199.919 105.717 200.013 106.517H196.981C196.862 106.01 196.614 105.613 196.235 105.324C195.856 105.035 195.388 104.891 194.829 104.891C193.882 104.891 193.162 105.303 192.67 106.126C192.182 106.95 191.933 108.07 191.924 109.486H192.023C192.241 109.055 192.535 108.688 192.904 108.385C193.278 108.077 193.702 107.843 194.175 107.682C194.654 107.516 195.158 107.433 195.688 107.433C196.55 107.433 197.317 107.637 197.989 108.044C198.662 108.446 199.192 109 199.58 109.706C199.969 110.411 200.163 111.219 200.163 112.128C200.163 113.113 199.933 113.989 199.474 114.756C199.019 115.523 198.382 116.124 197.563 116.56C196.749 116.991 195.802 117.204 194.722 117.199ZM194.708 114.784C195.182 114.784 195.605 114.67 195.979 114.443C196.353 114.216 196.647 113.908 196.86 113.52C197.073 113.132 197.18 112.696 197.18 112.213C197.18 111.73 197.073 111.297 196.86 110.913C196.652 110.53 196.363 110.224 195.994 109.997C195.624 109.77 195.203 109.656 194.729 109.656C194.374 109.656 194.045 109.723 193.742 109.855C193.444 109.988 193.181 110.172 192.954 110.409C192.731 110.646 192.556 110.92 192.428 111.233C192.3 111.541 192.237 111.87 192.237 112.22C192.237 112.689 192.343 113.117 192.556 113.506C192.774 113.894 193.067 114.204 193.437 114.436C193.811 114.668 194.235 114.784 194.708 114.784Z" fill="white"/>
                                        <path d="M272.771 111H269.476L274.497 96.4545H278.46L283.474 111H280.179L276.536 99.7784H276.422L272.771 111ZM272.565 105.283H280.349V107.683H272.565V105.283ZM290.452 111.199C289.449 111.199 288.554 111.014 287.768 110.645C286.987 110.276 286.366 109.767 285.907 109.118C285.448 108.469 285.209 107.726 285.19 106.888H288.173C288.206 107.451 288.442 107.908 288.883 108.259C289.323 108.609 289.846 108.784 290.452 108.784C290.935 108.784 291.362 108.678 291.731 108.464C292.105 108.247 292.396 107.946 292.604 107.562C292.817 107.174 292.924 106.729 292.924 106.227C292.924 105.716 292.815 105.266 292.597 104.878C292.384 104.49 292.088 104.187 291.71 103.969C291.331 103.751 290.897 103.64 290.41 103.635C289.984 103.635 289.569 103.723 289.167 103.898C288.769 104.073 288.459 104.312 288.237 104.615L285.502 104.125L286.191 96.4545H295.083V98.9688H288.727L288.35 102.612H288.435C288.691 102.252 289.077 101.954 289.593 101.717C290.109 101.481 290.687 101.362 291.326 101.362C292.202 101.362 292.983 101.568 293.67 101.98C294.356 102.392 294.898 102.958 295.296 103.678C295.694 104.393 295.89 105.216 295.886 106.149C295.89 107.129 295.663 108 295.204 108.763C294.749 109.52 294.112 110.117 293.293 110.553C292.479 110.983 291.532 111.199 290.452 111.199Z" fill="white"/>
                                        <path d="M360.771 111H357.476L362.497 96.4545H366.46L371.474 111H368.179L364.536 99.7784H364.422L360.771 111ZM360.565 105.283H368.349V107.683H360.565V105.283ZM372.92 108.443V106.021L378.992 96.4545H381.08V99.8068H379.844L376.016 105.865V105.979H384.646V108.443H372.92ZM379.901 111V107.705L379.958 106.632V96.4545H382.842V111H379.901Z" fill="white"/>
                                        <path d="M457.771 111H454.476L459.497 96.4545H463.46L468.474 111H465.179L461.536 99.7784H461.422L457.771 111ZM457.565 105.283H465.349V107.683H457.565V105.283ZM475.516 111.199C474.456 111.199 473.511 111.017 472.683 110.652C471.859 110.283 471.208 109.776 470.729 109.132C470.256 108.483 470.012 107.735 469.998 106.888H473.094C473.113 107.243 473.229 107.555 473.442 107.825C473.66 108.09 473.949 108.296 474.309 108.443C474.669 108.59 475.074 108.663 475.523 108.663C475.992 108.663 476.406 108.58 476.766 108.415C477.126 108.249 477.408 108.019 477.612 107.726C477.815 107.432 477.917 107.094 477.917 106.71C477.917 106.322 477.808 105.979 477.59 105.68C477.377 105.377 477.069 105.141 476.667 104.97C476.269 104.8 475.796 104.714 475.246 104.714H473.89V102.456H475.246C475.71 102.456 476.12 102.375 476.475 102.214C476.835 102.054 477.114 101.831 477.313 101.547C477.512 101.258 477.612 100.922 477.612 100.538C477.612 100.174 477.524 99.8542 477.349 99.5795C477.178 99.3002 476.937 99.0824 476.624 98.9261C476.317 98.7699 475.957 98.6918 475.545 98.6918C475.128 98.6918 474.747 98.7675 474.401 98.919C474.056 99.0658 473.779 99.2765 473.57 99.5511C473.362 99.8258 473.251 100.148 473.237 100.517H470.289C470.303 99.679 470.542 98.9403 471.006 98.3011C471.47 97.6619 472.095 97.1624 472.881 96.8026C473.672 96.438 474.565 96.2557 475.559 96.2557C476.563 96.2557 477.441 96.438 478.194 96.8026C478.947 97.1671 479.531 97.6596 479.948 98.2798C480.37 98.8954 480.578 99.5866 480.573 100.354C480.578 101.168 480.325 101.848 479.813 102.392C479.307 102.937 478.646 103.282 477.832 103.429V103.543C478.902 103.68 479.716 104.052 480.275 104.658C480.838 105.259 481.118 106.012 481.113 106.916C481.118 107.745 480.879 108.481 480.396 109.125C479.917 109.769 479.257 110.276 478.414 110.645C477.571 111.014 476.605 111.199 475.516 111.199Z" fill="white"/>
                                        <path d="M545.771 117H542.476L547.497 102.455H551.46L556.474 117H553.179L549.536 105.778H549.422L545.771 117ZM545.565 111.283H553.349V113.683H545.565V111.283ZM558.14 117V114.784L563.317 109.99C563.758 109.564 564.127 109.18 564.425 108.839C564.728 108.499 564.958 108.165 565.114 107.838C565.271 107.507 565.349 107.149 565.349 106.766C565.349 106.339 565.252 105.973 565.058 105.665C564.863 105.352 564.598 105.113 564.262 104.947C563.926 104.777 563.545 104.692 563.119 104.692C562.674 104.692 562.285 104.782 561.954 104.962C561.622 105.142 561.367 105.4 561.187 105.736C561.007 106.072 560.917 106.472 560.917 106.936H557.998C557.998 105.984 558.213 105.158 558.644 104.457C559.075 103.757 559.679 103.214 560.455 102.831C561.232 102.447 562.127 102.256 563.14 102.256C564.182 102.256 565.088 102.44 565.86 102.81C566.637 103.174 567.24 103.681 567.671 104.33C568.102 104.978 568.317 105.722 568.317 106.56C568.317 107.109 568.209 107.651 567.991 108.186C567.778 108.721 567.397 109.315 566.847 109.969C566.298 110.617 565.524 111.396 564.525 112.305L562.401 114.386V114.486H568.509V117H558.14Z" fill="white"/>
                                        <path d="M614.771 183H611.476L616.497 168.455H620.46L625.474 183H622.179L618.536 171.778H618.422L614.771 183ZM614.565 177.283H622.349V179.683H614.565V177.283ZM632.784 168.455V183H629.709V171.374H629.624L626.293 173.462V170.734L629.894 168.455H632.784Z" fill="white"/>
                                        <path d="M610.264 348V333.455H616.088C617.158 333.455 618.051 333.613 618.766 333.93C619.481 334.248 620.018 334.688 620.378 335.251C620.738 335.81 620.918 336.454 620.918 337.183C620.918 337.751 620.804 338.251 620.577 338.682C620.349 339.108 620.037 339.458 619.639 339.733C619.246 340.003 618.796 340.195 618.29 340.308V340.45C618.844 340.474 619.362 340.63 619.845 340.919C620.333 341.208 620.728 341.613 621.031 342.134C621.334 342.65 621.486 343.265 621.486 343.98C621.486 344.752 621.294 345.441 620.911 346.047C620.532 346.648 619.971 347.124 619.227 347.474C618.484 347.825 617.568 348 616.479 348H610.264ZM613.339 345.486H615.847C616.704 345.486 617.329 345.322 617.722 344.996C618.115 344.664 618.311 344.224 618.311 343.675C618.311 343.272 618.214 342.917 618.02 342.609C617.826 342.302 617.549 342.06 617.189 341.885C616.834 341.71 616.41 341.622 615.918 341.622H613.339V345.486ZM613.339 339.541H615.619C616.041 339.541 616.415 339.468 616.741 339.321C617.073 339.17 617.333 338.956 617.523 338.682C617.717 338.407 617.814 338.078 617.814 337.695C617.814 337.169 617.627 336.745 617.253 336.423C616.884 336.101 616.358 335.94 615.676 335.94H613.339V339.541ZM629.73 333.455V348H626.654V336.374H626.569L623.238 338.462V335.734L626.839 333.455H629.73Z" fill="white"/>
                                        <path d="M546.264 414V399.455H552.088C553.158 399.455 554.051 399.613 554.766 399.93C555.481 400.248 556.018 400.688 556.378 401.251C556.738 401.81 556.918 402.454 556.918 403.183C556.918 403.751 556.804 404.251 556.577 404.682C556.349 405.108 556.037 405.458 555.639 405.733C555.246 406.003 554.796 406.195 554.29 406.308V406.45C554.844 406.474 555.362 406.63 555.845 406.919C556.333 407.208 556.728 407.613 557.031 408.134C557.334 408.65 557.486 409.265 557.486 409.98C557.486 410.752 557.294 411.441 556.911 412.047C556.532 412.648 555.971 413.124 555.227 413.474C554.484 413.825 553.568 414 552.479 414H546.264ZM549.339 411.486H551.847C552.704 411.486 553.329 411.322 553.722 410.996C554.115 410.664 554.311 410.224 554.311 409.675C554.311 409.272 554.214 408.917 554.02 408.609C553.826 408.302 553.549 408.06 553.189 407.885C552.834 407.71 552.41 407.622 551.918 407.622H549.339V411.486ZM549.339 405.541H551.619C552.041 405.541 552.415 405.468 552.741 405.321C553.073 405.17 553.333 404.956 553.523 404.682C553.717 404.407 553.814 404.078 553.814 403.695C553.814 403.169 553.627 402.745 553.253 402.423C552.884 402.101 552.358 401.94 551.676 401.94H549.339V405.541ZM559.402 414V411.784L564.579 406.99C565.02 406.564 565.389 406.18 565.687 405.839C565.99 405.499 566.22 405.165 566.376 404.838C566.532 404.507 566.61 404.149 566.61 403.766C566.61 403.339 566.513 402.973 566.319 402.665C566.125 402.352 565.86 402.113 565.524 401.947C565.188 401.777 564.806 401.692 564.38 401.692C563.935 401.692 563.547 401.782 563.216 401.962C562.884 402.142 562.628 402.4 562.449 402.736C562.269 403.072 562.179 403.472 562.179 403.936H559.26C559.26 402.984 559.475 402.158 559.906 401.457C560.337 400.757 560.94 400.214 561.717 399.831C562.493 399.447 563.388 399.256 564.402 399.256C565.443 399.256 566.35 399.44 567.122 399.81C567.898 400.174 568.502 400.681 568.933 401.33C569.364 401.978 569.579 402.722 569.579 403.56C569.579 404.109 569.47 404.651 569.252 405.186C569.039 405.721 568.658 406.315 568.109 406.969C567.56 407.617 566.786 408.396 565.787 409.305L563.663 411.386V411.486H569.771V414H559.402Z" fill="white"/>
                                        <path d="M454.264 420V405.455H460.088C461.158 405.455 462.051 405.613 462.766 405.93C463.481 406.248 464.018 406.688 464.378 407.251C464.738 407.81 464.918 408.454 464.918 409.183C464.918 409.751 464.804 410.251 464.577 410.682C464.349 411.108 464.037 411.458 463.639 411.733C463.246 412.003 462.796 412.195 462.29 412.308V412.45C462.844 412.474 463.362 412.63 463.845 412.919C464.333 413.208 464.728 413.613 465.031 414.134C465.334 414.65 465.486 415.265 465.486 415.98C465.486 416.752 465.294 417.441 464.911 418.047C464.532 418.648 463.971 419.124 463.227 419.474C462.484 419.825 461.568 420 460.479 420H454.264ZM457.339 417.486H459.847C460.704 417.486 461.329 417.322 461.722 416.996C462.115 416.664 462.311 416.224 462.311 415.675C462.311 415.272 462.214 414.917 462.02 414.609C461.826 414.302 461.549 414.06 461.189 413.885C460.834 413.71 460.41 413.622 459.918 413.622H457.339V417.486ZM457.339 411.541H459.619C460.041 411.541 460.415 411.468 460.741 411.321C461.073 411.17 461.333 410.956 461.523 410.682C461.717 410.407 461.814 410.078 461.814 409.695C461.814 409.169 461.627 408.745 461.253 408.423C460.884 408.101 460.358 407.94 459.676 407.94H457.339V411.541ZM472.778 420.199C471.717 420.199 470.773 420.017 469.944 419.652C469.12 419.283 468.469 418.776 467.991 418.132C467.518 417.483 467.274 416.735 467.26 415.888H470.356C470.375 416.243 470.491 416.555 470.704 416.825C470.922 417.09 471.211 417.296 471.571 417.443C471.931 417.59 472.335 417.663 472.785 417.663C473.254 417.663 473.668 417.58 474.028 417.415C474.388 417.249 474.67 417.019 474.873 416.726C475.077 416.432 475.179 416.094 475.179 415.71C475.179 415.322 475.07 414.979 474.852 414.68C474.639 414.377 474.331 414.141 473.929 413.97C473.531 413.8 473.057 413.714 472.508 413.714H471.152V411.456H472.508C472.972 411.456 473.382 411.375 473.737 411.214C474.097 411.054 474.376 410.831 474.575 410.547C474.774 410.258 474.873 409.922 474.873 409.538C474.873 409.174 474.786 408.854 474.61 408.58C474.44 408.3 474.199 408.082 473.886 407.926C473.578 407.77 473.218 407.692 472.806 407.692C472.39 407.692 472.009 407.768 471.663 407.919C471.317 408.066 471.04 408.277 470.832 408.551C470.624 408.826 470.512 409.148 470.498 409.517H467.551C467.565 408.679 467.804 407.94 468.268 407.301C468.732 406.662 469.357 406.162 470.143 405.803C470.934 405.438 471.826 405.256 472.821 405.256C473.824 405.256 474.703 405.438 475.456 405.803C476.208 406.167 476.793 406.66 477.21 407.28C477.631 407.895 477.84 408.587 477.835 409.354C477.84 410.168 477.586 410.848 477.075 411.392C476.568 411.937 475.908 412.282 475.093 412.429V412.543C476.163 412.68 476.978 413.052 477.537 413.658C478.1 414.259 478.379 415.012 478.375 415.916C478.379 416.745 478.14 417.481 477.657 418.125C477.179 418.769 476.519 419.276 475.676 419.645C474.833 420.014 473.867 420.199 472.778 420.199Z" fill="white"/>
                                        <path d="M359.264 420V405.455H365.088C366.158 405.455 367.051 405.613 367.766 405.93C368.481 406.248 369.018 406.688 369.378 407.251C369.738 407.81 369.918 408.454 369.918 409.183C369.918 409.751 369.804 410.251 369.577 410.682C369.349 411.108 369.037 411.458 368.639 411.733C368.246 412.003 367.796 412.195 367.29 412.308V412.45C367.844 412.474 368.362 412.63 368.845 412.919C369.333 413.208 369.728 413.613 370.031 414.134C370.334 414.65 370.486 415.265 370.486 415.98C370.486 416.752 370.294 417.441 369.911 418.047C369.532 418.648 368.971 419.124 368.227 419.474C367.484 419.825 366.568 420 365.479 420H359.264ZM362.339 417.486H364.847C365.704 417.486 366.329 417.322 366.722 416.996C367.115 416.664 367.311 416.224 367.311 415.675C367.311 415.272 367.214 414.917 367.02 414.609C366.826 414.302 366.549 414.06 366.189 413.885C365.834 413.71 365.41 413.622 364.918 413.622H362.339V417.486ZM362.339 411.541H364.619C365.041 411.541 365.415 411.468 365.741 411.321C366.073 411.17 366.333 410.956 366.523 410.682C366.717 410.407 366.814 410.078 366.814 409.695C366.814 409.169 366.627 408.745 366.253 408.423C365.884 408.101 365.358 407.94 364.676 407.94H362.339V411.541ZM372.181 417.443V415.021L378.254 405.455H380.342V408.807H379.106L375.278 414.865V414.979H383.907V417.443H372.181ZM379.163 420V416.705L379.22 415.632V405.455H382.103V420H379.163Z" fill="white"/>
                                        <path d="M273.264 420V405.455H279.088C280.158 405.455 281.051 405.613 281.766 405.93C282.481 406.248 283.018 406.688 283.378 407.251C283.738 407.81 283.918 408.454 283.918 409.183C283.918 409.751 283.804 410.251 283.577 410.682C283.349 411.108 283.037 411.458 282.639 411.733C282.246 412.003 281.796 412.195 281.29 412.308V412.45C281.844 412.474 282.362 412.63 282.845 412.919C283.333 413.208 283.728 413.613 284.031 414.134C284.334 414.65 284.486 415.265 284.486 415.98C284.486 416.752 284.294 417.441 283.911 418.047C283.532 418.648 282.971 419.124 282.227 419.474C281.484 419.825 280.568 420 279.479 420H273.264ZM276.339 417.486H278.847C279.704 417.486 280.329 417.322 280.722 416.996C281.115 416.664 281.311 416.224 281.311 415.675C281.311 415.272 281.214 414.917 281.02 414.609C280.826 414.302 280.549 414.06 280.189 413.885C279.834 413.71 279.41 413.622 278.918 413.622H276.339V417.486ZM276.339 411.541H278.619C279.041 411.541 279.415 411.468 279.741 411.321C280.073 411.17 280.333 410.956 280.523 410.682C280.717 410.407 280.814 410.078 280.814 409.695C280.814 409.169 280.627 408.745 280.253 408.423C279.884 408.101 279.358 407.94 278.676 407.94H276.339V411.541ZM291.714 420.199C290.71 420.199 289.815 420.014 289.029 419.645C288.248 419.276 287.628 418.767 287.169 418.118C286.709 417.469 286.47 416.726 286.451 415.888H289.434C289.467 416.451 289.704 416.908 290.145 417.259C290.585 417.609 291.108 417.784 291.714 417.784C292.197 417.784 292.623 417.678 292.993 417.464C293.367 417.247 293.658 416.946 293.866 416.562C294.079 416.174 294.186 415.729 294.186 415.227C294.186 414.716 294.077 414.266 293.859 413.878C293.646 413.49 293.35 413.187 292.971 412.969C292.592 412.751 292.159 412.64 291.672 412.635C291.245 412.635 290.831 412.723 290.429 412.898C290.031 413.073 289.721 413.312 289.498 413.615L286.764 413.125L287.453 405.455H296.345V407.969H289.988L289.612 411.612H289.697C289.953 411.252 290.339 410.954 290.855 410.717C291.371 410.481 291.949 410.362 292.588 410.362C293.464 410.362 294.245 410.568 294.931 410.98C295.618 411.392 296.16 411.958 296.558 412.678C296.956 413.393 297.152 414.216 297.147 415.149C297.152 416.129 296.925 417 296.466 417.763C296.011 418.52 295.374 419.117 294.555 419.553C293.741 419.983 292.794 420.199 291.714 420.199Z" fill="white"/>
                                        <path d="M177.264 416V401.455H183.088C184.158 401.455 185.051 401.613 185.766 401.93C186.481 402.248 187.018 402.688 187.378 403.251C187.738 403.81 187.918 404.454 187.918 405.183C187.918 405.751 187.804 406.251 187.577 406.682C187.349 407.108 187.037 407.458 186.639 407.733C186.246 408.003 185.796 408.195 185.29 408.308V408.45C185.844 408.474 186.362 408.63 186.845 408.919C187.333 409.208 187.728 409.613 188.031 410.134C188.334 410.65 188.486 411.265 188.486 411.98C188.486 412.752 188.294 413.441 187.911 414.047C187.532 414.648 186.971 415.124 186.227 415.474C185.484 415.825 184.568 416 183.479 416H177.264ZM180.339 413.486H182.847C183.704 413.486 184.329 413.322 184.722 412.996C185.115 412.664 185.311 412.224 185.311 411.675C185.311 411.272 185.214 410.917 185.02 410.609C184.826 410.302 184.549 410.06 184.189 409.885C183.834 409.71 183.41 409.622 182.918 409.622H180.339V413.486ZM180.339 407.541H182.619C183.041 407.541 183.415 407.468 183.741 407.321C184.073 407.17 184.333 406.956 184.523 406.682C184.717 406.407 184.814 406.078 184.814 405.695C184.814 405.169 184.627 404.745 184.253 404.423C183.884 404.101 183.358 403.94 182.676 403.94H180.339V407.541ZM195.984 416.199C195.236 416.194 194.514 416.069 193.818 415.822C193.127 415.576 192.506 415.176 191.957 414.622C191.408 414.068 190.972 413.334 190.65 412.42C190.333 411.507 190.174 410.384 190.174 409.054C190.179 407.832 190.319 406.741 190.593 405.78C190.873 404.814 191.27 403.995 191.787 403.322C192.307 402.65 192.93 402.139 193.654 401.788C194.379 401.433 195.191 401.256 196.091 401.256C197.061 401.256 197.918 401.445 198.662 401.824C199.405 402.198 200.002 402.707 200.451 403.351C200.906 403.995 201.181 404.717 201.275 405.517H198.243C198.124 405.01 197.876 404.613 197.497 404.324C197.118 404.035 196.649 403.891 196.091 403.891C195.144 403.891 194.424 404.303 193.931 405.126C193.444 405.95 193.195 407.07 193.186 408.486H193.285C193.503 408.055 193.797 407.688 194.166 407.385C194.54 407.077 194.964 406.843 195.437 406.682C195.915 406.516 196.42 406.433 196.95 406.433C197.812 406.433 198.579 406.637 199.251 407.044C199.923 407.446 200.454 408 200.842 408.706C201.23 409.411 201.424 410.219 201.424 411.128C201.424 412.113 201.195 412.989 200.735 413.756C200.281 414.523 199.644 415.124 198.825 415.56C198.011 415.991 197.064 416.204 195.984 416.199ZM195.97 413.784C196.443 413.784 196.867 413.67 197.241 413.443C197.615 413.216 197.909 412.908 198.122 412.52C198.335 412.132 198.441 411.696 198.441 411.213C198.441 410.73 198.335 410.297 198.122 409.913C197.913 409.53 197.625 409.224 197.255 408.997C196.886 408.77 196.465 408.656 195.991 408.656C195.636 408.656 195.307 408.723 195.004 408.855C194.706 408.988 194.443 409.172 194.216 409.409C193.993 409.646 193.818 409.92 193.69 410.233C193.562 410.541 193.498 410.87 193.498 411.22C193.498 411.689 193.605 412.117 193.818 412.506C194.036 412.894 194.329 413.204 194.699 413.436C195.073 413.668 195.496 413.784 195.97 413.784Z" fill="white"/>
                                        <path d="M105.264 349V334.455H111.088C112.158 334.455 113.051 334.613 113.766 334.93C114.481 335.248 115.018 335.688 115.378 336.251C115.738 336.81 115.918 337.454 115.918 338.183C115.918 338.751 115.804 339.251 115.577 339.682C115.349 340.108 115.037 340.458 114.639 340.733C114.246 341.003 113.796 341.195 113.29 341.308V341.45C113.844 341.474 114.362 341.63 114.845 341.919C115.333 342.208 115.728 342.613 116.031 343.134C116.334 343.65 116.486 344.265 116.486 344.98C116.486 345.752 116.294 346.441 115.911 347.047C115.532 347.648 114.971 348.124 114.227 348.474C113.484 348.825 112.568 349 111.479 349H105.264ZM108.339 346.486H110.847C111.704 346.486 112.329 346.322 112.722 345.996C113.115 345.664 113.311 345.224 113.311 344.675C113.311 344.272 113.214 343.917 113.02 343.609C112.826 343.302 112.549 343.06 112.189 342.885C111.834 342.71 111.41 342.622 110.918 342.622H108.339V346.486ZM108.339 340.541H110.619C111.041 340.541 111.415 340.468 111.741 340.321C112.073 340.17 112.333 339.956 112.523 339.682C112.717 339.407 112.814 339.078 112.814 338.695C112.814 338.169 112.627 337.745 112.253 337.423C111.884 337.101 111.358 336.94 110.676 336.94H108.339V340.541ZM118.977 349L125.007 337.068V336.969H117.983V334.455H128.189V337.004L122.152 349H118.977Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_7_1450" x="7" y="9" width="712" height="501" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_7_1450"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="10"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_1450"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_1450" result="shape"/>
                                        </filter>
                                        <linearGradient id="paint0_linear_7_1450" x1="180" y1="259" x2="542" y2="259" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#DADADA"/>
                                            <stop offset="0.53125" stop-color="white" stop-opacity="0.604167"/>
                                            <stop offset="1" stop-color="#DBDBDB" stop-opacity="0.51"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_7_1450" x1="606" y1="257" x2="589" y2="257" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#8C8C8D"/>
                                            <stop offset="1" stop-color="#D5D6D5"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_7_1450" x1="260" y1="134" x2="227" y2="134" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#8C8C8D"/>
                                            <stop offset="1" stop-color="#D5D6D5"/>
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_7_1450" x1="286" y1="410" x2="253" y2="410" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#8C8C8D"/>
                                            <stop offset="1" stop-color="#D5D6D5"/>
                                        </linearGradient>
                                        <clipPath id="clip0_7_1450">
                                            <rect width="728" height="517" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4">Описание</p>
                            <p className="text-black_dark fs-20 mb-5">
                                    {localStorage.getItem("desc")}
                            </p>


                            {/*<div className="swiper events-swiper px-lg-5">*/}
                            {/*    <div className="d-flex align-items-center" style={{margin: '0 -48px'}}>*/}
                            {/*        <p className="text-black_dark fw-bold fs-38">Похожие мероприятия</p>*/}
                            {/*        <div className="swiper-button-next bg-white_light_1 text-black_dark"/>*/}
                            {/*        <div className="swiper-button-prev bg-white_light_1 text-black_dark"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="swiper-wrapper">*/}
                            {/*        <div className="swiper-slide">*/}
                            {/*            <div className="my-3">*/}
                            {/*                <div className="card border-0 bg-transparent">*/}
                            {/*                    <div className="position-relative">*/}
                            {/*                        <img src="/images/card.png" className="card-img-top" alt="card"/>*/}
                            {/*                        <div className="card-status px-3">*/}
                            {/*                            <div*/}
                            {/*                                className="bg-black_medium py-1 px-3 text-white rounded-pill">*/}
                            {/*                                Концерт*/}
                            {/*                            </div>*/}
                            {/*                            <div className="text-white">*/}
                            {/*                                <i className="fal fa-heart"/>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="card-body bg-white shadow-sm d-flex p-4"*/}
                            {/*                         style={{borderRadius: '0 0 19px 19px'}}>*/}
                            {/*                        <div className="me-4">*/}
                            {/*                            <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">*/}
                            {/*                                APR*/}
                            {/*                            </p>*/}
                            {/*                            <p className="card-day text-black_dark font-DM fs-28 fw-bold">*/}
                            {/*                                14*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                        <div>*/}
                            {/*                            <p className="card-text-title fw-bold text-black_dark mb-0">Wonder*/}
                            {/*                                Girls 2010*/}
                            {/*                                Wonder*/}
                            {/*                                Girls*/}
                            {/*                                World*/}
                            {/*                                Tour*/}
                            {/*                                San Francisco</p>*/}
                            {/*                            <p className="card-p font-DM fs-14 text-grey mb-0">*/}
                            {/*                                12:00 · 24 декабря 2022*/}
                            {/*                                Ледниковый дворец “Alpomish”*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="swiper-slide">*/}
                            {/*            <div className="my-3">*/}
                            {/*                <div className="card border-0 bg-transparent">*/}
                            {/*                    <div className="position-relative">*/}
                            {/*                        <img src="/images/card.png" className="card-img-top" alt="card"/>*/}
                            {/*                        <div className="card-status px-3">*/}
                            {/*                            <div*/}
                            {/*                                className="bg-black_medium py-1 px-3 text-white rounded-pill">*/}
                            {/*                                Концерт*/}
                            {/*                            </div>*/}
                            {/*                            <div className="text-white">*/}
                            {/*                                <i className="fal fa-heart"/>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="card-body bg-white shadow-sm d-flex p-4"*/}
                            {/*                         style={{borderRadius: '0 0 19px 19px'}}>*/}
                            {/*                        <div className="me-4">*/}
                            {/*                            <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">*/}
                            {/*                                APR*/}
                            {/*                            </p>*/}
                            {/*                            <p className="card-day text-black_dark font-DM fs-28 fw-bold">*/}
                            {/*                                14*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                        <div>*/}
                            {/*                            <p className="card-text-title fw-bold text-black_dark mb-0">Wonder*/}
                            {/*                                Girls 2010*/}
                            {/*                                Wonder*/}
                            {/*                                Girls*/}
                            {/*                                World*/}
                            {/*                                Tour*/}
                            {/*                                San Francisco</p>*/}
                            {/*                            <p className="card-p font-DM fs-14 text-grey mb-0">*/}
                            {/*                                12:00 · 24 декабря 2022*/}
                            {/*                                Ледниковый дворец “Alpomish”*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="swiper-slide">*/}
                            {/*            <div className="my-3">*/}
                            {/*                <div className="card border-0 bg-transparent">*/}
                            {/*                    <div className="position-relative">*/}
                            {/*                        <img src="/images/card.png" className="card-img-top" alt="card"/>*/}
                            {/*                        <div className="card-status px-3">*/}
                            {/*                            <div*/}
                            {/*                                className="bg-black_medium py-1 px-3 text-white rounded-pill">*/}
                            {/*                                Концерт*/}
                            {/*                            </div>*/}
                            {/*                            <div className="text-white">*/}
                            {/*                                <i className="fal fa-heart"/>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="card-body bg-white shadow-sm d-flex p-4"*/}
                            {/*                         style={{borderRadius: '0 0 19px 19px'}}>*/}
                            {/*                        <div className="me-4">*/}
                            {/*                            <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">*/}
                            {/*                                APR*/}
                            {/*                            </p>*/}
                            {/*                            <p className="card-day text-black_dark font-DM fs-28 fw-bold">*/}
                            {/*                                14*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                        <div>*/}
                            {/*                            <p className="card-text-title fw-bold text-black_dark mb-0">Wonder*/}
                            {/*                                Girls 2010*/}
                            {/*                                Wonder*/}
                            {/*                                Girls*/}
                            {/*                                World*/}
                            {/*                                Tour*/}
                            {/*                                San Francisco</p>*/}
                            {/*                            <p className="card-p font-DM fs-14 text-grey mb-0">*/}
                            {/*                                12:00 · 24 декабря 2022*/}
                            {/*                                Ледниковый дворец “Alpomish”*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="swiper-slide">*/}
                            {/*            <div className="my-3">*/}
                            {/*                <div className="card border-0 bg-transparent">*/}
                            {/*                    <div className="position-relative">*/}
                            {/*                        <img src="/images/card.png" className="card-img-top" alt="card"/>*/}
                            {/*                        <div className="card-status px-3">*/}
                            {/*                            <div*/}
                            {/*                                className="bg-black_medium py-1 px-3 text-white rounded-pill">*/}
                            {/*                                Концерт*/}
                            {/*                            </div>*/}
                            {/*                            <div className="text-white">*/}
                            {/*                                <i className="fal fa-heart"/>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="card-body bg-white shadow-sm d-flex p-4"*/}
                            {/*                         style={{borderRadius: '0 0 19px 19px'}}>*/}
                            {/*                        <div className="me-4">*/}
                            {/*                            <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">*/}
                            {/*                                APR*/}
                            {/*                            </p>*/}
                            {/*                            <p className="card-day text-black_dark font-DM fs-28 fw-bold">*/}
                            {/*                                14*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                        <div>*/}
                            {/*                            <p className="card-text-title fw-bold text-black_dark mb-0">Wonder*/}
                            {/*                                Girls 2010*/}
                            {/*                                Wonder*/}
                            {/*                                Girls*/}
                            {/*                                World*/}
                            {/*                                Tour*/}
                            {/*                                San Francisco</p>*/}
                            {/*                            <p className="card-p font-DM fs-14 text-grey mb-0">*/}
                            {/*                                12:00 · 24 декабря 2022*/}
                            {/*                                Ледниковый дворец “Alpomish”*/}
                            {/*                            </p>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        eventsItem: state.allReducerData.eventsItem,
        eventsDate: state.allReducerData.eventsDate,
    }
}
export default connect(mapStateToProps, {getEvents, getEventsDetail})(View);



