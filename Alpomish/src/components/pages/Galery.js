import React, {useState} from 'react';

import {Link} from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div   onClick={onClick} className="swiper-button-next swiper-button-next-mini custom-swiper-btn-mini">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M0.399948 0.933316C0.644392 0.688872 0.955503 0.56665 1.33328 0.56665C1.71106 0.56665 2.02217 0.688872 2.26661 0.933316L8.39994 7.06664C8.53327 7.19997 8.62793 7.34442 8.68393 7.49997C8.73905 7.65553 8.7666 7.8222 8.7666 7.99997C8.7666 8.17775 8.73327 8.35019 8.6666 8.5173C8.59994 8.68353 8.51105 8.82219 8.39994 8.9333L2.26661 15.0666C2.02217 15.3111 1.71106 15.4333 1.33328 15.4333C0.955502 15.4333 0.644391 15.3111 0.399947 15.0666C0.155504 14.8222 0.0332807 14.5111 0.0332807 14.1333C0.0332807 13.7555 0.155504 13.4444 0.399948 13.2L5.59994 7.99997L0.399948 2.79998C0.155504 2.55554 0.0332813 2.24443 0.0332813 1.86665C0.0332813 1.48887 0.155504 1.17776 0.399948 0.933316Z" fill="black"/>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className="swiper-button-prev swiper-button-prev-mini custom-swiper-btn-mini">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M8.60005 15.0667C8.35561 15.3111 8.0445 15.4334 7.66672 15.4334C7.28894 15.4334 6.97783 15.3111 6.73339 15.0667L0.600065 8.93336C0.466732 8.80003 0.372066 8.65558 0.316066 8.50003C0.260955 8.34447 0.233399 8.1778 0.233399 8.00003C0.233399 7.82225 0.266732 7.64981 0.333399 7.4827C0.400066 7.31647 0.488954 7.17781 0.600065 7.0667L6.73339 0.933373C6.97783 0.688929 7.28895 0.566706 7.66672 0.566706C8.0445 0.566706 8.35561 0.68893 8.60005 0.933374C8.8445 1.17782 8.96672 1.48893 8.96672 1.8667C8.96672 2.24448 8.8445 2.55559 8.60005 2.80004L3.40006 8.00003L8.60005 13.2C8.8445 13.4445 8.96672 13.7556 8.96672 14.1334C8.96672 14.5111 8.8445 14.8222 8.60005 15.0667Z" fill="black"/>
            </svg>
        </div>
    );
}


const Galery = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const [myimg, setMyimg] = useState("/images/info.png")
    return (
        <div className="body-site">

            <div className="bg-snow-2">
                <div className="mt-4 pb-10 mb-5">
                    <div className="container my-mini-galery">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-90 mt-4 w-100">
                                <div className="row align-items-start justify-content-between flex-wrap-reverse flex-lg-wrap">
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <p className="text-blue_1 fw-bold fs-40">
                                            Фотографии
                                        </p>
                                        <button className="swiper-slide-mini mb-5 w-100">
                                            <div className="w-100">
                                                <img src={myimg} className="w-100" />
                                            </div>
                                        </button>
                                        <div>
                                            <div  className="swiper gallery">
                                                <div className="swiper-wrapper">

                                                </div>
                                                <Slider {...settings}>
                                                    <button onClick={() => setMyimg("/images/info.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info_2.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info_2.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info_2.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info_2.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info_2.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info_2.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info_2.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info_2.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info_2.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info_2.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                    <button onClick={() => setMyimg("/images/info_2.png")} className="swiper-slide-mini">
                                                        <div className="w-100">
                                                            <img src="/images/info_2.png" className="w-100" />
                                                        </div>
                                                    </button>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <aside>
                                            <p className="fs-20 text-blue_1 fw-bold">Разделы</p>
                                            <ul style={{listStyle: 'unset'}}>
                                                <li className="px-3 py-2 text-blue_1 fw-bold fs-20"><Link to="/information" >Информация</Link></li>
                                                <li className="px-3 py-2 text-blue_1 fw-bold bg-white_light_1 rounded-8 fs-20"><Link to="/galery" >Фотографии</Link></li>
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

export default Galery;