import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getBascketList, updateState} from "../../redux/action/allActions";
import axios from "axios";
import {API_PATH, AUTH} from "../const";

const Bascet = (props) => {
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [phone, setPhone]= useState("")
    const [email, setEmail]= useState("")
    const [paymnet, setPayment]= useState("")
    const [summa, setSumma]= useState("")
    const [tick, setTick]= useState([])
    const [myObj, setMyObj] = useState({})
    let i=0


    // let summa = 0
    const total   = 0
    const summaZ =()=>{
        axios.get(API_PATH + "basket", {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res => {
                setSumma(res.data.reduce(
                    (prevValue, currentValue) => prevValue + currentValue.tickets?.price,
                    0
                ))

                //  total = res.data.reduce(
                //     (prevValue, currentValue) => prevValue + currentValue.tickets?.price,
                //     0
                // );
            })


    }

    const Pay =()=>{
        props.bascketList?.map(item =>{
            // setTick(...tick, item.id)
            tick.push(item?.tickets?.id)
        })
        axios.post(API_PATH + "order/add", {
            "first_name": firstName,
            "last_name": lastName,
            "phone": phone,
            "email": email,
            "event_id": props.bascketList[0]?.tickets?.event_id,
            "payment_type": "payme",
            "tickets": tick

        }, {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                setMyObj(res.data.payme)
                setTimeout(()=>{
                    axios.post(API_PATH + "basket/delete-all",
                        {"tickets" : tick},
                        {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
                        .then(res =>{
                            props.getBascketList()
                        })
                }, [200])
                setTimeout(()=>{
                    document.getElementById("target_form").submit()
                }, [300])


            })


    }
    function mysum(sum) {
        return sum.toLocaleString('ru-RU')
    }
    function convertDate(unixDate) {
        const d = new Date(unixDate * 1000);
        const day = d.toLocaleString(d.getDate())

        return(day);
    }


    const remove =(id)=>{
        axios.post(API_PATH + "basket/delete-ticket", {"ticket_id": id},  {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                props.getBascketList()

            })
    }
    let dl = []
    const deleteAll =(id)=>{
          props.bascketList.map(item=> {dl.push(item.ticket_id)})
        axios.post(API_PATH + "basket/delete-all", {"tickets": dl}, {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res =>{
                props.getBascketList()

            })
    }
    useEffect(()=>{
        props.getBascketList()
        summaZ()
        axios.get(API_PATH + "user-profile", {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res => {
                setFirstName(res.data?.data?.first_name)
                setLastName(res.data?.data?.last_name)
                setPhone(res.data?.data?.phone)
                setEmail(res.data?.data?.email)
            })

    }, [])
    return (
        <div className="body-site">
            <div className="bg-snow-2">
                <div className="header-carousel pt-4 mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-85">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <p className="text-black_dark fw-600 lh-24 fs-20 "><span>Корзина</span> </p>
                                    {/*<p className="text-silver_4 fs-14">Корзина будет очищена через: 22:10</p>*/}
                                </div>
                                {
                                    props.bascketList.length > 0 ?
                                        <button className="btn bg-transparent text-danger focus-none p-0 mb-3 d-block" onClick={() => deleteAll()}  >Очистить все</button>
                                        :
                                        ""
                                }
                                <div className="row align-items-start">
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        {
                                            props.bascketList?.map((item, index) =>(
                                                <div className="row bilet2 position-relative m-0 justify-content-between mb-4">
                                                    <div className="col-xxl-7 col-md-7 col-sm-8 col-7 py-3 d-flex flex-column justify-content-between">
                                                        <div className>
                                                            <button onClick={() => remove(item.ticket_id)} className="rem">
                                                                <img src="/images/trash.png" alt=""/>
                                                            </button>
                                                            <p className="fw-600 fs-xl-20 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-sm-2 mb-0">
                                                                Концерт Сплин</p>
                                                            <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">
                                                                {Number(item?.tickets?.event_date?.slice(8, 11)) + " " +  monthsRu[Number(item?.tickets?.event_date?.slice(5,7))]}, {item?.tickets?.event_date?.slice(0,4 )} год,  {item?.tickets?.event_time.slice(0, 5)}</p>
                                                            <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-blue mb-sm-2 mb-0">Alpomish muz
                                                                saroyi</p>
                                                            <p className="fs-xl-14 fs-lg-10 fs-sm-12 fs-10 text-black_dark mb-sm-2 mb-0">Ряд {item?.tickets?.block_name}
                                                                / Место {item?.tickets?.place}</p>
                                                        </div>
                                                        <p className="fw-bold fs-xl-28 fs-lg-14 fs-sm-28 fs-14 text-black_dark mb-0 ">{mysum(item?.tickets?.price)}
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
                                                <p className="mb-0 text-silver_3">{props.bascketList?.length > 0 ? props.bascketList?.length : 0 }</p>
                                            </div>
                                            <div className="d-flex align-items-center py-2 border-bottom">
                                                <p className="mb-0 text-silver_3 w-50">Цена билета</p>
                                                <p className="mb-0 text-silver_3">{mysum(summa)} UZS</p>
                                            </div>
                                            {/*<div className="d-flex align-items-center py-2 border-bottom">*/}
                                            {/*    <p className="mb-0 text-silver_3 w-50">Сервисный сбор</p>*/}
                                            {/*    <p className="mb-0 text-silver_3"> 0 UZS</p>*/}
                                            {/*</div>*/}
                                            <div className="d-flex align-items-center mt-2">
                                                <p className="mb-0 text-black_small fw-600 w-50">Итого к оплате</p>
                                                <p className="mb-0 text-black_small fw-600">{mysum(summa)} UZS</p>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="d-flex align-items-center py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="name" className="form-label fw-bold text-black_small">Имя</label>
                                                    <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <label htmlFor="surname" className="form-label fw-bold text-black_small">Фамилия</label>
                                                    <input type="text" id="surname" value={lastName}  onChange={(e) => setLastName(e.target.value)} className="form-control rounded-10" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center py-1 justify-content-between">
                                                <div className="w-100 me-3">
                                                    <label htmlFor="number" className="form-label fw-bold text-black_small">Номер</label>
                                                    <input type="text" id="number" value={phone}  onChange={(e) => setPhone(e.target.value)} className="form-control rounded-10" />
                                                </div>
                                                <div className="w-100">
                                                    <label htmlFor="email" className="form-label fw-bold text-black_small">Почта</label>
                                                    <input type="text" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control rounded-10" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-end py-1 justify-content-between">
                                                <div className="w-100">
                                                    <button className="btn login-btn w-100" onClick={Pay}>Оплатить</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="POST" action="https://checkout.paycom.uz "  id="target_form">
                        <input type="hidden" name="merchant" value={myObj?.merchant_id}/>
                        <input type="hidden" name="amount" value={myObj?.amount + "00"}/>
                        <input type="hidden" name="account[ticket_id]" value={myObj?.order_id}/>
                        <input type="hidden" name="callback" value="https://alpomisharena.uz/"/>
                </form>
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