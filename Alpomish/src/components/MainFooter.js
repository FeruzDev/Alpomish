import React from 'react';
import {Link} from "react-router-dom";

const MainFooter = () => {
    return (
            <footer className="footer">
                <div className="container">
                    <div className="row row-cols-xl-4 row-cols-md-2 pb-5 border-bottom border-blue_3">
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
                                    <span className="text-light_grey messenger">Служба поддержки</span>
                                    <div className="mt-3 messenger d-flex ">
                                        <div>
                                            <a href="https://t.me/alpomishofficial" target="_blank" className="text-decoration-none">
                                                <img src="/images/ttimg.svg" className alt="social"/>

                                            </a>
                                        </div>
                                        <div>

                                            <a href="https://www.instagram.com/alpomishuz/" target="_blank" className="text-decoration-none">
                                                <img src="/images/iiimg.svg"  alt="social"/>

                                            </a>
                                        </div>
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
                        {/*<div className="pt-2">*/}
                        {/*    <Link to="/about-us" className="text-white text-capitalize fw-bold fs-18">О нас</Link>*/}
                        {/*    <div className="mt-4">*/}
                        {/*        <div className="mb-2">*/}
                        {/*            <Link to="/contacts" className="text-light_grey text-decoration-none font-DM fw-500">Наш*/}
                        {/*                адресс</Link>*/}
                        {/*        </div>*/}
                        {/*        <div className="mb-2">*/}
                        {/*            <Link to="/contacts"*/}
                        {/*               className="text-light_grey text-decoration-none font-DM fw-500">Контакты</Link>*/}
                        {/*        </div>*/}
                        {/*        <div className="mb-2">*/}
                        {/*            <Link to="/news"*/}
                        {/*               className="text-light_grey text-decoration-none font-DM fw-500">Новости</Link>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="p-2">

                            <Link to="/contacts" className="text-white text-capitalize fw-bold mb-2 fs-18">Локация</Link>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3396299117967!2d69.20255897572213!3d41.34497109862561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d3bc2e6e2f7%3A0x8cdf52164ad53ef8!2sAlpomish%20muz%20saroyi!5e0!3m2!1sen!2s!4v1687010287848!5m2!1sen!2s"
                                width="400"
                                height="200"
                                className="mt-4"
                                style={{border: "0"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            {/*<div className="pt-2">*/}
                            {/*    <span className="text-white text-capitalize fw-bold fs-18">Настройки</span>*/}
                            {/*    <div className="dropdown mt-4">*/}
                            {/*        <button className="btn dropdown-toggle custom-dropdown focus-none" type="button"*/}
                            {/*                data-bs-toggle="dropdown" aria-expanded="false">*/}
                            {/*            Русский <i className="fas fa-sort ms-3 text-grey"/>*/}
                            {/*        </button>*/}
                            {/*        <ul className="dropdown-menu">*/}
                            {/*            <li><a className="dropdown-item" href="#">Action</a></li>*/}
                            {/*            <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                            {/*            <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
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