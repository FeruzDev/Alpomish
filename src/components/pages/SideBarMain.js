import React, {useEffect} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {getSections} from "../../redux/action/allActions";

const SideBarMain = (props) => {
    let history = useHistory()
    const logOut = () => {
          localStorage.clear()
        history.push("/")
        props.setSideBarMain(false)
    }
    const contactsLink = () => {
        history.push("/contacts")
        props.setSideBarMain(false)
    }
    useEffect(()=>{
        getSections()
    }, [])
    return (
    <>
        {
            props.sideBarMain
             ?
            <div className="right-sidebar">
            <div onClick={() => props.setSideBarMain(false)} className="right-sidebar-item-left-main">

            </div>
            <div className={props.sideBarMain ? "side-open right-sidebar-item-main" : ""}>

                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-800" id="offcanvasExampleLabel">Профиль</h5>
                    <button type="button" className="btn-close "  onClick={() => props.setSideBarMain(false)} data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex align-items-center">
                        <button className="btn focus-none login-btn rounded-circle" type="button">
                            <i className="fas fa-user" />
                        </button>
                        <p className="mb-0 ms-3">{localStorage.getItem("phone") ? localStorage.getItem("phone") : "" }</p>

                    </div>
                    <div className="card-3d mt-4" style={{background: 'linear-gradient(99.29deg, #387EC1 0.94%, #47A8DF 100%)'}}>
                        <div className="w-lg-45">
                            <img className="mb-3" src="/images/logo_white.png" alt="logo" />
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по хоккею
                            </p>
                        </div>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-55">
                            <img src="/images/person.png" alt="image" style={{right: '10px'}} />
                        </div>
                    </div>
                    <div className="card-3d mt-5" style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}}>
                        <div className="card-3d-img position-relative d-flex align-items-center w-lg-30">
                            <img src="/images/balerina.png" alt="image" style={{left: '10px'}} />
                        </div>
                        <div className="w-lg-65">
                            <img className="mb-3" src="/images/logo_white.png" alt="logo" />
                            <p className="mb-0 text-white">
                                Записаться в секцию
                                по фигурному катанию
                            </p>
                        </div>
                    </div>

                    {/*<div className="d-flex align-items-center mt-6">*/}
                    {/*    <div className="px-2 me-3 text-silver fs-20">*/}
                    {/*        <i className="fal fa-heart" />*/}
                    {/*    </div>*/}
                    {/*    <a href="likes.html" className="text-decoration-none text-black_medium">Избранное</a>*/}
                    {/*</div>*/}
                    <div className="d-flex align-items-center mt-5">
                        <div className="px-2 me-3 text-silver fs-20">
                            <i className="fal fa-headset" />
                        </div>
                        <button onClick={() => contactsLink()} className="btn btn-transparent p-0 text-decoration-none text-black_medium">Поддержка</button>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <div className="px-2 me-3 text-danger fs-20">
                            <i className="far fa-sign-out-alt" />
                        </div>
                        <button onClick={() => logOut()} className="btn btn-transparent p-0 text-decoration-none text-black_medium">Выход</button>
                    </div>

                </div>
            </div>
        </div>
            :
            ""
        }
    </>
        // </div>
    );
};
const mapStateToProps = (state) =>{
    return{
        sectionList: state.allReducerData.sectionList,
    }
}
export default connect(mapStateToProps, {getSections})(SideBarMain);