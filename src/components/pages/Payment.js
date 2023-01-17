import React from 'react';

const Payment = () => {
    return (
        <div className="body-site">
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                            <button className="navbar-toggler focus-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-xl-9 ms-lg-5 ms-0">
                                    <li className="nav-item">
                                        <a className="nav-link text-grey text-blue_5" aria-current="page" href="events.html">Мероприятий</a>
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
                                    <a href="basket.html" className="btn focus-none basket-btn text-grey me-4  text-decoration-none" type="button">
                                        <img src="images/basket_icon.svg" alt="icon" /> Корзина
                                    </a>
                                    {/*                        <button class="btn focus-none login-btn" type="button">Войти</button>*/}
                                    <button className="btn  focus-none login-btn rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                        <i className="fas fa-user" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
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
                            <div className="w-lg-60 mt-5 position-relative">
                                <p className="text-black_dark fw-bold fs-28 text-center me-lg-0 me-5">804 000 <span className="text-blue me-3">UZS</span>
                                    <i className="fas fa-chevron-down " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Номер заказа: S16700" />
                                </p>
                                <button className="btn bg-black_small position-absolute end-0 top-0 focus-none rounded-8">
                                    <img src="images/basket_white.svg" alt="" />
                                </button>
                                <div className="row justify-content-between mt-4">
                                    <div className="col-lg-3 text-center">
                                        <label htmlFor="click" className="box-radio box" style={{borderRadius: '10px'}}>
                                            <img src="images/click.png" width={122} alt="" />
                                            <input type="radio" hidden defaultChecked id="click" />
                                            <span className="box-radio-check" />
                                        </label>
                                        <label htmlFor="payme" className="box-radio box mt-4" style={{borderRadius: '10px'}}>
                                            <img src="images/payme.png" width={122} alt="" />
                                            <input type="radio" hidden id="payme" />
                                            <span className="box-radio-check" />
                                        </label>
                                        <label htmlFor="click" className="box-radio box mt-4" style={{borderRadius: '10px'}}>
                                            <img src="images/oson.png" width={122} alt="" />
                                            <input type="radio" hidden id="oson" />
                                            <span className="box-radio-check" />
                                        </label>
                                        <label htmlFor="click" className="box-radio box mt-4" style={{borderRadius: '10px'}}>
                                            <img src="images/apelsin.png" width={122} alt="" />
                                            <input type="radio" hidden id="apelsin" />
                                            <span className="box-radio-check" />
                                        </label>
                                    </div>
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <div className="border rounded-16 bg-white py-3 px-4 h-100">
                                            <p>По карте</p>
                                            <input type="text" className="form-control rounded-8 py-3" placeholder="Номер карты" />
                                            <div className="d-flex align-items-center mt-4">
                                                <input type="text" className="form-control rounded-8 py-3 me-4" placeholder="Месяц" />
                                                <input type="text" className="form-control rounded-8 py-3" placeholder="Год" />
                                            </div>
                                            <button className="btn login-btn w-100 rounded-8 mt-4 fw-600" disabled>
                                                Оплатить
                                            </button>
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
                            <img src="images/logo_white.png" className="w-md-auto w-100" alt="logo" />
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="tel: +99899 939-44-09" className="text-light_grey fw-bold text-decoration-none">+99899
                                        939-44-09</a>
                                </div>
                                <div className="mb-2">
                                    <a href="tel: +99890 094-49-88" className="text-light_grey fw-bold text-decoration-none">+99890
                                        094-49-88</a>
                                </div>
                                <div className="mb-2">
                                    <span className="text-light_grey">Служба поддержки</span>
                                    <div className="mt-3">
                                        <img src="images/facebook.svg" className alt="social" />
                                        <img src="images/twitter.svg" className="mx-3" alt="social" />
                                        <img src="images/linkedin.svg" className alt="social" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">Информация</span>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Помощь</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Правила и условия</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Возврат и обмен</a>
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
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Наш адресс</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Контакты</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Новости</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">Настройки</span>
                            <div className="dropdown mt-4">
                                <button className="btn dropdown-toggle custom-dropdown focus-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Русский <i className="fas fa-sort ms-3 text-grey" />
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

export default Payment;