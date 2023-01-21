import React, {useEffect} from 'react';
import "../../css/sector.css"
import {connect} from "react-redux";
import {getEvents, getEventsDetail} from "../../redux/action/allActions";

const View = (props) => {
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    const feruzjalilov = (value) => {
        alert(value)
    }
    useEffect(() =>{
        props.getEventsDetail(props.match.params.id)

    }, [])
    return (
        <div className="body-site">
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html"><img src="/images/logo.png" alt="logo"/></a>
                            <button className="navbar-toggler focus-none" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-xl-9 ms-lg-5 ms-0">
                                    <li className="nav-item">
                                        <a className="nav-link text-grey text-blue_5" aria-current="page"
                                           href="events.html">Мероприятий</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-grey" href="sections.html">Секции</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-grey" href="information.html">Каток</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-grey" href="#">Контакты</a>
                                    </li>
                                </ul>
                                <form className="d-flex justify-content-between align-items-center" role="search">
                                    <a href="basket.html"
                                       className="btn focus-none basket-btn text-grey me-4  text-decoration-none"
                                       type="button">
                                        <img src="/images/basket_icon.svg" alt="icon"/> Корзина
                                    </a>
                                    {/*                        <button class="btn focus-none login-btn" type="button">Войти</button>*/}
                                    <button className="btn  focus-none login-btn rounded-circle" type="button"
                                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                            aria-controls="offcanvasExample">
                                        <i className="fas fa-user"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
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
                                    <li className="breadcrumb-item  active" aria-current="page">{props.eventsItem?.title}</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-lg-6 mt-lg-0 mt-3" style={{borderRadius: '20px'}}>
                                    <img src={ props.eventsItem?.image} className="w-100" alt="view"/>
                                </div>
                                <div
                                    className="col-lg-6 mt-lg-0 mt-3 ps-lg-5 d-flex flex-column justify-content-center">
                                    <p className="fs-32 fw-bold text-black_dark">{props.eventsItem?.title}</p>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Дата</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">{props.eventsItem?.eventDate[0].eventDate?.slice(8, 10) + " " + monthsRu[Number(props.eventsItem?.eventDate[0].eventDate.slice(5, 7))] + " " + props.eventsItem?.eventDate[0].eventDate.slice(0, 4) }  </p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Время</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">   {props.eventsItem?.eventDate[0].eventTime?.slice(0, 5)}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Возраст</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">{props.eventsItem?.age_limit}</p>
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
                                <svg width="1170" height="801" viewBox="0 0 1170 801" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 700.5V100C0 44.8 44.8 0 100 0H1070C1125.2 0 1170 44.8 1170 100V700.5C1170 755.7 1125.2 800.5 1070 800.5H100C44.8 800.5 0 755.8 0 700.5Z"
                                        fill="white"/>
                                    <path
                                        d="M1112 59L1002.4 170.5C1044.2 211.6 1071.4 270.2 1074.3 335.8C1090.4 335.8 1117.3 335.8 1139.6 335.8V128C1139.7 101.2 1129.1 76.9 1112 59Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M1096.9 209.8C1088.5 186 1076.6 164 1061.8 144.5L1033.4 171.9C1045.4 187.7 1055 205.6 1061.8 224.9C1070.3 249.1 1074.3 275.1 1073.4 301L1111.1 302.6C1112.1 271 1107.3 239.4 1096.9 209.8Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M1096.3 209.2C1088 185.7 1076.3 163.9 1061.7 144.7L1043.5 162.2C1056.3 179.1 1066.5 198.3 1073.7 218.8C1082.9 244.9 1087.2 272.9 1086.2 300.9L1110.4 301.9C1111.5 270.3 1106.7 238.7 1096.3 209.2Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M1092.8 208.5C1084.8 186 1073.6 165.2 1059.7 146.6L1052.3 153.7C1065.4 171.4 1076.1 191.2 1083.7 212.5C1093.6 240.2 1098.4 269.8 1097.6 299.5L1107.4 299.8C1108.1 268.6 1103.2 237.6 1092.8 208.5Z"
                                        fill="#FFD600"/>
                                    <path d="M1070.6 156.2L1039.4 182.6L1038.6 181.5L1069.9 155.1L1070.6 156.2Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1077.3 167L1045.2 192L1044.5 190.9L1076.6 165.9L1077.3 167Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1084.2 179.4L1050.5 201.9L1049.9 200.7L1083.5 178.2L1084.2 179.4Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1090.8 193.6L1056.2 214.1L1055.6 212.9L1090.2 192.4L1090.8 193.6Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1096.7 208.5L1060.6 225.7L1060.1 224.4L1096.2 207.3L1096.7 208.5Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1101.5 223.5L1064.4 237.9L1063.9 236.6L1101.1 222.2L1101.5 223.5Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1105.8 240.5L1067.6 251.2L1067.3 249.9L1105.5 239.2L1105.8 240.5Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1108.4 255.9L1069.6 263L1069.4 261.6L1108.2 254.5L1108.4 255.9Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1110.3 271.5L1071.1 275.7L1071 274.3L1110.2 270.2L1110.3 271.5Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1111.1 286.5L1071.8 287.4V286.1L1111 285.1L1111.1 286.5Z" fill="#AFAFAF"/>
                                    <path
                                        d="M1072.16 300.385L1072.1 311.185L1111 311.379L1111.06 300.579L1072.16 300.385Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M1066.1 319.1H1139.6V128C1139.6 101.2 1129.1 76.9 1112 59L999.4 173.5C1037.7 210.7 1062.6 262 1066.1 319.1Z"
                                        className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path
                                        d="M1074.6 341.6H1139.7V335.6C1117.4 335.6 1090.5 335.6 1074.4 335.6C1074.4 337.6 1074.5 339.6 1074.6 341.6Z"
                                        fill="#AFAFAF"/>
                                    <path d="M841.8 690.1H343.8V771.9H841.8V690.1Z" fill="#AFAFAF"/>
                                    <path d="M841.8 28H343.8V109.8H841.8V28Z" fill="#AFAFAF"/>
                                    <path
                                        d="M118.3 429.7V370.7C118.3 259.7 208.3 169.7 319.3 169.7H829C940 169.7 1030 259.7 1030 370.7V429.7C1030 540.7 940 630.7 829 630.7H319.3C208.3 630.7 118.3 540.7 118.3 429.7Z"
                                        fill="#1D92FF" fill-opacity="0.5"/>
                                    <path d="M343.8 720.7V711.2H452.8V720.7H343.8Z" fill="#FFD600"/>
                                    <path d="M673.3 711.2H475.1V720.7H673.3V711.2Z" fill="#FFD600"/>
                                    <path d="M841.8 711.2H695.6V720.7H841.8V711.2Z" fill="#FFD600"/>
                                    <path d="M452.8 724.8H343.8V733.7H452.8V724.8Z" fill="#FFD600"/>
                                    <path d="M452.8 94.1H343.8V103H452.8V94.1Z" fill="#FFD600"/>
                                    <path d="M673.3 724.8H475.1V733.7H673.3V724.8Z" fill="#FFD600"/>
                                    <path d="M673.3 94.1H475.1V103H673.3V94.1Z" fill="#FFD600"/>
                                    <path d="M841.8 724.8H695.6V733.7H841.8V724.8Z" fill="#FFD600"/>
                                    <path d="M840.5 94.1H695.6V103H840.5V94.1Z" fill="#D9D9D9"/>
                                    <path d="M452.8 80.5H343.8V90H452.8V80.5Z" fill="#FFD600"/>
                                    <path d="M673.3 80.5H475.1V90H673.3V80.5Z" fill="#FFD600"/>
                                    <path d="M840.5 80.5H695.6V90H840.5V80.5Z" fill="#D9D9D9"/>
                                    <path d="M452.8 697.6H343.8V707.1H452.8V697.6Z" fill="#FFD600"/>
                                    <path d="M452.8 66.8H343.8V76.3H452.8V66.8Z" fill="#FFD600"/>
                                    <path d="M673.3 697.6H475.1V707.1H673.3V697.6Z" fill="#FFD600"/>
                                    <path d="M673.3 66.8H475.1V76.3H673.3V66.8Z" fill="#FFD600"/>
                                    <path d="M841.8 697.6H695.6V707.1H841.8V697.6Z" fill="#FFD600"/>
                                    <path d="M840.5 66.8H695.6V76.3H840.5V66.8Z" fill="#D9D9D9"/>
                                    <path d="M841.8 94.1H695.6V103H841.8V94.1Z" fill="#FFD600"/>
                                    <path d="M841.8 80.5H695.6V90H841.8V80.5Z" fill="#FFD600"/>
                                    <path d="M841.8 66.8H695.6V76.3H841.8V66.8Z" fill="#FFD600"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M639.1 401.6H574.8V471.6C609.5 470.9 638.1 440.4 639.1 401.6ZM644.1 401.6H695.5V398.2H644.1C643.4 356.7 612.7 323.2 574.7 322.5V169.8H571.6V322.6C533.9 323.7 503.5 357 502.9 398.3H452.7V401.7H503C504 442.6 534.2 475.6 571.7 476.7V630.8H574.8V476.6C612.6 475.9 643.1 442.8 644.1 401.6ZM571.7 471.6V401.6H508C508.9 440.2 537.3 470.5 571.7 471.6ZM507.9 398.2H571.6V327.5C537.1 328.6 508.6 359.3 507.9 398.2ZM574.8 327.5V398.2H639.2C638.5 359.1 609.7 328.3 574.8 327.5Z"
                                          fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M179 602.8H175.9V197.1H179V369.7C182.2 369.9 185.3 370.7 188.2 372C191.6 373.6 194.7 375.8 197.3 378.7C199.9 381.6 202 385 203.4 388.8C204.5 391.8 205.2 395 205.5 398.3H941.4C941.6 394.8 942.3 391.4 943.5 388.1C944.9 384.3 947 380.9 949.6 378C952.2 375.1 955.3 372.8 958.7 371.3C962 369.8 965.6 369 969.2 368.9V196.4H972.3V602.8H969.2V430.9C965.6 430.9 962 430.1 958.7 428.5C955.3 426.9 952.2 424.7 949.6 421.8C947 418.9 944.9 415.5 943.5 411.7C942.3 408.5 941.6 405 941.4 401.5H205.6C205.5 405.2 204.8 408.9 203.5 412.3C202.1 416.1 200 419.5 197.4 422.4C194.8 425.3 191.7 427.6 188.3 429.1C185.4 430.4 182.2 431.2 179.1 431.4V602.8H179ZM944.9 401.6C945.1 404.6 945.7 407.5 946.7 410.3C947.9 413.6 949.8 416.6 952.1 419.1C954.4 421.6 957.1 423.6 960.1 425C963 426.3 966.1 427 969.3 427.1V401.5H944.9V401.6ZM969.3 372.7C966.2 372.7 963 373.4 960.1 374.8C957.1 376.2 954.4 378.2 952.1 380.7C949.8 383.2 948 386.2 946.7 389.5C945.7 392.3 945 395.2 944.9 398.2H969.3V372.7ZM179 398.2V373.4C181.7 373.6 184.4 374.3 186.9 375.4C189.9 376.8 192.6 378.8 194.9 381.3C197.2 383.8 199 386.8 200.3 390.1C201.3 392.7 201.9 395.4 202.1 398.1H179V398.2ZM179 401.6H202.2C202.1 404.8 201.5 408 200.3 411C199.1 414.3 197.2 417.3 194.9 419.8C192.6 422.3 189.9 424.3 186.9 425.7C184.4 426.9 181.7 427.5 179 427.7V401.6Z"
                                          fill="white"/>
                                    <path
                                        d="M879.2 439.8C918 439.8 949.5 474.4 949.5 517.2C949.5 559.9 918 594.6 879.2 594.6C840.4 594.6 808.9 559.9 808.9 517.2C808.9 474.5 840.4 439.8 879.2 439.8ZM879.2 591.2C916.3 591.2 946.4 558.1 946.4 517.2C946.4 476.3 916.3 443.2 879.2 443.2C842.1 443.2 812 476.3 812 517.2C812 558.1 842.1 591.2 879.2 591.2Z"
                                        fill="white"/>
                                    <path
                                        d="M268.5 439.8C307.3 439.8 338.8 474.4 338.8 517.2C338.8 559.9 307.3 594.6 268.5 594.6C229.7 594.6 198.2 559.9 198.2 517.2C198.2 474.5 229.7 439.8 268.5 439.8ZM268.5 591.2C305.6 591.2 335.7 558.1 335.7 517.2C335.7 476.3 305.6 443.2 268.5 443.2C231.4 443.2 201.3 476.3 201.3 517.2C201.3 558.1 231.4 591.2 268.5 591.2Z"
                                        fill="white"/>
                                    <path
                                        d="M879.2 204.6C918 204.6 949.5 239.3 949.5 282C949.5 324.7 918 359.4 879.2 359.4C840.4 359.4 808.9 324.8 808.9 282C808.9 239.2 840.4 204.6 879.2 204.6ZM879.2 355.9C916.3 355.9 946.4 322.8 946.4 281.9C946.4 241 916.3 207.9 879.2 207.9C842.1 207.9 812 241.1 812 282C812 322.9 842.1 355.9 879.2 355.9Z"
                                        fill="white"/>
                                    <path
                                        d="M268.5 204.6C307.3 204.6 338.8 239.3 338.8 282C338.8 324.7 307.3 359.4 268.5 359.4C229.7 359.4 198.2 324.8 198.2 282C198.2 239.2 229.7 204.6 268.5 204.6ZM268.5 355.9C305.6 355.9 335.7 322.8 335.7 281.9C335.7 241 305.6 207.9 268.5 207.9C231.4 207.9 201.3 241 201.3 281.9C201.3 322.8 231.4 355.9 268.5 355.9Z"
                                        fill="white"/>
                                    <path d="M345 697.6H343.8V733.7H345V697.6Z" fill="#AFAFAF"/>
                                    <path d="M367.9 697.6H366.7V733.7H367.9V697.6Z" fill="#AFAFAF"/>
                                    <path d="M391.4 697.6H390.2V733.7H391.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M414.3 697.6H413.1V733.7H414.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M437.2 697.6H436V733.7H437.2V697.6Z" fill="#AFAFAF"/>
                                    <path d="M352.4 697.6H351.2V733.7H352.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M375.9 697.6H374.7V733.7H375.9V697.6Z" fill="#AFAFAF"/>
                                    <path d="M398.8 697.6H397.6V733.7H398.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M421.8 697.6H420.6V733.7H421.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M445.3 697.6H444.1V733.7H445.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M360.4 697.6H359.2V733.7H360.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M383.4 697.6H382.2V733.7H383.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M406.3 697.6H405.1V733.7H406.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M429.8 697.6H428.6V733.7H429.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M452.7 697.6H451.5V733.7H452.7V697.6Z" fill="#AFAFAF"/>
                                    <path d="M452.8 724.8H343.8V733.7H452.8V724.8Z" fill="#FFD600"/>
                                    <path d="M452.8 697.6H343.8V707.1H452.8V697.6Z" fill="#FFD600"/>
                                    <path d="M345 697.6H343.8V733.7H345V697.6Z" fill="#AFAFAF"/>
                                    <path d="M367.9 697.6H366.7V733.7H367.9V697.6Z" fill="#AFAFAF"/>
                                    <path d="M391.4 697.6H390.2V733.7H391.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M414.3 697.6H413.1V733.7H414.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M437.2 697.6H436V733.7H437.2V697.6Z" fill="#AFAFAF"/>
                                    <path d="M352.4 697.6H351.2V733.7H352.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M375.9 697.6H374.7V733.7H375.9V697.6Z" fill="#AFAFAF"/>
                                    <path d="M398.8 697.6H397.6V733.7H398.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M421.8 697.6H420.6V733.7H421.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M445.3 697.6H444.1V733.7H445.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M360.4 697.6H359.2V733.7H360.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M383.4 697.6H382.2V733.7H383.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M406.3 697.6H405.1V733.7H406.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M429.8 697.6H428.6V733.7H429.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M452.7 697.6H451.5V733.7H452.7V697.6Z" fill="#AFAFAF"/>
                                    <path d="M697.3 697.6H695.6V733.7H697.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M728 697.6H726.3V733.7H728V697.6Z" fill="#AFAFAF"/>
                                    <path d="M759.5 697.6H757.8V733.7H759.5V697.6Z" fill="#AFAFAF"/>
                                    <path d="M790.3 697.6H788.6V733.7H790.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M821 697.6H819.3V733.7H821V697.6Z" fill="#AFAFAF"/>
                                    <path d="M707.2 697.6H705.5V733.7H707.2V697.6Z" fill="#AFAFAF"/>
                                    <path d="M738.8 697.6H737.1V733.7H738.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M769.5 697.6H767.8V733.7H769.5V697.6Z" fill="#AFAFAF"/>
                                    <path d="M800.2 697.6H798.5V733.7H800.2V697.6Z" fill="#AFAFAF"/>
                                    <path d="M831.8 697.6H830.1V733.7H831.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M718 697.6H716.3V733.7H718V697.6Z" fill="#AFAFAF"/>
                                    <path d="M748.8 697.6H747.1V733.7H748.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M779.5 697.6H777.8V733.7H779.5V697.6Z" fill="#AFAFAF"/>
                                    <path d="M811 697.6H809.3V733.7H811V697.6Z" fill="#AFAFAF"/>
                                    <path d="M841.8 697.6H840.1V733.7H841.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M697.3 66.8H695.6V102.9H697.3V66.8Z" fill="#AFAFAF"/>
                                    <path d="M728 66.8H726.3V102.9H728V66.8Z" fill="#AFAFAF"/>
                                    <path d="M759.5 66.8H757.8V102.9H759.5V66.8Z" fill="#AFAFAF"/>
                                    <path d="M790.3 66.8H788.6V102.9H790.3V66.8Z" fill="#AFAFAF"/>
                                    <path d="M821 66.8H819.3V102.9H821V66.8Z" fill="#AFAFAF"/>
                                    <path d="M707.2 66.8H705.5V102.9H707.2V66.8Z" fill="#AFAFAF"/>
                                    <path d="M738.8 66.8H737.1V102.9H738.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M769.5 66.8H767.8V102.9H769.5V66.8Z" fill="#AFAFAF"/>
                                    <path d="M800.2 66.8H798.5V102.9H800.2V66.8Z" fill="#AFAFAF"/>
                                    <path d="M831.8 66.8H830.1V102.9H831.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M718 66.8H716.3V102.9H718V66.8Z" fill="#AFAFAF"/>
                                    <path d="M748.8 66.8H747.1V102.9H748.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M779.5 66.8H777.8V102.9H779.5V66.8Z" fill="#AFAFAF"/>
                                    <path d="M811 66.8H809.3V102.9H811V66.8Z" fill="#AFAFAF"/>
                                    <path d="M841.8 66.8H840.1V102.9H841.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M345 66.8H343.8V102.9H345V66.8Z" fill="#AFAFAF"/>
                                    <path d="M367.9 66.8H366.7V102.9H367.9V66.8Z" fill="#AFAFAF"/>
                                    <path d="M391.4 66.8H390.2V102.9H391.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M414.3 66.8H413.1V102.9H414.3V66.8Z" fill="#AFAFAF"/>
                                    <path d="M437.2 66.8H436V102.9H437.2V66.8Z" fill="#AFAFAF"/>
                                    <path d="M352.4 66.8H351.2V102.9H352.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M375.9 66.8H374.7V102.9H375.9V66.8Z" fill="#AFAFAF"/>
                                    <path d="M398.8 66.8H397.6V102.9H398.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M421.8 66.8H420.6V102.9H421.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M445.3 66.8H444.1V102.9H445.3V66.8Z" fill="#AFAFAF"/>
                                    <path d="M360.4 66.8H359.2V102.9H360.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M383.4 66.8H382.2V102.9H383.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M406.3 66.8H405.1V102.9H406.3V66.8Z" fill="#AFAFAF"/>
                                    <path d="M429.8 66.8H428.6V102.9H429.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M452.7 66.8H451.5V102.9H452.7V66.8Z" fill="#AFAFAF"/>
                                    <path d="M492.4 697.6H491.2V733.7H492.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M602 697.6H600.8V733.7H602V697.6Z" fill="#AFAFAF"/>
                                    <path d="M515.9 697.6H514.7V733.7H515.9V697.6Z" fill="#AFAFAF"/>
                                    <path d="M626.1 697.6H624.9V733.7H626.1V697.6Z" fill="#AFAFAF"/>
                                    <path d="M539.4 697.6H538.2V733.7H539.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M649.7 697.6H648.5V733.7H649.7V697.6Z" fill="#AFAFAF"/>
                                    <path d="M563 697.6H561.8V733.7H563V697.6Z" fill="#AFAFAF"/>
                                    <path d="M673.2 697.6H672V733.7H673.2V697.6Z" fill="#AFAFAF"/>
                                    <path d="M476.3 697.6H475.1V733.7H476.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M586.5 697.6H585.3V733.7H586.5V697.6Z" fill="#AFAFAF"/>
                                    <path d="M500.4 697.6H499.2V733.7H500.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M610.7 697.6H609.5V733.7H610.7V697.6Z" fill="#AFAFAF"/>
                                    <path d="M524 697.6H522.8V733.7H524V697.6Z" fill="#AFAFAF"/>
                                    <path d="M634.2 697.6H633V733.7H634.2V697.6Z" fill="#AFAFAF"/>
                                    <path d="M547.5 697.6H546.3V733.7H547.5V697.6Z" fill="#AFAFAF"/>
                                    <path d="M657.1 697.6H655.9V733.7H657.1V697.6Z" fill="#AFAFAF"/>
                                    <path d="M571 697.6H569.8V733.7H571V697.6Z" fill="#AFAFAF"/>
                                    <path d="M484.3 697.6H483.1V733.7H484.3V697.6Z" fill="#AFAFAF"/>
                                    <path d="M594.6 697.6H593.4V733.7H594.6V697.6Z" fill="#AFAFAF"/>
                                    <path d="M507.8 697.6H506.6V733.7H507.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M618.1 697.6H616.9V733.7H618.1V697.6Z" fill="#AFAFAF"/>
                                    <path d="M531.4 697.6H530.2V733.7H531.4V697.6Z" fill="#AFAFAF"/>
                                    <path d="M641.6 697.6H640.4V733.7H641.6V697.6Z" fill="#AFAFAF"/>
                                    <path d="M555.5 697.6H554.3V733.7H555.5V697.6Z" fill="#AFAFAF"/>
                                    <path d="M665.8 697.6H664.6V733.7H665.8V697.6Z" fill="#AFAFAF"/>
                                    <path d="M579.1 697.6H577.9V733.7H579.1V697.6Z" fill="#AFAFAF"/>
                                    <path d="M492.4 66.8H491.2V102.9H492.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M602 66.8H600.8V102.9H602V66.8Z" fill="#AFAFAF"/>
                                    <path d="M515.9 66.8H514.7V102.9H515.9V66.8Z" fill="#AFAFAF"/>
                                    <path d="M626.1 66.8H624.9V102.9H626.1V66.8Z" fill="#AFAFAF"/>
                                    <path d="M539.4 66.8H538.2V102.9H539.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M649.7 66.8H648.5V102.9H649.7V66.8Z" fill="#AFAFAF"/>
                                    <path d="M563 66.8H561.8V102.9H563V66.8Z" fill="#AFAFAF"/>
                                    <path d="M673.2 66.8H672V102.9H673.2V66.8Z" fill="#AFAFAF"/>
                                    <path d="M476.3 66.8H475.1V102.9H476.3V66.8Z" fill="#AFAFAF"/>
                                    <path d="M586.5 66.8H585.3V102.9H586.5V66.8Z" fill="#AFAFAF"/>
                                    <path d="M500.4 66.8H499.2V102.9H500.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M610.7 66.8H609.5V102.9H610.7V66.8Z" fill="#AFAFAF"/>
                                    <path d="M524 66.8H522.8V102.9H524V66.8Z" fill="#AFAFAF"/>
                                    <path d="M634.2 66.8H633V102.9H634.2V66.8Z" fill="#AFAFAF"/>
                                    <path d="M547.5 66.8H546.3V102.9H547.5V66.8Z" fill="#AFAFAF"/>
                                    <path d="M657.1 66.8H655.9V102.9H657.1V66.8Z" fill="#AFAFAF"/>
                                    <path d="M571 66.8H569.8V102.9H571V66.8Z" fill="#AFAFAF"/>
                                    <path d="M484.3 66.8H483.1V102.9H484.3V66.8Z" fill="#AFAFAF"/>
                                    <path d="M594.6 66.8H593.4V102.9H594.6V66.8Z" fill="#AFAFAF"/>
                                    <path d="M507.8 66.8H506.6V102.9H507.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M618.1 66.8H616.9V102.9H618.1V66.8Z" fill="#AFAFAF"/>
                                    <path d="M531.4 66.8H530.2V102.9H531.4V66.8Z" fill="#AFAFAF"/>
                                    <path d="M641.6 66.8H640.4V102.9H641.6V66.8Z" fill="#AFAFAF"/>
                                    <path d="M555.5 66.8H554.3V102.9H555.5V66.8Z" fill="#AFAFAF"/>
                                    <path d="M665.8 66.8H664.6V102.9H665.8V66.8Z" fill="#AFAFAF"/>
                                    <path d="M579.1 66.8H577.9V102.9H579.1V66.8Z" fill="#AFAFAF"/>
                                    <path d="M1139.6 331.4H1074.6V464.2H1139.6V331.4Z" fill="#AFAFAF"/>
                                    <path d="M452.8 690.1H343.8V771.9H452.8V690.1Z" className="f-hover"
                                          onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M452.1 28H343.1V109.8H452.1V28Z" className="f-hover"
                                          onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M841.8 690.1H695.6V771.9H841.8V690.1Z" className="f-hover"
                                          onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M841.1 28H694.9V109.8H841.1V28Z" className="f-hover"
                                          onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M673.3 690.1H475.1V771.9H673.3V690.1Z" className="f-hover"
                                          onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M672.6 28H474.4V109.8H672.6V28Z" className="f-hover"
                                          onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M1139.5 331.4H1074.5V464.2H1139.5V331.4Z" fill="#D9D9D9"
                                          className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M1100.6 339.6H1109.3V451.4H1100.6V339.6Z" fill="#FFD600"/>
                                    <path d="M1097 358H1088.9V426.9H1097V358Z" fill="#FFD600"/>
                                    <path d="M1121.7 339.6H1113V451.4H1121.7V339.6Z" fill="#FFD600"/>
                                    <path d="M1121.7 356.6H1088.9V358H1121.7V356.6Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 382.5H1088.9V383.9H1121.7V382.5Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 407.8H1088.9V409.2H1121.7V407.8Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 433H1088.9V434.4H1121.7V433Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 339.6H1100.6V341H1121.7V339.6Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 365.5H1088.9V366.9H1121.7V365.5Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 390.7H1088.9V392.1H1121.7V390.7Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 415.9H1088.9V417.3H1121.7V415.9Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 441.9H1088.9V443.3H1121.7V441.9Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 348.4H1100.6V349.8H1121.7V348.4Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 373.7H1088.9V375.1H1121.7V373.7Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 398.9H1088.9V400.3H1121.7V398.9Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 424.8H1088.9V426.2H1121.7V424.8Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 450H1100.6V451.4H1121.7V450Z" fill="#AFAFAF"/>
                                    <path d="M1097 358H1088.9V442.6H1097V358Z" fill="#FFD600"/>
                                    <path d="M1121.7 340.3H1113V451.4H1121.7V340.3Z" fill="#FFD600"/>
                                    <path d="M1121.7 356.6H1088.9V358H1121.7V356.6Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 382.5H1088.9V383.9H1121.7V382.5Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 407.8H1088.9V409.2H1121.7V407.8Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 433H1088.9V434.4H1121.7V433Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 339.6H1100.6V341H1121.7V339.6Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 365.5H1088.9V366.9H1121.7V365.5Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 390.7H1088.9V392.1H1121.7V390.7Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 415.9H1088.9V417.3H1121.7V415.9Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 441.9H1088.9V443.3H1121.7V441.9Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 348.4H1100.6V349.8H1121.7V348.4Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 373.7H1088.9V375.1H1121.7V373.7Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 398.9H1088.9V400.3H1121.7V398.9Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 424.8H1088.9V426.2H1121.7V424.8Z" fill="#AFAFAF"/>
                                    <path d="M1121.7 450H1100.6V451.4H1121.7V450Z" fill="#AFAFAF"/>
                                    <path
                                        d="M1112 59C1093.8 39.9 1068.1 28 1039.6 28H857.2V109.8C857.4 109.8 857.6 109.8 857.8 109.8C913.4 109.8 964.1 132.7 1002.4 170.4L1112 59Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M1011.6 99.3C1000.6 91.5 989 84.8 976.9 79.3C950.7 67.5 922.5 61.6 894.2 62.1L894.3 72.8C921.3 72.4 948.2 78 973.2 89.2C984.9 94.5 996 100.9 1006.5 108.4L1011.6 99.3Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M1012.6 97.5C1002 90.2 990.9 83.9 979.3 78.8C952.6 67 924 61.3 895.2 62.2L896.2 103.8C919.8 103.1 943.3 107.7 965.2 117.4C974.8 121.7 984.1 126.9 992.8 132.9L1012.6 97.5Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M1012.7 97.3C1001.9 89.8 990.5 83.4 978.7 78.1C952 66.3 923.4 60.6 894.6 61.5L895.3 88.1C920.8 87.3 946.1 92.3 969.7 102.8C980.3 107.5 990.5 113.3 1000.1 120L1012.7 97.3Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M1012.6 97.5C1002 90.2 990.9 83.9 979.3 78.8C952.6 67 924 61.3 895.2 62.2L895.5 75.6C922.6 74.8 949.6 80.1 974.8 91.3C985.8 96.2 996.3 102.1 1006.3 109L1012.6 97.5Z"
                                        fill="#FFD600"/>
                                    <path d="M896.2 61.4H883.8V105H896.2V61.4Z" fill="#AFAFAF"/>
                                    <path d="M905.5 61.4H904.3V105H905.5V61.4Z" fill="#AFAFAF"/>
                                    <path d="M914.9 61.9L912.5 105L911.3 104.9L913.7 61.8L914.9 61.9Z" fill="#AFAFAF"/>
                                    <path d="M924.5 62.8L920.1 105.9L918.9 105.8L923.2 62.7L924.5 62.8Z"
                                          fill="#AFAFAF"/>
                                    <path d="M933.9 64.3L927.7 107L926.5 106.8L932.7 64L933.9 64.3Z" fill="#AFAFAF"/>
                                    <path d="M943.2 66.1L935.2 108.5L934 108.2L942 65.9L943.2 66.1Z" fill="#AFAFAF"/>
                                    <path d="M952.6 68.5L943.4 110.6L942.2 110.3L951.4 68.2L952.6 68.5Z"
                                          fill="#AFAFAF"/>
                                    <path d="M962.3 71.7L950.9 113.1L949.7 112.8L961.1 71.3L962.3 71.7Z"
                                          fill="#AFAFAF"/>
                                    <path d="M972 75L959 115.9L957.8 115.5L970.8 74.6L972 75Z" fill="#AFAFAF"/>
                                    <path d="M983 79.8L968.7 120.2L967.5 119.7L981.8 79.3L983 79.8Z" fill="#AFAFAF"/>
                                    <path d="M994 85.3L976.8 124.3L975.7 123.7L992.9 84.7L994 85.3Z" fill="#AFAFAF"/>
                                    <path d="M1003.9 91.1L984.5 128.8L983.5 128.1L1002.8 90.4L1003.9 91.1Z"
                                          fill="#AFAFAF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M1112 59C1093.8 39.9 1068.1 28 1039.6 28H857.2V112.7C912.3 114.6 962.1 137.4 999.4 173.5L1112 59Z"
                                          className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path
                                        d="M1112 740.9L1002.4 629.4C1044.2 588.3 1071.4 529.7 1074.3 464.1C1090.4 464.1 1117.3 464.1 1139.6 464.1V671.8C1139.7 698.6 1129.1 722.9 1112 740.9Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M1096.9 590C1088.5 613.8 1076.6 635.8 1061.8 655.3L1033.4 627.9C1045.4 612.1 1055 594.2 1061.8 574.9C1070.3 550.7 1074.3 524.7 1073.4 498.8L1111.1 497.2C1112.1 528.9 1107.3 560.5 1096.9 590Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M1096.3 590.7C1088 614.2 1076.3 636 1061.7 655.2L1043.5 637.7C1056.3 620.8 1066.5 601.6 1073.7 581.1C1082.9 555 1087.2 527 1086.2 499L1110.4 498C1111.5 529.6 1106.7 561.1 1096.3 590.7Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M1092.8 591.3C1084.8 613.8 1073.6 634.6 1059.7 653.2L1052.3 646.1C1065.4 628.4 1076.1 608.6 1083.7 587.3C1093.6 559.6 1098.4 530 1097.6 500.3L1107.4 500C1108.1 531.2 1103.2 562.3 1092.8 591.3Z"
                                        fill="#FFD600"/>
                                    <path d="M1069.9 644.7L1038.6 618.3L1039.4 617.3L1070.6 643.6L1069.9 644.7Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1076.6 634L1044.5 609L1045.2 607.8L1077.3 632.9L1076.6 634Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1083.5 621.7L1049.9 599.2L1050.5 598L1084.2 620.5L1083.5 621.7Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1090.2 607.5L1055.6 587L1056.2 585.8L1090.8 606.3L1090.2 607.5Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1096.2 592.6L1060.1 575.4L1060.6 574.2L1096.7 591.3L1096.2 592.6Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1101.1 577.7L1063.9 563.2L1064.4 561.9L1101.5 576.4L1101.1 577.7Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1105.5 560.6L1067.3 550L1067.6 548.6L1105.8 559.3L1105.5 560.6Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1108.2 545.3L1069.4 538.2L1069.6 536.9L1108.4 544L1108.2 545.3Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1110.2 529.7L1071 525.5L1071.1 524.2L1110.3 528.3L1110.2 529.7Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1111 514.7L1071.8 513.8V512.4L1111.1 513.4L1111 514.7Z" fill="#AFAFAF"/>
                                    <path
                                        d="M1110.99 488.41L1072.09 488.603L1072.14 499.403L1111.04 499.21L1110.99 488.41Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M1066.1 480.7H1139.6V671.9C1139.6 698.7 1129.1 723 1112 740.9L999.4 626.3C1037.7 589.1 1062.6 537.9 1066.1 480.7Z"
                                        className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path
                                        d="M1112 740.9C1093.8 760 1068.1 771.9 1039.6 771.9H857.2V690.1C857.4 690.1 857.6 690.1 857.8 690.1C913.4 690.1 964.1 667.2 1002.4 629.5L1112 740.9Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M1011.6 700.5C1000.6 708.3 989 715 976.9 720.5C950.7 732.3 922.5 738.2 894.2 737.7L894.3 727C921.3 727.4 948.2 721.8 973.2 710.6C984.9 705.3 996 698.9 1006.5 691.4L1011.6 700.5Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M1012.6 702.4C1002 709.7 990.9 716 979.3 721.1C952.6 732.9 924 738.6 895.2 737.7L896.2 696.1C919.8 696.8 943.3 692.2 965.2 682.5C974.8 678.2 984.1 673 992.8 667L1012.6 702.4Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M1012.7 702.6C1001.9 710.1 990.5 716.5 978.7 721.8C952 733.6 923.4 739.3 894.6 738.4L895.3 711.8C920.8 712.6 946.1 707.6 969.7 697.1C980.3 692.4 990.5 686.6 1000.1 679.9L1012.7 702.6Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M1012.6 702.4C1002 709.7 990.9 716 979.3 721.1C952.6 732.9 924 738.6 895.2 737.7L895.5 724.3C922.6 725.1 949.6 719.8 974.8 708.6C985.8 703.7 996.3 697.8 1006.3 690.9L1012.6 702.4Z"
                                        fill="#FFD600"/>
                                    <path d="M896.2 694.8H883.8V738.4H896.2V694.8Z" fill="#AFAFAF"/>
                                    <path d="M905.5 694.8H904.3V738.4H905.5V694.8Z" fill="#AFAFAF"/>
                                    <path d="M913.7 738.1L911.3 694.9L912.5 694.8L914.9 738L913.7 738.1Z"
                                          fill="#AFAFAF"/>
                                    <path d="M923.2 737.2L918.9 694.1L920.1 693.9L924.5 737L923.2 737.2Z"
                                          fill="#AFAFAF"/>
                                    <path d="M932.7 735.8L926.5 693L927.7 692.8L933.9 735.6L932.7 735.8Z"
                                          fill="#AFAFAF"/>
                                    <path d="M942 734L934 691.6L935.2 691.3L943.2 733.7L942 734Z" fill="#AFAFAF"/>
                                    <path d="M951.4 731.6L942.2 689.6L943.4 689.2L952.6 731.3L951.4 731.6Z"
                                          fill="#AFAFAF"/>
                                    <path d="M961.1 728.6L949.7 687.1L950.9 686.7L962.3 728.2L961.1 728.6Z"
                                          fill="#AFAFAF"/>
                                    <path d="M970.8 725.3L957.8 684.4L959 683.9L972 724.8L970.8 725.3Z" fill="#AFAFAF"/>
                                    <path d="M981.8 720.5L967.5 680.1L968.7 679.6L983 720L981.8 720.5Z" fill="#AFAFAF"/>
                                    <path d="M992.9 715.1L975.7 676.2L976.8 675.6L994 714.5L992.9 715.1Z"
                                          fill="#AFAFAF"/>
                                    <path d="M1002.8 709.5L983.5 671.7L984.5 671.1L1003.9 708.8L1002.8 709.5Z"
                                          fill="#AFAFAF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M1112 740.9C1093.8 760 1068.1 771.9 1039.6 771.9H857.2V687.2C912.3 685.3 962.1 662.5 999.4 626.4L1112 740.9Z"
                                          className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path
                                        d="M49.9 59L159.5 170.5C117.7 211.6 90.5 270.2 87.6 335.8C71.5 335.8 44.6 335.8 22.3 335.8V128C22.3 101.2 32.8 76.9 49.9 59Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M65 209.8C73.4 186 85.3 164 100.1 144.5L128.5 171.9C116.5 187.7 106.9 205.6 100.1 224.9C91.7 249.1 87.8 275 88.7 301L51 302.6C49.8 271 54.6 239.4 65 209.8Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M65.7 209.2C74 185.7 85.7 163.9 100.3 144.7L118.5 162.2C105.7 179.1 95.5 198.3 88.3 218.8C79.1 244.9 74.8 272.9 75.8 300.9L51.6 301.9C50.4 270.3 55.2 238.7 65.7 209.2Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M69.2 208.5C77.2 186 88.4 165.2 102.3 146.6L109.7 153.7C96.6 171.4 85.9 191.2 78.3 212.5C68.4 240.2 63.6 269.8 64.4 299.5L54.6 299.8C53.8 268.6 58.8 237.6 69.2 208.5Z"
                                        fill="#FFD600"/>
                                    <path d="M92.1 155.1L123.3 181.5L122.6 182.6L91.3 156.2L92.1 155.1Z"
                                          fill="#AFAFAF"/>
                                    <path d="M85.3 165.9L117.5 190.9L116.8 192L84.6 167L85.3 165.9Z" fill="#AFAFAF"/>
                                    <path d="M78.4 178.2L112.1 200.7L111.5 201.9L77.8 179.4L78.4 178.2Z"
                                          fill="#AFAFAF"/>
                                    <path d="M71.7 192.4L106.4 212.9L105.8 214.1L71.1 193.6L71.7 192.4Z"
                                          fill="#AFAFAF"/>
                                    <path d="M65.7 207.3L101.9 224.4L101.4 225.7L65.2 208.5L65.7 207.3Z"
                                          fill="#AFAFAF"/>
                                    <path d="M60.9 222.2L98 236.6L97.6 237.9L60.4 223.5L60.9 222.2Z" fill="#AFAFAF"/>
                                    <path d="M56.4 239.2L94.7 249.9L94.4 251.2L56.1 240.5L56.4 239.2Z" fill="#AFAFAF"/>
                                    <path d="M53.7 254.5L92.5 261.6L92.3 263L53.5 255.9L53.7 254.5Z" fill="#AFAFAF"/>
                                    <path d="M51.8 270.2L91 274.3L90.9 275.7L51.7 271.5L51.8 270.2Z" fill="#AFAFAF"/>
                                    <path d="M50.9 285.1L90.2 286.1L90.1 287.4L50.9 286.5V285.1Z" fill="#AFAFAF"/>
                                    <path
                                        d="M89.7741 300.407L50.8741 300.601L50.9279 311.401L89.8279 311.207L89.7741 300.407Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M95.8 319.1H22.3V128C22.3 101.2 32.8 76.9 49.9 59L162.5 173.6C124.3 210.7 99.3 262 95.8 319.1Z"
                                        className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path
                                        d="M87.4 341.6H22.3V335.6C44.6 335.6 71.5 335.6 87.6 335.6C87.5 337.6 87.4 339.6 87.4 341.6Z"
                                        fill="#AFAFAF"/>
                                    <path d="M87.3 331.4H22.3V464.2H87.3V331.4Z" fill="#AFAFAF"/>
                                    <path d="M87.4 331.4H22.4V464.2H87.4V331.4Z" fill="#D9D9D9" className="f-hover"
                                          onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path d="M61.3 451.4H52.6V339.6H61.3V451.4Z" fill="#FFD600"/>
                                    <path d="M73.1 358H65V426.9H73.1V358Z" fill="#FFD600"/>
                                    <path d="M49 339.6H40.3V451.4H49V339.6Z" fill="#FFD600"/>
                                    <path d="M73.1 356.6H40.3V358H73.1V356.6Z" fill="#AFAFAF"/>
                                    <path d="M73.1 382.5H40.3V383.9H73.1V382.5Z" fill="#AFAFAF"/>
                                    <path d="M73.1 407.8H40.3V409.2H73.1V407.8Z" fill="#AFAFAF"/>
                                    <path d="M73.1 433H40.3V434.4H73.1V433Z" fill="#AFAFAF"/>
                                    <path d="M61.4 339.6H40.3V341H61.4V339.6Z" fill="#AFAFAF"/>
                                    <path d="M73.1 365.5H40.3V366.9H73.1V365.5Z" fill="#AFAFAF"/>
                                    <path d="M73.1 390.7H40.3V392.1H73.1V390.7Z" fill="#AFAFAF"/>
                                    <path d="M73.1 415.9H40.3V417.3H73.1V415.9Z" fill="#AFAFAF"/>
                                    <path d="M73.1 441.9H40.3V443.3H73.1V441.9Z" fill="#AFAFAF"/>
                                    <path d="M61.4 348.4H40.3V349.8H61.4V348.4Z" fill="#AFAFAF"/>
                                    <path d="M73.1 373.7H40.3V375.1H73.1V373.7Z" fill="#AFAFAF"/>
                                    <path d="M73.1 398.9H40.3V400.3H73.1V398.9Z" fill="#AFAFAF"/>
                                    <path d="M73.1 424.8H40.3V426.2H73.1V424.8Z" fill="#AFAFAF"/>
                                    <path d="M61.4 450H40.3V451.4H61.4V450Z" fill="#AFAFAF"/>
                                    <path d="M73.1 358H65V442.6H73.1V358Z" fill="#FFD600"/>
                                    <path d="M49 340.3H40.3V451.4H49V340.3Z" fill="#FFD600"/>
                                    <path d="M73.1 356.6H40.3V358H73.1V356.6Z" fill="#AFAFAF"/>
                                    <path d="M73.1 382.5H40.3V383.9H73.1V382.5Z" fill="#AFAFAF"/>
                                    <path d="M73.1 407.8H40.3V409.2H73.1V407.8Z" fill="#AFAFAF"/>
                                    <path d="M73.1 433H40.3V434.4H73.1V433Z" fill="#AFAFAF"/>
                                    <path d="M61.4 339.6H40.3V341H61.4V339.6Z" fill="#AFAFAF"/>
                                    <path d="M73.1 365.5H40.3V366.9H73.1V365.5Z" fill="#AFAFAF"/>
                                    <path d="M73.1 390.7H40.3V392.1H73.1V390.7Z" fill="#AFAFAF"/>
                                    <path d="M73.1 415.9H40.3V417.3H73.1V415.9Z" fill="#AFAFAF"/>
                                    <path d="M73.1 441.9H40.3V443.3H73.1V441.9Z" fill="#AFAFAF"/>
                                    <path d="M61.4 348.4H40.3V349.8H61.4V348.4Z" fill="#AFAFAF"/>
                                    <path d="M73.1 373.7H40.3V375.1H73.1V373.7Z" fill="#AFAFAF"/>
                                    <path d="M73.1 398.9H40.3V400.3H73.1V398.9Z" fill="#AFAFAF"/>
                                    <path d="M73.1 424.8H40.3V426.2H73.1V424.8Z" fill="#AFAFAF"/>
                                    <path d="M61.4 450H40.3V451.4H61.4V450Z" fill="#AFAFAF"/>
                                    <path
                                        d="M49.9 59C68.1 39.9 93.8 28 122.3 28H304.7V109.8C304.5 109.8 304.3 109.8 304.1 109.8C248.5 109.8 197.8 132.7 159.5 170.4L49.9 59Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M150.4 99.3C161.4 91.5 173 84.8 185.1 79.3C211.3 67.5 239.5 61.6 267.8 62.1L267.7 72.8C240.7 72.4 213.8 78 188.8 89.2C177.1 94.5 166 100.9 155.5 108.4L150.4 99.3Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M149.3 97.5C159.9 90.2 171 83.9 182.6 78.8C209.3 67 237.9 61.3 266.7 62.2L265.7 103.8C242.1 103.1 218.6 107.7 196.7 117.4C187.1 121.7 177.8 126.9 169.1 132.9L149.3 97.5Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M149.2 97.3C160 89.8 171.4 83.4 183.2 78.1C209.9 66.3 238.5 60.6 267.3 61.5L266.6 88.1C241.1 87.3 215.8 92.3 192.2 102.8C181.6 107.5 171.4 113.3 161.8 120L149.2 97.3Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M149.3 97.5C159.9 90.2 171 83.9 182.6 78.8C209.3 67 237.9 61.3 266.7 62.2L266.4 75.6C239.3 74.8 212.3 80.1 187.1 91.3C176.1 96.2 165.6 102.1 155.6 109L149.3 97.5Z"
                                        fill="#FFD600"/>
                                    <path d="M278.1 61.4H265.7V105H278.1V61.4Z" fill="#AFAFAF"/>
                                    <path d="M257.6 61.4H256.4V105H257.6V61.4Z" fill="#AFAFAF"/>
                                    <path d="M248.3 61.8L250.7 104.9L249.4 105L247 61.9L248.3 61.8Z" fill="#AFAFAF"/>
                                    <path d="M238.7 62.7L243.1 105.8L241.8 105.9L237.5 62.8L238.7 62.7Z"
                                          fill="#AFAFAF"/>
                                    <path d="M229.3 64L235.4 106.8L234.2 107L228.1 64.3L229.3 64Z" fill="#AFAFAF"/>
                                    <path d="M220 65.9L228 108.2L226.8 108.5L218.7 66.1L220 65.9Z" fill="#AFAFAF"/>
                                    <path d="M210.5 68.2L219.8 110.3L218.6 110.6L209.3 68.5L210.5 68.2Z"
                                          fill="#AFAFAF"/>
                                    <path d="M200.8 71.3L212.2 112.8L211 113.1L199.7 71.7L200.8 71.3Z" fill="#AFAFAF"/>
                                    <path d="M191.1 74.6L204.1 115.5L203 115.9L190 75L191.1 74.6Z" fill="#AFAFAF"/>
                                    <path d="M180.1 79.3L194.4 119.7L193.3 120.2L179 79.8L180.1 79.3Z" fill="#AFAFAF"/>
                                    <path d="M169 84.7L186.3 123.7L185.2 124.3L167.9 85.3L169 84.7Z" fill="#AFAFAF"/>
                                    <path d="M159.1 90.4L178.5 128.1L177.4 128.8L158.1 91.1L159.1 90.4Z"
                                          fill="#AFAFAF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M49.9 59C68.1 39.9 93.8 28 122.3 28H304.7V112.7C249.6 114.6 199.8 137.4 162.5 173.5L49.9 59Z"
                                          className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path
                                        d="M49.9 740.9L159.5 629.4C117.7 588.3 90.5 529.7 87.6 464.1C71.5 464.1 44.6 464.1 22.3 464.1V671.8C22.3 698.6 32.8 722.9 49.9 740.9Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M65 590C73.4 613.8 85.3 635.8 100.1 655.3L128.5 627.9C116.5 612.1 106.9 594.2 100.1 574.9C91.6 550.7 87.6 524.7 88.5 498.8L50.8 497.2C49.8 528.9 54.6 560.5 65 590Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M65.7 590.7C74 614.2 85.7 636 100.3 655.2L118.5 637.7C105.7 620.8 95.5 601.6 88.3 581.1C79 554.9 74.8 527 75.8 498.9L51.6 497.9C50.4 529.6 55.2 561.1 65.7 590.7Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M69.2 591.3C77.2 613.8 88.4 634.6 102.3 653.2L109.7 646.1C96.6 628.4 85.9 608.6 78.3 587.3C68.4 559.6 63.6 530 64.4 500.3L54.6 500C53.8 531.2 58.8 562.3 69.2 591.3Z"
                                        fill="#FFD600"/>
                                    <path d="M91.3 643.6L122.6 617.3L123.3 618.3L92.1 644.7L91.3 643.6Z"
                                          fill="#AFAFAF"/>
                                    <path d="M84.6 632.9L116.8 607.8L117.5 609L85.3 634L84.6 632.9Z" fill="#AFAFAF"/>
                                    <path d="M77.8 620.5L111.5 598L112.1 599.2L78.4 621.7L77.8 620.5Z" fill="#AFAFAF"/>
                                    <path d="M71.1 606.3L105.8 585.8L106.4 587L71.7 607.5L71.1 606.3Z" fill="#AFAFAF"/>
                                    <path d="M65.2 591.3L101.4 574.2L101.9 575.4L65.7 592.6L65.2 591.3Z"
                                          fill="#AFAFAF"/>
                                    <path d="M60.4 576.4L97.6 561.9L98 563.2L60.9 577.7L60.4 576.4Z" fill="#AFAFAF"/>
                                    <path d="M56.1 559.3L94.4 548.6L94.7 550L56.4 560.6L56.1 559.3Z" fill="#AFAFAF"/>
                                    <path d="M53.5 544L92.3 536.9L92.5 538.2L53.7 545.3L53.5 544Z" fill="#AFAFAF"/>
                                    <path d="M51.7 528.3L90.9 524.2L91 525.5L51.8 529.7L51.7 528.3Z" fill="#AFAFAF"/>
                                    <path d="M50.9 513.4L90.1 512.4L90.2 513.8L50.9 514.7V513.4Z" fill="#AFAFAF"/>
                                    <path
                                        d="M50.9136 488.502L50.8598 499.302L89.7598 499.496L89.8136 488.696L50.9136 488.502Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M95.8 480.7H22.3V671.9C22.3 698.7 32.8 723 49.9 740.9L162.5 626.3C124.3 589.1 99.3 537.9 95.8 480.7Z"
                                        className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                    <path
                                        d="M49.9 740.9C68.1 760 93.8 771.9 122.3 771.9H304.7V690.1C304.5 690.1 304.3 690.1 304.1 690.1C248.5 690.1 197.8 667.2 159.5 629.5L49.9 740.9Z"
                                        fill="#AFAFAF"/>
                                    <path
                                        d="M150.4 700.5C161.4 708.3 173 715 185.1 720.5C211.3 732.3 239.5 738.2 267.8 737.7L267.7 727C240.7 727.4 213.8 721.8 188.8 710.6C177.1 705.3 166 698.9 155.5 691.4L150.4 700.5Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M149.3 702.4C159.9 709.7 171 716 182.6 721.1C209.3 732.9 237.9 738.6 266.7 737.7L265.7 696.1C242.1 696.8 218.6 692.2 196.7 682.5C187.1 678.2 177.8 673 169.1 667L149.3 702.4Z"
                                        fill="#FFD600"/>
                                    <path
                                        d="M149.2 702.6C160 710.1 171.4 716.5 183.2 721.8C209.9 733.6 238.5 739.3 267.3 738.4L266.6 711.8C241.1 712.6 215.8 707.6 192.2 697.1C181.6 692.4 171.4 686.6 161.8 679.9L149.2 702.6Z"
                                        fill="#FFD600" fill-opacity="0.8"/>
                                    <path
                                        d="M149.3 702.4C159.9 709.7 171 716 182.6 721.1C209.3 732.9 237.9 738.6 266.7 737.7L266.4 724.3C239.3 725.1 212.3 719.8 187.1 708.6C176.1 703.7 165.6 697.8 155.6 690.9L149.3 702.4Z"
                                        fill="#FFD600"/>
                                    <path d="M278.1 694.8H265.7V738.4H278.1V694.8Z" fill="#AFAFAF"/>
                                    <path d="M257.6 694.8H256.4V738.4H257.6V694.8Z" fill="#AFAFAF"/>
                                    <path d="M247 738L249.4 694.8L250.7 694.9L248.3 738.1L247 738Z" fill="#AFAFAF"/>
                                    <path d="M237.5 737L241.8 693.9L243.1 694.1L238.7 737.2L237.5 737Z" fill="#AFAFAF"/>
                                    <path d="M228.1 735.6L234.2 692.8L235.4 693L229.3 735.8L228.1 735.6Z"
                                          fill="#AFAFAF"/>
                                    <path d="M218.7 733.7L226.8 691.3L228 691.6L220 734L218.7 733.7Z" fill="#AFAFAF"/>
                                    <path d="M209.3 731.3L218.6 689.2L219.8 689.6L210.5 731.6L209.3 731.3Z"
                                          fill="#AFAFAF"/>
                                    <path d="M199.7 728.2L211 686.7L212.2 687.1L200.8 728.6L199.7 728.2Z"
                                          fill="#AFAFAF"/>
                                    <path d="M190 724.8L203 683.9L204.1 684.4L191.1 725.3L190 724.8Z" fill="#AFAFAF"/>
                                    <path d="M179 720L193.3 679.6L194.4 680.1L180.1 720.5L179 720Z" fill="#AFAFAF"/>
                                    <path d="M167.9 714.5L185.2 675.6L186.3 676.2L169 715.1L167.9 714.5Z"
                                          fill="#AFAFAF"/>
                                    <path d="M158.1 708.8L177.4 671.1L178.5 671.7L159.1 709.5L158.1 708.8Z"
                                          fill="#AFAFAF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M49.9 740.9C68.1 760 93.8 771.9 122.3 771.9H304.7V687.2C249.6 685.3 199.8 662.5 162.5 626.4L49.9 740.9Z"
                                          className="f-hover" onClick={() => feruzjalilov(12)} fill-opacity="0.3"/>
                                </svg>


                            </div>
                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4">Описание</p>
                            <p className="text-black_dark fs-20 mb-5">
                                {
                                    props.eventsItem?.desc
                                }
                            </p>
                            <div className="swiper events-swiper px-lg-5">
                                <div className="d-flex align-items-center" style={{margin: '0 -48px'}}>
                                    <p className="text-black_dark fw-bold fs-38">Похожие мероприятия</p>
                                    <div className="swiper-button-next bg-white_light_1 text-black_dark"/>
                                    <div className="swiper-button-prev bg-white_light_1 text-black_dark"/>
                                </div>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="/images/card.png" className="card-img-top" alt="card"/>
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
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder
                                                            Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="/images/card.png" className="card-img-top" alt="card"/>
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
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder
                                                            Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="/images/card.png" className="card-img-top" alt="card"/>
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
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder
                                                            Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="/images/card.png" className="card-img-top" alt="card"/>
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
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder
                                                            Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="row row-cols-xl-4 row-cols-md-2 pb-lg-7 pb-5 border-bottom border-blue_3">
                        <div>
                            <img src="/images/logo_white.png" className="w-md-auto w-100" alt="logo"/>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="tel: +99899 939-44-09"
                                       className="text-light_grey fw-bold text-decoration-none">+99899
                                        939-44-09</a>
                                </div>
                                <div className="mb-2">
                                    <a href="tel: +99890 094-49-88"
                                       className="text-light_grey fw-bold text-decoration-none">+99890
                                        094-49-88</a>
                                </div>
                                <div className="mb-2">
                                    <span className="text-light_grey">Служба поддержки</span>
                                    <div className="mt-3">
                                        <img src="/images/facebook.svg" className alt="social"/>
                                        <img src="/images/twitter.svg" className="mx-3" alt="social"/>
                                        <img src="/images/linkedin.svg" className alt="social"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">Информация</span>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="#"
                                       className="text-light_grey text-decoration-none font-DM fw-500">Помощь</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Правила
                                        и условия</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Возврат
                                        и обмен</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Политика
                                        конфиденциальности</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">О нас</span>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Наш
                                        адресс</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#"
                                       className="text-light_grey text-decoration-none font-DM fw-500">Контакты</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#"
                                       className="text-light_grey text-decoration-none font-DM fw-500">Новости</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">Настройки</span>
                            <div className="dropdown mt-4">
                                <button className="btn dropdown-toggle custom-dropdown focus-none" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Русский <i className="fas fa-sort ms-3 text-grey"/>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-3 text-light_grey">
                        Copyright © 2022 Alpomish Muz Saroyi
                    </div>
                </div>
            </footer>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        eventsItem: state.allReducerData.eventsItem,
    }
}
export default connect(mapStateToProps, {getEvents, getEventsDetail})(View);