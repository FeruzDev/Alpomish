import React, {useEffect, useState} from 'react';
import "../../css/sms.css"
import axios from "axios";
import {API_PATH} from "../const";
import PinInput from 'react-pin-input';

const Sms = (props) => {
    const [code2, setCode2] = useState("")

    const sendCode = () => {
      axios.post(API_PATH + "auth-phone", {
          "phone": localStorage.getItem("phone"),
          "code": code2
      })
    }


    return (
        <div className="body-site">
           
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-800" id="offcanvasExampleLabel">Профиль</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex align-items-center">
                        <button className="btn focus-none login-btn rounded-circle" type="button">
                            <i className="fas fa-user"/>
                        </button>
                        <p className="mb-0 ms-3">+998 (99) 999-99-99</p>
                    </div>
                    <div className="card-3d mt-4"
                         style={{background: 'linear-gradient(99.29deg, #387EC1 0.94%, #47A8DF 100%)'}}>
                        <div className="w-lg-45">
                            <img className="mb-3" src="images/logo_white.png" alt="logo"/>
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по хоккею
                            </p>
                        </div>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-55">
                            <img src="images/person.png" alt="image" style={{right: '10px'}}/>
                        </div>
                    </div>
                    <div className="card-3d mt-5"
                         style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}}>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-30">
                            <img src="images/balerina.png" alt="image" style={{left: '10px'}}/>
                        </div>
                        <div className="w-lg-65">
                            <img className="mb-3" src="images/logo_white.png" alt="logo"/>
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по фигурному катанию
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-6">
                        <div className="px-2 me-3 text-silver fs-20">
                            <i className="fal fa-heart"/>
                        </div>
                        <a href="likes.html" className="text-decoration-none text-black_medium">Избранное</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="px-2 me-3 text-silver fs-20">
                            <i className="fal fa-headset"/>
                        </div>
                        <a href="call.html" className="text-decoration-none text-black_medium">Поддержка</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="px-2 me-3 text-danger fs-20">
                            <i className="far fa-sign-out-alt"/>
                        </div>
                        <a href="logout.html" className="text-decoration-none text-black_medium">Выход</a>
                    </div>
                </div>
            </div>
            <div className="login">
                <div className="container">
                    <form className="d-flex align-items-center justify-content-center">
                        <div className="bg-white p-5 rounded-16">
                            <img src="images/logo.png" className="me-4 mb-3" alt="logo"/>
                            <p className="fw-800 text-black_medium fs-20">Введите код из SMS</p>
                            <p className="fw-light text-black_medium">
                                Мы отправили его на
                                +998 (99) 999-99-99
                            </p>
                            <div className=" m-0" >
                                <div className="w-100 mb-4 text-center">

                                    <PinInput
                                        length={4}
                                        initialValue=""
                                        onChange={(value, index) => setCode2(value)}
                                        type="numeric"
                                        inputMode="number"
                                        style={{padding: '10px'}}
                                        autoSelect={true}
                                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                    />

                                </div>
                                {/*<input type="number" onChange={(e) => setCode2(e.target.value)}/>*/}
                                <button className="btn login-btn w-100 mt-2 d-block" type="button" onClick={sendCode}>Далее</button>

                            </div>
                            <div className="form-check mt-4">
                                {/*<div className="code-input">*/}
                                {/*    <form>*/}
                                {/*        <input type="text" maxLength='1'/>*/}
                                {/*        <input type="text" maxLength='1'/>*/}
                                {/*        <input type="text" maxLength='1'/>*/}
                                {/*        <input type="text" maxLength='1'/>*/}
                                {/*    </form>*/}
                                {/*    <div id="code-block" className="special hidden">*/}
                                {/*        Wait your special code is <span id="code"></span>?*/}
                                {/*        <br/>*/}
                                {/*        <i onClick="reset()">Reset*/}
                                {/*        </i>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<label className="form-check-label focus-none mt-1 ms-2 fw-light text-black_medium"*/}
                                {/*       htmlFor="flexCheckChecked">*/}
                                {/*    Запомнить на этом устройстве*/}
                                {/*</label>*/}
                            </div>
                            <a href="#" className="text-blue_4 mt-4 text-decoration-none w-100 d-block">Отправить код
                                повторно</a>
                            <a href="#" className="text-blue_4 mt-4 text-decoration-none w-100 d-block">Войти с другим
                                номером</a>
                            <a href="#" className="text-grey mt-4 text-decoration-none w-100 d-block">Не получается
                                войти</a>
                        </div>
                    </form>
                </div>
            </div>
          
        </div>
    );
};

export default Sms;