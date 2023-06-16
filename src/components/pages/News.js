import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getNews} from "../../redux/action/allActions";
import {Link} from "react-router-dom";

const News = (props) => {
    const [moreNews, setMoreNews] = useState(9)
    const monthsRu = ["month", 'Январь', 'Февраль', "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    useEffect(()=>{
        props.getNews()
    }, [])
    return (
        <div className="body-site">
            <div className="news mt-4 pb-10">
                <div className="container">
                    <p className="text-center fw-bold fs-40 text-blue_1">Новости</p>
                    <div className="row row-cols-xl-3 row-cols-md-2 mb-5">
                        {
                            props.newsList?.slice(0, moreNews)?.map(item =>(
                                <Link to={"/news/detail/" + item.id} className="news-card mb-4">
                                    <div className="news-card_img">
                                        <img style={{borderRadius: '19px 19px 19px 19px'}} src={item?.image} alt=""/>
                                    </div>
                                    <p className="news-card_title">
                                        {item?.title}
                                    </p>
                                    <p className="news-card_text"  dangerouslySetInnerHTML={{__html:  item?.desc?.length > 100 ? item?.desc?.slice(0, 100) + "..." : item?.desc}}>

                                    </p>
                                    <p className="news-card_time">12 Март - 16:00
                                        {item?.created_at.slice(8, 10) + " " + monthsRu[Number(item?.created_at?.slice(5, 7))] + " " +
                                            item?.created_at?.eventTime?.slice(0, 5)}
                                    </p>
                                </Link>
                            ))
                        }
                    </div>
                    {
                        props.newsList?.length > 9
                            ?
                            <div className="text-center">
                                <button className="btn border-blue rounded-pill text-blue px-5 py-3 fw-bold fs-18" onClick={() => setMoreNews(moreNews + 3)}>Больше
                                </button>
                            </div>
                            :
                            ""
                    }
                </div>
            </div>
            
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        newsList: state.allReducerData.newsList

    }
}
export default connect(mapStateToProps, {getNews})(News);