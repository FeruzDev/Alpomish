import React from 'react';
import {Link} from "react-router-dom";


const Rules = () => {
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
                <div className="mt-4 pb-10 mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-90 mt-4">
                                <div className="row align-items-start justify-content-between flex-wrap-reverse flex-lg-wrap">
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <p className="text-blue_1 fw-bold fs-40">
                                            Правила и условия
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Общие положения и условия</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            Используя сайт Alpomish.uz, вы обязуетесь соблюдать следующие условия и все применяемые
                                            правовые нормы и нормативные акты, регулирующие работу сайта согласно законодательству
                                            республики Узбекистан.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Торговые марки</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            Логотипы Alpomish.uz, имеющиеся на данном сайте, являются официально зарегистрированным
                                            товарным знаком Alpomish.uz и не могут быть использованы ни в какое время и ни при каких
                                            обстоятельствах без предварительного письменного разрешения Alpomish.uz.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Авторские права</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            Весь контент и программное обеспечение на данном сайте, является собственностью
                                            Alpomish.uz и защищено авторским правом. За исключением случаев ограниченного
                                            предоставления лицензии, оговоренных в данных условиях и положениях, Alpomish.uz не
                                            предоставляет никаких явных или подразумеваемых прав в любой из своих торговых марок,
                                            авторских правах или другой конфиденциальной информации.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Разрешенное пользование</p>
                                        <p className="text-black_dark fs-20">
                                            Вы соглашаетесь с тем, что вам разрешается только посещать, просматривать и сохранять
                                            копии страниц данного сайта для своего личного пользования, и что вы не должны
                                            дублировать, загружать, публиковать, изменять или иным образом распространять материалы
                                            с данного сайта для любых целей, кроме как обзорных мероприятии и рекламной информации,
                                            для личного пользования или для покупки билетов или товаров для личного пользования,
                                            если иное специально не оговорено и разрешено Alpomish.uz.
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/about-us" >О нас</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/help" >Помощь</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/rules">Правила и условия</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/payback">Возврат и обмен</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/politics" >Конфиденциальност</Link></li>
                                            </ul>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
            </div>
            
        </div>
    );
};

export default Rules;