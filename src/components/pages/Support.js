import React from 'react';
import {Link} from "react-router-dom";


const Support = () => {
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
                                            Помощь
                                        </p>
                                        <p className="fs-20 text-black_dark">
                                            Если в разделе у вас возникли проблемы с пользованием нашего сервиса, можете напрямую
                                            связаться с нашей службой обслуживания клиентов по телефонам <a href="tel: +99899 939-44-09" className="text-black_dark">+99899 939-44-09</a> /
                                            <a href="tel: +99890 094-49-88" className="text-black_dark">+99890 094-49-88</a>
                                            Вы также можете связаться с нами по электронной почте службы поддержки
                                            клиентов: <a href="mailto: alpomish@mail.ru" className="text-black_dark">alpomish@mail.ru</a>
                                            ВРЕМЯ РАБОТЫ КОЛ-ЦЕНТРАЕжедневно: 9:00 - 21:00
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/about-us" >О нас</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/help" >Помощь</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/rules">Правила и условия</Link></li>
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

export default Support;