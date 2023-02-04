import React, {useEffect} from 'react';
import MainFooter from "../MainFooter";
import {connect} from "react-redux";
import {getNews, getNewsDetail} from "../../redux/action/allActions";
import MyNavbar from "../MyNavbar";

const NewsDetail = (props) => {
    useEffect(() =>{
        props.getNewsDetail()
    }, [])
    return (
        <div className="body-site">
           

            <div className="news mt-4 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <p className="fw-bold fs-40 text-blue_1">{props.newsItem?.title}</p>
                            <img src={props.newsItem?.image} className="w-100 rounded-20 mb-4" alt="news" />
                            <p className="fs-20 text-black_dark">
                                {props.newsItem?.short_text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        newsItem: state.allReducerData.newsItem,
    }
}
export default connect(mapStateToProps, {getNewsDetail})(NewsDetail);