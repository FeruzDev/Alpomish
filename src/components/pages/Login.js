import React, {useState} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import Sms from "./Sms";
import MyNavbar from "../MyNavbar";

const   Login = () => {
    const [number, setNumber] = useState("")
    const login = () => {
      axios.post(API_PATH + "send-sms", {"phone"  : number})
          .then(res => {
              localStorage.setItem("phone" , number)
          })
    }
    return (
        <div className="body-site">
           
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-800" id="offcanvasExampleLabel">Профиль</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex align-items-center">
                        <button className="btn focus-none login-btn rounded-circle" type="button">
                            <i className="fas fa-user" />
                        </button>
                        <p className="mb-0 ms-3">+998 (99) 999-99-99</p>
                    </div>
                    <div className="card-3d mt-4" style={{background: 'linear-gradient(99.29deg, #387EC1 0.94%, #47A8DF 100%)'}}>
                        <div className="w-lg-45">
                            <img className="mb-3" src="images/logo_white.png" alt="logo" />
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по хоккею
                            </p>
                        </div>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-55">
                            <img src="images/person.png" alt="image" style={{right: '10px'}} />
                        </div>
                    </div>
                    <div className="card-3d mt-5" style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}}>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-30">
                            <img src="images/balerina.png" alt="image" style={{left: '10px'}} />
                        </div>
                        <div className="w-lg-65">
                            <img className="mb-3" src="images/logo_white.png" alt="logo" />
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по фигурному катанию
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-6">
                        <div className="px-2 me-3 text-silver fs-20">
                            <i className="fal fa-heart" />
                        </div>
                        <a href="likes.html" className="text-decoration-none text-black_medium">Избранное</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="px-2 me-3 text-silver fs-20">
                            <i className="fal fa-headset" />
                        </div>
                        <a href="call.html" className="text-decoration-none text-black_medium">Поддержка</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="px-2 me-3 text-danger fs-20">
                            <i className="far fa-sign-out-alt" />
                        </div>
                        <a href="logout.html" className="text-decoration-none text-black_medium">Выход</a>
                    </div>
                </div>
            </div>
            <div className="login">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="bg-white p-5 rounded-16">
                            <img src="images/logo.png" className="me-4 mb-3" alt="logo" />
                            <p className="fw-800 text-black_medium fs-20">Введите номер телефона</p>
                            <input type="text" onChange={(e) => setNumber(e.target.value)} className="form-control border-white_light_1 rounded-8" placeholder="+998 (99) 999-99-99" />
                            <button className="btn login-btn w-100 mt-2" type="submit" onClick={login}>Далее</button>
                            <a href="#" className="text-grey mt-4 text-decoration-none w-100 text-center d-block">Не получается войти</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;