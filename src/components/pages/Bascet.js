import React from 'react';

const Bascet = () => {
    return (
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
                            <img className="mb-3" src="images/logo_white.png" alt="logo" />
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по хоккею
                            </p>
                        </div>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-55">
                            <img src="images/person.png" alt="image" style={{right: '10px'}} />
                        </div>
                    </div>
                    <div className="card-3d mt-5" style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}}>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-30">
                            <img src="images/balerina.png" alt="image" style={{left: '10px'}} />
                        </div>
                        <div className="w-lg-65">
                            <img className="mb-3" src="images/logo_white.png" alt="logo" />
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
            <div className="bg-snow-2">
                <div className="header-carousel mt-4 mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-85">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <p className="text-black_dark fw-600 lh-24 fs-20">Корзина</p>
                                    <p className="text-silver_4 fs-14">Корзина будет очищена через: 22:10</p>
                                </div>
                                <div className="row align-items-start">
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        <div className="row bilet position-relative m-0 justify-content-between">
                                            <div className="col-4 d-flex align-items-center justify-content-center">
                                                <img src="https://www.pngmart.com/files/22/QR-Code-Transparent-Isolated-Background.png" className="w-80" alt="" />
                                            </div>
                                            <div className="col-xxl-7 col-md-7 col-sm-8 col-7 py-3 d-flex flex-column justify-content-between">
                                                <div className>
                                                    <p className="fw-600 fs-xl-20 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-sm-2 mb-0">
                                                        Концерт Сплин</p>
                                                    <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">20
                                                        авгутса, 2022 год, пятница, 18:00</p>
                                                    <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-blue mb-sm-2 mb-0">Alpomish muz
                                                        saroyi</p>
                                                    <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">Ряд №7
                                                        / Место 55</p>
                                                </div>
                                                <p className="fw-bold fs-xl-28 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-0 ">400 000
                                                    <span className="text-blue font-DM">UZS</span>
                                                </p>
                                            </div>
                                            <div className="bilet-shadow position-absolute rounded-16" />
                                        </div>
                                        <div className="row bilet position-relative m-0 justify-content-between mt-5">
                                            <div className="col-4 d-flex align-items-center justify-content-center">
                                                <img src="https://www.pngmart.com/files/22/QR-Code-Transparent-Isolated-Background.png" className="w-80" alt="" />
                                            </div>
                                            <div className="col-xxl-7 col-md-7 col-sm-8 col-7 py-3 d-flex flex-column justify-content-between">
                                                <div className>
                                                    <p className="fw-600 fs-xl-20 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-sm-2 mb-0">
                                                        Концерт Сплин</p>
                                                    <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">20
                                                        авгутса, 2022 год, пятница, 18:00</p>
                                                    <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-blue mb-sm-2 mb-0">Alpomish muz
                                                        saroyi</p>
                                                    <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">Ряд №7
                                                        / Место 55</p>
                                                </div>
                                                <p className="fw-bold fs-xl-28 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-0 ">400 000
                                                    <span className="text-blue font-DM">UZS</span>
                                                </p>
                                            </div>
                                            <div className="bilet-shadow position-absolute rounded-16" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-lg-0 mt-3 ps-lg-5 d-flex flex-column justify-content-center">
                                        <div className="bg-white border rounded-16 p-3">
                                            <div className="d-flex align-items-center py-2 border-bottom">
                                                <p className="mb-0 text-silver_3 w-50">Кол-во билетов</p>
                                                <p className="mb-0 text-silver_3">2</p>
                                            </div>
                                            <div className="d-flex align-items-center py-2 border-bottom">
                                                <p className="mb-0 text-silver_3 w-50">Цена билета</p>
                                                <p className="mb-0 text-silver_3">400 000 UZS</p>
                                            </div>
                                            <div className="d-flex align-items-center py-2 border-bottom">
                                                <p className="mb-0 text-silver_3 w-50">Сервисный сбор</p>
                                                <p className="mb-0 text-silver_3">4 000 UZS</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2">
                                                <p className="mb-0 text-black_small fw-600 w-50">Итого к оплате</p>
                                                <p className="mb-0 text-black_small fw-600">804 000 UZS</p>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="d-flex align-items-center py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="name" className="form-label fw-bold text-black_small">Имя</label>
                                                    <input type="text" id="name" className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <label htmlFor="surname" className="form-label fw-bold text-black_small">Фамилия</label>
                                                    <input type="text" id="surname" className="form-control rounded-10" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="number" className="form-label fw-bold text-black_small">Номер</label>
                                                    <input type="text" id="number" className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <label htmlFor="email" className="form-label fw-bold text-black_small">Почта</label>
                                                    <input type="text" id="email" className="form-control rounded-10" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-end py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="code" className="form-label fw-bold text-black_small">Промокод</label>
                                                    <input type="text" id="code" className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <button className="btn login-btn w-100">Оплатить</button>
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
    );
};

export default Bascet;