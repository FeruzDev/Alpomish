import React, {useEffect, useState} from 'react';
import "../../css/sms.css"
import axios from "axios";
import {API_PATH} from "../const";
import PinInput from 'react-pin-input';
import {useHistory} from "react-router-dom";

const Sms = (props) => {
    const [code2, setCode2] = useState("")
    let history = useHistory()
    const sendCode = () => {
      axios.post(API_PATH + "auth-phone", {
          "phone": localStorage.getItem("phone"),
          "code": code2
      })
          .then(res =>{
              localStorage.setItem("alpToken", res.data.token)
              localStorage.setItem("user_id", res.data.user.id)
              localStorage.setItem("username", res.data.user.username)
              history.push("/")
              window.location.reload(true);

          })
    }


    return (
        <div className="body-site">

            <div className="login">
                <div className="container">
                    <form className="d-flex align-items-center justify-content-center">
                        <div className="bg-white p-5 rounded-16">
                            <img src="images/logo.png" className="me-4 mb-3" alt="logo"/>
                            <p className="fw-800 text-black_medium fs-20 text-center">Введите код из SMS</p>
                            <p className="fw-light text-black_medium text-center">
                                Мы отправили его на <br/>
                                {" +" + localStorage.getItem("phone")}
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