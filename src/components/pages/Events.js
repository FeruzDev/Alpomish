import React from 'react';


const Events = () => {

    return (
        <div>
            <div className="body-site">
               
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-800" id="offcanvasExampleLabel">Профиль</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-flex align-items-center">
                            <button className="btn focus-none login-btn rounded-circle" type="button">
                                <i className="fas fa-user" />
                            </button>
                            <p className="mb-0 ms-3">+998 (99) 999-99-99</p>
                        </div>
                        <div className="card-3d mt-4" style={{background: 'linear-gradient(99.29deg, #387EC1 0.94%, #47A8DF 100%)'}}>
                            <div className="w-lg-45">
                                <img className="mb-3" src="/images/logo_white.png" alt="logo" />
                                <p className="mb-0 text-white">
                                    Записаться в секцию
                                    по хоккею
                                </p>
                            </div>
                            <div className="card-3d-img position-relative d-flex align-items-center w-lg-55">
                                <img src="/images/person.png" alt="image" style={{right: '10px'}} />
                            </div>
                        </div>
                        <div className="card-3d mt-5" style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}}>
                            <div className="card-3d-img position-relative d-flex align-items-center w-lg-30">
                                <img src="/images/balerina.png" alt="image" style={{left: '10px'}} />
                            </div>
                            <div className="w-lg-65">
                                <img className="mb-3" src="/images/logo_white.png" alt="logo" />
                                <p className="mb-0 text-white">
                                    Записаться в секцию
                                    по фигурному катанию
                                </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-6">
                            <div className="px-2 me-3 text-silver fs-20">
                                <i className="fal fa-heart" />
                            </div>
                            <a href="likes.html" className="text-decoration-none text-black_medium">Избранное</a>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div className="px-2 me-3 text-silver fs-20">
                                <i className="fal fa-headset" />
                            </div>
                            <a href="call.html" className="text-decoration-none text-black_medium">Поддержка</a>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div className="px-2 me-3 text-danger fs-20">
                                <i className="far fa-sign-out-alt" />
                            </div>
                            <a href="logout.html" className="text-decoration-none text-black_medium">Выход</a>
                        </div>
                    </div>
                </div>
                <div className="bg-snow">
                    <div className="bg-snow-2">
                        <div className="header-carousel mt-4 mb-lg-7 mb-5">
                            <div className="container">
                                <div className="row align-items-center justify-content-between mb-5">
                                    <p className="text-blue_1 fw-bold fs-38 col mb-lg-0 mb-4">Все мероприятия</p>
                                    <div className="col-lg-3 d-flex align-items-center">
                                        <select className="form-select border-0 bg-white_light_1 text-blue_2 rounded-pill focus-none ps-3 me-3">
                                            <option value>Сегодня</option>
                                        </select>
                                        <select className="form-select border-0 bg-white_light_1 text-blue_2 rounded-pill focus-none ps-3">
                                            <option value>Категория</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="fs-12 fw-600 text-black_dark ms-3">Декабрь</p>
                                <div className="swiper calendar-swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">1</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">сб</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">2</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">вс</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">3</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">пн</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">4</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">вт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">5</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">ср</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">6</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">чт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">7</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">пт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-silver fs-15 fw-600 mb-0">8</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">сб</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">9</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">вс</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">10</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">пн</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">11</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">вт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">12</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">ср</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">13</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">чт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">14</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">пт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">15</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">сб</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">16</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">вс</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">17</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">пн</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">18</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">вт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">19</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">ср</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">20</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">чт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">21</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">пт</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">23</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">сб</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">24</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">вс</p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-black_dark fs-15 fw-600 mb-0">25</p>
                                            <p className="text-black_dark fs-10 fw-light mb-0">пн</p>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </div>
                            </div>
                        </div>
                        <div className="events mb-7">
                            <div className="container">
                                <div className="row row-cols-xl-4 row-cols-md-2 mb-5">
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                    <div className="my-3">
                                        <div className="card border-0">
                                            <div className="position-relative">
                                                <img src="/images/card.png" className="card-img-top" alt="card" />
                                                <div className="card-status px-3">
                                                    <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                        Концерт
                                                    </div>
                                                    <div className="text-white">
                                                        <i className="fal fa-heart" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                <div className="me-4">
                                                    <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                        APR
                                                    </p>
                                                    <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                        14
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010 Wonder
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
                                <div className="text-center">
                                    <button className="btn border-blue rounded-pill text-blue px-5 py-3 fw-bold fs-18">Больше</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="container">
                        <p className="text-center fw-bold fs-40 text-blue_1">Новости</p>
                        <div className="row row-cols-xl-3 row-cols-md-2 mb-5">
                            <div className="news-card">
                                <div className="news-card_img">
                                    <img src="/images/news.png" alt="" />
                                </div>
                                <p className="news-card_title">
                                    6 Strategies to Find Your Conference Keynote and Other Speakers
                                </p>
                                <p className="news-card_text">
                                    Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                    beberapa langkah mudah.
                                </p>
                                <p className="news-card_time">12 Март - 16:00</p>
                            </div>
                            <div className="news-card">
                                <div className="news-card_img">
                                    <img src="/images/news.png" alt="" />
                                </div>
                                <p className="news-card_title">
                                    6 Strategies to Find Your Conference Keynote and Other Speakers
                                </p>
                                <p className="news-card_text">
                                    Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                    beberapa langkah mudah.
                                </p>
                                <p className="news-card_time">12 Март - 16:00</p>
                            </div>
                            <div className="news-card">
                                <div className="news-card_img">
                                    <img src="/images/news.png" alt="" />
                                </div>
                                <p className="news-card_title">
                                    6 Strategies to Find Your Conference Keynote and Other Speakers
                                </p>
                                <p className="news-card_text">
                                    Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                    beberapa langkah mudah.
                                </p>
                                <p className="news-card_time">12 Март - 16:00</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn border-blue rounded-pill text-blue px-5 py-3 fw-bold fs-18">Больше</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Events;