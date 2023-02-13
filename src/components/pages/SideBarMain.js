import React, {useEffect} from 'react';
import axios from "axios";
import {API_PATH} from "../const";
import {Link, useHistory} from "react-router-dom";
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
    const sections = () => {
      history.push("/sections")
        props.setSideBarMain(false)
    }
    const profile = () => {
      history.push("/profile")
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
                        <button  onClick={profile} className="mb-0 ms-3 p-0 border-0 bg-transparent">{localStorage.getItem("phone") ? "+" + localStorage.getItem("phone") : "" }</button>

                    </div>

                    {
                        props.sectionList?.slice(0 , 2).map(item =>(
                            <button onClick={sections} className="card-3d mt-5 p-0 border-0 bg-transparent" >
                                <img src={item?.img_url} alt=""/>
                            </button>

                        ))
                    }

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