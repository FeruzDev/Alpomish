import React from 'react';


const Payment = () => {
    return (
        <div className="body-site">
            <div className="bg-snow-2">
                <div className="header-carousel pt-4 mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-60 mt-5 position-relative">
                                <p className="text-black_dark fw-bold fs-28 text-center me-lg-0 me-5">804 000 <span className="text-blue me-3">UZS</span>
                                    <i className="fas fa-chevron-down " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Номер заказа: S16700" />
                                </p>
                                <button className="btn bg-black_small position-absolute end-0 top-0 focus-none rounded-8">
                                    <img src="images/basket_white.svg" alt="" />
                                </button>
                                <div className="row justify-content-between mt-4">
                                    <div className="col-lg-3 text-center">
                                        <label htmlFor="click" className="box-radio box" style={{borderRadius: '10px'}}>
                                            <img src="images/click.png" width={122} alt="" />
                                            <input type="radio" hidden defaultChecked id="click" />
                                            <span className="box-radio-check" />
                                        </label>
                                        <label htmlFor="payme" className="box-radio box mt-4" style={{borderRadius: '10px'}}>
                                            <img src="images/payme.png" width={122} alt="" />
                                            <input type="radio" hidden id="payme" />
                                            <span className="box-radio-check" />
                                        </label>
                                        <label htmlFor="click" className="box-radio box mt-4" style={{borderRadius: '10px'}}>
                                            <img src="images/oson.png" width={122} alt="" />
                                            <input type="radio" hidden id="oson" />
                                            <span className="box-radio-check" />
                                        </label>
                                        <label htmlFor="click" className="box-radio box mt-4" style={{borderRadius: '10px'}}>
                                            <img src="images/apelsin.png" width={122} alt="" />
                                            <input type="radio" hidden id="apelsin" />
                                            <span className="box-radio-check" />
                                        </label>
                                    </div>
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <div className="border rounded-16 bg-white py-3 px-4 h-100">
                                            <p>По карте</p>
                                            <input type="text" className="form-control rounded-8 py-3" placeholder="Номер карты" />
                                            <div className="d-flex align-items-center mt-4">
                                                <input type="text" className="form-control rounded-8 py-3 me-4" placeholder="Месяц" />
                                                <input type="text" className="form-control rounded-8 py-3" placeholder="Год" />
                                            </div>
                                            <button className="btn login-btn w-100 rounded-8 mt-4 fw-600" disabled>
                                                Оплатить
                                            </button>
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

export default Payment;