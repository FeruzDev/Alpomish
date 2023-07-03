import React from 'react';
import {Link} from "react-router-dom";


const Information = () => {
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
                                            Информация
                                        </p>
                                        <img src="images/info.png" className="w-100 rounded-16" alt="info" />
                                        <p className="text-black_dark fs-20 mt-3">
                                            Ледниковый дворец Alpomish muz saroyi был построен в 18 декабря 2022 года а открытия
                                            ледникового дворца для зрителей состоялась в 21 декабря 2022 года. Разработкой ледникого
                                            дворца занималась компания OOO “NEW UNIVERSAL DEVELOPMENT” и вмешает в себя более 10 000
                                            зрителей. На ледниковод дворце Alpomish muz saroyi проводитца различные спортивне и
                                            развлекательные мероприятия а так же есть спортвные секции для желающих заниматься
                                            спортом
                                        </p>
                                        <img src="images/info_2.png" className="w-100 rounded-16 mt-4" alt="info" />
                                        <p className="text-black_dark fs-20 mt-3">
                                            Конструция ледникого дворца позволяет трансформироваться в концертный зал расчитанный на
                                            8650 зрителей. Трансформация производится с помощью акустических занавесов черного
                                            цвета, которыми полностью перекрываются сектора с 205 по 212. Такая драпировка создает
                                            зрительное ощущение изменения размеров зала, придавая ему более компактный вид. Сцена,
                                            размером 18 на 10 метров, выдвигается далеко вперед (передний край сцены располагается
                                            по линии зрительских проходов в 204 и 213 сектора). За сценой размещается стандартный
                                            занавес заднего плана, по бокам кулисы.
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/information" >Информация</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/galery" >Фотографии</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/work">График работы</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/stadion">Схема зала</Link></li>
                                                
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

export default Information;