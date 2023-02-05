import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getSections} from "../../redux/action/allActions";
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import axios from "axios";
import {API_PATH} from "../const";


const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        border: "none",
        background: "transparent",
        padding: "0",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Sections = (props) => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [phone, setphone] = useState("")
    const [comment, setcomment] = useState("")
    const [appid, setappid] = useState("")
    function openModal(id) {
        setIsOpen(true);
        setappid(id)
        console.log(id)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const appKatok = () => {
        axios.post(API_PATH + "app-katok/add",{
            "first_name": first_name,
            "last_name": last_name,
            "phone": phone,
            "comment": comment,
            "katok_service_id": appid
        }, {headers: {Authorization: "Bearer " + localStorage.getItem("alpToken")}})
            .then(res => {
                alert("error")
            })
    }
    useEffect(()=>{
        props.getSections()
    }, [])
    return (
        <div className="body-site">


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                    <div className="modal-dialog">
                        <div className="modal-content p-3">
                            <div className="modal-header border-0 text-blue_1 fs-20 fw-bold text-center">
                                <p className="w-100">Запись на секцию по хоккею</p>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center mt-4">
                                    <div className="me-4">
                                        <label htmlFor="name" className="form-label">Имя</label>
                                        <input type="text" onChange={(e) => setfirst_name(e.target.value)} className="form-control rounded-8 py-3" id="name" />
                                    </div>
                                    <div>
                                        <label htmlFor="surname" className="form-label">Фамилия</label>
                                        <input type="text" onChange={(e) => setlast_name(e.target.value)} className="form-control rounded-8 py-3" id="surname" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="me-4">
                                        <label htmlFor="number" className="form-label">Номер</label>
                                        <input type="text"  onChange={(e) => setphone(e.target.value)} className="form-control rounded-8 py-3" id="number" />
                                        <button className="btn login-btn mt-4 w-100" onClick={() => appKatok()}>Записаться</button>
                                    </div>
                                    <div>
                                        <label htmlFor="comment" className="form-label">Коментарий</label>
                                        <textarea type="text"  onChange={(e) => setcomment(e.target.value)} className="form-control rounded-8 py-3" id="comment" rows={4} defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Modal>
            <div className="bg-snow-2">
                <div className="mt-4 pb-10 mb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="w-lg-70 mt-5 position-relative">
                                <p className="text-blue_1 fw-bold fs-40 text-center">
                                    Наши секции
                                </p>
                                {
                                    props.sectionList?.map((item, index) =>(
                                        <div className="row align-items-center mt-3" >
                                            <div className="col-lg-8">
                                                <p className="fw-bold fs-30 text-black_dark">{item.name}</p>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="text-black_dark mb-2 w-lg-50">{item.work_week}</p>
                                                    <p className="text-black_dark mb-2 w-lg-50">Тренер:</p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="text-black_dark mb-0 w-lg-50">{item.work_time}</p>
                                                    <p className="text-black_dark mb-0 w-lg-50">{item.coach_fio}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                  <button onClick={() => openModal(item.id)} className="btn border-0 bg-transparent focus-none">
                                                      <img src={  item?.img_url} />
                                                  </button>
                                                {/*<div className="card-3d mt-5" style={{background: 'linear-gradient(99.29deg, #E4048F 0.94%, #7A1B86 100%)'}} data-bs-toggle="modal" data-bs-target="#exampleModal">*/}
                                                {/*    <div className="card-3d-img position-relative d-flex align-items-center w-lg-30">*/}
                                                {/*        <img src="images/balerina.png" alt="image" style={{left: '10px'}} />*/}
                                                {/*    </div>*/}
                                                {/*    <div className="w-lg-65">*/}
                                                {/*        <img className="mb-3" src="images/logo_white.png" alt="logo" />*/}
                                                {/*        <p className="mb-0 text-white">*/}
                                                {/*            Записаться в секцию*/}
                                                {/*            по фигурному катанию*/}
                                                {/*        </p>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content p-3">
                            <div className="modal-header border-0 text-blue_1 fs-20 fw-bold text-center">
                                <p className="w-100">Запись на секцию по хоккею</p>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center mt-4">
                                    <div className="me-4">
                                        <label htmlFor="name" className="form-label">Имя</label>
                                        <input type="text" onChange={(e) => setfirst_name(e.target.value)} className="form-control rounded-8 py-3" id="name" />
                                    </div>
                                    <div>
                                        <label htmlFor="surname" className="form-label">Фамилия</label>
                                        <input type="text" onChange={(e) => setlast_name(e.target.value)} className="form-control rounded-8 py-3" id="surname" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <div className="me-4">
                                        <label htmlFor="number" className="form-label">Номер</label>
                                        <input type="text"  onChange={(e) => setphone(e.target.value)} className="form-control rounded-8 py-3" id="number" />
                                        <button className="btn login-btn mt-4 w-100" onClick={() => appKatok()}>Записаться</button>
                                    </div>
                                    <div>
                                        <label htmlFor="comment" className="form-label">Коментарий</label>
                                        <textarea type="text"  onChange={(e) => setcomment(e.target.value)} className="form-control rounded-8 py-3" id="comment" rows={4} defaultValue={""} />
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

const mapStateToProps = (state) =>{
    return{
        sectionList: state.allReducerData.sectionList,
    }
}
export default connect(mapStateToProps, {getSections})(Sections);