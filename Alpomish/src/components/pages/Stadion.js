import React from 'react';
import {Link} from "react-router-dom";


const Stadion = () => {
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
                                            Схема зала
                                        </p>
                                        <img src="images/stadion.svg" className="w-100 rounded-16 border" alt="info" />
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/information" >Информация</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/galery" >Фотографии</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/work">График работы</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/stadion">Схема зала</Link></li>
                                                
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

export default Stadion;