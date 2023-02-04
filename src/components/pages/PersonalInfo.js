import React from 'react';


const PersonalInfo = () => {
    return (
        <div className="body-site">
           
            
            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="px-2 me-3 text-blue_5 fs-20">
                                    <i className="fal fa-id-card" />
                                </div>
                                <a href="person_info.html" className="text-decoration-none text-blue_5">Личная информация</a>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <div className="px-2 me-3 text-silver fs-20">
                                    <i className="fal fa-shield" />
                                </div>
                                <a href="security.html" className="text-decoration-none text-black_medium">Безопасность</a>
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
                                    <i className="fal fa-id-card" />
                                </button>
                                <p className="mb-0 text-black_dark fs-32 fw-800 ms-3">
                                    Личные данные
                                </p>
                            </div>
                            <div className="border p-3 rounded-8 mt-4">
                                <div className="row m-0">
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="name" className="form-label">Ваше имя</label>
                                        <input type="text" id="name" className="form-control rounded-8" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="surname" className="form-label">Ваше фамилия</label>
                                        <input type="text" id="surname" className="form-control rounded-8" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="phone" className="form-label">Номер телефона</label>
                                        <input type="tel" id="phone" className="form-control rounded-8" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="email" className="form-label">Ваше фамилия</label>
                                        <input type="email" id="email" className="form-control rounded-8" />
                                    </div>
                                    <div className="text-end">
                                        <button className="btn login-btn mt-2 px-3" type="submit">Сохранить</button>
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

export default PersonalInfo;