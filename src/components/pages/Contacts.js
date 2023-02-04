import React from 'react';


const Contacts = () => {
    return (
        <div className="body-site">
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