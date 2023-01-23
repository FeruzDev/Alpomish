import React from 'react';


const Sections = () => {
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
                            <div className="w-lg-70 mt-5 position-relative">
                                <p className="text-blue_1 fw-bold fs-40 text-center">
                                    Наши секции
                                </p>
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <p className="fw-bold fs-30 text-black_dark">Хоккей</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="text-black_dark mb-2 w-lg-50"> Дни: Пн-Ср-Сб</p>
                                            <p className="text-black_dark mb-2 w-lg-50">Тренер:</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="text-black_dark mb-0 w-lg-50">Время: 13:00 - 14:30</p>
                                            <p className="text-black_dark mb-0 w-lg-50">Михайлов Андрей Сергеевич</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card-3d mt-4" style={{background: 'linear-gradient(99.29deg, #387EC1 0.94%, #47A8DF 100%)'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                    </div>
                                </div>
                                <div className="row align-items-center mt-5">
                                    <div className="col-lg-8">
                                        <p className="fw-bold fs-30 text-black_dark">Фигурное катание</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="text-black_dark mb-2 w-lg-50">Дни: Пн-Ср-Сб</p>
                                            <p className="text-black_dark mb-2 w-lg-50">Тренер:</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="text-black_dark mb-0 w-lg-50">Время: 13:00 - 14:30</p>
                                            <p className="text-black_dark mb-0 w-lg-50">Медведева Евгения Антоновна</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card-3d mt-5" style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content p-3">
                            <div className="modal-header border-0 text-blue_1 fs-20 fw-bold text-center">
                                <p className="w-100">Запись на секцию по хоккею</p>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center mt-4">
                                    <div className="me-4">
                                        <label htmlFor="name" className="form-label">Имя</label>
                                        <input type="text" className="form-control rounded-8 py-3" id="name" />
                                    </div>
                                    <div>
                                        <label htmlFor="surname" className="form-label">Фамилия</label>
                                        <input type="text" className="form-control rounded-8 py-3" id="surname" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="me-4">
                                        <label htmlFor="number" className="form-label">Номер</label>
                                        <input type="text" className="form-control rounded-8 py-3" id="number" />
                                        <button className="btn login-btn mt-4 w-100">Записаться</button>
                                    </div>
                                    <div>
                                        <label htmlFor="comment" className="form-label">Коментарий</label>
                                        <textarea type="text" className="form-control rounded-8 py-3" id="comment" rows={4} defaultValue={""} />
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

export default Sections;