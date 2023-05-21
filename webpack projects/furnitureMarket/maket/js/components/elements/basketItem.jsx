import React from "react";
import { NavLink } from "react-router-dom";
import { deleteUserBasket } from "@redux/userRouter";
import { useDispatch } from "react-redux";

export default ({userUid, title, prise, сhapter, charpeterSection, imageName, itemPath, state, scrollWidth})=>{
    const dispath = useDispatch()
    if(scrollWidth > 425){
        return <>
        <NavLink to={itemPath} state={{...state}} className="catalog__basket-item">
            <div id="deleteBasketButton" onClick={deleteClick.bind(this, userUid, imageName, dispath)} className="catalog__basket-item-close"><span></span></div>
            <div className="catalog__basket-item-content">
                <div className="catalog__basket-item-left">
                    <div className="catalog__basket-item-image">
                        <picture 
                            className="loading-img" 
                            id="equalSides" 
                            data-image-type='catalogItem' 
                            data-charpeter-section={charpeterSection} 
                            data-charpeter={сhapter} 
                            data-image-name={imageName}
                        >
                            <div id="equalSidesRev" className="img-mask"></div>
                            <source srcSet=""/>
                            <img src='' alt="" />
                        </picture>
                    </div>
                    <div className="catalog__basket-item-text">{title}</div>
                </div>
                <div className="catalog__basket-item-prise">{prise} руб.</div>
            </div>
        </NavLink>
        </>
    }else{
        return <>
        <NavLink to={itemPath} state={{...state}} className="catalog__basket-item">
            <div id="deleteBasketButton" onClick={deleteClick.bind(this, userUid, imageName, dispath)} className="catalog__basket-item-close"><span></span></div>
            <div className="catalog__basket-item-content">
                <div className="catalog__basket-item-left">
                    <div className="catalog__basket-item-image">
                        <picture 
                            className="loading-img" 
                            id="equalSides" 
                            data-image-type='catalogItem' 
                            data-charpeter-section={charpeterSection} 
                            data-charpeter={сhapter} 
                            data-image-name={imageName}
                        >
                            <div id="equalSidesRev" className="img-mask"></div>
                            <source srcSet=""/>
                            <img src='' alt="" />
                        </picture>
                    </div>
                </div>
                <div className="catalog__basket-item-textBox">
                    <div className="catalog__basket-item-text">{title}</div>
                    <div className="catalog__basket-item-prise">{prise} руб.</div>
                </div>
            </div>
        </NavLink>
        </>
    }
}

function deleteClick(userUid, imageName, dispath, event){
        event.preventDefault()
        dispath(deleteUserBasket({userUid, imageName}))
}
