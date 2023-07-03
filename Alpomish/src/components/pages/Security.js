import React from 'react';
import {Link} from "react-router-dom";


const Security = () => {
    return (
        <div className="body-site">
           
            
            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="px-2 me-3 text-silver fs-20">
                                    <i className="fal fa-id-card" />
                                </div>
                                <Link to="profile" className="text-decoration-none text-black_medium">Личная информация</Link>
                            </div>
                            {/*<div className="d-flex align-items-center mt-3">*/}
                            {/*    <div className="px-2 me-3 text-blue_5 fs-20">*/}
                            {/*        <i className="fal fa-shield" />*/}
                            {/*    </div>*/}
                            {/*    <a href="security.html" className="text-decoration-none text-blue_5">Безопасность</a>*/}
                            {/*</div>*/}
                            <div className="d-flex align-items-center mt-3">
                                <div className="px-2 me-3 text-silver fs-20">
                                    <i className="fal fa-ticket-alt" />
                                </div>
                                <Link to="orders" className="text-decoration-none text-black_medium">Заказы</Link>
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