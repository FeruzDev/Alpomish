import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import {Link, useParams} from "react-router-dom";
import QRCode from "react-qr-code";


const OrdersDetail = (props) => {
    const [obj, setObj] = useState([])
    const [objItem, setObjItem] = useState({})
    const params = useParams();

    useEffect(() =>{
        axios.get(API_PATH + "order/view/" + params.id, {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                setObj(res?.data?.data?.tickets)
                setObjItem(res?.data?.data)
            })
    }, [])
    return (
        <div className="orders">

            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="orders-items  col-lg-12 row ">
                            <h2 className="fw-bold d-flex align-items-center"><img style={{marginRight: "24px"}} src="/images/check.png" alt="check"/>Заказы</h2>
                                                {
                                                    obj?.map((item, index)=>(
                                                        <div className="m-3 items">
                                                            <div className="col-4 pt-3">
                                                                {/*<div className="row">*/}
                                                                {/*    <div className="col-4">Кому</div>*/}
                                                                {/*    <div className="col-8">{item?.first_name}</div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="row">*/}
                                                                {/*    <div className="col-4">Телефон</div>*/}
                                                                {/*    <div className="col-8">{item?.phone}</div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="row">*/}
                                                                {/*    <div className="col-4">Где</div>*/}
                                                                {/*    <div className="col-8"><span>Alpomish muz saroyi</span>*/}
                                                                {/*    </div>*/}
                                                                {/*</div>*/}
                                                                <QRCode
                                                                    size={256}
                                                                    style={{ height: "auto",  width: "130" }}
                                                                    value={item?.qrcode?.qrcode}
                                                                    viewBox={`0 0 256 256`}
                                                                />
                                                            </div>
                                                            <div className="col-1"></div>
                                                            <div className="col-6">
                                                                <p className="mb-0">{objItem?.event?.title}</p>
                                                                <p className="mb-0">{item?.event_date}</p>
                                                                <p className="mb-0">Alpomish muz saroyi</p>
                                                                <p >  Ряд {item?.row + " / "} Место {item?.place}
                                                                </p>


                                                                    <div className="col-8">{item?.price + " UZS"}</div>

                                                            </div>


                                                            <div className="col-lg-1">
                                                                <button className="fdown">
                                                                    <img src="/images/down.svg" className="w-100" alt=""/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersDetail;