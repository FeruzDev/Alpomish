import React from 'react';
import {Link} from "react-router-dom";

const MyNavbar = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" href="index.html"><img src="/images/logo.png" alt="logo" /></Link>
                        <button className="navbar-toggler focus-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-xl-9 ms-lg-5 ms-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-grey text-blue_5" aria-current="page" to="events">Мероприятий</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-grey" to="/sections">Секции</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-grey" to="information">Каток</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-grey" to="/contacts">Контакты</Link>
                                </li>
                            </ul>
                            <form className="d-flex justify-content-between align-items-center" role="search">
                                <button  to="/bascet" className="btn focus-none basket-btn text-grey me-4  text-decoration-none" type="button">
                                    <img src="/images/basket_icon.svg" alt="icon" /> Корзина
                                </button>
                                {/*                        <button class="btn focus-none login-btn" type="button">Войти</button>*/}
                                <button className="btn  focus-none login-btn rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <i className="fas fa-user" />
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default MyNavbar;