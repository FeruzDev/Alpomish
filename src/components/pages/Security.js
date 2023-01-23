import React from 'react';


const Security = () => {
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
            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="px-2 me-3 text-silver fs-20">
                                    <i className="fal fa-id-card" />
                                </div>
                                <a href="person_info.html" className="text-decoration-none text-black_medium">Личная информация</a>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className="px-2 me-3 text-blue_5 fs-20">
                                    <i className="fal fa-shield" />
                                </div>
                                <a href="security.html" className="text-decoration-none text-blue_5">Безопасность</a>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className="px-2 me-3 text-silver fs-20">
                                    <i className="fal fa-ticket-alt" />
                                </div>
                                <a href="orders.html" className="text-decoration-none text-black_medium">Заказы</a>
                            </div>
                        </div>
                        <form className="col-lg-8 mt-lg-0 mt-3 bg-white">
                            <div className="d-flex align-items-center">
                                <button className="btn focus-none login-btn rounded-circle d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px'}} type="button">
                                    <i className="fal fa-shield" />
                                </button>
                                <p className="mb-0 text-black_dark fs-32 fw-800 ms-3">
                                    Изменить пароль
                                </p>
                            </div>
                            <div className="border p-3 rounded-8 mt-4">
                                <div className="row m-0 justify-content-between">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Новый пароль</label>
                                            <input type="text" id="name" className="form-control rounded-8" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="surname" className="form-label">Потвердить пароль</label>
                                            <input type="text" id="surname" className="form-control rounded-8" />
                                        </div>
                                        <div className="text-end">
                                            <button className="btn login-btn mt-2 px-3" type="submit">Сохранить</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ps-lg-5 mb-3">
                                        <p className="fw-600 text-black_dark mb-0">В надежном пароле:</p>
                                        <div className="d-flex align-items-center fw-light">
                                            <div className="border px-2 me-2" />
                                            Нет пробелов
                                        </div>
                                        <div className="d-flex align-items-center fw-light">
                                            <div className="border px-2 me-2" />
                                            Минимум 8 символов
                                        </div>
                                        <div className="d-flex align-items-center fw-light">
                                            <div className="border px-2 me-2" />
                                            Заглавные буквы
                                        </div>
                                        <div className="d-flex align-items-center fw-light">
                                            <div className="border px-2 me-2" />
                                            Строчные буквы
                                        </div>
                                        <div className="d-flex align-items-center fw-light">
                                            <div className="border px-2 me-2" />
                                            Латинские буквы
                                        </div>
                                        <div className="d-flex align-items-center fw-light">
                                            <div className="border px-2 me-2" />
                                            Цифры
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Security;