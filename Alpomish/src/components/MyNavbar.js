import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import SideBarMain from "./pages/SideBarMain";
import {connect} from "react-redux";
import {getBascketList} from "../redux/action/allActions";

const MyNavbar = (props) => {
    const [sideBarMain, setSideBarMain] = useState(false)
    const [menuopen, setmenuopen] = useState(false)
    const [changeLink, setChangeLink]= useState(window.location.pathname)
    const openmenu =()=>{
        setmenuopen(!menuopen)
    }
    useEffect(() =>{
        // setSideBarMain(window.location.pathname)
        setSideBarMain(false)
    }, [changeLink ])
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" href="index.html"><img src="/images/logo.png" alt="logo" /></Link>
                        <button className="navbar-toggler focus-none" type="button" onClick={openmenu} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-xl-9 ms-lg-5 ms-0">
                                <li className="nav-item">
                                    <Link  className={changeLink === "/" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" } onClick={() => setChangeLink("/")} aria-current="page" to="/events">Мероприятий</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className={changeLink === "/sections" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" }   onClick={() => setChangeLink("/sections")} to="/sections">Секции</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className={changeLink === "/information" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" }  onClick={() => setChangeLink("/information")} to="/information">O Alpomish</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={changeLink === "/contacts" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" }  onClick={() => setChangeLink("/contacts")} to="/contacts">Услуги</Link>
                                </li>
                            </ul>
                            <form className="d-flex justify-content-between align-items-center" role="search">

                                {
                                    localStorage.getItem("alpToken") ?
                                       <>
                                           <Link  to="/bascket" className="btn focus-none  text-grey text-decoration-none" style={{marginRight: "20px"}}type="button">
                                               <img src="/images/backet.svg" style={{width: "20px", marginRight: "10px"}} alt="icon" />

                                               <span  >{props?.bascketList.length}
                                               </span>
                                           </Link>
                                           <button
                                               className="btn  focus-none login-btn rounded-circle"
                                               type="button" data-bs-toggle="offcanvas"
                                               data-bs-target="#offcanvasExample"
                                               onClick={() => setSideBarMain(!sideBarMain)}
                                               aria-controls="offcanvasExample">
                                               <i className="fas fa-user" />
                                           </button>
                                       </>
                                        :
                                        <Link to="/login" className="btn focus-none login-btn" type="button">Войти</Link>
                                }


                            </form>
                        </div>

                        {
                            menuopen ?
                                <div className="collapse2 navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-xl-9 ms-lg-5 ms-0">
                                        <li className="nav-item">
                                            <Link  className={changeLink === "/" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" } onClick={() => setChangeLink("/")} aria-current="page" to="events">Мероприятий</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  className={changeLink === "/sections" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" }   onClick={() => setChangeLink("/sections")} to="/sections">Секции</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  className={changeLink === "/information" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" }  onClick={() => setChangeLink("/information")} to="information">Каток</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={changeLink === "/contacts" ? "nav-link text-grey text-blue_5" : "nav-link text-grey" }  onClick={() => setChangeLink("/contacts")} to="/contacts">Контакты</Link>
                                        </li>
                                    </ul>
                                    <form className="d-flex justify-content-between align-items-center" role="search">

                                        {
                                            localStorage.getItem("alpToken") ?
                                                <>
                                                    <Link  to="/bascket" className="btn focus-none basket-btn text-grey me-4  text-decoration-none" type="button">
                                                        <img src="/images/basket_icon.svg" alt="icon" /> Корзина
                                                    </Link>
                                                    <button
                                                        className="btn  focus-none login-btn rounded-circle"
                                                        type="button" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasExample"
                                                        onClick={() => setSideBarMain(!sideBarMain)}
                                                        aria-controls="offcanvasExample">
                                                        <i className="fas fa-user" />
                                                    </button>
                                                </>
                                                :
                                                <Link to="/login" className="btn focus-none login-btn" type="button">Войти</Link>
                                        }


                                    </form>
                                </div>
                                :
                                ""
                        }
                    </div>
                </nav>
            </div>
            <SideBarMain
                setSideBarMain={setSideBarMain}
                sideBarMain={sideBarMain}
            />
        </header>
    );
};

const mapStateToProps = (state) =>{
    return{
        bascketList: state.allReducerData.bascketList,
    }
}
export default connect(mapStateToProps, {getBascketList})(MyNavbar);