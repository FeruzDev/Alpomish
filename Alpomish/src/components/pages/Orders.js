import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import {Link} from "react-router-dom";

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() =>{
        axios.get(API_PATH + "order", {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                setOrders(res.data.data)
            })
    }, [])
    return (
        <div className="orders">

            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="px-2 me-3  fs-20">
                                    <i className="fal fa-id-card" />
                                </div>
                                <Link to="profile" className="text-decoration-none text-black_medium">Личная информация</Link>
                            </div>
                            {/*<div className="d-flex align-items-center mt-3">*/}
                            {/*    <div className="px-2 me-3 text-silver fs-20">*/}
                            {/*        <i className="fal fa-shield" />*/}
                            {/*    </div>*/}
                            {/*    <Link  className="text-decoration-none text-black_medium">Безопасность</Link>*/}
                            {/*</div>*/}
                            <div className="d-flex align-items-center mt-3">
                                <div className="px-2 me-3 text-blue_5 fs-20">
                                    <i className="fal fa-ticket-alt" />
                                </div>
                                <Link to="orders" className="text-decoration-none text-blue_5">Заказы</Link>
                            </div>
                        </div>
                         <div className="orders-items  col-lg-8">
                             <h2 className="fw-bold d-flex align-items-center"><img style={{marginRight: "24px"}} src="/images/check.png" alt="check"/>Заказы</h2>
                             {
                                 orders?.map((item, index) => (
                                     <>
                                             <div className="items-2">
                                                 <div className="col-lg-11 items-right">
                                                     <div className="row">

                                                         <div className="col-md-12 d-flex justify-content-between">
                                                              <h4 className="mb-4">{item?.event?.title}</h4>
                                                         </div>
                                                             <div className="col-md-1  titles">Кому</div>
                                                             <div className="col-md-2">{item?.first_name}</div>

                                                             <div className="col-md-2 titles">Телефон</div>
                                                             <div className="col-md-2">{item?.phone}</div>

                                                             <div className="col-md-2 titles">Где</div>
                                                             <div className="col-md-3"><span>Alpomish muz saroyi</span>
                                                         </div>
                                                     </div>
                                                     {
                                                         item?.tickets?.map((item4, index)=>(
                                                             <div className="row mt-3 ">
                                                                 <hr/>
                                                                 <div className="col-md-1 titles">Ряд</div>
                                                                 <div className="col-md-2">{item4?.block_name }
                                                                 </div>
                                                                 <div className="col-md-2 titles">Место</div>
                                                                 <div className="col-md-2">{item4?.place }
                                                                 </div>
                                                                 <div className="col-md-2 titles">Сумма</div>
                                                                 <div className="col-md-3">{item4?.price}</div>
                                                             </div>
                                                         ))
                                                     }


                                                 </div>
                                                 <div className="col-lg-1">
                                                     <Link className ="eyem" to={"/orders/" + item?.id}>
                                                         <img src="/images/view2.png" className="w-100" alt=""/>
                                                     </Link>
                                                 </div>
                                             </div>
                                     </>
                                 ))
                             }
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;