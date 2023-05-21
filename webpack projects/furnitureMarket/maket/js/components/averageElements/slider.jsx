import React from "react";

export default ({slides})=>{
    return <div data-slider id="equalSides" className="slider">
                <div className="slider__counter"><span id="sliderCounter">1</span>/{slides.length}</div>
                <div className="slider__arrow-box">
                    <div id="sliderArrowLeft" className="slider__arrow-circle"><div className="slider__arrow left"></div></div>
                    <div id="sliderArrowRight" className="slider__arrow-circle active"><div className="slider__arrow right"></div></div>
                </div>
                <div id="sliderTruck" className="slider-truck">
                    {slides.map(el=>{
                        return <div key={el.imageName} id="equalSidesRev" className="slider-item">
                                    <picture data-image-type='image' data-local={el.local}  data-image-name={el.imageName} className="slider__picture loading-img">
                                        <div id="equalSidesRev" className="approximationPicture__mask img-mask"></div>
                                        <source srcSet=''/>
                                        <img src='' alt="" />
                                    </picture>
                                </div>
                    })}
                </div>
            </div>
}