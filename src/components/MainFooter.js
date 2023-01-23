import React from 'react';
import {Link} from "react-router-dom";

const MainFooter = () => {
    return (
            <footer className="footer">
                <div className="container">
                    <div className="row row-cols-xl-4 row-cols-md-2 pb-lg-7 pb-5 border-bottom border-blue_3">
                        <div>
                            <Link to="/">
                                <img src="/images/logo_white.png" className="w-md-auto w-100" alt="logo"/>
                            </Link>
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
                            <Link to="/information" className="text-white text-capitalize fw-bold fs-18">Информация</Link>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <Link to="/help"
                                       className="text-light_grey text-decoration-none font-DM fw-500">Помощь</Link>
                                </div>
                                <div className="mb-2">
                                    <Link to="/rules" className="text-light_grey text-decoration-none font-DM fw-500">Правила
                                        и условия</Link>
                                </div>
                                <div className="mb-2">
                                    <Link to="/payback" className="text-light_grey text-decoration-none font-DM fw-500">Возврат
                                        и обмен</Link>
                                </div>
                                <div className="mb-2">
                                    <Link to="/politics" className="text-light_grey text-decoration-none font-DM fw-500">Политика
                                        конфиденциальности</Link>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <Link to="/about-us" className="text-white text-capitalize fw-bold fs-18">О нас</Link>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <Link to="/contacts" className="text-light_grey text-decoration-none font-DM fw-500">Наш
                                        адресс</Link>
                                </div>
                                <div className="mb-2">
                                    <Link to="/contacts"
                                       className="text-light_grey text-decoration-none font-DM fw-500">Контакты</Link>
                                </div>
                                <div className="mb-2">
                                    <Link to="/news"
                                       className="text-light_grey text-decoration-none font-DM fw-500">Новости</Link>
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
    );
};

export default MainFooter;