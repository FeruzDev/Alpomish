import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div   onClick={onClick} className="swiper-button-next custom-swiper-btn">
                            <i className="fas fa-arrow-right" />
                        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
                    <div onClick={onClick} className="swiper-button-prev custom-swiper-btn">
                    <i className="fas fa-arrow-left" />
                </div>
    );
}

export default class Banner extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="container mt17-f">
                <Slider {...settings}>
                    <div className="f-carousel-item">
                        <img src="/images/slider.jpg" className="w-100" alt="slider" />
                    </div>
                    <div className="f-carousel-item">
                        <img src="/images/slider_2.jpg" className="w-100" alt="slider" />
                    </div>
                    <div className="f-carousel-item">
                        <img src="/images/slider_3.jpg" className="w-100" alt="slider" />
                    </div>
                </Slider>
            </div>
        );
    }
}