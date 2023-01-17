import React from 'react';

const View = () => {
    return (
        <div className="body-site">
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                            <button className="navbar-toggler focus-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-xl-9 ms-lg-5 ms-0">
                                    <li className="nav-item">
                                        <a className="nav-link text-grey text-blue_5" aria-current="page" href="events.html">Мероприятий</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-grey" href="sections.html">Секции</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-grey" href="information.html">Каток</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-grey" href="#">Контакты</a>
                                    </li>
                                </ul>
                                <form className="d-flex justify-content-between align-items-center" role="search">
                                    <a href="basket.html" className="btn focus-none basket-btn text-grey me-4  text-decoration-none" type="button">
                                        <img src="images/basket_icon.svg" alt="icon" /> Корзина
                                    </a>
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
            <div className="bg-snow">
                <div className="bg-snow-2">
                    <div className="header-carousel mt-4 mb-5">
                        <div className="container">
                            <nav         aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item "><a href="#" className="text-grey text-decoration-none">Главная</a></li>
                                    <li className="breadcrumb-item "><a href="#" className="text-grey text-decoration-none">Мероприятий</a>
                                    </li>
                                    <li className="breadcrumb-item  active" aria-current="page">Концерт Сплин</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-lg-6 mt-lg-0 mt-3" style={{borderRadius: '20px'}}>
                                    <img src="images/view.png" className="w-100" alt="view" />
                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-3 ps-lg-5 d-flex flex-column justify-content-center">
                                    <p className="fs-32 fw-bold text-black_dark">Концерт Сплин</p>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Дата</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">20 августа 2022</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Время</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">18:00</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Возраст</p>
                                        <p className="w-lg-75 text-blue_2 lh-24 fw-600">+12</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="w-lg-15 fw-bolder fs-14 lh-24 text-black_dark mb-2">Где</p>
                                        <p className="w-lg-75 text-blue_5 lh-24 fw-600">Alpomish muz saroyi</p>
                                    </div>
                                    <div className="d-flex">
                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill me-3">
                                            Концерт
                                        </div>
                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill me-3">
                                            Поп-Музыка
                                        </div>
                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill me-3">
                                            Эстрада
                                        </div>
                                    </div>
                                    <div className="d-flex box bg-silver_2 py-3 mt-4" style={{borderRadius: '10px', width: 'fit-content'}}>
                                        <p className="mb-0 fw-bolder lh-24 text-black_dark me-5">Поделиться</p>
                                        <div className="d-flex">
                                            <img className="mx-3" src="images/telegram.svg" alt="icons" />
                                            <img className src="images/instagram.svg" alt="icons" />
                                            <img className="mx-3" src="images/tiktok.svg" alt="icons" />
                                            <img className="me-3" src="images/facebook_black.svg" alt="icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events mb-7">
                        <div className="container">
                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4">Все мероприятия</p>
                            <div className="mt-3 mb-4">
                                <img src="images/stadion.svg" className="w-100" alt="station" />
                                <img src="images/view_2.png" className="w-100 mt-4" alt="station" />
                            </div>
                            <p className="text-black_dark fw-bold fs-38 col mb-lg-0 mb-4">Описание</p>
                            <p className="text-black_dark fs-20 mb-5">
                                Группа СПЛИТ и анонсирует первый региональный тур и большие сольные концерты в Ташкенте уже как
                                самостоятельная группа!
                                Группа СПЛИТ — популярная группа, сочетающий хип-хоп и R’n’B нулевых с элементами поп-музыки.
                                Глубокие лиричные песни — визитная карточка артиста — находят отзыв среди широкой женской аудитории
                                совершенно разной возрастной категории, а танцевальные и хип-хоп треки пользуются особой
                                популярностью у молодого поколения.
                                Создавая музыку мирового уровня, свои живые выступления группа Сплит превращает в качественные
                                шоу-программы, в которых разговор по душам сменяется жаркими танцами, а любимые треки в
                                live-исполнении дарят незабываемые эмоции!
                            </p>
                            <div className="swiper events-swiper px-lg-5">
                                <div className="d-flex align-items-center" style={{margin: '0 -48px'}}>
                                    <p className="text-black_dark fw-bold fs-38">Похожие мероприятия</p>
                                    <div className="swiper-button-next bg-white_light_1 text-black_dark" />
                                    <div className="swiper-button-prev bg-white_light_1 text-black_dark" />
                                </div>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="images/card.png" className="card-img-top" alt="card" />
                                                    <div className="card-status px-3">
                                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                            Концерт
                                                        </div>
                                                        <div className="text-white">
                                                            <i className="fal fa-heart" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                    <div className="me-4">
                                                        <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="images/card.png" className="card-img-top" alt="card" />
                                                    <div className="card-status px-3">
                                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                            Концерт
                                                        </div>
                                                        <div className="text-white">
                                                            <i className="fal fa-heart" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                    <div className="me-4">
                                                        <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="images/card.png" className="card-img-top" alt="card" />
                                                    <div className="card-status px-3">
                                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                            Концерт
                                                        </div>
                                                        <div className="text-white">
                                                            <i className="fal fa-heart" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                    <div className="me-4">
                                                        <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="my-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="position-relative">
                                                    <img src="images/card.png" className="card-img-top" alt="card" />
                                                    <div className="card-status px-3">
                                                        <div className="bg-black_medium py-1 px-3 text-white rounded-pill">
                                                            Концерт
                                                        </div>
                                                        <div className="text-white">
                                                            <i className="fal fa-heart" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body bg-white shadow-sm d-flex p-4" style={{borderRadius: '0 0 19px 19px'}}>
                                                    <div className="me-4">
                                                        <p className="card-moth text-uppercase font-DM fw-bold text-blue fs-12 mb-0">
                                                            APR
                                                        </p>
                                                        <p className="card-day text-black_dark font-DM fs-28 fw-bold">
                                                            14
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-text-title fw-bold text-black_dark mb-0">Wonder Girls 2010
                                                            Wonder
                                                            Girls
                                                            World
                                                            Tour
                                                            San Francisco</p>
                                                        <p className="card-p font-DM fs-14 text-grey mb-0">
                                                            12:00 · 24 декабря 2022
                                                            Ледниковый дворец “Alpomish”
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="row row-cols-xl-4 row-cols-md-2 pb-lg-7 pb-5 border-bottom border-blue_3">
                        <div>
                            <img src="images/logo_white.png" className="w-md-auto w-100" alt="logo" />
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="tel: +99899 939-44-09" className="text-light_grey fw-bold text-decoration-none">+99899
                                        939-44-09</a>
                                </div>
                                <div className="mb-2">
                                    <a href="tel: +99890 094-49-88" className="text-light_grey fw-bold text-decoration-none">+99890
                                        094-49-88</a>
                                </div>
                                <div className="mb-2">
                                    <span className="text-light_grey">Служба поддержки</span>
                                    <div className="mt-3">
                                        <img src="images/facebook.svg" className alt="social" />
                                        <img src="images/twitter.svg" className="mx-3" alt="social" />
                                        <img src="images/linkedin.svg" className alt="social" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">Информация</span>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Помощь</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Правила и условия</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Возврат и обмен</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Политика
                                        конфиденциальности</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">О нас</span>
                            <div className="mt-4">
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Наш адресс</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Контакты</a>
                                </div>
                                <div className="mb-2">
                                    <a href="#" className="text-light_grey text-decoration-none font-DM fw-500">Новости</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-capitalize fw-bold fs-18">Настройки</span>
                            <div className="dropdown mt-4">
                                <button className="btn dropdown-toggle custom-dropdown focus-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Русский <i className="fas fa-sort ms-3 text-grey" />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-3 text-light_grey">
                        Copyright © 2022 Alpomish Muz Saroyi
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default View;