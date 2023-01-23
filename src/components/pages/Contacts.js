import React from 'react';


const Contacts = () => {
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
                                            Контакты
                                        </p>
                                        <div style={{position: 'relative', overflow: 'hidden'}} className="mb-4"><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Ташкент</a><a href="https://yandex.uz/maps/10335/tashkent/?ll=69.276432%2C41.317520&utm_medium=mapframe&utm_source=maps&z=14.62" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Яндекс&nbsp;Карты —
                                            транспорт, навигация, поиск мест</a>
                                            <iframe src="https://yandex.uz/map-widget/v1/-/CCUrQBuRXA" width="100%" height={400} frameBorder={1} allowFullScreen="true" style={{position: 'relative'}} className="rounded-20" />
                                        </div>
                                        <div className="d-flex justify-content-between flex-wrap">
                                            <div className="w-lg-40">
                                                <p className="text-black_dark fw-bold fs-20">
                                                    Адрес
                                                </p>
                                                <p className="text-black_dark">
                                                    г.Ташкент, р-н Шайхонтахур, ул.Гулабад, д 4
                                                </p>
                                            </div>
                                            <div className="w-lg-50">
                                                <p className="text-black_dark fw-bold fs-20">
                                                    Номера телефонов
                                                </p>
                                                <a href="tel: +99899 939-44-09" className="text-black_dark d-block text-decoration-none mb-2">
                                                    +99899 939-44-09
                                                </a>
                                                <a href="tel: +99890 094-49-88" className="text-black_dark d-block text-decoration-none">
                                                    +99890 094-49-88
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text-black_dark fw-bold fs-20">
                                            Почта
                                        </p>
                                        <a href="mailto: alpomish@mail.ru" className="text-black_dark text-decoration-none">
                                            alpomish@mail.ru
                                        </a>
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

export default Contacts;