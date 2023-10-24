import React, { useEffect } from "react";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { reviewsList } from "./rewiewsList";

export default ()=>{

    useEffect(()=>{
        initSlider()
    }, [])

    return <div className="wrapper-component">
        <div className="delivery__item">
            <div className="delivery__item-title ridePlace">Отзывы</div>

            <div className="swiper__box">
                <div id="slider" className="swiper">
                    <div className="swiper-wrapper">
                        {reviewsList.map(review=>{
                            return (
                            <div 
                                key={review.name + Math.random()} 
                                className="swiper-slide"
                            >
                                <div className="swiper-slide__box">
                                    <div className="swiper-slide-text">{review.text}</div>
                                    <div className="swiper-slide-name">
                                        <div className="swiper-slide-name-preview"><span></span><span></span></div>
                                        <div className="swiper-slide-name-text">{review.name}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination-box"><div className="swiper-pagination"></div></div>
                </div>
            </div>

        </div>
    </div> 
}

function initSlider(){
    Swiper.use([Navigation, Pagination])
    const slider = document.getElementById('slider')
    if(!slider){return}
    const swiper = new Swiper(slider, {
        direction: 'horizontal',
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            dynamicMainBullets: 2,
            clickable: true,
            modifierClass: 'mod-'
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            2560: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1440: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
        }
    });
}