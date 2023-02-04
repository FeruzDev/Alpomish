import React from 'react';
import {Link} from "react-router-dom";


const Payback = () => {
    return (
        <div>
            <div className="body-site">
               

                <div className="bg-snow-2">
                    <div className="mt-4 pb-10 mb-5 vh-70">
                        <div className="container">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="w-lg-90 mt-4">
                                    <div className="row align-items-start justify-content-between flex-wrap-reverse flex-lg-wrap">
                                        <div className="col-lg-8 mt-lg-0 mt-3">
                                            <p className="text-blue_1 fw-bold fs-40">
                                                Возврат и обмен
                                            </p>
                                            <ul className="text-black_dark fs-20">
                                                <li>
                                                    Возврат билетов осуществляется при наличии знака , в соответствии с правилами,
                                                    установленными организатором, опубликованными на странице мероприятия. При
                                                    отсутствии
                                                    соответствующего знака, билет возврату не подлежит.
                                                </li>
                                                <li>
                                                    За 24 часа или меньший срок до начала мероприятия билет возврату или обмену не
                                                    подлежит.
                                                    Корпоративные билеты возврату не подлежат.
                                                </li>
                                                <li>
                                                    Утерянные билеты не восстанавливаются.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <aside>
                                                <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                                <ul style={{listStyle: 'unset'}}>
                                                    <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/about-us" >О нас</Link></li>
                                                    <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/help" >Помощь</Link></li>
                                                    <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/rules">Правила и условия</Link></li>
                                                    <li className="px-3 py-2 text-blue_1 fw-bold  bg-white_light_1 rounded-8 fs-20"><Link to="/payback">Возврат и обмен</Link></li>
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
        </div>
    );
};

export default Payback;