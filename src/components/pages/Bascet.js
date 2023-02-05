import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getBascketList} from "../../redux/action/allActions";

const Bascet = (props) => {
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const   nnn = "2023-01-30"
    useEffect(()=>{
        props.getBascketList()
        console.log(nnn.slice(8, 11))
    }, [])
    return (
        <div className="body-site">
           
            
            <div className="bg-snow-2">
                <div className="header-carousel mt-4 mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-85">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <p className="text-black_dark fw-600 lh-24 fs-20">Корзина</p>
                                    <p className="text-silver_4 fs-14">Корзина будет очищена через: 22:10</p>
                                </div>
                                <div className="row align-items-start">
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        {
                                            props.bascketList?.map((item, index) =>(
                                                <div className="row bilet2 position-relative m-0 justify-content-between mt-5">
                                                    <div className="col-xxl-7 col-md-7 col-sm-8 col-7 py-3 d-flex flex-column justify-content-between">
                                                        <div className>
                                                            <p className="fw-600 fs-xl-20 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-sm-2 mb-0">
                                                                Концерт Сплин</p>
                                                            <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">
                                                                {Number(item?.tickets?.event_date?.slice(8, 11)) + " " +  monthsRu[Number(item?.tickets?.event_date?.slice(5,7))]}, {item?.tickets?.event_date?.slice(0,4 )} год,  {item?.tickets?.event_time}</p>
                                                            <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-blue mb-sm-2 mb-0">Alpomish muz
                                                                saroyi</p>
                                                            <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">Ряд {item?.tickets?.block_name}
                                                                / Место {item?.tickets?.place}</p>
                                                        </div>
                                                        <p className="fw-bold fs-xl-28 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-0 ">{item?.tickets?.price}
                                                            <span className="text-blue font-DM"> UZS</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="col-lg-6 mt-lg-0 mt-3 ps-lg-5 d-flex flex-column justify-content-center">
                                        <div className="bg-white border rounded-16 p-3">
                                            <div className="d-flex align-items-center py-2 border-bottom">
                                                <p className="mb-0 text-silver_3 w-50">Кол-во билетов</p>
                                                <p className="mb-0 text-silver_3">2</p>
                                            </div>
                                            <div className="d-flex align-items-center py-2 border-bottom">
                                                <p className="mb-0 text-silver_3 w-50">Цена билета</p>
                                                <p className="mb-0 text-silver_3">400 000 UZS</p>
                                            </div>
                                            <div className="d-flex align-items-center py-2 border-bottom">
                                                <p className="mb-0 text-silver_3 w-50">Сервисный сбор</p>
                                                <p className="mb-0 text-silver_3">4 000 UZS</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2">
                                                <p className="mb-0 text-black_small fw-600 w-50">Итого к оплате</p>
                                                <p className="mb-0 text-black_small fw-600">804 000 UZS</p>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="d-flex align-items-center py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="name" className="form-label fw-bold text-black_small">Имя</label>
                                                    <input type="text" id="name" className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <label htmlFor="surname" className="form-label fw-bold text-black_small">Фамилия</label>
                                                    <input type="text" id="surname" className="form-control rounded-10" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="number" className="form-label fw-bold text-black_small">Номер</label>
                                                    <input type="text" id="number" className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <label htmlFor="email" className="form-label fw-bold text-black_small">Почта</label>
                                                    <input type="text" id="email" className="form-control rounded-10" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-end py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="code" className="form-label fw-bold text-black_small">Промокод</label>
                                                    <input type="text" id="code" className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <button className="btn login-btn w-100">Оплатить</button>
                                                </div>
                                            </div>
                                        </div>
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

const mapStateToProps = (state) =>{
    return{
        bascketList: state.allReducerData.bascketList,
    }
}
export default connect(mapStateToProps, {getBascketList})(Bascet);