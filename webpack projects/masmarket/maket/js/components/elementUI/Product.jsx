import React from "react";

export default ({idProd, favoritCheck})=>{
    return(
        <div id="product" data-product-id={idProd} className="product bchGray loading">
            <div id="equalSides" className="product__top">
                <picture id="prod" data-prod-name={idProd} className="loading-img">
                    <div id="equalSidesRev" className="img-mask"></div>
                    <source srcSet=''/>
                    <img src='' alt="" />
                </picture>
                <div id="productSalePersent" className="product__sale"></div>
                {favoritCheck ? 
                <div id="prodFavorBtn" className="product__favorite-button">
                    <picture id="icon" data-icon-name='favourite' className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </div> 
                : ''}
            </div>
            <div className="product__bottom">
                <div className="product__prise">
                    <div id="productNewPrise" className="product__prise-new"></div>
                    <div id="productOldPrise" className="product__prise-old"></div>
                </div>
                <div id="productTitle" className="product__title"></div>
                <button className="product__button">Подробнее</button>
            </div>
        </div>
    )
}