import React, {useState} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import Sms from "./Sms";
import MyNavbar from "../MyNavbar";
import {useHistory} from "react-router-dom";

const   Login = () => {
    let history = useHistory()
    const [number, setNumber] = useState("")
    const login = () => {
      axios.post(API_PATH + "send-sms", {"phone"  : number})
          .then(res => {
              localStorage.setItem("phone" , number)
              history.push("/sms")
          })
    }
    return (
        <div className="body-site">
           
            
            <div className="login">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="bg-white p-5 rounded-16">
                            <img src="images/logo.png" className="me-4 mb-3" alt="logo" />
                            <p className="fw-800 text-black_medium fs-20">Введите номер телефона</p>
                            <input type="text" onChange={(e) => setNumber(e.target.value)} className="form-control border-white_light_1 rounded-8" placeholder=" 998 (99) 999-99-99" />
                            <button className="btn login-btn w-100 mt-2" type="submit" onClick={login}>Далее</button>
                            {/*<a href="#" className="text-grey mt-4 text-decoration-none w-100 text-center d-block">Не получается войти</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;