import React from 'react';
import {Link} from "react-router-dom";


const Rules = () => {
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
                                            Правила и условия
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Общие положения и условия</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            Используя сайт Alpomish.uz, вы обязуетесь соблюдать следующие условия и все применяемые
                                            правовые нормы и нормативные акты, регулирующие работу сайта согласно законодательству
                                            республики Узбекистан.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Торговые марки</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            Логотипы Alpomish.uz, имеющиеся на данном сайте, являются официально зарегистрированным
                                            товарным знаком Alpomish.uz и не могут быть использованы ни в какое время и ни при каких
                                            обстоятельствах без предварительного письменного разрешения Alpomish.uz.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Авторские права</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            Весь контент и программное обеспечение на данном сайте, является собственностью
                                            Alpomish.uz и защищено авторским правом. За исключением случаев ограниченного
                                            предоставления лицензии, оговоренных в данных условиях и положениях, Alpomish.uz не
                                            предоставляет никаких явных или подразумеваемых прав в любой из своих торговых марок,
                                            авторских правах или другой конфиденциальной информации.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">Разрешенное пользование</p>
                                        <p className="text-black_dark fs-20">
                                            Вы соглашаетесь с тем, что вам разрешается только посещать, просматривать и сохранять
                                            копии страниц данного сайта для своего личного пользования, и что вы не должны
                                            дублировать, загружать, публиковать, изменять или иным образом распространять материалы
                                            с данного сайта для любых целей, кроме как обзорных мероприятии и рекламной информации,
                                            для личного пользования или для покупки билетов или товаров для личного пользования,
                                            если иное специально не оговорено и разрешено Alpomish.uz.
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/about-us" >О нас</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/help" >Помощь</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/rules">Правила и условия</Link></li>
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

export default Rules;