import React from 'react';

import {Link} from "react-router-dom";
const Galery = () => {
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
                            <div className="w-lg-90 mt-4 w-100">
                                <div className="row align-items-start justify-content-between flex-wrap-reverse flex-lg-wrap">
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <p className="text-blue_1 fw-bold fs-40">
                                            Фотографии
                                        </p>
                                        <div>
                                            <div  className="swiper gallery">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info_2.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info_2.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info_2.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info_2.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info_2.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="w-100">
                                                            <img src="images/info_2.png" className="w-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div thumbsslider className="swiper gallery2 mt-4 px-4">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info_2.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info_2.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info_2.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info_2.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info_2.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="w-100" style={{height: '60px'}}>
                                                                <img src="images/info_2.png" className="w-100 h-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-button-next bg-white_light_1 text-black_dark" />
                                                    <div className="swiper-button-prev bg-white_light_1 text-black_dark" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/information" >Информация</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/galery" >Фотографии</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/work">График работы</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/stadion">Схема зала</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/model" >3D модель зала</Link></li>
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

export default Galery;