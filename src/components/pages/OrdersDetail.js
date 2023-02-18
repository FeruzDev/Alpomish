import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import {Link, useParams} from "react-router-dom";

const OrdersDetail = (props) => {
    const [item, setItem] = useState({})
    const params = useParams();
    useEffect(() =>{
        console.log(params.id)

        axios.get(API_PATH + "order", {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                res.data?.data?.filter(name => name.id === params.id).map(item =>{
                    setItem(item)
                })
            })
    }, [])
    return (
        <div className="orders">

            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="orders-items  col-lg-8">
                            <h2 className="fw-bold d-flex align-items-center"><img style={{marginRight: "24px"}} src="/images/check.png" alt="check"/>Заказы</h2>
                                    <>
                                        <div className="items">
                                            <div className="col-lg-4">
                                                <img src="/images/items.png" className="w-100" alt="123"/>
                                            </div>
                                            <div className="col-lg-7 items-right">
                                                <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                                                <div className="row">
                                                    <div className="col-6 ">
                                                        <div className="row">
                                                            <div className="col-4">Кому</div>
                                                            <div className="col-8">{item?.first_name}</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4">Телефон</div>
                                                            <div className="col-8">{item?.phone}</div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4">Где</div>
                                                            <div className="col-8"><span>Alpomish muz saroyi</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-4">Ряд</div>
                                                            <div className="col-8">{item?.tickets?.map(item3 => (<span>{item3.block_name + " "}</span>))}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4">Место</div>
                                                            <div className="col-8">{item?.tickets?.map(item3 => (<span>{item3.place + " "}</span>))}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-4">Сумма</div>
                                                            <div className="col-8">{item?.summ}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <button className=" ">
                                                    <img src="/images/down.svg" className="w-100" alt=""/>
                                                </button>
                                            </div>
                                        </div>

                                    </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersDetail;