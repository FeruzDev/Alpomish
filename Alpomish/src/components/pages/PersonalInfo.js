import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";


const PersonalInfo = () => {
    const [user, setUser] = useState("")
    const [user1, setUser1] = useState("")
    const [user2, setUser2] = useState("")
    const [user3, setUser3] = useState("")

    const save =()=>{
        axios.post(API_PATH + "user-profile/edit", {
            "first_name": user,
            "last_name":user1,
            "phone": user2,
            "email": user3
        },
            {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res => {
               toast.success("Изменено успешно")
            })
    }
    useEffect(()=>{

        axios.get(API_PATH + "user-profile",
            {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res => {
                setUser(res.data?.data?.first_name)
                setUser1(res.data?.data?.last_name)
                setUser2(res.data?.data?.phone)
                setUser3(res.data?.data?.email)
            })
    }, [])
    return (
        <div className="body-site">
            <div className="bg-snow">
                <div className="container pt-5 mt-5 pb-10">
                    <div className="row pb-10">
                        <div className="col-lg-4 pt-2   ">
                            <div className="d-flex align-items-center">
                                <div className="px-2 me-3 text-blue_5 fs-20">
                                    <i className="fal fa-id-card" />
                                </div>
                                <Link to="profile" className="text-decoration-none text-blue_5">Личная информация</Link>
                            </div>
                            {/*<div className="d-flex align-items-center mt-3">*/}
                            {/*    <div className="px-2 me-3 text-silver fs-20">*/}
                            {/*        <i className="fal fa-shield" />*/}
                            {/*    </div>*/}
                            {/*    <Link  className="text-decoration-none text-black_medium">Безопасность</Link>*/}
                            {/*</div>*/}
                            <div className="d-flex align-items-center mt-3">
                                <div className="px-2 me-3 text-silver fs-20">
                                    <i className="fal fa-ticket-alt" />
                                </div>
                                <Link to="orders" className="text-decoration-none text-black_medium">Заказы</Link>
                            </div>
                        </div>
                        <form className="col-lg-8 mt-lg-0 mt-3 bg-white">
                            <div className="d-flex align-items-center">
                                <button className="btn focus-none login-btn rounded-circle d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px'}} type="button">
                                    <i className="fal fa-id-card" />
                                </button>
                                <p className="mb-0 text-black_dark fs-32 fw-bold ms-3">
                                    Личные данные
                                </p>
                            </div>
                            <div className="border p-3 rounded-8 mt-4">
                                <div className="row m-0">
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="name" className="form-label">Ваше имя</label>
                                        <input type="text" id="name" value={user} onChange={(e) => setUser(e.target.value)} className="form-control rounded-8" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="surname" className="form-label">Ваше фамилия</label>
                                        <input type="text" id="surname"  value={user1} onChange={(e) => setUser1(e.target.value)}
                                               className="form-control rounded-8" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="phone" className="form-label">Номер телефона</label>
                                        <input type="tel" id="phone"  value={user2} onChange={(e) => setUser2(e.target.value)}
                                               className="form-control rounded-8" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="email" className="form-label">Ваше фамилия</label>
                                        <input type="email" id="email" value={user3} onChange={(e) => setUser3(e.target.value)}
                                               className="form-control rounded-8" />
                                    </div>
                                    <div className="text-end">
                                        <button className="btn login-btn mt-2 px-3" onClick={save} type="button">Сохранить</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PersonalInfo;