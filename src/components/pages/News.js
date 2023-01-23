import React from 'react';

const News = () => {
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
            <div className="news mt-4 pb-10">
                <div className="container">
                    <p className="text-center fw-bold fs-40 text-blue_1">Новости</p>
                    <div className="row row-cols-xl-3 row-cols-md-2 mb-5">
                        <div className="news-card">
                            <div className="news-card_img">
                                <img src="images/news.png" alt="" />
                            </div>
                            <p className="news-card_title">
                                6 Strategies to Find Your Conference Keynote and Other Speakers
                            </p>
                            <p className="news-card_text">
                                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                beberapa langkah mudah.
                            </p>
                            <p className="news-card_time">12 Март - 16:00</p>
                        </div>
                        <div className="news-card">
                            <div className="news-card_img">
                                <img src="images/news.png" alt="" />
                            </div>
                            <p className="news-card_title">
                                6 Strategies to Find Your Conference Keynote and Other Speakers
                            </p>
                            <p className="news-card_text">
                                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                beberapa langkah mudah.
                            </p>
                            <p className="news-card_time">12 Март - 16:00</p>
                        </div>
                        <div className="news-card">
                            <div className="news-card_img">
                                <img src="images/news.png" alt="" />
                            </div>
                            <p className="news-card_title">
                                6 Strategies to Find Your Conference Keynote and Other Speakers
                            </p>
                            <p className="news-card_text">
                                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                beberapa langkah mudah.
                            </p>
                            <p className="news-card_time">12 Март - 16:00</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn border-blue rounded-pill text-blue px-5 py-3 fw-bold fs-18">Больше</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default News;