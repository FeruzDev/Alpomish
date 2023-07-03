import React from 'react';
import {Link} from "react-router-dom";


const Politics = () => {
    return (
        <div className="body-site">
           
            
            <div className="bg-snow-2">
                <div className="mt-4 mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-90 mt-4">
                                <div className="row align-items-start justify-content-between flex-wrap-reverse flex-lg-wrap">
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <p className="text-blue_1 fw-bold fs-40">
                                            Политика конфиденциальности
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">I. Как мы используем личную информацию</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            Ваша личная информация передается Alpomish.uz для конкретного события, на которое вы
                                            покупаете
                                            билеты в соответствии с настоящей политикой конфиденциальности и договорных отношений
                                            Alpomish.uz с организатором или местом проведения. Ваша личная информация используется
                                            нами, для
                                            того чтобы связаться с вами по телефону или по электронной почте, когда это необходимо в
                                            связи с
                                            операциями на сайте, выполняемыми с вашей стороны. Мы не будем использовать вашу личную
                                            информацию для контактов, не связанных с вашими операциями на сайте без вашего прямого
                                            согласия.
                                            Мы не передаем ваши данные третьим лицам, без предоставления на это вашего прямого
                                            согласия.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">II. Плагины социальных сетей</p>
                                        <p className="text-black_dark fs-20 mb-5">
                                            На нашем веб-сайте имеются плагины многих социальных сетей. При подключении доступа к
                                            веб-странице, содержащей социальный плагин (такие как 'Нравится / Рекомендовать'),
                                            браузер
                                            пользователя подключается к серверам социальных сетей и содержание, необходимое для
                                            социальных
                                            плагинов загружается. Когда пользователь находится в личной учетной записи социальной
                                            сети,
                                            данная социальная сеть может связать визит на эту страницу с личным аккаунтом
                                            пользователя. Если
                                            пользователь не желает, чтобы данная информация была отражена в социальной сети, он
                                            должен выйти
                                            из своей учетной записи, прежде чем посещать наш веб-сайт.
                                        </p>
                                        <p className="mb-1 text-black_dark fw-bold fs-20">III. «Куки-файлы» интернет браузера</p>
                                        <p className="text-black_dark fs-20">
                                            Наш сайт может использовать «куки-файлы» для улучшения опыта работы пользователей.
                                            Интернет
                                            браузер пользователя сохраняет куки-файлы на жестком диске с целью учета, а иногда и
                                            отслеживания информации о них. Пользователь может настроить свой веб-браузер, чтобы он
                                            не
                                            принимал куки, или предупреждал вас, когда они вам отправляются. Примите к сведению, что
                                            в
                                            данном случае, некоторые части сайта могут не функционировать должным образом.
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/about-us" >О нас</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/help" >Помощь</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/rules">Правила и условия</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/payback">Возврат и обмен</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/politics" >Конфиденциальност</Link></li>
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

export default Politics;