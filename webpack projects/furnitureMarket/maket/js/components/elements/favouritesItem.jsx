import React from "react";
import { NavLink } from "react-router-dom";
import { deleteUserFavour } from "@redux/userRouter";
import { useDispatch } from "react-redux";

export default ({userUid, title, сhapter, charpeterSection, imageName, itemPath, state})=>{
    const dispath = useDispatch()
    return <>
        <NavLink to={itemPath} state={{...state}} className="catalog__main-item">
            <div className="catalog__main-item-image">
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
                    <div id="deleteFavourButton" onClick={deleteClick.bind(this, userUid, imageName, dispath)} className="catalog__main-item-close"><span></span></div>
                </picture>
            </div>
            <div className="catalog__main-item-text">{title}</div>
        </NavLink>
        </>
}

function deleteClick(userUid, imageName, dispath, event){
        event.preventDefault()
        dispath(deleteUserFavour({userUid, imageName}))
}
